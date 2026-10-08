import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";

function Books() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    const { data, error } = await supabase
      .from("books")
      .select("*");

    if (error) {
      console.log(error);
    } else {
      setBooks(data);
    }
  }

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="books-page">
      <h1>Books</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="book-grid">
        {filteredBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
          />
        ))}
      </div>
    </div>
  );
}

export default Books;
