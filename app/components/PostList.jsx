import Post from "./Post";


const PostList = ({ posts }) => {
    return (
        <ul className="grid grid-cols-4 gap-4">
            {
                posts.map(post => (
                    <Post key={post.id} post={post}></Post>
                ))
            }
        </ul>
    );
};

export default PostList;