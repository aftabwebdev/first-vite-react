import { useState } from "react";
import { books as data } from "../data/books";
import Book from "../components/Book";

function BookList() {
	const [books, setBooks] = useState(data);

	function getBook(id) {
		const book = books.find((book) => book.id === id);
		setBooks(book);
	}

	const removeItems = (id) => {
		const newBooks = books.filter((book) => book.id !== id);
		setBooks(newBooks);
	};
	const clearAllItems = (first) => {
		second;
	};

	return (
		<>
			<h1>E-books</h1>
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
