import "./App.css";

function App() {
  return (
    <div>
      <h1>Autocomplete</h1>
      <input
        type="text"
        placeholder="cerca i prodotti"
        value={(e) => e.target.value}
      />
    </div>
  );
}

export default App;
