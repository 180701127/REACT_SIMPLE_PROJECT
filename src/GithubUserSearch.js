import React, { useState, useEffect } from 'react';

const GitHubUserSearch = () => {
  const [searchInput, setSearchInput] = useState('');
  const [users, setUsers] = useState([]);
  const [searchedUser, setSearchedUser] = useState('');

  // Function to fetch GitHub users
  const fetchGitHubUsers = async () => {
    // You can use the GitHub API to fetch users here
    // Replace 'YOUR_API_ENDPOINT' with the actual GitHub API URL
    const response = await fetch('https://api.github.com/users');
    const data = await response.json();
    setUsers(data); // Get the first 10 users
  };

  useEffect(() => {
    fetchGitHubUsers();
  }, []);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Find the user with the matching login
    const user = users.find((u) => u.login === searchInput);
    if (user) {
      setSearchedUser(user);
    } else if(user === undefined) {
        console.log(searchInput);

        if(searchInput===''){
            setSearchedUser('Empty');
        }else{
            setSearchedUser('NoUser');
        }
      
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a GitHub user"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <UserInfo searchedUser={searchedUser} />
      <AllUsers users={users} />

    </div>
  );
};
const AllUsers=(props)=>{
  return(<>
  <h2>Top 10 GitHub Users:</h2>
      <ul className='users'>
        {props.users.map((user) => (
          <li key={user.id}>{user.login}
          <img src={user.avatar_url} alt={user.login} />
          </li>
          
        ))}
      </ul>
      </>)
}
const UserInfo=(props)=>{
const {searchedUser} = props;
if(searchedUser==='Empty'){
    return(<>
    <h1> Enter a Github user name to search</h1>
    </>)
}else if(searchedUser === 'NoUser'){
    return(<>
    <h1> No user found in this name</h1>
    </>)
}else{
  return(<>
   {searchedUser && (
        <div>
          <h2>Searched User:</h2>
          <img src={searchedUser.avatar_url} alt={searchedUser.login} />
          <p>{searchedUser.login}</p>
        </div>
      )}
      </>)
}
}
export default GitHubUserSearch;
