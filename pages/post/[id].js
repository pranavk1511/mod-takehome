import Link from "next/link";
import Head from "next/head";

export async function getStaticPaths() {
  
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const posts = await res.json();
  const paths = posts.map((post) => ({ params: { id: post.id.toString() } }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await res.json();

  return { props: { post }, revalidate: 86400 }; 
}

export default function PostDetail({ post }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <Head>
        <title>{post.title} | Blog</title>
        <meta name="description" content={post.body} />
      </Head>
      <div className="max-w-2xl bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4 text-black-700">{post.title}</h1>
        <p className="text-gray-700 text-lg leading-relaxed">{post.body}</p>
        <Link
          href="/"
          className="mt-6 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
