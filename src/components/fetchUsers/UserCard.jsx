const UserCard = ({ name, email, city }) => {
  return (
    <article className="user-card">
      <h3 className="user-card__name">{name}</h3>

      <p className="user-card__email">{email}</p>

      <p className="user-card__city">{city}</p>
    </article>
  );
};

export default UserCard;
