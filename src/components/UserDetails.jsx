import { useMemo } from "react";
import { useParams } from "react-router-dom";

function UserDetails({ users }) {
  const { id } = useParams();
  const user = useMemo(
    () => users.find((currentUser) => String(currentUser.id) === id),
    [users, id]
  );

  if (!user) {
    return <p>User not found.</p>;
  }

  return (
    <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
        <h2>Details of {user.name}</h2>
        <ul>
            <li><strong>Phone:</strong> {user.phone}</li>
            <li><strong>Website:</strong> {user.website}</li>
            <li><strong>Address:</strong> {user.address.street}, {user.address.city}</li>
        </ul>
    </div>
  );
}

export default UserDetails;