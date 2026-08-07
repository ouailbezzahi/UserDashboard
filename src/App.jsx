import { useState, useEffect } from "react";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import SearchBar from "./components/SearchBar";
import AddUser from "./components/AddUser";

function App() {

  //states for data and status
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //state for search bar
  const [searchQuery, setSearchQuery] = useState("");

  //state for selected user
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    //fetching data from API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleAddUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  }

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>User Dashboard</h1>

      {/*Add user form*/}
      <AddUser onAddUser={handleAddUser} />

      {/*Selected user details*/}
      <UserDetails 
      user={selectedUser} 
      onClose={() => setSelectedUser(null)}
      />
      
      {/*Search bar*/}
      <SearchBar 
      searchQuery={searchQuery} 
      setSearchQuery={setSearchQuery}
      />

      {/*Users list*/}
      <UserList
      users={filteredUsers} 
      onSelectUser={setSelectedUser}
      />
    </div>
  );
}

export default App;