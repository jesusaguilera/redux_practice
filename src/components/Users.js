import React from "react";

const Users = (props) => {

  return (
    <React.Fragment>
    {
      props.users && props.users.map(user => {
        return(
          <h2>{user.name}</h2>
        )
      })
    }
    </React.Fragment>
  )
}

export default Users;

