import { thread } from "../data/texts";

export interface ArticleProps {
  article: thread;
  headerImgSrc?: string;
  headerImgAlt?: string;
}

export function Article({ article, headerImgSrc, headerImgAlt }: ArticleProps) {
  return (
    <div className="thread flex-column width-fit-content">
      <div className="thread-header flex width-90 align-self-center align-items-center g-10">
        {headerImgSrc && headerImgAlt && (
          <img
          className="question-img"
          src={headerImgSrc}
          alt={headerImgAlt}
        ></img>
        )}
        
        <h2 className="header-article flex m-0">{article.header}</h2>
      </div>
      <p className="article-text flex width-90 align-self-center text-align-justify">
        {article.text}
      </p>
    </div>
  );
}

export default Article;
