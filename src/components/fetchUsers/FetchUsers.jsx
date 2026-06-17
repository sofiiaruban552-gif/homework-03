import { TASK_HEADINGS, STATUS_TEXT } from "../../constants/text";
import SectionCard from "../shared/SectionCard";
import UsersList from "./UsersList";
import StatusMessage from "../shared/StatusMessage";
import LoadingSpinner from "../shared/LoadingSpinner";

const FetchUsers = ({ users, loading, error }) => {
  const renderContent = () => {
    if (loading) {
      return (
        <StatusMessage>
          <LoadingSpinner />
          {STATUS_TEXT.users.loading}
        </StatusMessage>
      );
    }

    if (error) {
      return <StatusMessage>{STATUS_TEXT.users.error}</StatusMessage>;
    }

    return <UsersList users={users} />;
  };

  return (
    <SectionCard>
      <h2 className="section-title">{TASK_HEADINGS.FETCH_USERS.title}</h2>
      <h3 className="section-subtitle">{TASK_HEADINGS.FETCH_USERS.subtitle}</h3>
      {renderContent()}
    </SectionCard>
  );
};

export default FetchUsers;
