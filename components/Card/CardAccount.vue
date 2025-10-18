<template>
  <div class="flex flex-col gap-4 p-4 rounded-xl bg-gradient shadow-md text-white">
    <div class="flex justify-between gap-4">
      <div class="flex gap-4">
        <div class="flex-shrink-0 w-[60px] h-[60px] rounded-full overflow-hidden shadow-md">
          <NuxtImg
            src="https://placehold.co/60"
            alt="KejaYuk!"
            width="60"
            height="60"
            loading="lazy"
            class="object-cover"
          />
        </div>
        <div class="flex flex-col">
          <span class="font-semibold">Fariz</span>
          <span class="text-xs font-light"><em>Fontend Developer</em></span>
        </div>
      </div>
      <div class="flex flex-col items-end text-end">
        <span class="text-xs font-light leading-6"><em>Member Since</em></span>
        <span class="font-semibold">01 Oktober 2025</span>
      </div>
    </div>

    <div class="flex items-end justify-between">
      <div class="flex flex-col">
        <span class="text-xs font-light">Location</span>
        <span class="font-semibold">Kantor Sahid</span>
      </div>

      <span class="text-xs font-light"><em>ICO</em></span>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
