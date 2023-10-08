import Link from "next/link";

async function getPostData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
}

async function getUserData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();
}

const page = async () => {
    // const posts = await getPostData();
    const [posts, users] = await Promise.all([getPostData(), getUserData()]);
    return (
        <div>
            <h1 className="text-4xl">Post Page</h1>
            <h2 className="text-2xl">Users</h2>
            <ul className="flex flex-col gap-5">
                {
                    posts.map(post => (
                        <Link key={post.id} href={`/posts/${post.id}`}>
                            <li className="bg-gray-100 p-5 cursor-pointer">
                                <h4 className="text-xl font-bold">{post.title}</h4>
                                <p>{post.body}</p>
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    );
};

export default page;