<template>
  <div>
    <AppHeader />
    <router-view />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader/AppHeader.vue";
export default {
  name: "App",
  components: { AppHeader },
};
</script>

<style lang="scss">
:root[data-theme="theme-light"] {
  --primary-color: #0072a3;
  --text-color: #333333;
  --bg-color: hsl(0, 0%, 98%);
  --component-bg-color: #ffffff;
  --new-color: grey;
  --search-icon: grey;
  --boxes-shadow: -2px -1px 5px 3px rgba(232, 227, 227, 0.4);
  --slight-shadow: -2px -1px 5px 3px rgba(232, 227, 227, 0.4);
  --box-shadow: -2px -1px 5px 4px rgba(171, 160, 160, 0.4);
}
:root[data-theme="theme-dark"] {
  --primary-color: #49afd9;

  --text-color: hsl(0, 0%, 100%);
  --bg-color: hsl(207, 26%, 17%);
  --component-bg-color: hsl(209, 23%, 22%);
  --box-shadow: 0px;
  --search-icon: hsl(0, 0%, 100%);
  --new-color: hsl(0, 3%, 79%);
  --boxes-shadow: 2px 2px 5px 2px rgba(12, 12, 12, 0.2);
  --slight-shadow: -3px 3px 5px 0px rgba(15, 11, 11, 0.2);
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  background-color: var(--bg-color);
  color: var(--text-color);
}

.fas {
  color: var(--search-icon);
}

header {
  background-color: var(--component-bg-color);
  color: var(--text-color);
  box-shadow: var(--box-shadow);
}

nav {
  background-color: var(--component-bg-color);
  color: var(--text-color);
}

.card {
  box-shadow: var(--slight-shadow);
  background-color: var(--component-bg-color);
}
.card-text {
  color: var(--text-color);
}

.home-form-wrapper {
  background-color: var(--component-bg-color);
  box-shadow: var(--slight-shadow);
}
input {
  background-color: var(--component-bg-color);
  color: var(--text-color);
}
input::placeholder {
  color: var(--text-color);
}
select {
  background-color: var(--component-bg-color);
  color: var(--text-color);
  box-shadow: var(--slight-shadow);
}
.details {
  span {
    color: var(--new-color);
  }
}
.details-back-btn {
  box-shadow: var(--boxes-shadow);
}
.border-container {
  p {
    box-shadow: var(--boxes-shadow);
    color: var(--new-color);

    a {
      color: var(--new-color);
    }
  }
}
</style>
