import { Link } from "remix";
import { useLoaderData } from "remix";

export const loader = () => {
  const data = {
    posts: [
      {
        id: "1",
        title: "Post One",
        body: "This is the body of post one",
      },
      {
        id: "2",
        title: "Post Two",
        body: "This is the body of post two",
      },
      {
        id: "3",
        title: "Post Three",
        body: "This is the body of post three",
      },
    ],
  };
  return data;
};

const Index = () => {
  const { posts } = useLoaderData();
  return (
    <div>
      <div className="bg-blue-900 text-white font-bold p-12 flex flex-col items-center">
        <h1>This is the Posts Section!!</h1>

        <div className="w-1/3 bg-white text-black p-12 m-8">
          {posts.map((post) => (
            <div className="flex flex-col items-left">
              <h1>{post.title}</h1>
              <h1>{post.body}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
