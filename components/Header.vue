<template>
  <header class="sticky top-0 z-10 py-8">
    <section class="container flex items-center justify-between">
      <NuxtLink class="flex w-fit" to="/">
        <NuxtImg src="/assets/img/logo.png" alt="KejaYuk!" height="24" />
      </NuxtLink>
      <NuxtLink class="relative flex w-fit" to="/">
        <Icon name="heroicons:bell" class="text-2xl font-extrabold" />
        <span
          class="absolute top-0 right-0 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary"
        ></span>
      </NuxtLink>
    </section>
  </header>
</template>
