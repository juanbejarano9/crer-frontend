import React from 'react'
import { VscEmptyWindow } from "react-icons/vsc";

import {usePosts} from "../../../context/postContext" //Hook

import Card from '../Card/Card';

function Posts() {

  const {posts} = usePosts();

  if(posts.length === 0) return (
    <div className='d-flex justify-content-center'>
      <div className='text-white p-4 m-4 bg-main-color d-inline-flex border rounded-4 align-items-center'>
      <VscEmptyWindow className="w-50 h-50 text-white"/>
      <h1>No hay Posts aún</h1>
      </div>
    </div>
  )

  return (
    <div>
      {posts.map((post,index) => (
        <Card items={post} num={index}></Card>
      ))}
    </div>
  )
}

export default Posts