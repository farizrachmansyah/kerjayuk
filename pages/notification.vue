<template>
  <main class="site-main">
    <ul>
      <li v-for="item in notifications" :key="item">
        <NuxtLink to="/" class="container flex gap-2 py-4" :class="{ 'bg-[#d8e4ff]': !item.isRead }">
          <div
            class="flex-shrink-0 relative flex items-center justify-center w-[60px] h-[60px] me-1 mb-1 bg-gradient rounded-lg shadow-center-md"
          >
            <NuxtImg src="https://placehold.co/40" alt="Notification" width="40" height="40" loading="lazy" />
            <div
              class="absolute bottom-0 translate-y-1 right-0 translate-x-1 flex items-center justify-center w-6 h-6 rounded-full bg-green"
              :class="bgStatus[item.status]"
            >
              <Icon
                v-if="item.status === 'success'"
                name="heroicons:check-16-solid"
                class="text-white font-extrabold"
              />
              <Icon
                v-else-if="item.status === 'idle'"
                name="heroicons:arrow-right-16-solid"
                class="text-white font-extrabold"
              />
              <Icon
                v-else-if="item.status === 'error'"
                name="heroicons:x-mark-16-solid"
                class="text-white font-extrabold"
              />
            </div>
          </div>

          <div class="flex-1 flex flex-col gap-1">
            <div class="flex items-center justify-between gap-2">
              <h1 class="text-sm font-bold">{{ item.title }}</h1>
              <span class="text-xs text-gray">{{ formatDate(item.date) }}</span>
            </div>
            <div v-html="item.description" class="pe-4 text-sm"></div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>

<script setup>
definePageMeta({
  layout: 'page'
});

const statuses = ['success', 'idle', 'error'];
const bgStatus = {
  success: 'bg-success',
  idle: 'bg-idle',
  error: 'bg-error'
};

const notifications = ref(
  Array.from({ length: 18 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);

    return {
      title: 'Reimbursement',
      description: `<p>Lorem ipsum dolor "<em>sit amet consectetur adipisicing</em>" elit. Atque <strong>repudiandae</strong> id ratione, aut corrupti at?</p>`,
      image: 'https://placehold.co/40',
      date,
      status: statuses[i % statuses.length],
      isRead: Math.random() > 0.5
    };
  })
);

const formatDate = (date) => {
  const d = new Date(date);
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  const isSameDay = (a, b) =>
    a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

  if (isSameDay(d, today)) return 'Today';
  if (isSameDay(d, yesterday)) return 'Yesterday';

  return useDateFormat(d, 'YYYY-MM-DD').value;
};
</script>

<style scoped></style>
