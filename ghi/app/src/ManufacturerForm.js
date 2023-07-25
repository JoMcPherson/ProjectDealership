import React, { useEffect, useState } from "react";
export default function ManufacturerForm() {
  const [name, setName] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);
  // If flash doesn't work I'll just remove it
  useEffect(() => {
    if (isSuccessful) {
      const timer = setTimeout(() => {
        setIsSuccessful(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isSuccessful]);


  function handleNameChange(event) {
    const value = event.target.value;
    setName(value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {}
    data.name = name;

    const manufacturerUrl = "http://localhost:8100/api/manufacturers/";
    const fetchConfig = {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application.json',
      },
    };

    const response = await fetch(manufacturerUrl, fetchConfig);
    console.log(response)
    if (response.ok) {
      const newManufacturer = await response.json();
      console.log(newManufacturer)

      setIsSuccessful(true);
      setName("");
    }
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        {/* <div className="shadow p-4 mt-4"> */}
        <div className={`shadow p-4 mt-4 ${isSuccessful ? 'flash-green' : ''}`}>
          <h1>Create a new Manufacturer</h1>
          {/* <form id="create-manufacturer-form"> */}
          <form onSubmit={handleSubmit} id="create-manufacturer-form">
            <div className="form-floating mb-3">
              <input
                onChange={handleNameChange}
                placeholder="Name"
                required
                type="text"
                name="name"
                id="name"
                className="form-control"
                value={name}
              />
              <label htmlFor="manufacturer">Manufacturer Name</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  )
}
