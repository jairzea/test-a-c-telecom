<template>
  <header class="bg-indigo-800 shadow-md">
    <div class="container mx-auto flex items-center justify-between p-4">
      <!-- logo -->
      <div class="flex items-center">
        <span class="text-lg font-bold text-white">Talentpitch</span>
      </div>

      <!-- Menu -->
      <nav class="flex space-x-8">
        <a href="#" class="text-gray-300 hover:text-purple-500">Cónectate</a>
        <a href="#" class="text-gray-300 hover:text-purple-500">Mis muros</a>
        <a href="#" class="text-gray-300 hover:text-purple-500">Mis listas</a>
        <a href="#" class="text-gray-300 hover:text-purple-500">Aprende</a>
      </nav>

      <!-- Iconos -->
      <div class="flex items-center space-x-4">
        <!-- Boton comenzar -->
        <button
          class="secondary rounded text-white px-4 py-2 flex items-center space-x-1 start-btn"
        >
          <span>Comenzar</span>
          <span class="text-lg">+</span>
        </button>
        <el-tooltip content="Correo electrónico" placement="bottom">
          <el-icon size="25" color="#ffff">
            <Message />
          </el-icon>
        </el-tooltip>
        <el-tooltip content="Correo electrónico" placement="bottom">
          <el-icon size="25" color="#ffff">
            <Bell />
          </el-icon>
        </el-tooltip>

        <!-- Circle Avatar con Dropdown -->
        <el-dropdown trigger="hover">
          <el-avatar
            src="@/assets/images/avatar.png"
            size="medium"
            :width="30"
            :height="30"
          ></el-avatar>
          <el-dropdown-menu></el-dropdown-menu>
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
