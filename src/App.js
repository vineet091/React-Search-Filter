import { useEffect, useState } from "react";
import "./styles.css";

function debounce(func, wait) {
  var timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(this, args);
    }, wait);
  };
}

const DATA = ["abcab", "ab", "def", "zsc", "xyz", "pqr"];

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    this.debounceExc = debounce(filterData, 700);
  }, []);

  const filterData = (value) => {
    console.log(value);
    var newFilterData = DATA.filter((item) => {
      if (item.indexOf(value) > -1) {
        return true;
      }
      return false;
    });
    setFilteredData(newFilterData);
  };

  const handleChange = (evt) => {
    var { value } = evt.target;
    this.debounceExc(value);
    setSearchText(value);
  };

  return (
    <div className="App">
      <input
        type="text"
        value={searchText}
        onChange={(evt) => {
          handleChange(evt);
        }}
      />
      <ul className="search-list">
        {filteredData.map((item, i) => {
          var html = item.replaceAll(searchText, `<b>${searchText}</b>`);
          return (
            <li
              className="search-item"
              key={`li-${i}`}
              dangerouslySetInnerHTML={{ __html: html }}
            ></li>
          );
        })}
      </ul>
    </div>
  );
}
