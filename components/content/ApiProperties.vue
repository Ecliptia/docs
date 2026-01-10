<script setup lang="ts">
defineProps<{
  name: string
  description?: string
}>()
</script>

<template>
  <div class="group relative my-8 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-gradient-to-br from-white via-zinc-50/20 to-white dark:from-zinc-900/40 dark:via-zinc-900/10 dark:to-zinc-950/40 backdrop-blur-md shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden">
    
    <!-- Header -->
    <div class="relative px-6 py-4 border-b border-zinc-100/80 dark:border-white/[0.03] flex items-center justify-between gap-4 bg-white/40 dark:bg-white/[0.01]">
      <!-- Text (Left Aligned) -->
      <div class="flex-1 space-y-1">
        <h3 class="text-base font-bold font-mono tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
          {{ name }}
        </h3>
        <p v-if="description" class="text-sm text-muted-foreground/80 font-medium leading-relaxed">
          {{ description }}
        </p>
      </div>

      <!-- Icon (Right Aligned - Subtle) -->
      <div class="relative shrink-0 text-muted-foreground/30 group-hover:text-primary/80 transition-colors duration-500 group-hover:scale-110 group-hover:-rotate-12">
         <div class="absolute inset-0 bg-primary/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
         <slot name="icon">
            <span class="i-lucide-list-tree h-5 w-5"></span>
         </slot>
      </div>
    </div>

    <!-- Body -->
    <div class="relative px-6 pb-6 pt-2 bg-gradient-to-b from-transparent to-zinc-50/30 dark:to-white/[0.01] [&>div:first-child]:mt-4">
        <slot />
    </div>
  </div>
</template>