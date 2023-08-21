import "./Sidebar.css"
import logoImage from "../../assets/images/logo.png";
import menuIcon from "../../assets/images/menu.svg";
import attendanceIcon from "../../assets/images/attendance.svg";
import moneyIcon from "../../assets/images/money.svg";
import settingsIcon from "../../assets/images/settings.svg";
import tableIcon from "../../assets/images/table.svg";
import teacherIcon from "../../assets/images/teacher.svg";

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <img src={logoImage}/>

        <div className="account">
          <div className="account__circle"></div>
          <p>John Doe</p>
        </div>

        <div className="sidebar__content">
          <a href="#" className="sidebar__item-active">
            <img src={menuIcon} />
            <p>Boshqaruv</p>
          </a>

          <a href="#" className="sidebar__item">
            <img src={moneyIcon} />
            <p>Boshqaruv</p>
          </a>

          <a href="#" className="sidebar__item">
            <img src={teacherIcon} />
            <p>Boshqaruv</p>
          </a>

          <a href="#" className="sidebar__item">
            <img src={tableIcon} />
            <p>Boshqaruv</p>
          </a>

          <a href="#" className="sidebar__item">
            <img src={attendanceIcon} />
            <p>Boshqaruv</p>
          </a>

          <a href="#" className="sidebar__item">
            <img src={settingsIcon} />
            <p>Boshqaruv</p>
          </a>
        </div>

        <div className="copyright">
          <p>© 2022 All rights reserved!</p>
          <p>Made by Edify Team</p>
        </div>
    </div>
  )
}

export default Sidebar