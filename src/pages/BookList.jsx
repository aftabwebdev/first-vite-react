import { useState } from "react";
import { books } from "../data/books";
import Book from "../components/Book";

function BookList() {
	function getBook(id) {
		const book = books.find((book) => book.id === id);
		console.log(book);
	}

	return (
		<>
			<h1>E-books</h1>
			<div className="cards">
				{books.map((book, index) => {
					return (
						<Book key={book.id} {...book} getBook={getBook} number={index} />
					);
				})}
			</div>
		</>
	);
}
export default BookList;
