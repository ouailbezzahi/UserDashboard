function UserList({users, onSelectUser}) {
    if (!users || users.length === 0) {
        return <div>No users found</div>;
    }

    return (
        <div style={{ display: 'grid', gap: '10px' }}>
            {users.map((user) => (
                <div
                    key={user.id}
                    style={{ border: '1px solid #ccc', padding: '10px', cursor: 'pointer' }}
                    onClick={() => onSelectUser(user)}
                >
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <p>{user.company.name}</p>
                </div>
            ))}
        </div>
    );
}

export default UserList;