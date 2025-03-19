import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => (
  <div className="p-6 text-center">
    <h1 className="text-3xl font-bold">Welcome to My Blog</h1>
    <p className="mt-2">Explore my latest posts!</p>
  </div>
);

const Blog = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold">Blog Posts</h1>
    <ul className="mt-4">
      <li><a href="#" className="text-blue-500">Post 1: React Basics</a></li>
      <li><a href="#" className="text-blue-500">Post 2: Understanding JSX</a></li>
    </ul>
  </div>
);

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
