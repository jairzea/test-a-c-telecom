<template>
  <el-row class="flex items-center justify-center">
    <el-col
      v-for="(o, index) in 3"
      :key="o"
      :span="7"
      :offset="index > 0 ? 3 : 0"
      style="margin: 0 8px"
    >
      <el-card :body-style="{ padding: '0px' }">
        <img :src="img || defaultImage" class="image" />
        <div style="padding: 14px" class="space-y-3">
          <div class="flex items-center my-2">
            <p class="text-xs mr-1 font-light">Experticia</p>
            <el-rate v-model="rating" allow-half />
            <el-button text class="button ml-auto"
              ><el-icon class="color-secondary"><Share /></el-icon
            ></el-button>
          </div>
          <div class="flex items-center my-2 color-primary font-light">
            <h4>{{ name.charAt(0).toUpperCase() + name.slice(1) }}</h4>
          </div>
          <el-tag
            >Creada por organización:
            {{
              companyName.length > 15
                ? companyName.substring(0, 15) + "..."
                : companyName
            }}
          </el-tag>
          <el-text line-clamp="4" class="lg:text-justify">
            {{ description }}
          </el-text>

          <el-row class="border-b pb-4">
            <el-col :span="8" class="flex flex-col items-center justify-center">
              <el-button class="secondary" circle>{{ viewsCount }}</el-button>
              <br />
              <span class="text-gray-500 font-normal -mt-4">Vistas</span>
            </el-col>
            <el-col :span="8" class="flex flex-col items-center justify-center">
              <el-button class="secondary" circle>{{
                commentsCount
              }}</el-button>
              <br />
              <span class="text-gray-500 font-normal -mt-4">Comentarios</span>
            </el-col>
            <el-col :span="8" class="flex flex-col items-center justify-center">
              <el-button class="secondary" circle>{{ pitchesCount }}</el-button>
              <br />
              <span class="text-gray-500 font-normal -mt-4">Pitches</span>
            </el-col>
          </el-row>

          <el-button text class="secondary rounded-lg"
            >Aplicar a vacante</el-button
          >
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "AppCardUI",
  data() {
    return {
      rating: 4,
      defaultImage: require("@/assets/images/default.jpeg"),
    };
  },
  props: {
    img: String,
    description: String,
    companyName: String,
    name: String,
    pitchesCount: Number,
    viewsCount: Number,
    commentsCount: Number,
  },
};
</script>

<style>
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
  height: 100px;
}
</style>
