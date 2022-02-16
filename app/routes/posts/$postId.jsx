import { useParams } from "remix";

function PostId() {
  const params = useParams();
  return (
    <div>
      <h1>Post {params.postId}</h1>
    </div>
  );
}

export default PostId;

// this is a dynamic route, so it will be rendered when the user navigates to /posts/:postId
// the :postId will be passed as a prop to the PostId component
// the PostId component will render the postId
