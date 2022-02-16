import { Link } from "remix";

export default function Index() {
  return (
    <div>
      <div className="bg-blue-900 text-white font-bold p-12 flex flex-col items-center">
        <h1>Welcome to Blog Remix 2022!</h1>

        <div className="flex flex-col items-center">
          <Link to="/about">About Section</Link>

          <Link to="/posts">Posts Section</Link>
        </div>
      </div>
    </div>
  );
}
