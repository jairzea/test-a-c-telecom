<template>
  <div class="container mx-auto flex justify-end">
    <div class="w-3/4">
      <nav class="space-x-5 text-xs border-b">
        <router-link to="/" class="nav-link color-primary-2"
          >Perfil</router-link
        >
        <router-link to="/vacancies" class="nav-link color-primary-2"
          >Vacantes</router-link
        >
        <router-link to="/lists" class="nav-link color-primary-2"
          >Listas</router-link
        >
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppMenuUI",
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: flex-start; /* Alinea los elementos a la izquierda */
  background-color: #eeeeee00;
  padding: 10px;
}

.nav-link {
  text-decoration: none;
  color: #333;
  padding: 5px;
  border-bottom: 2px solid transparent; /* Línea inferior inicialmente transparente */
  cursor: pointer;
}

.nav-link:hover {
  background-color: #ddd;
}

.nav-link.router-link-exact-active {
  color: #de1c7d !important; /* Cambia el color del enlace activo */
  border-bottom-color: #de1c7d; /* Muestra la línea inferior del enlace activo */
}
</style>
