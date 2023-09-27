import React from 'react';

function ModelsList({ models }) {
  return (
    <div className="models-list my-5 container">
      <h1 className="mb-4">Models</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Manufacturer</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {models.map((model) => (
            <ModelRow key={model.name} model={model} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ModelRow({ model }) {
  return (
    <tr>
      <td>{model.name}</td>
      <td>{model.manufacturer.name}</td>
      <td>
        <div className="image-container">
          <img src={model.picture_url} alt="Car Model" className="img-fluid" />
        </div>
      </td>
    </tr>
  );
}

export default ModelsList;
