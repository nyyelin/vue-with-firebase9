import { reactive, ref } from "@vue/reactivity";
import { db } from "../firebase/config";
import { doc, collection, getDoc } from "firebase/firestore/lite";
let getPost = (id) => {
  let post = ref(null);
  let error = ref("");
  let load = async () => {
    try {
      // await new Promise((resolve,reject) => {
      //   setTimeout(resolve, 2000)
      // })
      // firebase collection fetch
      const data = doc(db, "posts", id);

      // firebase docs fetch
      const res = await getDoc(data);
      // map docs data
      post.value = { id: doc.id, ...res.data() };
    } catch (err) {
      error.value = err.message;
    }
  };
  return { post, error, load };
};

export default getPost;
