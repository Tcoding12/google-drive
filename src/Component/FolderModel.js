import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectFolderBool, setBoolean } from "../Slices/boolean/booleanSlice";
import db from "../firebase/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { selectEmail, selectUId } from "../Slices/user/userSlice";

function FolderModel() {
  const dispatch = useDispatch();
  const folder = useSelector(selectFolderBool);
  const [folderName, setFolderName] = useState("");
  const [loading, setLoading] = useState(false);
  const uid = useSelector(selectUId);
  const email = useSelector(selectEmail);

  const Submit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    if (folderName.length < 1) return;

    await addDoc(collection(db, "folder"), {
      name: folderName,
      timestamp: serverTimestamp(),
      uid: uid,
      email: email,
    });

    setLoading(false);

    dispatch(setBoolean({ folderBool: false }));

    setFolderName(" ");
  };

  return (
    <Container show={folder}>
      <Wrapper>
        <Title>New Folder</Title>
        <InputContainer>
          <input
            type="text"
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
            placeholder="create Folder"
          />
        </InputContainer>
        <Button>
          <button onClick={() => dispatch(setBoolean({ folderBool: false }))}>
            Cancel
          </button>
          <button className="create" onClick={Submit}>
            {loading ? "Creating.." : " CreateFolder"}
          </button>
        </Button>
      </Wrapper>
    </Container>
  );
}

export default FolderModel;

const Container = styled.div`
  z-index: 9999;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;

  transform: ${(props) => (props.show ? "translateY(0)" : "translateY(100%)")};
`;

const Wrapper = styled.div`
  width: 500px;
  height: 130px;
  background-color: white;
  border-radius: 20px;
  position: relative;
`;

const Title = styled.span`
  font-size: 20px;
  margin: 20px;
`;

const Button = styled.div`
  position: absolute;
  bottom: 5px;
  right: 10px;

  display: flex;
  align-items: center;
  button {
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 500;
    background-color: #ef4444;
    border: none;
    color: white;
    margin: 0 15px;
    cursor: pointer;
  }
  .create {
    background-color: #3b82f6;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin: 20px;
  input {
    border: none;
    flex: 1;
    :focus {
      outline: none;
    }
  }
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
