import { fetcher } from "../utils/fetcher";

export async function getStaticProps() {
  // Use `fetcher` instead of direct `fetch`
  const posts = await fetcher("https://jsonplaceholder.typicode.com/posts?_limit=10");

  return {
    props: { posts },
    revalidate: 3600, // Cache updates every 1 hour
  };
}

export default function Home({ posts }) {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">📜 Blog Posts</h1>
    </div>
  );
}
