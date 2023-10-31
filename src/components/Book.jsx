function Book({ number, id, title, author, image, getBook, removeItems }) {
	return (
		<article className="card">
			<div className="badge">
				<span>#{number + 1}</span>
			</div>
			<div className="image">
				<img src={image} alt={title} />
			</div>
			<h3>{title}</h3>
			<p>{author}</p>
			<button onClick={() => getBook(id)}>Display</button>
			<button onClick={() => removeItems(id)}>Delete</button>
		</article>
	);
}
export default Book;
