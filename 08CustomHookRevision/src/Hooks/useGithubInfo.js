import { useState, useEffect } from "react";

const useGithubInfo = (user) => {
  const [data, setData] = useState({});
  console.log(user);
  useEffect(() => {
    if (user) {
      fetch(`https://api.github.com/users/${user.toLowerCase()}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("GitHub user not found");
          }

          return response.json();
        })
        .then((githubData) => {
            console.log(githubData);
            
          setData(githubData);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [user]);
  console.log(data);
  return data;
};

export default useGithubInfo;
