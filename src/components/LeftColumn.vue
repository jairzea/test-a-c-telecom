<template>
  <div class="left-column bg-white p-4 rounded border">
    <div class="flex flex-col items-center mt-4 space-y-3 mb-2">
      <el-avatar
        class="circle color-primary"
        src="@/assets/images/avatar.svg"
        :size="150"
        >AC</el-avatar
      >
      <p class="text-lg font-semibold my-2 color-primary">A.C. Telecom</p>
      <p class="text-xs color-gray">@ac-Telecom</p>
      <p class="text-sm color-primary-2">Startup - tecnología</p>
      <p class="text-xs font-light color-success ml-2 point-before">
        Empresa Activa
      </p>
      <div class="flex items-center my-2">
        <el-icon><Location /></el-icon>
        <p class="ml-1 text-xs">Florindablanca - Colombia</p>
      </div>
      <div class="flex items-center my-2">
        <el-rate v-model="rating" allow-half />
        <p class="text-xs">({{ reviewCount }} Reviews)</p>
      </div>

      <!-- Redes Sociales -->
      <div class="flex items-center space-x-6 my-4 color-primary">
        <font-awesome-icon size="lg" icon="fa-brands fa-facebook-square" />
        <font-awesome-icon size="lg" icon="fa-brands fa-instagram" />
        <font-awesome-icon size="lg" icon="fa-brands fa-x-twitter" />
        <font-awesome-icon size="lg" icon="fa-brands fa-linkedin" />
      </div>

      <div class="flex items-center my-2 color-secondary">
        <el-icon><Link /></el-icon>
        <a class="ml-1 text-sm" href="#">https://www.actelecom.net/telecom</a>
      </div>

      <div class="background-container-img rounded">
        <el-avatar :size="50" class="bg-color-secondary">
          <el-icon size="36" class="text-white"><VideoPlay /></el-icon>
        </el-avatar>
      </div>

      <div class="flex items-center border rounded p-4">
        <img src="@/assets/images/qr-code.jpeg" alt="Imagen 1" />
      </div>

      <!-- Botón Compartir Perfil -->
      <div class="flex items-center color-secondary w-full">
        <el-button
          type="primary"
          icon="el-icon-share"
          class="w-full bg-color-secondary border-color-secondary h-40"
          ><font-awesome-icon size="lg" icon="fa-solid fa-share" class="mr-1" />
          Compartir perfil</el-button
        >
      </div>

      <!-- Texto con Icono Descargar -->
      <div class="flex items-center my-2 w-full">
        <el-input
          v-model="input1"
          placeholder="Descargar Resumen"
          class="h-10 font-xs"
        >
          <template #prepend
            ><font-awesome-icon
              size="lg"
              icon="fa-solid fa-download"
              class="text-white"
          /></template>
        </el-input>
      </div>
    </div>

    <!-- Lista de Estadísticas -->
    <ul class="stats-list space-y-3 font-light">
      <li class="flex items-center justify-between p-2 border-b">
        <div class="flex items-center space-x-4">
          <font-awesome-icon size="sm" icon="fa fa-users" />
          <span class="flex-1">TALENTOS</span>
        </div>
        <span class="font-bold">20</span>
      </li>
      <li class="flex items-center justify-between p-2 border-b">
        <div class="flex items-center space-x-4">
          <font-awesome-icon size="sm" icon="far fa-eye" />
          <span class="flex-1">20 VISTAS DEL PERFIL</span>
        </div>
        <span class="font-bold">20</span>
      </li>
      <li class="flex items-center justify-between p-2 border-b">
        <div class="flex items-center space-x-4">
          <font-awesome-icon size="sm" icon="fas fa-video" />
          <span class="flex-1">PITCHES RECIBIDOS</span>
        </div>
        <span class="font-bold">20</span>
      </li>
      <li class="flex items-center justify-between p-2 border-b">
        <div class="flex items-center space-x-4">
          <font-awesome-icon size="sm" icon="fas fa-person" />
          <span class="flex-1">EXHIBICIONES</span>
        </div>
        <span class="font-bold">20</span>
      </li>
      <li class="flex items-center justify-between p-2 border-b">
        <div class="flex items-center space-x-4">
          <font-awesome-icon size="sm" icon="fas fa-users-rectangle" />
          <span class="flex-1">VACANTES</span>
        </div>
        <span class="font-bold">20</span>
      </li>
      <li class="flex items-center justify-between p-2">
        <div class="flex items-center space-x-4">
          <font-awesome-icon size="sm" icon="fas fa-photo-film" />
          <span class="flex-1">CONTENIDOS</span>
        </div>
        <span class="font-bold">20</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AppLeftColumn",
  data() {
    return {
      rating: 4,
      reviewCount: 10,
    };
  },
};
</script>

<style scoped>
.left-column {
  width: 22%;
  position: absolute;
  top: 25%;
  left: 69px;
  box-sizing: border-box;
  z-index: 1;
  overflow-y: auto;
  margin-bottom: 10px;
}

.circle {
  background-color: #e8eaf6;
  font-size: 50px;
  font-weight: 700;
}

.background-container-img {
  position: relative;
  width: 100%;
  height: 306px;
  background-image: url("@/assets/images/women.jpeg");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.stats-list span {
  font-size: 0.6rem;
}

.point-before::before {
  content: "•";
  font-size: 3em;
  margin-right: 0.1em;
  vertical-align: -6px;
}
</style>
