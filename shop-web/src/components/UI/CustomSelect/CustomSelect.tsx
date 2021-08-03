import React, { useState } from "react";
import { ReactComponent as ArrowDown } from "../../../assets/icons/arrow-down.svg";

import "./CustomSelect.scss";

type CustomSelectProps = {
  values: string[];
  value: string | number;
  setValue: (value: string) => void;
  defaultValue: string;
};

const CustomSelect: React.FC<CustomSelectProps> = ({
  values,
  value,
  setValue,
  defaultValue,
}) => {
  const [selected, setSelected] = useState(value || defaultValue);
  const [showList, setShowList] = useState(false);

  const onBlurHandle = (e: any) => {
    if (!e.relatedTarget || e.relatedTarget?.id !== "select-item") {
      setShowList(false);
    }
  };

  return (
    <div className={`custom-select${showList ? " custom-select-active" : ""}`}>
      <button
        onClick={() => setShowList(!showList)}
        className="btn custom-select-header"
        onBlur={onBlurHandle}
      >
        {selected}
        <ArrowDown />
      </button>
      <ul className="custom-select-list">
        {values
          .filter((name) => name !== selected)
          .map((name) => (
            <li
              tabIndex={1}
              id="select-item"
              key={name}
              onClick={() => {
                setSelected(name);
                setShowList(false);
                setValue(name);
              }}
              className="select-item"
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CustomSelect;
