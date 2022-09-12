import { api } from "./api";
import authHeader from "./auth-header";

const API_URL = "/posts";

const getAllPublicPosts = () => {
  return api.get(API_URL + "/public");
};

const getAllPrivatePosts = () => {
  return api.get(API_URL + "/private", { headers: authHeader() });
};

const postService = {
  getAllPublicPosts,
  getAllPrivatePosts,
};

export default postService;
