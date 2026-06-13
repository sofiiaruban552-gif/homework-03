import './App.css'
import Wrapper from './components/shared/Wrapper'
import ToDoList from './components/toDoList/ToDoList'
import Users from './components/users/Users'
import GithubSearch from './components/githubSearch/GithubSearch'

const App = () => {

  return (
    <Wrapper>
      <ToDoList />
      <Users />
      <GithubSearch />
    </Wrapper>
  )
}

export default App
