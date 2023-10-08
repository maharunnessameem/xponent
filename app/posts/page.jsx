import Link from "next/link";

async function getPostData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
}

const page = async () => {
    const posts = await getPostData();
    return (
        <div>
            <h1 className="text-4xl">Post Page</h1>
            <ul className="flex flex-col gap-5">
                {
                    posts.map(post => (
                        <Link key={post.id} href={`/posts/${post.id}`}>
                        </Link>
                    ))
                }
            </ul>
        </div>
    );
};

export default page;