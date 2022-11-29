import { useState,useContext,createContext,useEffect } from "react";
import { getPostsRequests,createPostRequest, deletePostRequest } from "../api/posts";

const postContext = createContext();

//Crear un Hook
export const usePosts = () => {
   const context = useContext(postContext);
   return context
}

export const PostProvider = ({children}) => {

  const [posts,setPosts] = useState([]);

  //Obtener la lista de Post
  //--------------------------------------
  const getPosts = async () => {
    const res = await getPostsRequests();
    setPosts(res.data)
  }
  //--------------------------------------

  //Crear un Post
  //--------------------------------------
  const createPost = async (post) => {
    const res = await createPostRequest(post);
    setPosts([...posts,res.data])
  }
  //--------------------------------------


  //Eliminar un Post
  //--------------------------------------
  const deletePost = async (id) => {
    await deletePostRequest(id);
    setPosts(posts.filter(post => post._id !== id))
  }


  //--------------------------------------


  useEffect(() => {
    getPosts()
  },[])

  return(
  <postContext.Provider value={{ //el value es el comparte los datos en este contexto
    posts,
    getPosts,
    createPost,
    deletePost
  }}>
    {children}
  </postContext.Provider>
  )
}