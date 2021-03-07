import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers, addUser } from "../store/actions/users";
import Users from "../components/Users";

const Home = (props) => {
  useEffect(() => {
    props.getUsers();
    props.addUser(
      {
        name: "Heinrich Schuzt",
        username: "Heinrich",
        email: "heinrich@yopmail.com",
      },
      () => addUserSuccessful()
    );
  }, []);

  useEffect(() => {
    console.log("users: ", props.users);
  }, [props.users]);

  useEffect(() => {
    console.log("user added: ", props.userAdded);
  }, [props.user]);

  const addUserSuccessful = () => {
    console.log("User added successfully!");
  };

  return (
    <React.Fragment>
      {props.userAdded && (
        <React.Fragment>
          <h2>Un nuevo usuario añadido</h2>
          <ul>
            <li><strong>nombre:</strong> {props.userAdded.name}</li>
            <li><strong>usuario:</strong> {props.userAdded.username}</li>
            <li><strong>email:</strong> {props.userAdded.email}</li>
          </ul>
        </React.Fragment>
      )}
      <Users users={props.users} />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  users: state.users.users,
  userAdded: state.users.user,
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(getUsers()),
  addUser: (data, success) => dispatch(addUser(data, success)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

