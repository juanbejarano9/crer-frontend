import { useState,useContext,createContext } from "react";

const postContext = createContext();

//Crear un Hook
export const usePosts = () => {
   const context = useContext(postContext);
   return context
}

export const PostContainer = ({children}) => {

  const [posts,setPosts] = useState([]);

  return(
  <postContext.Provider value={{ //el value es el comparte los datos en este contexto
    posts,
    setPosts
  }}>
    {children}
  </postContext.Provider>
  )
}