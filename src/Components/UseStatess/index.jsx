import React from "react";
import { useState } from "react";
const initialState = {
  name: "",
  city: "",
};

export default function Firsthook() {
  const [formFill, setFormFill] = useState(initialState);

  function handelNameChange(event){
    setFormFill({...formFill, name: event.target.value})
  }

  function handelCityChange(event){
        setFormFill({...formFill , city: event.target.value}) }

  console.log(formFill);
  return (
    <div>
        <div>
            <h1>UseState Hook example !!</h1>
        </div>
    <div>
      <input onChange={handelNameChange} type="text" name="name" placeholder="Enter Name Please...!" />

      <select name="city" id="city"
      onChange={handelCityChange}
      >
        <option value="">Select City</option>
        <option value="Delhi">Delhi</option>
        <option value="Noida">Noida</option>
        <option value="Gurugram">Gurugram</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Chandighar">Chandighar</option>
        <option value="Banglore">Banglore</option>
      </select>

      <div>
        <h2>{`current name is ${formFill.name} and city is ${formFill.city}`}</h2>
      </div>
    </div>
    </div>
  );
}
