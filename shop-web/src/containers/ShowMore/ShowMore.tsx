import { useState } from "react";
import { FunctionComponent } from "react";

import dummyProducts from "./dummyData.json";

import "./ShowMore.scss";

const ShowMore: FunctionComponent = () => {
  const totalProduct = dummyProducts.length;
  const [step, setStep] = useState(1);
  const pageItemCount = 20;

  return (
    <div>
      <table style={{ width: "100%" }}>
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {[...dummyProducts]
            .slice(0, pageItemCount * step)
            .map((product, i) => (
              <tr key={i} style={{ textAlign: "center" }}>
                <td>{i + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
              </tr>
            ))}
        </tbody>
      </table>
      {step < Math.ceil(totalProduct / pageItemCount) && (
        <button
          className="btn btn-more"
          onClick={() => {
            window.scrollTo(0, document.body.scrollHeight);
            setStep((prevStep) => prevStep + 1);
          }}
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default ShowMore;
