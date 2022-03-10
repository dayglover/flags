<template>
  <header>
    <nav>
      <div>
        <p>Where in the world?</p>
      </div>
      <!-- v-if=getMode -->
      <div class="nav-icon" v-if="isLightMode" @click="switchTheme('dark')">
        <i class="far fa-moon"></i>
        <p>Dark Mode</p>
      </div>
      <div class="nav-icon" v-else @click="switchTheme('light')">
        <i class="far fa-sun"></i>
        <p>Light Mode</p>
      </div>
    </nav>
  </header>
</template>

<script>
import AppHeader from "./AppHeader";
export default AppHeader;
</script>

<style lang="scss" scoped>
@import "./AppHeader.scss";
</style>