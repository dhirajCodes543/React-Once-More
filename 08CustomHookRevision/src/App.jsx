import { useState } from "react";
import usePokemoneInfo from "./Hooks/usePokemoneInfo";
import PokemonCard from "./components/Pokemone";

function App() {
  const [user, setUser] = useState("");
  const [searchedUser, setSearchedUser] = useState("");

  const data = usePokemoneInfo(searchedUser);

  const getData = (e) => {
    e.preventDefault();

    if (!user.trim()) return;

    setSearchedUser(user.trim());
    setUser("");
  };

  return (
   <>
      <div className="w-screen h-screen bg-black justify-center ">
        <div className="w-auto flex flex-col justify-center items-center">
          <form onSubmit={getData} className="flex space-x-3 mt-8">
            <input
              type="text"
              className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Enter a Pokemon Name..."
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Search
            </button>
          </form>
          <div>
            {data.abilities && <PokemonCard pokemon={data} />}
          </div>
        </div>
      </div>
   </>
  );
}

export default App;
