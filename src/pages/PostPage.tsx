import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import ShareButtons from '../components/ShareButtons';
import AdBanner from '../components/AdBanner';
import { posts } from '../data/posts';

const PostPage = () => {
  const { id } = useParams();
  const post = posts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Post não encontrado</h1>
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          Voltar para início
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <SEO 
        title={post.title}
        description={post.excerpt}
        keywords={`${post.category}, tecnologia, programação`}
      />
      
      <Link
        to="/"
        className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Voltar para início
      </Link>

      <AdBanner position="top" />
      
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />
      
      <div className="mb-8">
        <span className="text-blue-600 font-medium">{post.category}</span>
        <h1 className="text-4xl font-bold mt-2 mb-4">{post.title}</h1>
        <div className="flex items-center text-gray-600">
          <span>{post.author}</span>
          <span className="mx-2">•</span>
          <time>{new Date(post.date).toLocaleDateString('pt-BR')}</time>
        </div>
      </div>
      
      <div className="prose max-w-none mb-8">
        {post.content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph.trim()}
          </p>
        ))}
      </div>
      
      <ShareButtons
        url={window.location.href}
        title={post.title}
      />
      
      <AdBanner position="bottom" />
    </div>
  );
};

export default PostPage;