import "./Filter.scss";

type FilterProps = {
  items: string;
};

const Filter: React.FC<FilterProps> = ({ items }) => {
  return <div className="filter">Filter</div>;
};

export default Filter;
