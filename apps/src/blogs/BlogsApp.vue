<template>
  <div id="blogs-app">
    <div v-if="loading" class="spinner">
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
      <div class="rect5"></div>
    </div>

    <h3
      class="has-text-centered is-size-5"
      style="color: #bdbdbd;"
      v-else-if="!loading && blogs.length === 0"
    >
      There are no recent blog posts.
    </h3>

    <div
      v-else
      class="row"
      v-for="(feed, index) of blogsGroupedByFeedSortedFiltered"
      :key="feed.FeedTitle"
    >
      <div class="col">
        <hr v-if="index !== 0" />
        <h3 class="has-text-weight-bold">{{ feed.FeedTitle }}</h3>
        <p v-html="feed.FeedDescription" />
        <div class="row">
          <div class="col is-4" v-for="blog in feed.Blogs" :key="blog.ID">
            <a :href="blog.Url" target="_blank">
              <div class="sgds-card patterned">
                <div class="sgds-card-content">
                  <h5>{{ blog.Title }}</h5>
                  <p class="is-size-8 has-text-weight-light has-text-left">
                    Published on
                    {{ format(blog.PubDate, "ccc, dd MMM yyyy") }} by
                    {{ blog.Creator }}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <p class="has-text-weight-semibold is-size-8">
          Read more at
          <a :href="feed.FeedUrl" target="_blank">{{ feed.FeedTitle }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { compareDesc, parseISO, format } from "date-fns";
import { apiClient } from "../lib";

function removeMediumSuffix(str) {
  return str.endsWith("- Medium") ? str.slice(0, -9) : str;
}

export default {
  data() {
    return {
      loading: false,
      blogs: [],
    };
  },
  created() {
    this.loading = true;
    apiClient
      .get("/blogs")
      .then((response) => {
        this.blogs = response.data;
      })
      .finally(() => {
        this.loading = false;
      });
  },
  computed: {
    blogsGroupedByFeed() {
      return this.blogs.reduce((groupedBlogs, blog) => {
        blog = {
          ...blog,
          PubDate: parseISO(blog.PubDate),
        };
        let feedTitle = removeMediumSuffix(blog.FeedTitle);
        let feedDescription = removeMediumSuffix(blog.FeedDescription);
        if (groupedBlogs[feedTitle]) {
          groupedBlogs[feedTitle].Blogs = groupedBlogs[feedTitle].Blogs.concat([
            blog,
          ]);
          return groupedBlogs;
        }
        return {
          ...groupedBlogs,
          [feedTitle]: {
            FeedTitle: feedTitle,
            FeedUrl: blog.FeedUrl,
            FeedDescription: feedDescription,
            Blogs: [blog],
          },
        };
      }, {});
    },
    blogsGroupedByFeedSortedFiltered() {
      return Object.keys(this.blogsGroupedByFeed)
        .sort((a, b) => a.localeCompare(b))
        .map((key) => {
          return {
            ...this.blogsGroupedByFeed[key],
            Blogs: this.blogsGroupedByFeed[key].Blogs.sort((a, b) =>
              compareDesc(a.PubDate, b.PubDate)
            ).slice(0, 3),
          };
        });
    },
  },
  methods: {
    format,
  },
};
</script>

<style scoped>
.sgds-card {
  color: #ffffff;
  height: 100%;
}

.sgds-card:hover {
  transform: translateY(-2px);
  box-shadow: 2px 3px 5px gray;
  transition: all 0.3s;
}

.sgds-card:active {
  transform: translateY(0);
}
</style>
