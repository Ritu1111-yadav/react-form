import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
//import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from "react";

const initialState = {
  fname: "",
  lname: "",
  email: " ",
  password: "",
  emailIdError: "",
  passwordError: "",
  fnameError: "",
  lnameError: "",
  errorMsg: "",
};

const Forme = () => {
  const [inputarr, setInputarr] = useState([]);

  const [iState, updateState] = useState(initialState);
  let {
    fname,
    lname,
    email,
    password,
    emailIdError,
    passwordError,
    fnameError,
    lnameError,
    errorMsg,
  } = iState;
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateState({
      ...iState,
      [name]: value,
    });
  };

  let handleValidation = () => {
    let emailIdError = "";
    let passwordError = "";
    let fnameError="";
    let lnameError="";
    let formIsValid = true;

    if (!email.trim()) {
      emailIdError = "*Email id can't be empty";
      formIsValid = false;
    } else {
      if (!/^.+?@.+?\..+$/.test(email)) {
        emailIdError = "*Email format is not valid";
        formIsValid = false;
      }
    }
    if (!fname.trim()) {
      fnameError = "*First name can't be empty";
      formIsValid = false;
    }
    if (!lname.trim()) {
      lnameError = "*Last name can't be empty";
      formIsValid = false;
    }
    if (!password.trim()) {
      passwordError = "*Password can't be empty";
      formIsValid = false;
    }
    updateState({
      ...iState,
      emailIdError,
      passwordError,
    });
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('valid')
    let valid=handleValidation()
    if(valid)
{
  alert('valid')
  let data = { fname, lname, email, password };

    setInputarr([...inputarr, data]);
}
  
  };

  useEffect(() => {
    // console.log("heelo" , inputarr)

    console.log(inputarr);
  }, [inputarr]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First Name111</Form.Label>

          <Form.Control
            type="fname"
            placeholder="Enter firstName"
            name="fname"
            value={fname}
            onChange={handleChange}
          />
          {/* {error&&fname.length<=0?
         <label>first name can not be empty</label>:""} */}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="lname"
            placeholder="Enter LastName"
            name="lname"
            value={lname}
            onChange={handleChange}
          />
          {/* {error&&lname.length<=0?
         <label>last name can be empty</label>:""} */}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={handleChange}
          />
         
        </Form.Group>
        <span style={{ color: "red" }}>{emailIdError}</span>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          {/* <span style={{ color: "red" }}>{passwordError}</span> */}
        </Form.Group>

        <br></br>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>password</th>
          </tr>
        </thead>
        {inputarr.map((data, i) => (
          <tbody key={i}>
            {console.log(data)}
            <tr>
              <td>{data.fname}</td>
              <td>{data.lname}</td>
              <td>{data.email}</td>
              <td>{data.password}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </>
  );
};
export default Forme;
