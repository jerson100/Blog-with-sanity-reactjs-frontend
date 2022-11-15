import { useParams } from "react-router-dom";
import Actions from "../../../components/commons/Actions";
import PostBody from "./components/PostBody";

const PostView = () => {
  const { category, post } = useParams();
  console.log(category, post);
  return (
    <div className="max-w-7xl mx-auto px-4 py-4 md:py-8">
      <div className="grid grid-cols-[auto_1fr] lg:grid-cols-[min-content_800px] gap-4">
        <aside className="sticky top-[5rem] left-0 self-start">
          <Actions />
        </aside>
        <PostBody />
      </div>
    </div>
  );
};

export default PostView;
