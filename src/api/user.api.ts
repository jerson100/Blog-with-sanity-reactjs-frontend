import sanityclient from "../config/sanity";
import { User } from "../models/User";

export abstract class UserApi {
  static async getPostById(): Promise<User | null> {
    const response = await sanityclient.fetch('*[_type == "user"]');
    return response;
  }
}
