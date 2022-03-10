import Card from "@/components/Card/Card.vue";
import Pagination from "@/components/Pagination/Pagination";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HomeView",
  components: { Card, Pagination },
  data() {
    return {
      searchTerm: "",
      selectTerm: "",
    };
  },
  mounted() {
    this.fetchCountries();
  },
  methods: {
    ...mapActions(["fetchCountries"]),
  },
  computed: {
    ...mapGetters(["getAllCountries"]),
    filteredCountries() {
      if (this.selectTerm) {
        return this.getAllCountries.filter((country) =>
          country.region.includes(this.selectTerm.trim())
        );
      } else {
        return this.getAllCountries.filter((country) =>
          country.name.common
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase().trim())
        );
      }
    },
  },
};
