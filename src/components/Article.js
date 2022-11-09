export default function Article({ article }) {
  return (
    <article>
      {!article ? (
        <p>No article selected</p>
      ) : (
        <section>
          <p className="date">{`Posted: ${article.date}`}</p>
          <h2 className = "title">{article.title}</h2>
          
          <p className="body">{article.body}</p>
        </section>
      )}
    </article>
  );
}
