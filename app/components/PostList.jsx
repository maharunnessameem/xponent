import Post from "./Post";


const PostList = ({ posts }) => {
    return (
        <ul className="flex gap-4 rounded">
            {
                posts.map(post => (
                    <Post key={post.id} post={post}></Post>
                ))
            }
        </ul>
    );
};

export default PostList;