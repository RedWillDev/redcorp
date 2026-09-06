<script setup>
import { computed, ref } from 'vue'
const props = defineProps({ item: Object, labels: Object })
const flipped = ref(false)
const flat = ref(false)
const angle = ref(0)
const face = computed(() => flipped.value ? props.item.back : props.item.front)
</script>

<template>
  <figure class="print-viewer">
    <div class="print-stage" :class="{ portrait: item.portrait }">
      <div class="print-object" :class="{ flat }" :style="{ '--turn': `${angle}deg`, '--aspect': item.aspect }">
        <div class="print-faces" :class="{ flipped }">
          <img :src="item.front" :alt="item.frontAlt" :aria-hidden="flipped" :width="item.width" :height="item.height" loading="lazy" decoding="async">
          <img class="print-back" :src="item.back" :alt="item.backAlt" :aria-hidden="!flipped" :width="item.width" :height="item.height" loading="lazy" decoding="async">
        </div>
      </div>
    </div>
    <figcaption>{{ flipped ? item.backLabel : item.frontLabel }}</figcaption>
    <div class="print-controls">
      <button type="button" :aria-pressed="flipped" @click="flipped = !flipped">{{ labels.flip }}</button>
      <button type="button" :aria-pressed="flat" @click="flat = !flat">{{ labels.flat }}</button>
      <a :href="face" target="_blank" rel="noopener noreferrer">{{ labels.zoom }}</a>
    </div>
    <label class="rotation-control">{{ labels.rotate }}<input v-model="angle" type="range" min="-25" max="25" step="1" :disabled="flat"></label>
  </figure>
</template>
