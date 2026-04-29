import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  console.log(suggestions);

  useEffect(() => {
    if (query.trim() === "") {
      setSuggestions([]);
      return;
    }
    fetch(`http://localhost:3333/products?search=${query}`)
      .then((res) => res.json())
      .then((data) => setSuggestions(data));
  }, [query]);

  return (
    <div>
      <h1>Autocomplete</h1>
      <input
        type="text"
        placeholder="cerca i prodotti"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {suggestions.length > 0 && (
        <div className="dropdown">
          {suggestions.map((product) => (
            <p key={product.id}>{product.name}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
