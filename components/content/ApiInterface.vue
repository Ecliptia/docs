<script setup lang="ts">
defineProps<{
  name: string
  description?: string
  extends?: string
}>()
</script>

<template>

  <div class="my-12 rounded-2xl border border-zinc-200/50 dark:border-zinc-800 bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden relative isolate group">

    

    <!-- Header Gradient (Subtle) -->

    <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-700"></div>



    <!-- Header Content -->

    <div class="px-8 py-6 border-b border-zinc-100 dark:border-zinc-900/50 bg-white/50 dark:bg-white/[0.01]">

        <div class="flex items-start justify-between gap-6">

            <div class="space-y-3">

                <div class="flex flex-wrap items-baseline gap-3">

                    <span class="text-[10px] font-bold text-primary/80 tracking-widest uppercase border border-primary/10 px-2 py-0.5 rounded bg-primary/5">Interface</span>

                    <h2 class="text-xl font-bold font-mono tracking-tight text-foreground">{{ name }}</h2>

                    <span v-if="extends" class="text-[10px] px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-muted-foreground border border-zinc-200 dark:border-zinc-700 font-medium font-mono">

                        extends <span class="text-primary">{{ extends }}</span>

                    </span>

                </div>

                <p v-if="description" class="text-sm text-muted-foreground max-w-3xl leading-relaxed">

                    {{ description }}

                </p>

            </div>

            

            <!-- TS Icon (Styled) -->

            <div class="hidden sm:flex h-10 w-10 shrink-0 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 items-center justify-center text-blue-600 dark:text-blue-400 font-bold font-mono text-xs select-none shadow-sm">

                TS

            </div>

        </div>

    </div>



    <!-- Body (Fields) -->

    <div class="p-6 bg-white/30 dark:bg-transparent">

        <div class="grid gap-1">

            <slot />

        </div>

    </div>

  </div>

</template>
