<template>
    <UContainer>
        <footer class="flex items-center justify-center gap-x-8 py-12 relative z-20">
            <span
                class="text-sm text-zinc-700 hover:text-zinc-950 dark:text-zinc-50/80 hover:dark:text-zinc-50">
                {{ footer.name }}
            </span>
            <span 
                class="text-sm text-zinc-700 hover:text-zinc-950 dark:text-zinc-50/80 hover:dark:text-zinc-50">
                {{footer.time}}
            </span>
            <span
                class="text-sm text-zinc-700 hover:text-zinc-950 dark:text-zinc-50/80 hover:dark:text-zinc-50">
                {{ footer.logo }}
            </span>
        </footer>
    </UContainer>
</template>


<script setup>
const app = useAppConfig();
const { data: { footer } } = app
</script>
