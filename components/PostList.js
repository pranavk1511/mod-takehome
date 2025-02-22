import PostItem from "./PostItem";

export default function PostList({ posts }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}
