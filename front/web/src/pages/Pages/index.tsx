import React, { useState } from "react";
import { MyPagesContainer } from "../../styles/layout";
import Aside from "../../components/aside";
import Seller from "./seller";
import Customer from "./customer";

const Pages = () => {
  // true -> seller , false -> customer
  const [userType, setUserType] = useState<boolean>(true);
  return (
    <MyPagesContainer>
      <Aside />
      {userType ? <Seller /> : <Customer />}
    </MyPagesContainer>
  );
};

export default Pages;
