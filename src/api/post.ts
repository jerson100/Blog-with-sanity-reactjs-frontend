import sanityclient from "../config/sanity";
import { Post } from "../models/Post";

export abstract class PostApi {
  static async getPostBySlug(slug: string): Promise<[Post] | []> {
    const response = await sanityclient.fetch(
      `*[_type == "post" && slug.current == '${slug}']{
        _id, 
        title, 
        slug,
        mainImage,
        categories[]->,
        publishedAt,
        body,
        author-> {name,  image, _id},
      }`
    );
    return response;
  }
}
