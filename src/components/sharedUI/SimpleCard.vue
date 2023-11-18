<template>
  <div class="container mx-auto flex justify-end mt-2">
    <div :style="{ width: cardWidth }">
      <el-card :body-style="{ padding: '0px' }">
        <div class="flex items-center p-3 color-primary font-bold text-md">
          <el-avatar class="mr-1 background-gray">
            <font-awesome-icon
              class="color-primary"
              :size="iconSize"
              :icon="icon"
            />
          </el-avatar>

          <h2>{{ title }}</h2>
        </div>

        <template v-if="$slots.secondary">
          <div class="p-3">
            <el-col><slot name="secondary"></slot></el-col>
          </div>
        </template>

        <template v-else>
          <el-row :gutter="20">
            <div v-for="index in repetitions" :key="index" class="p-3">
              <el-col :span="5"><slot></slot></el-col>
            </div>
          </el-row>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppSimpleCard",
  props: {
    title: String,
    icon: String,
    iconSize: String,
    repetitions: {
      type: Number,
      default: 1,
    },
    cardWidth: String,
  },
  computed: {
    iconClass() {
      return ["color-primary", this.icon];
    },
  },
};
</script>

<style scoped></style>
