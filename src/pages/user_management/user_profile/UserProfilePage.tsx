import {useState} from "react";
import {PostProfileView} from "./PostProfileView.tsx";
import {fakePostData} from "./FakePostData.ts";
import {IPost} from "../../../shared_components/posts/IPost.tsx";


export const UserProfilePage: React.FC = () => {

        const [username, setUsername] = useState('Username'); // State to hold the user's name



        const [posts, setPosts] = useState<IPost[]>(fakePostData);

        return (
            <div className="min-h-screen flex items-start justify-center bg-gray-100 p-6">
                {/* Container for the profile card */}
                <div className="bg-white p-8 rounded shadow-lg w-full max-w-3xl">

                    {/* Header: avatar, username, and action buttons */}
                    <div className="flex items-center justify-between mb-8">

                        {/* Avatar and username */}
                        <div className="flex items-center">
                            <div className="w-16 h-16 bg-gray-300 rounded-full mr-4 flex items-center justify-center">
                                {/* Placeholder initial in avatar */}
                                <span className="text-2xl text-white">{username.charAt(0)}</span>
                            </div>
                            <h1 className="text-2xl font-bold text-gray-800">{username}</h1>
                        </div>

                        {/* Add and Edit buttons */}
                        <div className="flex space-x-4">
                            <button
                                className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded transition duration-150 ease-in-out"
                                onClick={() => {/* handle add action */}}
                            >
                                +
                            </button>
                            <button
                                className="px-3 py-1 border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium rounded transition duration-150 ease-in-out"
                                onClick={() => {/* handle edit action */}}
                            >
                                Edit
                            </button>
                        </div>
                    </div>

                    {/* Grid of user items/posts */}
                    <div className="grid grid-cols-3 gap-4">
                        {posts.map((post: IPost, idx) => (
                            <PostProfileView
                                key={idx}
                                title={post.title}
                                description={post.description}
                                question={post.question}
                                votesFor={post.votesFor}
                                votesAgainst={post.votesAgainst} />
                        ))}
                    </div>
                </div>
            </div>
        );
    };

