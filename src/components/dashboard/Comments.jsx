import React, { useEffect, useRef, useState } from 'react'
import { Input } from '../ui/input';
import { Send } from '@/lib/svg_icons';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useCreateCommentMutation, useGetVideoCommentsQuery } from '@/store/Api/comments';
import { toast } from 'react-toastify';
import { ChevronDown, ChevronUp } from 'lucide-react';


const Comments = ({ videoId }) => {
    const { data } = useGetVideoCommentsQuery(videoId);
    const [createComment] = useCreateCommentMutation();
    const [commentBody, setCommentBody] = useState("");

    const comments = data?.data?.comments || [];

    const handleCreateComment = async () => {
        if (!commentBody.trim()) {
            toast.warning("Please enter a comment");
            return;
        }
        try {
            const res = await createComment({ body: { comment: commentBody }, videoId }).unwrap();
            if (res?.success) {
                setCommentBody("");
            }
        } catch (error) {
            console.error("Error creating comment:", error);
            toast.error(error?.data?.message || "Error while comment")
        }
    };

    return (
        <>
            <h1 className='text-lg font-semibold '>{comments.length} Comments</h1>

            <div className='relative my-4'>
                <Input

                    type="text"
                    value={commentBody}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleCreateComment();
                        }

                    }}
                    onChange={(e) => {
                        setCommentBody(e.target.value);
                    }}
                    className="px-4 py-3 rounded-3xl border border-gray-500" placeholder="Write Comments" />
                <div className='absolute right-5 top-2 cursor-pointer' onClick={handleCreateComment}>
                    <Send />
                </div>
            </div>

            <div className='flex flex-col gap-y-4 h-40 overflow-y-scroll'>
                {
                    [...comments].reverse().map((items, i) => (
                        <Comment
                            key={i}
                            comment={items?.comment}
                            commentId={items?._id}
                            reply={items?.reply}
                            userName={items?.user?.name}
                            avatar={items?.user?.avatar}
                        />
                    ))
                }
            </div>
        </>
    )
}

const Comment = ({ comment, reply, userName, avatar }) => {
    const [showReplies, setShowReplies] = useState(false);
    const inputRef = useRef(null);

    const src = !avatar ? "/profilepic.jpeg" : avatar;

    // Scroll to input when addReply is true
    useEffect(() => {
        if (showReplies && inputRef.current) {
            inputRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
    }, [showReplies]);

    // Toggle replies visibility
    const toggleReplies = () => setShowReplies(!showReplies);

    return (
        <div className=" pb-3">
            {/* Comment Section */}
            <div className="flex gap-x-2">
                <div className="w-8 h-8 rounded-full bg-red-300 relative">
                    <Image
                        src={src}
                        alt="user"
                        fill
                        style={{ borderRadius: "100%", objectFit: "cover" }}
                    />
                </div>

                <div>
                    <p className="text-[10px] text-gray-300">{userName}</p>
                    <p className="text-xs mb-2 font-semibold">{comment}</p>

                    <div className='flex gap-x-3'>

                        {
                            reply &&
                            (
                                <div className="flex items-center gap-x-4 ">
                                    <p
                                        className="text-[var(--neon-purple)] text-[10px] font-semibold cursor-pointer"
                                        onClick={toggleReplies}
                                    >
                                        {showReplies ? <span className='flex items-center gap-x-1'> Hide Replies <ChevronUp className='w-4 h-4' /></span> : <span className='flex items-center gap-x-1'> Show Replies <ChevronDown className='w-4 h-4' /></span>}
                                    </p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

            {/* show Replies Section (Animated) */}
            <AnimatePresence>
                {showReplies && (
                    <motion.div
                        ref={inputRef}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.4 }}
                        className="ml-8 mt-2 overflow-hidden"
                    >
                        <div className="flex gap-x-2 mb-2">
                            <div className="w-8 h-8 rounded-full bg-red-300 relative">
                                <Image
                                    src="/thumbnail3.png"
                                    alt="user"
                                    fill
                                    style={{ borderRadius: "100%", objectFit: "cover" }}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <p className="text-[10px] text-gray-300">Ravallusion</p>
                                <p className="text-xs text-gray-100 ">
                                    {reply}
                                </p>
                            </div>

                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    );
};

export default Comments;

