<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="flex items-center gap-3 mt-8 mb-4">
    <h4 class="font-mono text-[11px] font-bold text-primary uppercase tracking-widest select-none bg-primary/5 px-2.5 py-1 rounded border border-primary/10">
      {{ title }}
    </h4>
    <div class="h-px bg-border/40 flex-1"></div>
  </div>
</template>