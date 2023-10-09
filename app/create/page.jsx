import AddPost from "../components/AddPost";
import PostList from "../components/PostList";


async function getData() {
    const res = await fetch("http://localhost:3000/api/posts", { cache: 'no-store' });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

const Create = async () => {
    const posts = await getData();
    console.log(posts);
    return (
        <div className=" mt-4 ">
            <div className="my-5 grid grid-4 gap-4">
                <h1>Posts</h1>
                <AddPost></AddPost>
            </div>
            <PostList posts={posts} className="mr-20"></PostList>

        </div>
    );
};

export default Create;