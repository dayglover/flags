<template>
  <router-link
    :to="{ name: 'flagDetails', params: { id: country.name.common } }"
  >
    <div class="card">
      <div class="card-image-container">
        <img :src="country.flags.svg" alt="" />
      </div>
      <div class="card-text">
        <h3 class="card-text-heading">{{ country.name.common }}</h3>
        <p class="card-text-population">Population: {{ country.population }}</p>
        <p class="card-text-region">Region: {{ country.region }}</p>
        <p class="card-text-capital" v-if="country.capital">
          Capital:
          <span v-for="(capital, index) in country.capital" :key="index"
            >{{ capital }},</span
          >
        </p>
      </div>
    </div>
  </router-link>
</template>

<script>
import Card from "./Card";
export default Card;
</script>

<style lang="scss" scoped>
@import "./Card.scss";
</style>