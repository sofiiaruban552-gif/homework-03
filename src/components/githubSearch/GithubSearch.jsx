import SectionCard from "../shared/SectionCard";
import {
  TASK_HEADINGS,
  INPUT_PLACEHOLDERS,
  STATUS_TEXT,
} from "../../constants/text";
import Input from "../shared/Input";
import GithubUserList from "./GithubUserList";
import StatusMessage from "../shared/StatusMessage";
import LoadingSpinner from "../shared/LoadingSpinner";

const GithubSearch = ({ query, setQuery, searchedData, loading, error }) => {
  let content;

  if (loading) {
    content = (
      <StatusMessage>
        <LoadingSpinner />
        {STATUS_TEXT.github.loading}
      </StatusMessage>
    );
  } else if (!query?.length) {
    content = <StatusMessage>{STATUS_TEXT.github.prompt}</StatusMessage>;
  } else if (error) {
    content = <StatusMessage>{STATUS_TEXT.github.error}</StatusMessage>;
  } else if (!searchedData?.length) {
    content = <StatusMessage>{STATUS_TEXT.github.empty}</StatusMessage>;
  } else {
    content = <GithubUserList users={searchedData} />;
  }

  return (
    <SectionCard>
      <h2 className="section-title">{TASK_HEADINGS.GITHUB_SEARCH.title}</h2>

      <h3 className="section-subtitle">
        {TASK_HEADINGS.GITHUB_SEARCH.subtitle}
      </h3>

      <Input
        value={query}
        placeholder={INPUT_PLACEHOLDERS.GITHUB_SEARCH}
        onChange={setQuery}
      />
      {content}
    </SectionCard>
  );
};

export default GithubSearch;
