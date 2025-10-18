<template>
  <section class="container">
    <section class="mb-6">
      <h1 class="mb-3">Hi Good Morning!</h1>
      <CardAccount />
    </section>
    <section class="px-4">
      <h1 class="font-semibold mb-3">Today's activity</h1>
      <div class="grid grid-cols-4 gap-4">
        <div class="flex flex-col items-center gap-2">
          <Icon name="heroicons:clock" class="text-primary text-4xl font-extrabold" />
          <div class="flex flex-col items-center">
            <span class="font-semibold">08:30</span>
            <span class="text-xs">Check In</span>
          </div>
        </div>
        <div class="col-span-2 flex flex-col items-center gap-2">
          <Icon name="heroicons:clock" class="text-primary text-4xl font-extrabold" />
          <div class="flex flex-col items-center">
            <span class="font-semibold text-primary">03:00:00</span>
            <span class="text-xs">Working Hours</span>
          </div>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Icon name="heroicons:clock" class="text-primary text-4xl font-extrabold" />
          <div class="flex flex-col items-center">
            <span class="font-semibold">--:--</span>
            <span class="text-xs">Check Out</span>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup></script>

<style scoped></style>
