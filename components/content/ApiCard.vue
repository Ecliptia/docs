<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  name: string
  method?: string
  url?: string
  description?: string
  isNew?: boolean
  deprecated?: boolean
  experimental?: boolean
  returns?: string
  anchorId?: string
}>()

const isOpen = ref(true)
const exampleRef = ref<HTMLElement | null>(null)
const isCopied = ref(false)

const toggle = () => isOpen.value = !isOpen.value

const copyExample = async () => {
  if (!exampleRef.value) return
  const text = exampleRef.value.innerText || ''
  try {
    await navigator.clipboard.writeText(text.trim())
    isCopied.value = true
    setTimeout(() => isCopied.value = false, 2000)
  } catch (err) {
    console.error('Failed to copy', err)
  }
}

const id = computed(() => {
  if (props.anchorId) return props.anchorId
  return props.name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[()]/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
})

const methodColorClass = computed(() => {
  if (props.deprecated) return 'bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-500 border-zinc-200 dark:border-zinc-700 decoration-line-through'
  if (!props.method) return 'bg-zinc-100 text-zinc-600 dark:bg-zinc-500/10 dark:text-zinc-400 border-zinc-200 dark:border-zinc-500/20'
  
  const m = props.method.toUpperCase()
  switch (m) {
    case 'GET': return 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 border-blue-200 dark:border-blue-500/20'
    case 'POST': return 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20'
    case 'DELETE': return 'bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400 border-red-200 dark:border-red-500/20'
    case 'PATCH': return 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400 border-amber-200 dark:border-amber-500/20'
    case 'PUT': return 'bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400 border-orange-200 dark:border-orange-500/20'
    case 'WS': return 'bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400 border-purple-200 dark:border-purple-500/20'
    case 'EVENT': return 'bg-pink-50 text-pink-600 dark:bg-pink-500/10 dark:text-pink-400 border-pink-200 dark:border-pink-500/20'
    default: return 'bg-primary/5 text-primary border-primary/20'
  }
})

const cardBorderClass = computed(() => {
  if (props.deprecated) return 'border-zinc-200 dark:border-zinc-800 opacity-75'
  if (!props.method) return 'border-border/50 hover:border-border'
  
  const m = props.method.toUpperCase()
  switch (m) {
    case 'GET': return 'border-blue-200/50 hover:border-blue-300 dark:border-blue-500/10 dark:hover:border-blue-500/30'
    case 'POST': return 'border-emerald-200/50 hover:border-emerald-300 dark:border-emerald-500/10 dark:hover:border-emerald-500/30'
    case 'DELETE': return 'border-red-200/50 hover:border-red-300 dark:border-red-500/10 dark:hover:border-red-500/30'
    case 'PATCH': return 'border-amber-200/50 hover:border-amber-300 dark:border-amber-500/10 dark:hover:border-amber-500/30'
    case 'PUT': return 'border-orange-200/50 hover:border-orange-300 dark:border-orange-500/10 dark:hover:border-orange-500/30'
    case 'WS': return 'border-purple-200/50 hover:border-purple-300 dark:border-purple-500/10 dark:hover:border-purple-500/30'
    case 'EVENT': return 'border-pink-200/50 hover:border-pink-300 dark:border-pink-500/10 dark:hover:border-pink-500/30'
    default: return 'border-border/50 hover:border-border'
  }
})
</script>

<template>
  <div 
    class="group relative rounded-xl border bg-white dark:bg-zinc-900/40 backdrop-blur-sm overflow-hidden transition-all duration-300 my-8 shadow-sm hover:shadow-md"
    :class="[cardBorderClass, { 'ring-1 ring-amber-500/40 shadow-[0_0_20px_-5px_rgba(245,158,11,0.15)]': isNew }]"
  >
    <!-- Header -->
    <div 
      class="flex flex-col md:flex-row md:items-center justify-between gap-3 p-4 border-b border-border/40 bg-zinc-50/50 dark:bg-white/[0.02] cursor-pointer select-none"
      @click="toggle"
    >
      <div class="flex items-center gap-3 overflow-hidden flex-1">
        <!-- Chevron -->
        <button class="text-muted-foreground/50 hover:text-foreground transition-transform duration-200" :class="{ 'rotate-180': !isOpen }">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
        </button>

        <!-- Name / Signature -->
        <div class="flex flex-wrap items-baseline gap-2">
            <h3 :id="id" class="group/header flex items-center gap-2 m-0 p-0 text-base md:text-lg font-bold font-mono tracking-tight text-foreground/90 leading-none" :class="{ 'line-through opacity-60': deprecated }">
            <a :href="`#${id}`" class="focus:outline-none hover:text-primary transition-colors truncate" @click.stop>
                {{ name }}
            </a>
            <a :href="`#${id}`" class="opacity-0 group-hover/header:opacity-100 transition-opacity text-muted-foreground hover:text-primary" @click.stop>
                <span class="i-lucide-link h-4 w-4">#</span>
            </a>
            </h3>

            <!-- Return Type -->
            <span v-if="returns" class="hidden sm:inline-flex items-center gap-1 font-mono text-xs text-muted-foreground/80">
                <span class="text-muted-foreground/40">→</span>
                <span class="text-blue-600 dark:text-blue-400">{{ returns }}</span>
            </span>
        </div>
      </div>

      <!-- Right Side Meta (Badges, URL) -->
      <div class="flex items-center gap-2 self-start md:self-auto">
        <!-- Badges -->
        <span v-if="deprecated" class="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400 border border-red-200 dark:border-red-500/20">
            Deprecated
        </span>
        <span v-if="experimental" class="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-indigo-100 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20">
            Experimental
        </span>
        
        <span v-if="isNew" class="hidden md:flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-bold text-amber-600 dark:text-amber-500 uppercase tracking-wide">
            <span>New</span>
            <span class="relative flex h-1.5 w-1.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
            </span>
        </span>

        <!-- URL (Collapsed view usually doesn't need this prominently but keeping it) -->
        <div v-if="url" class="hidden lg:block font-mono text-[11px] text-muted-foreground bg-white dark:bg-zinc-900 px-2 py-1 rounded border border-border/40 select-all whitespace-nowrap shadow-sm">
            {{ url }}
        </div>
      </div>
    </div>

    <!-- Body (Collapsible) -->
    <div v-show="isOpen" class="p-5 space-y-6 transition-all duration-300">
      <!-- Description -->
      <div v-if="description || $slots.description" class="text-sm text-muted-foreground leading-7">
        <slot name="description">{{ description }}</slot>
      </div>

      <!-- Parameters / Content -->
      <div v-if="$slots.default" class="space-y-4">
        <slot />
      </div>

      <!-- Example -->
      <div v-if="$slots.example" class="rounded-lg bg-zinc-950 border border-zinc-800 overflow-hidden shadow-inner group/example">
        <div class="px-3 py-1.5 border-b border-zinc-800 bg-zinc-900/50 flex items-center justify-between">
          <div class="flex items-center gap-3">
             <div class="flex gap-1.5">
                <div class="w-2.5 h-2.5 rounded-full bg-zinc-700/50"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-zinc-700/50"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-zinc-700/50"></div>
             </div>
             <span class="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Example</span>
          </div>
          
          <!-- Copy Button -->
          <button 
            @click="copyExample"
            class="flex items-center gap-1.5 px-2 py-0.5 rounded hover:bg-white/10 text-[10px] font-medium transition-colors text-zinc-400 hover:text-zinc-200"
            :class="{ 'text-emerald-400 hover:text-emerald-400': isCopied }"
          >
            <span v-if="!isCopied" class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                Copy
            </span>
            <span v-else class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                Copied!
            </span>
          </button>
        </div>
        <div ref="exampleRef" class="p-0 [&>pre]:!bg-transparent [&>pre]:!m-0 [&>pre]:!border-0">
          <slot name="example" />
        </div>
      </div>
    </div>
  </div>
</template>


