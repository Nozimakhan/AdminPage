import "./Nav.css";
import groupIcon from "../../assets/images/groups.svg"
import noPaymentIcon from "../../assets/images/no_pay.svg"
import searchIcon from "../../assets/images/search.svg"

const Nav = () => {
  return (
    <nav>
      <div className="nav__item">
        <div className="border-left"></div>
        <div className="guruhlar">
          <img src={groupIcon} />
          <div className="guruhlar__text">
            <p>Guruhlar soni</p>
            <strong>10<span>ta</span></strong>
          </div>
        </div>
      </div>

      <div className="nav__item">
        <div className="border-left"></div>
        <div className="guruhlar">
          <img src={noPaymentIcon} />
          <div className="guruhlar__text">
            <p>To’lov qilmaganlar soni</p>
            <strong>16<span>ta</span></strong>
          </div>
        </div>
      </div>

      <div className="search__icon">
        <img src={searchIcon} />
      </div>
    </nav>
  )
}

export default Nav