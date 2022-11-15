import React, { useState } from "react";
//import { useNavigate } from "react-router";
import { useNavigate } from "react-router-dom";
import DashboardIcon from "../assets/images/dashboard.svg"
import UsermanagementIcon from "../assets/images/usermanagement.svg"
import MasterIcon from "../assets/images/master.svg"
import "./index.scss";
interface IProps {
  activeDashboardOption: number;
}
const SideMenu: React.FC = () => {
  const navigate = useNavigate();
  const [dashboardItems, setDashboardItems] = useState([
    { name: "Dashboard", image: DashboardIcon },
    {
      name: "User Management",
      image: UsermanagementIcon,
    },
    { name: "Master ", image: MasterIcon },
  ]);
  const [dashboardItemsNavigation, setDashboardItemsNavigation] = useState([
    "/dashboard",
    "/usermanagement",
    "/master",
  ]);
  const [isActive, setIsActive] = useState(false);
  const [activeMenuOption, setActiveMenuOption] = useState(0);
  const displayMenuItem = (index: number) => {
     //setActiveMenuOption(index);
  navigate(dashboardItemsNavigation[index]);
  };
  return (
    <div className="dashboard-menu-container">
      <div className="dashboard-contents">
        {dashboardItems.map((value, index) => {
          return (
            <div
              key={index}
              className={
                activeMenuOption === index
                  ? "item active-item"
                  : "item inactive-item"
              }
              onClick={() => displayMenuItem(index)}
            >
              <img
                src={value.image}
                alt="dashboard-menu-icons"
                className="dashboard-menu-icons"
              />
              <span>{value.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SideMenu;
