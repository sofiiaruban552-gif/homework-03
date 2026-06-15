import { TASK_HEADINGS } from "../../constants/text";
import SectionCard from "../shared/SectionCard";
import UsersList from "./UsersList";

const FetchUsers = ({ users }) => {
  const usersd = [
    {
      name: "John",
      email: "some",
      address: {
        city: "Howlings",
      },
    },
    {
      name: "John",
      email: "some",
      address: {
        city: "Howlings",
      },
    },
    {
      name: "John",
      email: "some",
      address: {
        city: "Howlings",
      },
    },
    {
      name: "John",
      email: "some",
      address: {
        city: "Howlings",
      },
    },
  ];
  return (
    <SectionCard>
      <h2 className="section-title">{TASK_HEADINGS.FETCH_USERS.title}</h2>
      <h3 className="section-subtitle">{TASK_HEADINGS.FETCH_USERS.subtitle}</h3>
      <UsersList users={usersd}/>
      
    </SectionCard>
  );
};

export default FetchUsers;
