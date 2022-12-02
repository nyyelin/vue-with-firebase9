<template>
  <div class="tagCloud">
    <h3>Tag Cloud</h3>
    <div v-for="tag in uniqueTags" :key="tag">
      <router-link :to="{ name: 'Tag', params: { tag: tag } }">
        {{ tag }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: ["posts"],
  setup(props) {
    let tagArray = ref([]);
    props.posts.forEach((post) => {
      post.tags.forEach((tag) => {
        tagArray.value.push(tag);
      });
    });
    let uniqueTags = tagArray.value.filter((tag, index, array) => {
      return array.indexOf(tag) === index;
    });

    return { uniqueTags };
  },
};
</script>

<style>
.tagCloud {
  padding: 10px;
}
.tagCloud h3 {
  border-bottom: 1px solid #eee;
  padding: 16px 8px;
  color: #444;
}
.tagCloud div {
  display: inline-block;
  padding: 10px;
}
.tagCloud a {
  color: #aaa;
  text-decoration: none;
}
.tagCloud a.router-link-active {
  color: #ff8800;
  font-weight: bold;
}
</style>
