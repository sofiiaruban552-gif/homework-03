import UserItem from "./UserItem";

const GithubUserList = ({ users }) => {
  return (
    <div className="github-user-list">
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default GithubUserList;
