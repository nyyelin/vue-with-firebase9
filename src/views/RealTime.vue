<template>
  <h1>Real Time Database</h1>
  <div v-for="post in posts" :key="post.id">
    <SinglePost :post="post"></SinglePost>
  </div>
</template>

<script>
import SinglePost from "../components/SinglePost";
import { db } from "../firebase/config";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { ref } from "@vue/reactivity";
export default {
  components: { SinglePost },
  setup() {
    let posts = ref([]);
    const dbRef = collection(db, "posts");
    onSnapshot(dbRef, (docsSnap) => {
      posts.value = docsSnap.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
    });
    return { posts };
  },
};
</script>

<style></style>
