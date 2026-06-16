const UserItem = ({ user }) => {
  return (
    <article className="user-item">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="user-item__avatar"
      />

      <div className="user-item__content">
        <h3 className="user-item__name">{user.login}</h3>

        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          className="user-item__link"
        >
          {user.html_url}
        </a>
      </div>
    </article>
  );
};

export default UserItem;
