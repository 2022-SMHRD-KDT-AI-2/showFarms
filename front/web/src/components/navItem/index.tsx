import React from "react";
import {NavItemContainer} from "../../styles/element";
import {useNavigate} from "react-router";
import {FlexRowDiv} from "../../styles/common";

const NavItem = ({item, icon}: { item: string; icon: string }) => {
  const nav = useNavigate();
  const onClickItem = () => {
    nav(`/${item}`);
  };
  return (
      <NavItemContainer onClick={onClickItem}>
        <FlexRowDiv>
          <img src={icon}/>
          <div>{item.toUpperCase()}</div>
        </FlexRowDiv>
      </NavItemContainer>
  );
};

export default NavItem;
