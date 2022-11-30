import { useState,useContext,createContext,useEffect } from "react";
import { getPostsRequests,createPostRequest, deletePostRequest, getPostRequest, updatePostRequest } from "../api/posts";

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
    try {
      const res = await createPostRequest(post);
      setPosts([...posts,res.data])
    } catch (error) {
      console.log(error)
    }
  }
  //--------------------------------------


  //Eliminar un Post
  //--------------------------------------
  const deletePost = async (id) => {
    await deletePostRequest(id);
    setPosts(posts.filter(post => post._id !== id))
  }
  //--------------------------------------

  //Obtener un Post
  //--------------------------------------
  const getPost = async (id) => {
    const res = await getPostRequest(id);
    return res.data
  }
  //--------------------------------------

  //Actualizar Post
  //--------------------------------------
  const updatePost = async (id, post) => {
    const res = await updatePostRequest(id,post);
    setPosts(posts.map(post => post._id === id ? res.data : post));

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
    deletePost,
    getPost,
    updatePost
  }}>
    {children}
  </postContext.Provider>
  )
}