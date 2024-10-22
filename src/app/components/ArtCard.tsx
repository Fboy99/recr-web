import Link from 'next/link';

interface Article {
  id: number;
  title: string;
  description: string;
}

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="article-card">
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <Link href={`/news/${article.id}`}>
          <button>Read More</button>
      </Link>
    </div>
  );
};

export default ArticleCard;
