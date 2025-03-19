import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => (
  <div className="p-6 text-center">
    <h1 className="text-3xl font-bold">Welcome to My Blog</h1>
    <p className="mt-2">Explore my latest posts!</p>
  </div>
);

const Blog = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "React Basics", content: "This post covers the basics of React." },
    { id: 2, title: "Understanding JSX", content: "JSX allows us to write HTML inside JavaScript." }
  ]);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const addPost = () => {
    if (newTitle && newContent) {
      const newPost = { id: posts.length + 1, title: newTitle, content: newContent };
      setPosts([...posts, newPost]);
      setNewTitle("");
      setNewContent("");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Blog Posts</h1>
      <ul className="mt-4">
        {posts.map(post => (
          <li key={post.id} className="mb-2 p-2 border rounded-md bg-gray-100 hover:bg-gray-200 transition">
            <button onClick={() => alert(post.content)} className="text-blue-500">{post.title}</button>
          </li>
        ))}
      </ul>
      <div className="mt-6 p-4 border rounded-md bg-gray-50">
        <h2 className="text-xl font-semibold">Add a New Post</h2>
        <input 
          type="text" 
          placeholder="Title" 
          value={newTitle} 
          onChange={(e) => setNewTitle(e.target.value)} 
          className="mt-2 p-2 w-full border rounded-md" 
        />
        <textarea 
          placeholder="Content" 
          value={newContent} 
          onChange={(e) => setNewContent(e.target.value)} 
          className="mt-2 p-2 w-full border rounded-md"
        />
        <button 
          onClick={addPost} 
          className="mt-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Add Post
        </button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <nav className="p-4 bg-gray-800 text-white flex justify-around">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/blog" className="hover:underline">Blog</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default App;
