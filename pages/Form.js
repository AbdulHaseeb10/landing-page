import React from "react";
import styles from "../styles/Home.module.css";

const Form = () => {
  return (
    <div className={styles.signupForm}>
      <h3>Sign Up</h3>
      <hr />
      <form>
        <label htmlFor="fName">First Name</label>
        <input
          type="text"
          className="form-control"
          name="first-name"
          id=""
          aria-describedby="inputGroupPrepend"
          placeholder="Enter First Name"
          required
        />
        <p></p>
        <label htmlFor="lName">Last Name</label>
        <input
          type="text"
          className="form-control"
          name="last-name"
          id=""
          aria-describedby="inputGroupPrepend"
          placeholder="Enter Last Name"
          required
        />
        <p></p>
        <label htmlFor="username">Email</label>
        <input
          type="email"
          className="form-control"
          name="username"
          id=""
          aria-describedby="inputGroupPrepend"
          placeholder="Enter e-mail"
          required
        />
        <p></p>
        <label htmlFor="phno">Phone Number</label>
        <input
          type="tel"
          className="form-control"
          name="phno"
          id=""
          aria-describedby="inputGroupPrepend"
          placeholder="+91"
        />
        <p></p>
        <button className="btn btn-dark">Sign Up</button>
      </form>
    </div>
  );
};

export default Form;
