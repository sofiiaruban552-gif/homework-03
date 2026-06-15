import UserCard from "../fetchUsers/UserCard";

const UsersList = ({ users }) => {
  return (
    <div className="users-list">
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
          city={user.address.city}
        />
      ))}
    </div>
  );
};

export default UsersList;
