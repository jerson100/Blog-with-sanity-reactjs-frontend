import sanityclient from "../config/sanity";
import ICategory from "../models/Category";

export abstract class CategoryApi {
  static async getCategory(category: string): Promise<ICategory | undefined> {
    const response = await sanityclient.fetch(
      `*[_type == "category" && title == '${category}']{
        _id, 
        title, 
        description
      }`
    );
    return response?.length && response[0];
  }
}
