import Button from "../../../../../components/commons/Button";
import List from "../../../../../components/commons/List";
import ListItem from "../../../../../components/commons/ListItem";
import { Category, Post } from "../../../../../models/Post";
import BlockContent from "@sanity/block-content-to-react";
import Link from "../../../../../components/commons/Link";

const serializers = {
  marks: {
    link: (props: any) => {
      return (
        <Link href={props.mark.href} target="_blank" color="danger">
          {props.children}
        </Link>
      );
    },
  },
};

type PostBodyProps = {
  post: Post;
};

const PostBody = ({ post }: PostBodyProps) => {
  return (
    <>
      <article>
        <div className="mb-4">
          <List direction="horizontal">
            {post.categories.map((c: Category) => (
              <ListItem key={c._id}>
                <Button
                  variant="outlined"
                  color="neutral"
                  rounded
                  to={`/${c.title}`}
                >
                  {c.title}
                </Button>
              </ListItem>
            ))}
          </List>
        </div>
        <p className="mb-4">
          8 minutos de lectura . {new Date(post.publishedAt).toUTCString()}
        </p>
        <h1 className="mb-4 text-3xl md:text-4xl font-bold">{post.title}</h1>
        <div className="prose lg:prose-lg max-w-full">
          <BlockContent
            blocks={post.body}
            projectId="hxfaedms"
            dataset="production"
            serializers={serializers}
          />
        </div>
      </article>
    </>
  );
};

export default PostBody;
