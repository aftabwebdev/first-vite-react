import bookNotAvailableImage from "../assets/books/book-not-available.jpg";

function Book({ number, id, title, author, image, getBook, removeItems }) {
	const img = image || bookNotAvailableImage;

	return (
		<article className="card">
			<div className="badge">
				<span>{number + 1}</span>
			</div>
			<div className="image">
				<img src={img} alt={title} />
			</div>
			<h3>{title || "not available"}</h3>
			<p>Author: {author || "not available"}</p>
			<p>Id: {id}</p>
			<button onClick={() => getBook(id)}>Display</button>
			<button onClick={() => removeItems(id)}>Delete</button>
		</article>
	);
}
export default Book;
