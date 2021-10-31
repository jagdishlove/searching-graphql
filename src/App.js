import './App.css';
import { useQuery, gql } from '@apollo/client'

const USERS = gql`
  query{
    users{
      id
      name
      schools
    }
    }
  
`;

function App() {

  const { loading, error, data } = useQuery(USERS, { fetchPolicy: 'no-cache' })
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>


  return (
    <div className="App">
      <div className="App">
        <input type="text" placeholder="Search"/>
        <button>Search</button>
        {data.users.map(user => (
          <p>{user.name}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
