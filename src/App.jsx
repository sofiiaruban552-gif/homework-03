import './App.css'
import Wrapper from './components/shared/Wrapper'
import ToDoList from './components/toDoList/TaskList'
import FetchUsers from './components/fetchUsers/FetchUsers'
import GithubSearch from './components/githubSearch/GithubSearch'

const App = () => {

  return (
    <Wrapper>
      <ToDoList />
      <FetchUsers />
      <GithubSearch />
    </Wrapper>
  )
}

export default App
