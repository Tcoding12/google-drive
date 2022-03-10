import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { ButtonGroup, Avatar } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { useDispatch, useSelector } from "react-redux";
import { selectPhoto, setLogOut } from "../Slices/user/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { Link } from "react-router-dom";

function Header() {
  const photo = useSelector(selectPhoto);
  const dispatch = useDispatch();
  const LogOut = async () => {
    await signOut(auth, (response) => {
      dispatch(
        setLogOut({
          name: null,
          uid: null,
          photo: null,
          email: null,
        })
      );
    });
  };
  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <Logo>
            <img loading="lazy" src="/img/google-logo.png" alt="" />
            <span>Drive</span>
          </Logo>
        </Link>

        <InputContainer>
          <SearchContainer>
            <ButtonGroup>
              <SearchIcon />
            </ButtonGroup>

            <input placeholder="Search in Drive" />
          </SearchContainer>
        </InputContainer>

        <RightContainer>
          <LeftSection>
            <HelpOutlineOutlinedIcon />
            <SettingsOutlinedIcon />
          </LeftSection>
          <RightSection>
            <AppsOutlinedIcon className="app" />
            <Avatar src={photo} onClick={LogOut} />
          </RightSection>
        </RightContainer>
      </Wrapper>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #ffffff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 2px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 20px; ;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
  }

  span {
    font-family: "Product Sans", Arial, sans-serif;
    color: #5f6368;
    line-height: 24px;
    font-size: 22px;
    padding-left: 8px;
  }
`;

const InputContainer = styled.div`
  flex: 1;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  width: 64%;
  height: 50px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  background-color: rgba(0, 0, 0, 0.09);
  border-radius: 8px;
  svg {
    margin-left: 10px;
    color: #5f6368;
  }
  input {
    font-size: 16px;
    font-family: Sans, Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
    width: 90%;
    height: 80%;
    margin: 0 auto;
    background-color: transparent;

    :focus {
      outline: none;
    }
    border: none;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: #5f6368;
    border-radius: 50%;
    padding: 5px;
    cursor: pointer;
    transition: all 200ms ease-out;
    :hover {
      background-color: rgba(0, 0, 0, 0.09);
    }
  }
  .app {
    margin-right: 15px;
  }
`;

const LeftSection = styled(RightSection)`
  margin-right: 40px;

  svg {
    margin: 0 10px;
  }
`;
