import React from "react";
import styled from "styled-components";
import FolderIcon from "@mui/icons-material/Folder";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFolder } from "../Slices/folder/folderSlice";

function FileContainer({ title, id }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const SelectChannel = () => {
    if (id) {
      dispatch(setFolder({ folderId: id, folderName: title }));
      navigate(`/folder/${title}/${id}`);
    } else {
      navigate("/");
    }
  };
  return (
    <Container onClick={SelectChannel}>
      <FolderIcon />
      <span>{title}</span>
    </Container>
  );
}

export default FileContainer;
const Container = styled.div`
  width: 287.5px;
  height: 48px;
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.35);
  border-radius: 4px;

  svg {
    height: 24px;
    width: 24px;
    color: rgba(95, 99, 104);
    margin-left: 20px;
  }

  span {
    font-size: 13px;
    margin-left: 10px;
  }
`;
