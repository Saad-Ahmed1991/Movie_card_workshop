import { useState } from "react";
import "./App.css";
import Add from "./components/Add/Add";
import Filter from "./components/Filter/Filter";
import Movielist from "./components/Movielist/Movielist";
import { dataMovies } from "./data";

function App() {
  const [input, setInput] = useState("");
  const [newList, setnewList] = useState(dataMovies);
  const [rate, setRate] = useState(0);

  const addNewMovie = (newMovie) => {
    setnewList([...newList, { ...newMovie, id: newList.length + 1 }]);
  };
  const deleteMovie = (iddelete) => {
    setnewList(newList.filter((el) => el.id !== iddelete));
  };
  return (
    <div className="App">
      <Filter setInput={setInput} setRate={setRate} />
      <Movielist
        data={newList.filter(
          (el) =>
            el.title.toLowerCase().includes(input.toLocaleLowerCase().trim()) &&
            el.rating >= rate
        )}
        deleteMovie={deleteMovie}
      />
      <Add addNewMovie={addNewMovie} />
    </div>
  );
}

export default App;
