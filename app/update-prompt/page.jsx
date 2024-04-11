'use client'
import React from 'react'
import { useState,useEffect } from 'react';
import { useSession } from 'next-auth/react';
import {  useRouter,useSearchParams } from 'next/navigation';

import Form from '@components/Form';
import { reactProductionProfiling } from '@next.config';

const EditPrompt = () => {
  const router = useRouter();
//   const {data: session}=useSession();
  const searchParams = useSearchParams();
  const promptId = searchParams.get('id');
 const [submitting,setSubmitting]=useState(false);
 const[post,setPost]=useState({
  prompt:"",
  tag:'',
  link:''
 });
 useEffect(()=>{
const getPromptDetails= async () =>{
    const response = await fetch(`/api/prompt/${promptId}`)
    const data= await response.json();

    setPost({
        prompt:data.prompt,
        tag:data.tag,
        link:data.link,
    })
}

if(promptId) getPromptDetails()
 }, [promptId])

 const updatePrompt = async(e)=>{
   e.preventDefault();//prevents browser from reloading default variables
   setSubmitting(true);
   if(!promptId) return alert('Prompt ID not found')
   try{
    const response = await fetch(`/api/prompt/${promptId}`,{
      method:'PATCH',
      body:JSON.stringify({
        prompt:post.prompt,
        // userId:session?.user.id,
        tag: post.tag
        ,
        link:post.link
      })
    })
    if(response.ok){
         router.push('/');
    }
   }
   catch(error){
    console.log(error);
   }
   finally{
    setSubmitting(false);
   }

 }
  return (
    <Form
     type="Edit"
     post={post}
     setPost={setPost}
     submitting={submitting}
     handleSubmit={updatePrompt}
    />

  )
}

export default EditPrompt
