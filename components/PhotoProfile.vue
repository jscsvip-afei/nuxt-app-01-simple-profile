<template>
    <UAvatar :src="userInfo?.photo" size="3xl" alt="my-profile-photo" />
</template>

<script setup>
const { userInfo, fetchUserInfo } = useUser()

onMounted(() => {
  fetchUserInfo()
})
</script>
