import styles from "./../styles/calorie.module.css";
import { useState } from "react";
export default function Symptoms() {
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
      lifestyle: { value: lifestyle },
      symptoms: { value: symptoms },
      medicalrecord: { value: medicalrecord },
    } = el;
    const obj = {
      age,
      gender,
      height,
      weight,
      lifestyle,
      symptoms,
      medicalrecord,
    };
    fetch("/api/symptoms", { method: "POST", body: JSON.stringify(obj) })
      .then((res) => res.json())
      .then((data) => {
        console.log(typeof data);
        data = JSON.parse(data.response);
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
        <div className="input-group input-group-lg display-flex bg-yellow w-25 ms-auto me-auto">
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

        <div className="display-flex row mt-4 w-25 ms-auto me-auto">
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
              Male ♂
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
              Female ♀
            </label>
          </div>
        </div>

        <div className="input-group input-group-lg display-flex mt-4 w-25 ms-auto me-auto">
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

        <div className="display-flex mt-4 w-25 ms-auto me-auto">
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

        <div className="display-flex mt-4 w-25 ms-auto me-auto">
          <div className="input-group input-group-lg">
            <span
              className="input-group-text bg-warning text-272343"
              id="inputGroup-sizing-lg"
            >
              <label htmlFor="lifestyle">
                <p className="fs-3 fw-semibold">Lifestyle: </p>
              </label>
            </span>
            <input
              type="text"
              className="form-control bg-e3f6f5"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              name="lifestyle"
              id="lifestyle"
            />
          </div>
        </div>

        <div className="display-flex mt-4 w-25 ms-auto me-auto">
          <div className="input-group input-group-lg">
            <span
              className="input-group-text bg-warning text-272343"
              id="inputGroup-sizing-lg"
            >
              <label htmlFor="symptoms">
                <p className="fs-3 fw-semibold">Symptoms: </p>
              </label>
            </span>
            <input
              type="text"
              className="form-control bg-e3f6f5"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              name="symptoms"
              id="symptoms"
            />
          </div>
        </div>

        <div className="display-flex mt-4 w-50 ms-auto me-auto">
          <div className="input-group input-group-lg">
            <span
              className="input-group-text bg-warning text-272343"
              id="inputGroup-sizing-lg"
            >
              <label htmlFor="medicalrecord">
                <p className="fs-3 fw-semibold">Previous Illness 🏥: </p>
              </label>
            </span>
            <input
              type="text"
              className="form-control bg-e3f6f5"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              name="medicalrecord"
              id="medicalrecord"
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
            {/* {JSON.stringify(response)} */}
            <div className="res-card">
              <h2 className="fw-semibold">Potential causes of your symptoms: </h2>
              <p>{response["cause"]}</p>
            </div>
            <div className="res-card">
              <h2 className="fw-semibold">Health Issues: </h2>
              <p>{response["healthIssue"]}</p>
            </div>
            <div className="res-card">
              <h2 className="fw-semibold">Possible Treatment:</h2>
              <p>{response["treatment"]}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
