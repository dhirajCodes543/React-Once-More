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
   <>
      <div className="w-screen h-screen bg-black flex justify-center items-center">
        <div>
          <form onSubmit={getData} className="flex space-x-3">
            <input
              type="text"
              className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Enter a Github Username..."
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

          {data.avatar_url && (
            <div className="p-6 max-w-lg bg-white space-x-4 rounded-2xl flex items-center mt-12">
              <div className="rounded-xl overflow-clip">
                <img
                  className="h-20 w-20"
                  src={data.avatar_url}
                  alt="sample"
                />
              </div>
              <div>
                <div className="text-2xl font-bold">{data.name}</div>
                <p className="font-medium text-sm">{data.bio}</p>
                <p className="font-medium text-sm">Followers: {data.followers}</p>
                <p className="font-medium text-sm">Following: {data.following}</p>
                <p className="font-medium text-sm">Public Repos: {data.public_repos}</p>
                <p className="font-medium text-sm">Location: {data.location}</p>
                <p className="font-medium text-sm">Email: {data.email}</p>
              </div>
            </div>
          )}
        </div>
      </div>
   </>
  );
}

export default App;
