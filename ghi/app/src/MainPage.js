import React from 'react';
import InventoryDiagram from './assets/InventoryDiagram.png';

function MainPage() {
  return (
    <div className="container px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">CarStarter</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          The premiere solution for automobile dealership management!
        </p>
        <p>
          Steering your business in the right direction since 2023.
        </p>
        <div className="img-overlay img-fluid">
          <img
            src={InventoryDiagram}
            alt="Car Inventory Diagram"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
