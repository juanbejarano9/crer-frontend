import axios from "axios";

export const getPostsRequests = async () => {
  return await axios.get("https://crer-backend-production.up.railway.app/posts")
}

export const createPostRequest = async(post) => {
  const form = new FormData()

  for (let key in post) {
    form.append(key,post[key])
  }

  return await axios.post("https://crer-backend-production.up.railway.app/posts",form, {
    headers: {
      "Content-Type":"multipart/form-data"
    }
  })
}

export const deletePostRequest = async(id) => {
  return await axios.delete("https://crer-backend-production.up.railway.app/posts/" + id);
}

export const getPostRequest = async(id) => {
  return await axios.get("https://crer-backend-production.up.railway.app/posts/" + id)
}

export const updatePostRequest = async(id,newFields) => {
  return await axios.put(`https://crer-backend-production.up.railway.app/posts/${id}`,newFields)
}