import styles from "./../styles/calorie.module.css";
import { useState } from "react";
export default function Calorie() {
  const [response, setResponse] = useState(null);
  function handleSubmit(e) {
    e.preventDefault();
    const { target: el } = e;
    const {
      age: { value: age },
      gender: { value: gender },
      height: { value: height },
      weight: { value: weight },
      diet: { value: diet },
      allergies: { value: allergies },
    } = el;
    const obj = { age, gender, height, weight, diet, allergies };
    fetch("/api/calorie", { method: "POST", body: JSON.stringify(obj) })
      .then((res) => res.json())
      .then((data) => {
        console.log("response: ", data);
        setResponse(data);
      });
  }
  return (
    <>
      <form
        className={styles.form}
        onSubmit={(e) => {
          // console.log(e)
          handleSubmit(e);
        }}
      >
        <>
          <label htmlFor="age">Age: </label>
          <input type="text" pattern="[0-9]{2}" name="age" id="age" />
        </>
        <>
          <label htmlFor="gender">Gender: </label>
          <div>
            <input type="radio" name="gender" value="male" id="male" />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input type="radio" name="gender" value="female" id="female" />
            <label htmlFor="female">Female</label>
          </div>
        </>
        <>
          <label htmlFor="height">Height (in cms): </label>
          <input type="text" name="height" pattern="[0-9]{3}" id="height" />
        </>
        <>
          <label htmlFor="weight">Weight (in kg): </label>
          <input type="text" name="weight" id="weight" pattern="[0-9]{2,3}" />
        </>
        <div>
          <label htmlFor="diet">Type of diet: </label>

          <input type="radio" name="diet" id="veg" value={"Vegitarian"} />
          <label htmlFor="veg">Vegitarian</label>

          <input type="radio" name="diet" id="egg" value={"Eggitarian"} />
          <label htmlFor="egg">Eggitarian</label>

          <input
            type="radio"
            name="diet"
            id="nonVeg"
            value={"Non Vegetarian"}
          />
          <label htmlFor="nonVeg">Non Vegetarian</label>

          <input type="radio" name="diet" id="keto" value={"Keto"} />
          <label htmlFor="keto">Keto</label>

          <input type="radio" name="diet" id="vegan" value={"Vegan"} />
          <label htmlFor="vegan">Vegan</label>
        </div>
        <>
          <label htmlFor="allergies">Allergies: </label>
          <input type="text" name="allergies" id="allergies" />
        </>
        <>
          <button type="submit">Submit</button>
        </>
      </form>
      <div className="response">{!!response && response}</div>
    </>
  );
}
