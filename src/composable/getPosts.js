import { reactive, ref } from "@vue/reactivity";
import { db } from "../firebase/config";
import { collection, getDocs, orderBy, query } from "firebase/firestore/lite";

let getPosts = () => {
  let posts = ref([]);
  let error = ref("");

  let load = async () => {
    try {
      // firebase collection fetch
      const data = query(collection(db, "posts"),orderBy("created_at", "desc"));

      // firebase docs fetch
      const res = await getDocs(data);

      // map docs data
      posts.value = res.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
    } catch (err) {
      error.value = err.message;
    }
  };
  return { posts, error, load };
};

export default getPosts;
