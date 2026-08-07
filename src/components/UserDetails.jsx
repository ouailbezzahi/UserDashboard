function UserDetails({ user, onClose }) {
    if (!user) {
        return null;
    }
  return (
    <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
        <h2>Details of {user.name}</h2>
        <ul>
            <li><strong>Phone:</strong> {user.phone}</li>
            <li><strong>Website:</strong> {user.website}</li>
            <li><strong>Address:</strong> {user.address.street}, {user.address.city}</li>
        </ul>
        <button onClick={onClose}>Close</button>
    </div>
  );
}

export default UserDetails;