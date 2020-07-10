import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleClick(event) {
    const { name, value } = event.target;
    setContact(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
    console.log(name);
    console.log(value);
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={handleClick} name="fName" placeholder="First Name" />
        <input onChange={handleClick} name="lName" placeholder="Last Name" />
        <input onChange={handleClick} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
