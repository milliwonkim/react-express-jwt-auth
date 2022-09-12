import React, { useState, useEffect } from "react";
import PostService from "../services/post.service";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    PostService.getAllPublicPosts().then(
      (res) => {
        setPosts(res.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <div>
      <h3>
        {posts.map((post, index) => {
          return <div key={index}>{post.content}</div>;
        })}
      </h3>
    </div>
  );
}

export default Home;
