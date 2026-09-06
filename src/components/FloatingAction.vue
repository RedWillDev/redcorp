<script setup>
defineProps({ href: { type: String, required: true }, label: { type: String, required: true }, external: Boolean })
</script>

<template>
  <a class="mobile-contact" :href="href" :target="external ? '_blank' : undefined" :rel="external ? 'noopener noreferrer' : undefined"><span>{{ label }}</span><span aria-hidden="true">↗</span></a>
</template>
