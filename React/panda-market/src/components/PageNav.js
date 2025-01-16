import BackIcon from "../assets/icon/ic_back.svg";
import NextIcon from "../assets/icon/ic_next.svg";
import "./PageNav.css";

function PageNav() {
  return (
    <ul className="pageButtons">
      <li>
        <button className="pageButton">
          <img src={BackIcon} />
        </button>
      </li>
      <li>
        <button className="pageButton">1</button>
      </li>
      <li>
        <button className="pageButton">2</button>
      </li>
      <li>
        <button className="pageButton">3</button>
      </li>
      <li>
        <button className="pageButton">4</button>
      </li>
      <li>
        <button className="pageButton">5</button>
      </li>
      <li>
        <button className="pageButton">
          <img src={NextIcon} />
        </button>
      </li>
    </ul>
  );
}

export default PageNav;
