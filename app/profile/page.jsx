"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from '@components/Profile';
// Import loading skeleton component or library
import LoadingSkeleton from '@components/LoadingSkeleton';

const MyProfile = () => {
    const router = new useRouter();

    const { data: session, status: sessionStatus } = useSession();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true); // Initialize loading state to true

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`/api/users/${session?.user.id}/posts`);
                const data = await response.json();
                setPosts(data);
                setLoading(false); // Set loading to false when data is fetched
            } catch (error) {
                console.log(error);
            }
        };

        if (session?.user.id) {
            fetchPosts();
        }
    }, [session?.user.id]);

    const handleEdit = (post) => {
        router.push(`/update-prompt?id=${post._id}`);
    };

    const handleDelete = async (post) => {
        const hasConfirmed = confirm("Are you sure you want to delete this prompt");
        if (hasConfirmed) {
            try {
                await fetch(`/api/prompt/${post._id.toString()}`, {
                    method: 'DELETE'
                });
                const filteredPosts = posts.filter((p) => p._id !== post._id);
                setPosts(filteredPosts);
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div className="w-full">
            <section className="w-full flex-center flex-col">
                <h1 className="head_text text-center" style={{ color: "purple" }}>
                    Your Daily <br />
                    <span className="orange_gradient text-center">Tasks To Do </span>
                </h1>
            </section>
    
            {sessionStatus === "loading" ? (
                // Render loading skeleton while session data is being fetched
               <LoadingSkeleton />
            ) : session?.user ? (
                // Render profile component with actual data
                <Profile
                    data={posts}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
            ) : (
                // Render login prompt if user is not logged in
                <p className="text-2xl sm:text:3xl font-bold text-white text-center mt-24 mb-52 border-red-600 rounded-full hover:animate-pulse">
                    Login to see your tasks
                </p>
            )}</div>
        
    );
};

export default MyProfile;
