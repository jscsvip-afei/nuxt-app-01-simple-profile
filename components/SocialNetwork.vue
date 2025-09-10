<template>
    <div class="flex items-center gap-4">
        <NuxtLink v-if="userInfo?.instagram" :to="userInfo.instagram" target="_blank" aria-label="Go to social network">
            <UIcon name="i-simple-icons-instagram"
                class="text-2xl text-zinc-800/60 dark:text-zinc-50/60 dark:hover:text-zinc-50 hover:text-zinc-950"
                dynamic />
        </NuxtLink>
        <NuxtLink v-if="userInfo?.x" :to="userInfo.x" target="_blank">
            <UIcon name="i-simple-icons-x"
                class="text-2xl text-zinc-800/60 dark:text-zinc-50/60 dark:hover:text-zinc-50 hover:text-zinc-950"
                dynamic />
        </NuxtLink>
        <NuxtLink v-if="userInfo?.facebook" :to="userInfo.facebook" target="_blank" aria-label="Go to social network">
            <UIcon name="i-simple-icons-facebook"
                class="text-2xl text-zinc-800/60 dark:text-zinc-50/60 dark:hover:text-zinc-50 hover:text-zinc-950"
                dynamic />
        </NuxtLink>
        <NuxtLink v-if="userInfo?.github" :to="userInfo.github" target="_blank" aria-label="Go to social network">
            <UIcon name="i-simple-icons-github"
                class="text-2xl text-zinc-800/60 dark:text-zinc-50/60 dark:hover:text-zinc-50 hover:text-zinc-950"
                dynamic />
        </NuxtLink>
        <NuxtLink v-if="userInfo?.tiktok" :to="userInfo.tiktok" target="_blank" aria-label="Go to social network">
            <UIcon name="i-simple-icons-tiktok"
                class="text-2xl text-zinc-800/60 dark:text-zinc-50/60 dark:hover:text-zinc-50 hover:text-zinc-950"
                dynamic />
        </NuxtLink>
        <NuxtLink v-if="userInfo?.website" :to="userInfo.website" target="_blank" aria-label="Go to social network">
            <UIcon name="i-heroicons-globe-alt"
                class="text-2xl text-zinc-800/60 dark:text-zinc-50/60 dark:hover:text-zinc-50 hover:text-zinc-950"
                dynamic />
        </NuxtLink>
    </div>
</template>

<script setup>
const { userInfo, fetchUserInfo } = useUser()

onMounted(() => {
  fetchUserInfo()
})
</script>
