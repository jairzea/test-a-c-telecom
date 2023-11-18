<template>
  <div class="container mx-auto flex justify-end">
    <div class="w-3/4">
      <div class="flex items-center my-2 color-primary font-normal text-2xl">
        <h1>Publicadas recientemente</h1>
      </div>
      <app-Skeleton-LoadingUI :loading="loading" animated>
        <el-carousel :interval="4000" arrow="always" :carousel-item-max="3">
          <el-carousel-item
            v-for="item in carouselItems"
            :key="item.id"
            class="carousel-container"
          >
            <AppCardUI
              :img="item.image"
              :description="item.description"
              :pitchesCount="item.pitches_count"
              :viewsCount="item.views_count"
              :commentsCount="item.comments_count"
              :companyName="item.company_name"
              :name="item.name"
            />
          </el-carousel-item>
        </el-carousel>
      </app-Skeleton-LoadingUI>
    </div>
  </div>
</template>

<script>
import ApiService from "@/services/ApiService";
import AppCardUI from "@/components/sharedUI/CardUI.vue";
import AppSkeletonLoadingUI from "@/components/sharedUI/SkeletonLoadingUI.vue";

export default {
  name: "AppCarousel",
  components: {
    AppCardUI,
    AppSkeletonLoadingUI,
  },
  data() {
    return {
      carouselItems: [],
      loading: true,
    };
  },
  async mounted() {
    try {
      this.carouselItems = await ApiService.getImages();
    } catch (error) {
      console.error("Error al obtener las imágenes en el componente", error);
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
.carousel {
  position: absolute;
  width: 73%;
  top: 55%;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-text {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
}

.carousel-container {
  height: 500px;
}
</style>
