import React, { useState } from "react";
import styled from "@emotion/styled";
import ButtonBasic from "../elements/ButtonBasic";
import EditProfileModal from "./modal/EditProfileModal";

const MyProfile = () => {
  const [editProfileModal, setEditProfileModal] = useState(false);
  const onClickEditHandler = () => {
    setEditProfileModal(true);
  };
  const onClickCloseHandler = () => {
    setEditProfileModal(false);
  };

  return (
    <>
      {editProfileModal ? (
        <EditProfileModal onClose={onClickCloseHandler} />
      ) : null}
      <Profile>
        <Box>
          <Image src="data:image/jpeg;base64,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" />
          <div>
            <p style={{ marginBottom: "8px", fontSize: "21px" }}>????????????</p>
            <p>
              <span>????????? </span> ????????? ?????? 2???
            </p>
          </div>
        </Box>
        <ButtonBasic width="4rem" _onClick={onClickEditHandler}>
          ??????
        </ButtonBasic>
      </Profile>
    </>
  );
};

export default MyProfile;

const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 760px) {
    padding: 0 1rem;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const Image = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
`;
