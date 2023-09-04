import { Article } from "../../../types/article"; 
import styles from "../../../styles/article.module.css"

async function getArticleById(articleId:string) {
  const response = await fetch(`https://news-api.lublot.dev/api/posts/${articleId}`);
  if(!response.ok){
    throw new Error("Falha ao carregar o artigo");
  }
  const data = await response.json();
  return data; 
}  

  export default async function Article({ 
  params: {articleId},
}:{
  params:{articleId: string};
}
){
  const article = await getArticleById(articleId);
  return(
    <div className={styles.articleContainer}>
      {article ?(
        <div>
          <h1 className={styles.articleTitle}>{article.title}</h1>
          <p className={styles.articleAuthor}>Author: {article.author}</p>
          <img src={article.coverImage} alt="Cover" className={styles.articleImage} />
          <p className={styles.articleContent}>{article.content}</p>
        </div>
      ):(
        <p>carregando...</p>
      )}
    </div>
    );
  }

