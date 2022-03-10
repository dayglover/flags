<template>
  <div class="details">
    <div class="details-container">
      <div class="details-back-btn" @click="goBack">
        <i class="fas fa-arrow-left"></i>
        <p>Back</p>
      </div>
      <div class="details-main" v-if="Object.keys(country).length">
        <div class="details-main-img">
          <img :src="country.flags.svg" alt="" />
        </div>
        <div class="details-main-info">
          <div>
            <h3>{{ country.name.common }}</h3>
          </div>
          <div class="details-main-info-first">
            <div>
              <p>
                Native name:
                <span>{{
                  Object.values(country.name.nativeName)[0].official
                }}</span>
              </p>
              <p>
                Population: <span>{{ country.population }}</span>
              </p>
              <p>
                Region: <span>{{ country.region }}</span>
              </p>
              <p>
                Sub Region: <span>{{ country.subregion }}</span>
              </p>
              <p>
                Capital:
                <span v-for="(capital, index) in country.capital" :key="index"
                  >{{ capital }},</span
                >
              </p>
            </div>
            <div class="details-main-info-second">
              <p v-if="country.tld">
                Top Level Domain: <span>{{ country.tld[0] }}</span>
              </p>
              <p v-if="country.currencies">
                Currencies:
                <span>{{ Object.values(country.currencies)[0].name }}</span>
              </p>
              <p>
                Languages:
                <span
                  v-for="(lang, index) in Object.values(country.languages)"
                  :key="index"
                >
                  {{ lang }},
                </span>
              </p>
            </div>
          </div>
          <div
            class="details-main-info-third"
            v-if="country.borders && getAllCountries.length"
          >
            <h4>Border Countries:</h4>
            <div class="border-container">
              <p v-for="(border, index) in country.borders" :key="index">
                <router-link
                  :to="{ name: 'flagDetails', params: { id: borders[border] } }"
                >
                  {{ borders[border] }}
                </router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FlagDetails from "./FlagDetails";
export default FlagDetails;
</script>

<style lang="scss" scoped>
@import "./FlagDetailsView.scss";
</style>