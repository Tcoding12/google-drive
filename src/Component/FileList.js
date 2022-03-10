import React from "react";
import styled from "styled-components";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import { useDispatch } from "react-redux";
import { setPhotoDisplay } from "../Slices/photodisplay/displaySlice";

function FileList({ img, title, uid, id }) {
  const dispatch = useDispatch();

  const PhotoDisable = () => {
    dispatch(setPhotoDisplay({ photo: img, title: title }));
  };
  return (
    <Container>
      <PhotoContainer onClick={PhotoDisable}>
        <img src={img} alt="" />
      </PhotoContainer>

      <PhotoTitle>
        <InsertPhotoIcon />
        <span>{title}</span>
      </PhotoTitle>
    </Container>
  );
}

export default FileList;

const Container = styled.div`
  max-width: 300px;
  max-height: 400px;
  height: 209px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  margin: 10px 0;

  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`;

const PhotoContainer = styled.div`
  height: 60%;
  width: 100%;

  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  background-color: lightgray;
  img {
    height: 100%;
    width: 100%;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    object-fit: contain;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

const PhotoTitle = styled.div`
  display: flex;

  align-items: center;
  margin-top: 20px;
  margin-left: 10px;
  svg {
    color: #70b5f9;
  }
  span {
    color: rgba(0, 0, 0, 0.72);

    margin-left: 28px;
    padding-bottom: 4px;
    font-size: 13px;
    font-weight: 600;
  }
`;
