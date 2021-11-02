import './App.css';
import React, { useState } from 'react'
import { useLazyQuery, gql } from '@apollo/client'
import Search from './components/Search';
import Users from './components/Users'

const SEARCH = gql`
query Search($match: String!){
  users(order_by: {name: asc}, where: {name: {_ilike: $match}}){
    id
    name
}
  }
`;



function App() {

  const [state, setState] = useState("")
  const [search, { data, loading, error }] = useLazyQuery(SEARCH)




  return (
    <div className="App">
      <div className="App">
        <Search
          loading={loading}
          error={error}
          state={state}
          onChange={e => setState(e.target.value)}
          onSearch={() => { search({ variables: { match: `%${state}%` } }) }} />
        <Users newUser={data ? data.users : null} />


      </div>
    </div>
  );
}
export default App;
