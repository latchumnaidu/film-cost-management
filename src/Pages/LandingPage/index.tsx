import Layout, { Content } from "antd/lib/layout/layout";
import React, { useContext, useEffect } from "react";
import HeaderBar from "../../Components/HeaderBar";
import SideMenu from "../../Components/SideMenu";
import { AuthContext } from "../../Contexts/AuthContext";
import Routing from "../../Routes";

const LandingPage: React.FC = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div>
      {!isLoggedIn ? (
        <Routing />
      ) : (
        <Layout>
          <SideMenu />
          <HeaderBar />
          <Content>
            <Routing />
          </Content>
        </Layout>
      )}
    </div>
  );
};

export default LandingPage;
