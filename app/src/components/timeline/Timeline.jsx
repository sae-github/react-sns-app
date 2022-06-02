import { Post } from "../post/Post";
import { useEffect, useState } from "react";
import "./Timeline.css";
import { Data } from "../../data";

export const Timeline = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPostsData = async () => {
      try {
        // const res = await fetch(Data);
        setPosts(Data);
      } catch (err) {
        console.error(err);
      }
    };
    getPostsData();
  }, []);

  return (
    <div className="timeline">
      <div className="timeline__inner">
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
};
