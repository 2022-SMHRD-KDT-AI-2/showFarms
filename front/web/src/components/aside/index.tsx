import React, { useState } from "react";
import {
  AsideContainer,
  Button,
  IconImg,
  Input,
  Logo,
} from "../../styles/element";
import { Navigator } from "../../styles/layout";
import useInput from "../../hooks/useInput";
import logo from "../../images/icons/logo.png";
import icon from "../../images/icons/Hamberger_icon.png";
import NavItem from "../navItem";
import { linkList } from "../../datas";
import main from "../../images/icons/Main_icon.png";
import map from "../../images/icons/Map_icon.png";
import setting from "../../images/icons/Setting_icon.png";
import write from "../../images/icons/Write_icon.png";

const icons = [main, write, map, setting];

const Aside = () => {
  const [viewAside, setViewAside] = useState<boolean>(false);
  const onHover = () => {
    setViewAside(true);
  };
  const onLeave = () => {
    setViewAside(false);
  };
  const [searchTarget, onChangeSearchTarget] = useInput<string>("");
  return (
    <>
      <Navigator onMouseEnter={onHover} onMouseLeave={onLeave}>
        <IconImg src={icon} />
        {viewAside && (
          <AsideContainer>
            <Logo src={logo} />
            <div className="inputs">
              <Input
                value={searchTarget}
                onChange={onChangeSearchTarget}
                width={"16vw"}
              />
              <Button>Search</Button>
            </div>
            <div>
              {linkList.map((item, index) => {
                return <NavItem item={item} key={index} icon={icons[index]} />;
              })}
            </div>
          </AsideContainer>
        )}
      </Navigator>
    </>
  );
};

export default Aside;
