import { useParams } from "react-router-dom";

const PostView = () => {
  const { category, post } = useParams();
  console.log(category, post);
  return <div>PostView</div>;
};

export default PostView;
