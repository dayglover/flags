import flagServices from "@/services/flagServices";
import { mapGetters } from "vuex";

export default {
  name: "FlagDetailsView",
  props: ["id"],
  data() {
    return {
      country: {},
      countries: [],
    };
  },
  async mounted() {
    if (this.id) {
      await this.fetch();
      // await this.getAllCountries();
    }
  },
  watch: {
    id() {
      this.fetch();
    },
  },
  methods: {
    // ...mapActions(["fetchSingleCountry"]),
    goBack() {
      this.$router.go(-1);
    },
    async fetch() {
      // await this.fetchSingleCountry(this.id);
      await this.fetchSingleCountry();
    },
    // async getAllCountries() {
    //   const response = await flagServices.getAllCountries();
    //   this.countries = response.data;
    // },
    async fetchSingleCountry() {
      const response = await flagServices.getSingleCountry(this.id);
      this.country = response.data[0];
    },
  },
  computed: {
    // ...mapGetters(["getAllCountries", "getSingleCountry"]),
    ...mapGetters(["getAllCountries"]),
    borders() {
      if (!this.getAllCountries.length) return {};
      const obj = {};
      this.getAllCountries.forEach((country) => {
        if (
          this.country.borders &&
          this.country.borders.includes(country.cca3)
        ) {
          obj[country.cca3] = country.name.common;
        }
      });
      // if (!this.getAllCountries.length) return {};
      // const obj = {};
      // this.getAllCountries.forEach((country) => {
      //   if (
      //     this.getSingleCountry.borders &&
      //     this.getSingleCountry.borders.includes(country.cca3)
      //   ) {
      //     obj[country.cca3] = country.name.common;
      //   }
      // });
      return obj;
    },
  },
};
