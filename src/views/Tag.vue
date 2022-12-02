<template>
  <div class="tag">
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="filterPost.length" class="layout">
      <div>
        <PostList :posts="filterPost"></PostList>
      </div>
      <div>
        <TagCloud :posts="posts"></TagCloud>
      </div>
    </div>
    <div v-else>
      <Spinner></Spinner>
    </div>
  </div>
</template>

<script>
import TagCloud from "../components/TagCloud";
import PostList from "../components/PostList";
import { computed } from "@vue/runtime-core";
import Spinner from "../components/Spinner";
import getPosts from "../composable/getPosts";
export default {
  components: {
    TagCloud,
    PostList,
    Spinner,
  },
  props: ["tag"],
  setup(props) {
    let { posts, error, load } = getPosts();
    load();
    let filterPost = computed(() => {
      return posts.value.filter((post) => {
        return post.tags.includes(props.tag);
      });
    });
    return { posts, error, filterPost };
  },
};
</script>

<style>
.tag{
    max-width: 1200px;
    margin: 0 auto;
}
</style>
