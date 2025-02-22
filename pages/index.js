import PostList from "../components/PostList";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const posts = await res.json();
  return { props: { posts }, revalidate: 3600 }; // Cache updates every 1 hour
}


export default function Home({ posts }) {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-black-600">📜 Blog Posts</h1>
      <PostList posts={posts} />
    </div>
  );
}
