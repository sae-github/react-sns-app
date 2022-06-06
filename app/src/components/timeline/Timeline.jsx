import { Post } from '../post/Post';
import { useEffect, useState } from 'react';
import './Timeline.css';

export const Timeline = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPostsData = async () => {
      try {
        const res = await fetch('http://localhost:3001/api/posts/');
        const json = await res.json();
        setPosts(json);
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
