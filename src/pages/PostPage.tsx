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
      <div className="max-w-4xl mx-auto px-4 py-12 text-center text-foreground">
        <h1 className="text-2xl font-bold mb-4">Post não encontrado</h1>
        <Link to="/" className="text-primary hover:text-primary-light transition">
          Voltar para início
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 bg-background text-foreground">
      <SEO 
        title={post.title}
        description={post.excerpt}
        keywords={`${post.category}, tecnologia, programação`}
      />

      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center text-muted hover:text-primary transition mb-8"
      >
        <ArrowLeft className="mr-2 h-5 w-5" />
        Voltar para início
      </Link>

      <AdBanner position="top" />

      {/* Post Image */}
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-64 object-cover rounded-lg shadow-glow mb-8"
      />

      {/* Post Info */}
      <div className="mb-8">
        <span className="inline-block px-3 py-1 bg-primary-light/20 text-primary font-medium rounded-full text-sm">
          {post.category}
        </span>
        <h1 className="text-4xl font-bold mt-4 mb-4 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center text-muted text-sm">
          <span>{post.author}</span>
          <span className="mx-2">•</span>
          <time>{new Date(post.date).toLocaleDateString('pt-BR')}</time>
        </div>
      </div>

      {/* Post Content */}
      <div className="prose prose-invert max-w-none mb-8">
        {post.content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph.trim()}
          </p>
        ))}
      </div>

      {/* Share Buttons */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Compartilhe este post</h2>
        <ShareButtons
          url={window.location.href}
          title={post.title}
        />
      </div>

      <AdBanner position="bottom" />
    </div>
  );
};

export default PostPage;
