<template>
  <section class="container">
    <h1 class="font-semibold mb-3">Online</h1>

    <section class="bg-white p-4 rounded-xl shadow-center-lg">
      <ul class="flex ms-3">
        <li v-for="item in props.data.slice(0, 8)" :key="item" class="flex-1 -ms-3 relative z-[1] hover:z-[2]">
          <div class="flex flex-col items-center gap-1">
            <div class="w-full aspect-square rounded-full overflow-hidden border border-white" :title="item.name">
              <NuxtImg
                src="https://placehold.co/50"
                :alt="item.name"
                loading="lazy"
                class="w-full h-full object-cover"
              />
            </div>
            <span class="text-[10px] font-bold">{{ item.name }}</span>
            <span class="text-[8px]">{{ item.office }}</span>
          </div>
        </li>
        <li v-if="props.data.length > 8" class="flex-1 -ms-3 relative z-0 hover:z-[1]">
          <div
            class="flex items-center justify-center w-full aspect-square rounded-full overflow-hidden border border-white bg-gradient"
          >
            <span class="text-white text-[10px] text-center leading-3">
              {{ props.data.length - 8 }} <br />
              more
            </span>
          </div>
        </li>
      </ul>
    </section>
  </section>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: () =>
      Array.from({ length: 18 }, () => ({ name: 'Jefril', office: 'BSD', image: 'https://placehold.co/40' }))
  }
});
</script>

<style scoped></style>
