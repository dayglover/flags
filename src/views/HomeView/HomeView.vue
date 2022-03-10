<template>
  <div class="home">
    <div class="home-main">
      <div class="home-form-container">
        <form action="" class="home-form">
          <div class="home-form-wrapper">
            <i class="fas fa-search fa-lg"></i>
            <input
              type="text"
              placeholder="Search for a country..."
              v-model="searchTerm"
            />
          </div>
        </form>
        <div class="select-container">
          <select name="" id="" v-model="selectTerm">
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div class="home-card-wrapper">
        <Card
          v-for="country in filteredCountries"
          :country="country"
          :key="country.name.common"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HomeView from "./HomeView";
export default HomeView;
</script>

<style lang="scss" scoped>
@import "HomeView.scss";
</style>
