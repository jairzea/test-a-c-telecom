<template>
  <header class="bg-indigo-800 shadow-md">
    <div class="container mx-auto flex items-center justify-between p-4">
      <!-- Logo -->
      <div class="flex items-center">
        <span class="text-lg font-bold text-white">TalentPitch</span>
      </div>

      <!-- Menú -->
      <nav class="flex space-x-8">
        <a href="#" class="text-gray-300 hover:text-purple-500">Conéctate</a>
        <a href="#" class="text-gray-300 hover:text-purple-500">Mis muros</a>
        <a href="#" class="text-gray-300 hover:text-purple-500">Mis listas</a>
        <a href="#" class="text-gray-300 hover:text-purple-500">Aprende</a>
      </nav>

      <!-- Iconos -->
      <div class="flex items-center space-x-4">
        <!-- Botón Comenzar -->
        <button
          class="bg-purple-600 rounded text-white px-4 py-2 flex items-center space-x-1 start-btn"
        >
          <span>Comenzar</span>
          <span class="text-lg">+</span>
        </button>
        <el-tooltip content="Correo electrónico" placement="bottom">
          <el-icon size="25" color="#ffff">
            <Message />
          </el-icon>
        </el-tooltip>
        <el-tooltip content="Notificaciones" placement="bottom">
          <el-icon size="25" color="#ffff">
            <Bell />
          </el-icon>
        </el-tooltip>

        <!-- Circle Avatar con Dropdown -->
        <el-dropdown trigger="hover">
          <el-avatar
            src="@/assets/images/03b0d39583f48206768a7534e55bcpng.png"
            size="medium"
            :width="30"
            :height="30"
          ></el-avatar>
          <el-dropdown-menu>
            <el-dropdown-item>Perfil</el-dropdown-item>
            <el-dropdown-item>Configuración</el-dropdown-item>
            <el-dropdown-item divided>Salir</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped>
.start-btn {
  background-color: #de1c7d;
}
/* Estilos adicionales según sea necesario */
</style>
