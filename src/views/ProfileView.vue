<template>
  <div class="container mx-auto flex justify-end mt-2">
    <div class="w-3/4">
      <el-card :body-style="{ padding: '0px' }">
        <div class="flex items-center p-3 color-primary font-bold text-md">
          <el-avatar class="mr-1 background-gray">
            <font-awesome-icon
              class="color-primary"
              size="sm"
              icon="far fa-user"
            />
          </el-avatar>

          <h2>Resumen de la empresa</h2>
        </div>
        <div class="text-left p-3 text-xs space-y-3">
          <span class="font-bold">Descripción</span>
          <p class="font-light">
            En ac telecom somos expertos en telecomunicaciones con mas de 25
            años comprobables en el mercado, brindando empleo a mas de 321
            empleados al rededor de todo el mundo
          </p>
          <el-descriptions direction="vertical" :column="2">
            <el-descriptions-item class="text-xs" label="Correo electrónico"
              >ejemplo@ejemplo.com</el-descriptions-item
            >
            <el-descriptions-item label="Número de contacto"
              >3005895648</el-descriptions-item
            >
            <el-descriptions-item label="Estados deseados buscados"
              >Emprendedor, practicas, primer empleo
            </el-descriptions-item>
            <el-descriptions-item label="Rol más buscado"
              >Lider UX</el-descriptions-item
            >
          </el-descriptions>
        </div>
      </el-card>
      <div class="flex">
        <app-simple-card
          title="Áreas de interés"
          icon="far fa-user"
          iconSize="sm"
          :repetitions="3"
          cardWidth="100%"
        >
          <el-tag>Copy</el-tag>
        </app-simple-card>
        <app-simple-card
          title="Vacantes sugeridas por AI"
          icon="fas fa-head-side-virus"
          iconSize="sm"
          :repetitions="3"
          cardWidth="95%"
        >
          <el-tag>Copy</el-tag>
        </app-simple-card>
      </div>
      <div class="text-left p-3 color-primary font-bold text-xl">
        <h2>Lo que buscamos en el talento</h2>
      </div>
      <div class="flex">
        <app-simple-card
          title="Conocimientos"
          icon="fas fa-brain"
          iconSize="sm"
          :repetitions="8"
          cardWidth="100%"
        >
          <el-tag>Copy</el-tag>
        </app-simple-card>
        <app-simple-card
          title="Habilidades"
          icon="fas fa-paperclip"
          iconSize="sm"
          :repetitions="8"
          cardWidth="95%"
        >
          <el-tag>Copy</el-tag>
        </app-simple-card>
      </div>
      <div class="flex">
        <app-simple-card
          title="Herramientas"
          icon="fas fa-screwdriver-wrench"
          iconSize="sm"
          :repetitions="8"
          cardWidth="100%"
        >
          <el-tag>Copy</el-tag>
        </app-simple-card>
        <app-simple-card
          title="Idiomas"
          icon="far fa-user"
          iconSize="sm"
          :repetitions="8"
          cardWidth="95%"
        >
          <template #secondary>
            <el-row :gutter="40" class="space-x-14 text-xs pb-9">
              <el-col
                :span="6"
                class="flex flex-col items-center justify-center"
              >
                <span class="text-gray-500 font-bold">Ingles</span>
                <br />
                <span class="text-gray-500 font-normal">Avanzado</span>
              </el-col>
              <el-col
                :span="6"
                class="flex flex-col items-center justify-center"
              >
                <span class="text-gray-500 font-bold">Ingles</span>
                <br />
                <span class="text-gray-500 font-normal">Comentarios</span>
              </el-col>
              <el-col
                :span="6"
                class="flex flex-col items-center justify-center"
              >
                <span class="text-gray-500 font-bold">Ingles</span>
                <br />
                <span class="text-gray-500 font-normal">Pitches</span>
              </el-col>
            </el-row>
          </template>
        </app-simple-card>
      </div>
      <div class="flex">
        <app-simple-card
          title="Metodologías"
          icon="fas fa-list"
          iconSize="sm"
          :repetitions="4"
          cardWidth="100%"
        >
          <el-tag>Copy</el-tag>
        </app-simple-card>
      </div>
      <div class="text-left p-3 color-primary font-bold text-xl">
        <h2>Lo que ofrecemos en la empresa</h2>
      </div>
      <div class="flex">
        <app-simple-card
          title="Beneficios que ofrecemos"
          icon="far fa-user"
          iconSize="sm"
          :repetitions="8"
          cardWidth="100%"
        >
          <el-tag>Copy</el-tag>
        </app-simple-card>
        <app-simple-card
          title="Formas de trabajo que ofrecemos "
          icon="far fa-user"
          iconSize="sm"
          :repetitions="8"
          cardWidth="95%"
        >
          <el-tag>Copy</el-tag>
        </app-simple-card>
      </div>
      <div class="flex">
        <app-simple-card
          title="Cultura que ofrecemos"
          icon="far fa-comments"
          iconSize="sm"
          :repetitions="4"
          cardWidth="100%"
        >
          <el-tag>Copy</el-tag>
        </app-simple-card>
        <app-simple-card
          title="Comunidades"
          icon="fas fa-users"
          iconSize="sm"
          :repetitions="4"
          cardWidth="95%"
        >
          <el-tag>Copy</el-tag>
        </app-simple-card>
      </div>
    </div>
  </div>
</template>

<script>
import AppSimpleCard from "@/components/sharedUI/SimpleCard.vue";

export default {
  name: "ProfileView",
  components: {
    AppSimpleCard,
  },
};
</script>

<style scoped></style>
