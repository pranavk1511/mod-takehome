import Link from "next/link";

export default function PostItem({ post }) {
  return (
    <Link href={`/post/${post.id}`} passHref>
      <div className="cursor-pointer bg-white border border-gray-300 shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg">
        <h2 className="text-lg font-semibold text-black-700">{post.title}</h2>
        <p className="text-gray-600 mt-2 text-sm">Click to read more →</p>
      </div>
    </Link>
  );
}
