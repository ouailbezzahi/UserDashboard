import { Link } from "react-router-dom";

function UserList({ users }) {
    if (!users || users.length === 0) {
        return <div>No users found</div>;
    }

    return (
        <div style={{ display: 'grid', gap: '10px' }}>
            {users.map((user) => (
                <Link
                    key={user.id}
                    to={`/user-details/${user.id}`}
                    style={{ border: '1px solid #ccc', padding: '10px', cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
                >
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <p>{user.company.name}</p>
                </Link>
            ))}
        </div>
    );
}

export default UserList;