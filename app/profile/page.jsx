"use client";

import { useState,useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from '@components/Profile';

const MyProfile=()=>{
    const router = new useRouter();

    const {data:session}=useSession();
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        const fetchPosts= async()=>{
          const response=await fetch(`/api/users/${session?.user.id}/posts`);
          const data= await response.json();
          setPosts(data);
        }
        console.log(posts);
       if(session?.user.id) fetchPosts();
      },[]);
    
    const handleEdit=(post)=>{
         router.push(`/update-prompt?id=${post._id}`)
    }
    const handleDelete= async (post) =>{
        const hasConfirmed= confirm("Are you sure you want to delete this prompt");
        if(hasConfirmed){
            try{
                await fetch(`/api/prompt/${post._id.toString()}`,{
                    method:'DELETE'
                });
                const filteredPosts =posts.filter((p)=>p._id !== post._id);

                setPosts(filteredPosts);
            }catch(error){
                console.log(error);
            }
        }
 
    }
    return (
<div className="w-full">
<section className="w-full flex-center flex-col">
{/* <Nav/> */}
<h1 className="head_text text-center" style={{color:"purple"}}>
    Your Daily 
    <br />
    <span className="orange_gradient text-center">Tasks To Do </span>
  
  </h1>
    {/* <Feed/> */}
    
</section>



        
        <Profile
      
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        />
        </div>
    )
}

export default MyProfile; 