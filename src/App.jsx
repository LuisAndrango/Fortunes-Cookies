import { useState } from "react";
import "./App.css";
import dbQuotes from "./db/quote.json";
import { getRamdom } from "./utils/random";
import QuoteBox from "./components/QuoteBox";

const bgImages = ["bg1", "bg2", "bg3", "bg4"];

function App() {
  const [quote, setQuote] = useState(getRamdom(dbQuotes));
  const [bgImage, setBgImage] = useState(getRamdom(bgImages));

  const handleChangeQuote = () => {
    setQuote(getRamdom(dbQuotes));
    setBgImage(getRamdom(bgImages));
  };

  return (
    <main className={`app ${bgImage}`}>
      <section className="app__container">
        <h1 className="title">Fortune Cookies</h1>
        <QuoteBox handleChangeQuote={handleChangeQuote} phrase={quote.phrase} />

        <footer className="author">
          <h3>Author: {quote.author}</h3>
        </footer>
      </section>
    </main>
  );
}

export default App;
