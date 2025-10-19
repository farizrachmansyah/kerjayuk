<template>
  <header class="sticky top-0 z-10 py-6 bg-white shadow-bottom-md">
    <section class="container flex items-center gap-4">
      <NuxtLink class="flex w-fit" to="/">
        <Icon name="heroicons:arrow-left-16-solid" class="text-2xl font-extrabold" />
      </NuxtLink>
      <h1 class="text-2xl text-primary font-bold capitalize">{{ routeName }}</h1>
    </section>
  </header>
</template>

<script setup>
const route = useRoute();
const routeName = computed(() => {
  if (!route.name) return '';
  return String(route.name).replace(/-/g, ' ');
});
</script>
