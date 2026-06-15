import { TASK_HEADINGS, STATUS_TEXT } from "../../constants/text";
import SectionCard from "../shared/SectionCard";
import UsersList from "./UsersList";
import StatusMessage from "../shared/StatusMessage";
import LoadingSpinner from "../shared/LoadingSpinner";

const FetchUsers = ({ users, loading, error }) => {
  return (
    <SectionCard>
      <h2 className="section-title">{TASK_HEADINGS.FETCH_USERS.title}</h2>
      <h3 className="section-subtitle">{TASK_HEADINGS.FETCH_USERS.subtitle}</h3>
      {loading ? (
        <StatusMessage>
          <LoadingSpinner />
          {STATUS_TEXT.users.loading}
        </StatusMessage>
      ) : error ? (
        <StatusMessage>{STATUS_TEXT.users.error}</StatusMessage>
      ) : (
        <UsersList users={users} />
      )}
    </SectionCard>
  );
};

export default FetchUsers;
