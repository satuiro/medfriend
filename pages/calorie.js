import styles from "./../styles/calorie.module.css";
import { useState } from "react";
export default function Calorie() {
  const [response, setResponse] = useState(null);
  function handleSubmit(e) {
    setResponse(null);
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
        // console.log("\n\n", data, data["response"], typeof data);
        // data = JSON.parse(data);
        // console.log("response: ", data);
        // debugger;
        // console.log("\n\n", data["response"], typeof data);
        if (data.response) {
          data = data.response;
        }
        setResponse(data);
      });
  }
  let bmi_description = "";
  if (!!response) {
    const { bmi } = response;
    if (bmi < 18.5) {
      bmi_description =
        "A few more pounds can lessen your chances of thinning bones and a weakened immune system, as well as feeling tired. Women who are underweight may have irregular periods or stop having them altogether. Underweight men may have lower sperm counts.";
    } else if (bmi < 24.9) {
      bmi_description =
        "You're in a good place now. The healthy range for BMI is between 18.5 and 24.9. Keep up your healthy habits to maintain your weight.";
    } else if (bmi < 29.9) {
      bmi_description =
        "Since your weight puts you in the overweight range, losing some extra pounds is a good first step toward lowering your chances of health problems. \n*(If you have a very muscular build, though, you could have an overweight BMI and still be OK.)";
    } else {
      bmi_description =
        "According to your height you would be considered obese. You have an increased risk of developing various health problems, including cancer, diabetes and heart disease. Even a modest amount of weight loss can help to reduce your increased health risks.";
    }
    if (bmi > 50) {
      setResponse({ ...response, bmi: 50 });
    }
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
          <span
            className="input-group-text bg-warning text-272343"
            id="inputGroup-sizing-lg bg-yellow"
          >
            <label htmlFor="age">
              <p className="fs-3 fw-semibold">Age: </p>
            </label>
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            pattern="[0-9]{2}"
            name="age"
            id="age"
          ></input>
        </div>

        <div className="display-flex row mt-4">
          <div className="col-lg-4">
            <label htmlFor="gender">
              <p className="fs-3 fw-semibold text-272343 me-0">Gender: </p>
            </label>
          </div>
          <div className="input-group-text col-lg-4 bg-warning">
            <input
              type="radio"
              name="gender"
              value="male"
              id="male"
              className="form-check-input mt-1 "
            />
            <label htmlFor="male" className="text-272343 ms-3">
              Male
            </label>
          </div>
          <div className="input-group-text col-lg-4 bg-warning">
            <input
              type="radio"
              name="gender"
              value="female"
              id="female"
              className="form-check-input mt-1 "
            />
            <label htmlFor="female" className="text-272343 ms-3">
              Female
            </label>
          </div>
        </div>

        <div className="input-group input-group-lg display-flex mt-4">
          <span
            className="input-group-text bg-warning text-272343"
            id="inputGroup-sizing-lg"
          >
            <label htmlFor="height">
              <p className="fs-3 fw-semibold">Height (in cms): </p>
            </label>
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            name="height"
            pattern="[0-9]{3}"
            id="height"
          />
        </div>

        <div className="display-flex mt-4">
          <div className="input-group input-group-lg">
            <span
              className="input-group-text bg-warning text-272343"
              id="inputGroup-sizing-lg"
            >
              <label htmlFor="weight">
                <p className="fs-3 fw-semibold">Weight (in kg): </p>
              </label>
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              name="weight"
              id="weight"
              pattern="[0-9]{2,3}"
            />
          </div>
        </div>

        <div className="display-flex row mt-4 mb-1">
          <div className="col-lg-4 mb-1">
            <label htmlFor="diet">
              <p className="fs-3 fw-semibold">Type of diet: </p>
            </label>
          </div>
          <div className="input-group-text bg-warning text-272343 col-lg-4 mb-1 ">
            <input type="radio" name="diet" id="veg" value={"Vegitarian"} />
            <label htmlFor="veg" className="ms-3">
              Vegitarian
            </label>
          </div>

          <div className="input-group-text bg-warning text-272343 col-lg-4 mb-1 ">
            <input type="radio" name="diet" id="egg" value={"Eggitarian"} />
            <label htmlFor="egg" className="ms-3">
              Eggitarian
            </label>
          </div>

          <div className="col-lg-4 mb-1"></div>
          <div className="input-group-text bg-warning text-272343 col-lg-4 mb-1 pb-4 ">
            <input
              type="radio"
              name="diet"
              id="nonVeg"
              value={"Non Vegetarian"}
            />
            <label htmlFor="nonVeg" className="ms-3">
              Non Vegetarian
            </label>
          </div>

          <div className="input-group-text bg-warning text-272343 col-lg-4 mb-1 pb-4 ">
            <input type="radio" name="diet" id="keto" value={"Keto"} />
            <label htmlFor="keto" className="ms-3">
              Keto
            </label>
          </div>

          <div className="col-lg-4 mb-1"></div>
          <div className="input-group-text bg-warning text-272343 col-lg-4 mb-1 pb-4 ">
            <input type="radio" name="diet" id="vegan" value={"Vegan"} />
            <label htmlFor="vegan" className="ms-3">
              Vegan
            </label>
          </div>
        </div>

        <div className="display-flex mt-4">
          <div className="input-group input-group-lg">
            <span
              className="input-group-text bg-warning text-272343"
              id="inputGroup-sizing-lg"
            >
              <label htmlFor="allergies">
                <p className="fs-3 fw-semibold">Allergies: </p>
              </label>
            </span>
            <input
              type="text"
              className="form-control bg-e3f6f5"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              name="allergies"
              id="allergies"
            />
          </div>
        </div>

        <div className="text-center mt-5">
          <button
            type="submit"
            className="btn btn-block btn-lg bg-warning text-272343 fw-bold"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="response">
        {!!response && (
          <>
            {/* {JSON.stringify(response)} uncomment this to see the exact response from the server for testing and debugging  */}
            <div className="res-card">
              <h2>Your BMI:</h2>
              <span>{response["bmi"]}</span>
              <div className="graphic-value your-bmi">
                <div className="scale-rectangle scale-bmi">
                  <span
                    className="marker"
                    style={{ bottom: `${(response["bmi"] / 50) * 400 - 24}px` }}
                  >
                    You
                  </span>
                  <span className="range obese">
                    <div className="range-description">
                      <b>Obese: </b> 30.0 and above
                    </div>
                  </span>
                  <span className="range overweight">
                    <div className="range-description">
                      <b>Overweight: </b> 25.0 - 29.9
                    </div>
                  </span>
                  <span className="range healthy active">
                    <div className="range-description">
                      <b>Healthy: </b> 18.5 - 24.9
                    </div>
                  </span>
                  <span className="range underweight">
                    <div className="range-description">
                      <b>Underweight: </b>Below 18.5
                    </div>
                  </span>
                </div>
              </div>
              <span className="bmi-description">
                {bmi_description}
                <br />
                <a href="https://en.wikipedia.org/wiki/Body_mass_index">
                  Read more
                </a>
              </span>
            </div>
            <div className="res-card">
              <h2>Your BMR: </h2>
              <span>{response["bmr"]}</span>
              <p>
                Your basal metabolic rate (BMR) is the number of calories your
                body needs to accomplish its most basic (basal) life-sustaining
                functions. Knowing this helps you in planning your diet.
                <a
                  style={{ marginLeft: "1rem" }}
                  href="https://en.wikipedia.org/wiki/Basal_metabolic_rate"
                >
                  Read more
                </a>
              </p>
            </div>
            <div className="res-card">
              <h2>Diet Chart: </h2>
              <p>{response["dietchart"]}</p>
            </div>
            <div className="res-card">
              <h2>Workout Plan: </h2>
              <p>{response["workout"]}</p>
            </div>
            <div className="res-card">
              <h2>Cardio Plan: </h2>
              <p>{response["cardio"]}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
