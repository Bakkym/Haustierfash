import React from "react";
import '../features/styles/SignUp.css'

export function SignUp() {
  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
    name: "",
    lastname: "",
    address: "",
    phone: "",
    joinedNewsletter: true,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.password === formData.passwordConfirm) {
      console.log("Successfully signed up");
    } else {
      console.log("Passwords do not match");
      return;
    }

    if (formData.joinedNewsletter) {
      console.log("Thanks for signing up for our newsletter!");
    }
  }

  return (
    <div className="form-container">
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <section >
          <input
            type="text"
            placeholder="username"
            className="form--input"
            name="username"
            onChange={handleChange}
            value={formData.username}
          />
          <input
            type="email"
            placeholder="Email address"
            className="form--input"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />{" "}
          <input
            type="password"
            placeholder="Password"
            className="form--input"
            name="password"
            onChange={handleChange}
            value={formData.password}
          />{" "}
          <input
            type="password"
            placeholder="Confirm password"
            className="form--input"
            name="passwordConfirm"
            onChange={handleChange}
            value={formData.passwordConfirm}
          />
        </section>
        <section>
          <input
            type="text"
            placeholder="Name"
            className="form--input"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
          <input
            type="text"
            placeholder="Lastname"
            className="form--input"
            name="lastname"
            onChange={handleChange}
            value={formData.lastname}
          />
          <input
            type="text"
            placeholder="Address"
            className="form--input"
            name="address"
            onChange={handleChange}
            value={formData.address}
          />
          <input
            type="number"
            placeholder="Phone"
            className="form--input"
            name="phone"
            onChange={handleChange}
            value={formData.phone}
          />
        </section>
        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name="joinedNewsletter"
            onChange={handleChange}
            checked={formData.joinedNewsletter}
          />{" "}
          <label htmlFor="okayToEmail"> I want to join the newsletter </label>{" "}
        </div>{" "}
        <button className="form--submit">Sign up </button>{" "}
      </form>{" "}
    </div>
  );
}
