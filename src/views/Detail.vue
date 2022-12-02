<template>
  <div v-if="post" class="post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
    <div v-for="(tag, index) in post.tags" :key="index" class="pill">
      {{ tag }}
    </div>
    <button class="delete" @click="deletePost">Delete</button>
  </div>
  <div v-else>
    <Spinner></Spinner>
  </div>
</template>

<script>
import Spinner from "../components/Spinner";
import getPost from "../composable/getPost.js";
import {useRoute} from "vue-router"
import {useRouter} from "vue-router"
import {db} from "../firebase/config"
import { doc, deleteDoc } from "firebase/firestore";

export default {
  components: { Spinner },
  props: ["id"],
  setup(props) {
    let route = useRoute();
    let router = useRouter();
     
    let { post, error, load } = getPost(props.id);
    load();
    let deletePost = async() => {
      let id = props.id
      const data = await doc(db, "posts", id)
      deleteDoc(data)
      router.push('/')
    }
    return { post, error, deletePost };
  },
};
</script>

<style>
.post {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #e7e7e7;
}
.post h2 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: white;
  margin-bottom: 40px;
}

.post h2::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1deg);
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
button.delete{
  margin: 30px auto
}
</style>
