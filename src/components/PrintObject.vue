<script setup>
import { computed, ref } from 'vue'
const props = defineProps({ item: Object, labels: Object })
const rotation = ref({ x: 0, y: 0 })
const dragging = ref(false)
let pointer = null
let previous = { x: 0, y: 0 }
const flipped = computed(() => Math.cos(rotation.value.x * Math.PI / 180) * Math.cos(rotation.value.y * Math.PI / 180) < 0)

const start = (event) => {
  if (pointer !== null || !event.isPrimary || event.button !== 0) return
  pointer = event.pointerId
  previous = { x: event.clientX, y: event.clientY }
  event.currentTarget.setPointerCapture(pointer)
  dragging.value = true
}

const move = (event) => {
  if (pointer !== event.pointerId) return
  rotation.value = {
    x: rotation.value.x - (event.clientY - previous.y) * 0.65,
    y: rotation.value.y + (event.clientX - previous.x) * 0.65
  }
  previous = { x: event.clientX, y: event.clientY }
}

const stop = (event) => {
  if (pointer !== event.pointerId) return
  if (event.currentTarget.hasPointerCapture(pointer)) event.currentTarget.releasePointerCapture(pointer)
  pointer = null
  dragging.value = false
}

const keyboard = (event) => {
  const directions = { ArrowLeft: [0, -15], ArrowRight: [0, 15], ArrowUp: [15, 0], ArrowDown: [-15, 0] }
  if (event.key === 'Home') { event.preventDefault(); rotation.value = { x: 0, y: 0 }; return }
  if (!directions[event.key]) return
  event.preventDefault()
  const [x, y] = directions[event.key]
  rotation.value = { x: rotation.value.x + x, y: rotation.value.y + y }
}
</script>

<template>
  <figure class="print-viewer">
    <div class="print-stage" :class="{ portrait: item.portrait, dragging }" tabindex="0" :aria-label="`${labels.rotate} — ${item.frontLabel}`" @pointerdown="start" @pointermove="move" @pointerup="stop" @pointercancel="stop" @lostpointercapture="stop" @keydown="keyboard" @dragstart.prevent>
      <div class="print-object" :style="{ '--rotate-x': `${rotation.x}deg`, '--rotate-y': `${rotation.y}deg`, '--aspect': item.aspect }">
        <div class="print-faces">
          <img :src="item.front" :alt="item.frontAlt" :aria-hidden="flipped" :width="item.width" :height="item.height" loading="lazy" decoding="async" draggable="false">
          <img class="print-back" :src="item.back" :alt="item.backAlt" :aria-hidden="!flipped" :width="item.width" :height="item.height" loading="lazy" decoding="async" draggable="false">
        </div>
      </div>
    </div>
    <figcaption>{{ flipped ? item.backLabel : item.frontLabel }}</figcaption>
  </figure>
</template>
