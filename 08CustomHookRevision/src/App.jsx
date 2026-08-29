import { useState } from "react";
import useGithubInfo from "./Hooks/useGithubInfo";

function App() {
  const [user, setUser] = useState("");
  const [searchedUser, setSearchedUser] = useState("");

  const data = useGithubInfo(searchedUser);

  const getData = (e) => {
    e.preventDefault();

    if (!user.trim()) return;

    setSearchedUser(user.trim());
    setUser("");
  };

  return (
    <div className="flex justify-center w-full">
      <div>
        <form className="max-w-lg mx-auto" onSubmit={getData}>
          <label
            for="search"
            className="block mb-2.5 text-sm font-medium text-heading sr-only "
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 inset-s-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-body"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
              placeholder="Search"
              value={user}
              onChange={(e)=>setUser(e.target.value)}
            />
            <button
              type="submit"
              className="absolute inset-e-1.5 bottom-1.5 text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none"
            >
              Search
            </button>
          </div>
        </form>

        <pre>{JSON.stringify(data)}</pre>
      </div>
    </div>
  );
}

export default App;
