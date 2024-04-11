import React from 'react'
import Link from 'next/link'
const Form = ({
    type, post, setPost, submitting, handleSubmit
}) => {
  return (
    <section className='w-full max-w-full '>
        <h1 className='head_text text-center' style={{color:"#c22975"}}>
            <span className='head_text '>{type} Task </span>
        </h1>
        
        <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 prompt_card mb-10 justify-center mx-auto'>
            <label>
                <span className='font-satoshi font-semibold text-base text-yellow-100'>
                   Task Name
                </span>
                <input
                value={post.link}
                onChange={(e)=>setPost({ ...post,link:e.target.value})}
                placeholder='Do Homework'
                required
                className='form_input'
                ></input>
            </label>
            <label>
                <span className='font-satoshi font-semibold text-base text-yellow-100'>
                    Task Description
                </span>
                <textarea
                value={post.prompt}
                onChange={(e)=>setPost({ ...post,prompt:e.target.value})}
                placeholder='Write task description here...'
                required
                className='form_textarea'
                ></textarea>
            </label>
            <label>
                <span className='font-satoshi font-semibold text-base text-yellow-100'>
                    Tag
                    <span className='font-normal'>(#product,#webdevelopment,#idea)</span>
                </span>
                <input
                value={post.tag}
                onChange={(e)=>setPost({ ...post,tag:e.target.value})}
                placeholder='#tag'
                required
                className='form_input'
                ></input>
            </label>
            
            <div className='flex-end mx-3 mb-5 gap-4'>
                <Link href="/" className='text-gray-500 text-sm'> Cancel
                </Link>
                <button 
                type='submit'
                disabled={submitting}
                className="px-5 py-1.5 text-am bg-primary-orange rounded-full text-white">
                    {submitting? `${type}...`:type}
              
                </button>
            </div>
        </form>

    </section>
  )
}

export default Form
