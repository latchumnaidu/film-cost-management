import { useNavigate } from "react-router-dom";
import UsermanagementIcon from "../../assets/images/usermanagement.svg"
import MasterIcon from "../../assets/images/master.svg" 
import SideMenu from "../../Components/SideMenu";
import './index.scss';
import HeaderBar from "../../Components/HeaderBar";

const Dashboard=()=>{
  const navigate = useNavigate();
    return (
      <>
       
        <div className="dashboard-container">
          <div className="dashboard-content">
            <div
              className="dashboard-item"
              onClick={() => navigate("/usermanagement")}
            >
              <img
                src={UsermanagementIcon}
                className="user-management"
                alt="user-management"
              />
              <div>User Management</div>
            </div>
            <div className="dashboard-item" onClick={() => navigate("/master")}>
              <img src={MasterIcon} className="master" alt="master" />
              <div>Master Data</div>
            </div>
          </div>
        </div>
      </>
    );
}
 export default Dashboard;