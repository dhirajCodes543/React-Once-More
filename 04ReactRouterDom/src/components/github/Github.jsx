import { useLoaderData } from "react-router-dom";


export async function GithubLoader() {
  const response = await fetch(
    "https://api.github.com/users/octocat"
  );

  if (!response.ok) {
    throw new Error("User not found");
  }

  return response.json();
}

export function Github(){
    const githubData = useLoaderData()

    return (
        <>
            <h1 className="bg-amber-700 text-white text-center  text-3xl">Github Count :{githubData.followers}</h1>
            <img src={githubData.avatar_url} alt="nacho bencho" />
        </>
    )
}
