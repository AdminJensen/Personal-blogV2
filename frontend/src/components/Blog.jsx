import React from 'react';
    import blogPostsData from '../data/blogPostsData';

    const Blog = () => {
      return (
        <div className="container mx-auto p-6">
          <h2 className="text-3xl font-bold mb-6">Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPostsData.map(post => (
              <div key={post.id} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-700 mb-2">{post.summary}</p>
                <p className="text-gray-600">Date: {post.date}</p>
              </div>
            ))}
          </div>
        </div>
      );
    };

    export default Blog;
