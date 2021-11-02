import React from 'react'
import { useQuery, gql } from '@apollo/client'


const USERS = gql`
  query{
    users{
      id
      name
      schools
    }
    },
  
`;

function Users({newUser}) {

    const { loading, error, data } = useQuery(USERS)

    const renderUsers = (users) => {
        return users.map(user => (
            <p>{user.name}</p>
        ))

    }; 
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>


    return (
        <div>
          {renderUsers(newUser || data.users)}
        </div>
    )
}

export default Users
