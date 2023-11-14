import { useState } from "react";
import { books as data } from "../data/books";
import Book from "../components/Book";
import image1 from "../assets/books/Judgment-Prey.jpg";

function BookList() {
	const [books, setBooks] = useState(data);

	function getBook(id) {
		const book = books.find((book) => book.id === id);
		setBooks(book);
	}

	function addBook() {
		setBooks([
			...books,
			{
				id: "book-" + (books.length + 1),
				title: "Unknown",
			},
		]);
	}

	const removeItems = (id) => {
		const newBooks = books.filter((book) => book.id !== id);
		setBooks(newBooks);
	};

	const updateItem = (id) => {
		const newBooks = books.filter((book) => book.id === id);
		setBooks([...books, { ...newBooks, author: "Aftab Ahmed" }]);
		console.log(newBooks);
	};

	return (
		<>
			<h1>E-books</h1>
			<div style={{ marginBottom: "1rem" }}>
				<button onClick={addBook}>Add</button>
				<button style={{ float: "right" }} onClick={updateItem}>
					Update
				</button>
			</div>
			<div className="cards">
				{books.map((book, index) => {
					return (
						<Book
							key={book.id}
							{...book}
							getBook={getBook}
							number={index}
							removeItems={removeItems}
						/>
					);
				})}
			</div>
		</>
	);
}
export default BookList;
