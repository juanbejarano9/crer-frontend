import { useState,useContext,createContext,useEffect } from "react";
import { getPostsRequests } from "../api/posts";

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

  useEffect(() => {
    getPosts()
  },[])

  return(
  <postContext.Provider value={{ //el value es el comparte los datos en este contexto
    posts,
    getPosts
  }}>
    {children}
  </postContext.Provider>
  )
}