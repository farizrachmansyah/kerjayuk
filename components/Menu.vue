<template>
  <section class="fixed bottom-0 z-50 w-full max-w-md">
    <div class="container bg-white shadow-top-md">
      <div class="grid grid-cols-6">
        <NuxtLink class="flex flex-col items-center gap-1 py-2 text-gray" to="/">
          <Icon name="heroicons:home-solid" class="text-2xl font-extrabold" />
          <span class="text-[10px] font-semibold">Home</span>
        </NuxtLink>
        <NuxtLink class="flex flex-col items-center gap-1 py-2 text-gray" to="">
          <Icon name="mdi:calendar-check" class="text-2xl font-extrabold" />
          <span class="text-[10px] font-semibold">Attendance</span>
        </NuxtLink>

        <NuxtLink class="col-span-2 relative flex items-end justify-center gap-1 py-2 text-gray" to="">
          <div
            class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-16 h-16 bg-primary shadow-center-lg rounded-full"
          >
            <Icon name="octicon:sign-out" class="text-4xl text-white font-extrabold" />
          </div>

          <span class="text-[10px] font-semibold">Check Out</span>
        </NuxtLink>

        <NuxtLink class="flex flex-col items-center gap-1 py-2 text-gray" to="">
          <Icon name="heroicons:document-text-solid" class="text-2xl font-extrabold" />
          <span class="text-[10px] font-semibold">Form</span>
        </NuxtLink>
        <NuxtLink class="flex flex-col items-center gap-1 py-2 text-gray" to="">
          <Icon name="heroicons:cog-6-tooth-solid" class="text-2xl font-extrabold" />
          <span class="text-[10px] font-semibold">Setting</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.router-link-exact-active {
  @apply text-primary;
}
</style>
