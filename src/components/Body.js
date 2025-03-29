import { useState } from "react";
import Filters from "./Filters";
import Products from "./Products";
import SearchBox from "./SearchBox";
import emptyFilter from "../assets/empty-filter.png";

const Body = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterQuery, setFilterQuery] = useState([]);
  const [isShowFilters, setIsShowFilters] = useState(false);
  return (
    <>
      <div className="searchBox">
        <SearchBox onSearch={setSearchQuery} />
        <button
          className="EmptyFilterBtn"
          onClick={() => setIsShowFilters(!isShowFilters)}
        >
          <img src={emptyFilter} className="EmptyFilterIcon" />
        </button>
      </div>

      <div className="container">
        <Filters
          filterQuery={filterQuery}
          setFilterQuery={setFilterQuery}
          ShowFilters={isShowFilters}
        />
        <Products searchInput={searchQuery} filterQuery={filterQuery} />
      </div>
    </>
  );
};

export default Body;
