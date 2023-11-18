<template>
  <div class="container mx-auto flex justify-end -mt-8">
    <div class="w-3/4">
      <div class="flex justify-start">
        <p class="text-xs mr-2 color-primary-2">Match con la cultura</p>
        <p class="text-xs mr-2 color-success">80%</p>
        <div class="progress-bar bg-gray-200 h-3 w-40 rounded">
          <div
            class="progress-bar-inner bg-color-success h-full w-4/5 rounded"
          ></div>
        </div>
      </div>

      <div class="flex justify-end -mt-6">
        <el-button class="secondary">Enviar Pitch</el-button>
        <el-button class="secondary" plain
          ><font-awesome-icon
            size="sm"
            icon="fa-solid fa-user-plus"
            class="mr-1"
          />
          Seguir</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppProgressBar",
};
</script>

<style scoped></style>
