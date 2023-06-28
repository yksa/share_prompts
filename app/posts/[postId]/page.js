// http://localhost:3000/posts/postId

// dynamic metadata
export async function generateMetadata({ params, searchParams }) {
  const postId = params.postId;
  return { title: `Post ${postId}` };
}

export default function Page({ params }) {
  return <div>My Post: {params.postId}</div>;
}
