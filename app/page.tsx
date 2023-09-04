import { Article } from "../types/article";
import  Link  from 'next/link';
import { format } from 'date-fns';

async function getData(): Promise<Article[]> {
  const response = await fetch('https://news-api.lublot.dev/api/posts', {
    next: {
      revalidate: 10,
    }
  });
  if(!response.ok){
    throw new Error("Erro ao carregar os artigos");
  }
  const data = await response.json();
  return data;
}

export default async function Home(){
  const articles = await getData();
  return (
    <>
    <header className="flex justify-between items-center h-20 mb-4">
      <h1 className="text-3xl font-bold">Artigos</h1>
    </header>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {articles.map((article) => (
        <div key={article.id} className="bg-white rounded shadow p-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">{article.title}</h2>
          <p className="text-gray-600">{article.author}</p>
          <p className="text-gray-600">Publicado em: {format(new Date(article.published), "dd/MM/yyyy HH:mm:ss")}</p>
          <Link href={`/article/${article.id}`} className="text-blue-500 hover:underline">
            Saiba Mais
          </Link>
        </div>
      ))}
    </div>
  </>
  );

}