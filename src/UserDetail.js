
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserDetail({ user }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    if (user) {
      fetchPosts();
      // Mover la página para mostrar los resultados
      document.getElementById('user-detail').scrollIntoView({ behavior: 'smooth' });
    }
  }, [user]);

  return (
    <div id="user-detail">
      <h2>DETALLES POR USUARIO</h2>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <h3>Publicacion</h3>
          <ul>
            {posts.map(post => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserDetail;
