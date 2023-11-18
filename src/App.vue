<template>
  <div class="font-sans text-center text-gray-800">
    <AppHeader />
    <AppBanner />
    <div class="container flex mt-16">
      <AppLeftColumn />
    </div>
    <AppProgressBar />
    <AppMenuUI />
    <router-view />
  </div>
</template>

<script>
import AppHeader from "@/components/Header.vue";
import AppBanner from "@/components/Banner.vue";
import AppLeftColumn from "@/components/LeftColumn.vue";
import AppProgressBar from "@/components/ProgressBar.vue";
import AppMenuUI from "@/components/sharedUI/MenuUI.vue";

export default {
  name: "app",
  components: {
    AppHeader,
    AppBanner,
    AppLeftColumn,
    AppProgressBar,
    AppMenuUI,
  },
};
</script>
