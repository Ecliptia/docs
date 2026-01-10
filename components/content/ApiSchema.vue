<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  name: string
  type: string
  required?: boolean
  description?: string
  nested?: boolean
  typeLink?: string
}>()

const id = computed(() => props.name.toLowerCase().replace(/[^a-z0-9-]/g, '-'))
</script>

<template>
  <div 
    :id="id"
    class="group flex flex-col py-3 border-b border-border/40 last:border-0 relative transition-colors hover:bg-zinc-50/50 dark:hover:bg-white/[0.02] px-2 -mx-2 rounded-lg"
    :class="{ 'pl-4 border-l-2 border-l-primary/20 ml-1 bg-primary/[0.02]': nested }"
  >
    <div class="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-1.5">
      <!-- Name -->
      <span class="font-mono text-sm font-bold text-foreground/90 group-hover:text-primary transition-colors">
        {{ name }}
      </span>
      
      <!-- Type -->
      <span class="font-mono text-xs font-medium opacity-80" :class="typeLink ? 'text-blue-600 dark:text-blue-400 hover:underline cursor-pointer' : 'text-blue-600 dark:text-blue-400'">
        <NuxtLink v-if="typeLink" :to="typeLink" class="hover:underline">
          {{ type }}
        </NuxtLink>
        <span v-else>
          {{ type }}
        </span>
      </span>

      <!-- Required Badge -->
      <span v-if="required" class="text-[10px] font-bold text-red-500 uppercase tracking-wider ml-1 opacity-80" title="Required">
        required
      </span>
    </div>
    
    <!-- Description -->
    <div class="text-sm text-muted-foreground leading-relaxed">
      <slot>{{ description }}</slot>
    </div>
  </div>
</template>