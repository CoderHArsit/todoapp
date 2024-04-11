"use client"
import { useState } from 'react'
import React from 'react'
import PromptCard from './PromptCard'
// import { Draggable } from 'react-draggable'
const Profile = ({name,desc,data,handleEdit,handleDelete}) => {


  
  const [searchText,setSearchText]=useState('');
 
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);
 const [posts,setPosts]=useState([]);
 const filterPrompts = (searchtext) => {
  const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
  return data.filter(
    (item) =>
      
      regex.test(item.tag) ||
      regex.test(item.prompt)
  );
};
const handleSearchChange = (e) => {
  clearTimeout(searchTimeout);
  setSearchText(e.target.value);

  // debounce method
  setSearchTimeout(
    setTimeout(() => {
      const searchResult = filterPrompts(e.target.value);
      setSearchedResults(searchResult);
    }, 500)
  );
};
const handleTagClick = (tagName) => {
  setSearchText(tagName);

  const searchResult = filterPrompts(tagName);
  setSearchedResults(searchResult);
};
  return (
    <>
    {/* <form className='relative w-72 flex-center  mt-16 mx-auto'>
        <input 
        type='text'
        placeholder='Search for a task or tag'
        value={searchText}
        onChange={handleSearchChange}
        required
        className='search_input peer'
        />
      </form> */}
    <section className='w-full'>
      {/* {/* <h1 className='head_text text-left'>
        <span className='blue_gradient'>{name}Profile</span></h1> */}
        {/* <p className='desc text-left'>{desc}</p> */}
  
        <div className='mt-10 prompt_layout'>
          
            {data?data.map((post)=>(
               
               <PromptCard
                
                key={post._id}
                post={post}
                handleEdit={()=>handleEdit && handleEdit(post)}
                handleDelete={()=> handleDelete && handleDelete(post)}
                />
            ))
            :<p className="text-2xl sm:text:3xl font-bold text-white text-center mt-24 mb-52 border-red-600 rounded-full hover:animate-pulse">
            Add new tasks clicking profile
        </p>}
        </div>
        
    </section>
    </>
  )
}

export default Profile
