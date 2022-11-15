import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostApi } from "../../../api/post";
import Actions from "../../../components/commons/Actions";
import { Post } from "../../../models/Post";
import PostBody from "./components/PostBody";
import { Helmet } from "react-helmet-async";

const PostView = () => {
  const { category, post } = useParams();
  const [data, setData] = useState<Post | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    PostApi.getPostBySlug(post || "")
      .then((r) => {
        console.log(r);
        setLoading(false);
        if (r?.length > 0) {
          setData(r[0]);
        } else {
          setData(undefined);
        }
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, []);

  //   if (loading) return <p>loading</p>;

  //   if (!data) return <p>No se encontró el post</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-4 md:py-8">
      {loading ? (
        <p>Cargando publicación...</p>
      ) : !data ? (
        <p>No se encontró el post</p>
      ) : (
        <>
          <Helmet>
            <meta name="author" content="s" />
            <meta name="description" content="s" />
            <title>{data.title} | Reuters</title>
          </Helmet>
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] lg:grid-cols-[min-content_800px] gap-4">
            <aside className="sticky top-[5rem] left-0 self-start row-start-2 row-end-3 md:row-start-1 md:row-end-2">
              <Actions />
            </aside>
            <PostBody post={data} />
          </div>
        </>
      )}
    </div>
  );
};

export default PostView;
