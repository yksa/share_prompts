// http://localhost:3000/posts/postId

export default function Page({ params }) {
  return <div>My Post: {params.postId}</div>;
}
