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
    <div className="mt-2 ms-2 me-2 mb-1">
      <form
        className={styles.form}
        onSubmit={(e) => {
          // console.log(e)
          handleSubmit(e);
        }}
      >

        <div className="input-group input-group-lg display-flex bg-yellow">
          <span className="input-group-text bg-warning text-272343" id="inputGroup-sizing-lg bg-yellow"><label htmlFor="age"><p className="fs-3 fw-semibold">Age: </p></label></span>
          <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" pattern="[0-9]{2}" name="age" id="age"></input>
        </div>
        
        <div className="display-flex row mt-4">
          <div className="col-lg-4">
            <label htmlFor="gender"><p className="fs-3 fw-semibold text-272343 me-0">Gender: </p></label>
          </div>
          <div className="input-group-text col-lg-4 bg-warning">   
            <input type="radio" name="gender" value="male" id="male" class="form-check-input mt-1 " />
            <label htmlFor="male" className="text-272343 ms-3">Male</label>
          </div>
          <div className="input-group-text col-lg-4 bg-warning">
            <input type="radio" name="gender" value="female" id="female" class="form-check-input mt-1 " />
            <label htmlFor="female" className="text-272343 ms-3">Female</label>
          </div> 
        </div>
        

        <div className="input-group input-group-lg display-flex mt-4">
          <span className="input-group-text bg-warning text-272343" id="inputGroup-sizing-lg"><label htmlFor="height"><p className="fs-3 fw-semibold">Height (in cms): </p></label></span>
          <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" name="height" pattern="[0-9]{3}" id="height" />
        </div>

        <div className="display-flex mt-4">
          <div className="input-group input-group-lg">
            <span className="input-group-text bg-warning text-272343" id="inputGroup-sizing-lg"><label htmlFor="weight"><p className="fs-3 fw-semibold">Weight (in kg): </p></label></span>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" name="weight" id="weight" pattern="[0-9]{2,3}" />
          </div>
        </div>

        <div className="display-flex row mt-4 mb-1">
          <div className="col-lg-4 mb-1">
            <label htmlFor="diet"><p className="fs-3 fw-semibold">Type of diet: </p></label>
          </div>
          <div className="input-group-text bg-warning text-272343 col-lg-4 mb-1 ">
            <input type="radio" name="diet" id="veg" value={"Vegitarian"} />
            <label htmlFor="veg" className="ms-3">Vegitarian</label>
          </div>

          <div className="input-group-text bg-warning text-272343 col-lg-4 mb-1 ">
            <input type="radio" name="diet" id="egg" value={"Eggitarian"} />
            <label htmlFor="egg" className="ms-3">Eggitarian</label>
          </div>
          
          <div className="col-lg-4 mb-1"></div>
          <div className="input-group-text bg-warning text-272343 col-lg-4 mb-1 pb-4 ">
            <input type="radio" name="diet" id="nonVeg" value={"Non Vegetarian"} />
            <label htmlFor="nonVeg" className="ms-3">Non Vegetarian</label>
          </div>

          <div className="input-group-text bg-warning text-272343 col-lg-4 mb-1 pb-4 ">
            <input type="radio" name="diet" id="keto" value={"Keto"} />
            <label htmlFor="keto" className="ms-3">Keto</label>
          </div>

          <div className="col-lg-4 mb-1"></div>  
          <div className="input-group-text bg-warning text-272343 col-lg-4 mb-1 pb-4 ">
            <input type="radio" name="diet" id="vegan" value={"Vegan"} />
            <label htmlFor="vegan" className="ms-3">Vegan</label>
          </div>
          
        </div>
        
        <div className="display-flex mt-4">
          <div className="input-group input-group-lg">
            <span className="input-group-text bg-warning text-272343" id="inputGroup-sizing-lg"><label htmlFor="allergies"><p className="fs-3 fw-semibold">Allergies: </p></label></span>
            <input type="text" className="form-control bg-e3f6f5" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" name="allergies" id="allergies" />
          </div>
        </div>

        <div className="text-center mt-5">
          <button type="submit" class="btn btn-block btn-lg bg-warning text-272343 fw-bold">Submit</button>
        </div>

      </form>
      <div className="response">{!!response && response}</div>
    </div>
  );
}
