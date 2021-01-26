<template>
  <div id="terms">
    <div class="row">
      <div class="col">
        <div class="field">
          <div class="control has-icons-left">
            <input
              type="text"
              id="search-input"
              class="input"
              placeholder="Search Acronym"
              v-model="search"
            />
            <span class="icon is-left">
              <i class="sgds-icon sgds-icon-search is-size-6"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="row">
      <div class="col suggest-new-container">
        <a class="sgds-button is-primary" v-on:click="showContributionForm = !showContributionForm">
          Suggest a new acronym
          <i
            class="sgds-icon sgds-icon-chevron-down"
            v-if="!showContributionForm"
          ></i>
          <i class="sgds-icon sgds-icon-chevron-up" v-else></i>
        </a>
        <div class="has-background-light padding" v-if="showContributionForm">
          <ContributionForm type="add" @close="showContributionForm = false" />
        </div>
      </div>
    </div> -->
    <div
      v-for="term of filteredTerms"
      v-cloak
      class="sgds-card margin--bottom--sm"
      :key="term.id + term.term"
    >
      <div class="sgds-card-content">
        <div class="row">
          <div class="col is-3 is-paddingless">
            <h5 class="margin--top is-uppercase">{{ term.term }}</h5>
          </div>
          <div class="col is-9 is-paddingless">
            <h6>{{ term.full_term }}</h6>
            <small>{{ term.description }}</small>
            <div v-if="term.tags.length > 0">
              <p
                class="sgds-tag is-rounded margin--right--sm margin--top"
                v-for="tag of term.tags"
                :key="term.term + tag"
              >{{ tag }}</p>
            </div>
            <div v-if="term.links.length > 0" class="margin--top">
              <a :href="link" target="_blank" v-for="link of term.links" :key="term.term + link">
                Link
                <span class="sgds-icon sgds-icon-external"></span>
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col has-text-right is-paddingless">
            <a href @click.prevent="editTerm(term.id)">
              Edit
              <i class="sgds-icon sgds-icon-chevron-down" v-if="!editing[term.id]"></i>
              <i class="sgds-icon sgds-icon-chevron-up" v-else></i>
            </a>
          </div>
        </div>
        <div class="has-background-light padding" v-if="editing[term.id]">
          <ContributionForm
            type="edit"
            @close="editing[term.id] = false"
            :termId="term.id"
            :term="term.term"
            :full_term="term.full_term"
            :description="term.description"
            :links="term.links"
            :tags="term.tags"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ContributionForm from "./TermsContributionForm.vue";

export default {
  components: { ContributionForm },
  data() {
    return {
      terms: [],
      search: "",
      displaySearchResults: false,
      showContributionForm: false,
      contributeButtonContainerStyle: {
        display: "flex",
        flexDirection: "row-reverse"
      },
      contributionFormStyle: {
        padding: "1rem 0"
      },
      editing: {}
    };
  },
  methods: {
    editTerm(index) {
      this.$set(this.editing, index, !this.editing[index]);
    }
  },
  computed: {
    filteredTerms() {
      if (this.terms.length > 0) {
        return this.terms.filter(term => {
          const searchLowercase = this.search.toLowerCase();
          const termName = term.term.toLowerCase();
          const fullTerm = term.full_term.toLowerCase();
          const description = term.description.toLowerCase();
          const links = term.links.join("\n");
          const tags = term.tags.join("\n");
          return (
            termName.indexOf(searchLowercase) !== -1 ||
            fullTerm.indexOf(searchLowercase) !== -1 ||
            description.indexOf(searchLowercase) !== -1 ||
            links.indexOf(searchLowercase) !== -1 ||
            tags.indexOf(searchLowercase) !== -1
          );
        });
      } else {
        return [];
      }
    }
  },
  created() {
    axios.get("/terms.json").then(response => {
      this.terms = response.data;
    });
  }
};
</script>

<style scoped>
.suggest-new-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
</style>
