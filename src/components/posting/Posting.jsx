import React from "react";
import { FaLink } from "react-icons/fa";
import styled from "@emotion/styled";
import { category } from "../main/option";
import InputBasic from "../elements/InputBasic";
import ButtonBasic from "../elements/ButtonBasic";

const Posting = () => {
  const categoryList = category();
  return (
    <Container>
      <PostingForm>
        <LeftDivForm>
          공구 글쓰기 <hr style={{ width: "100%" }} />
          <SelectInput>
            {categoryList.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </SelectInput>
          <InputBasic height="2.8rem" placeholder="제목을 입력해 주세요." />
          <TextArea placeholder="내용을 입력해 주세요."></TextArea>
          <Label>
            사진 첨부
            <FileInput>
              <input type="file" />
              <FaLink />
            </FileInput>
          </Label>
          <Label>
            거래 희망 주소
            <InputBasic
              height="2rem"
              placeholder="이웃과 거래하고 싶은 장소를 선택해 주세요."
            />
            <ButtonBasic width="5rem" height="2rem">
              주소 찾기
            </ButtonBasic>
          </Label>
          <Label>
            상세주소
            <InputBasic height="2rem" />
          </Label>
        </LeftDivForm>

        <RightDivForm>
          <SelectInputForm>
            <label>모집 인원</label>
            <InputBasic type="number" min="0" />
            <label>모집 마감일 선택</label>
            <InputBasic type="date" />
            <label>모집 마감 시간 선택</label>
            <InputBasic type="time" />
            <label>
              결제 정보 <br />
              <span>공구하려는 물품의 금액을 입력해주세요.</span>
            </label>
            <InputBasic type="number" min="0" />
            <p>
              1인당 결제 금액 <span>25,000원</span>
            </p>
          </SelectInputForm>

          <ButtonForm>
            <ButtonBasic>등록</ButtonBasic>
            <ButtonBasic>닫기</ButtonBasic>
          </ButtonForm>
        </RightDivForm>
      </PostingForm>
    </Container>
  );
};

export default Posting;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PostingForm = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  gap: 1.5rem;
  @media screen and (max-width: 760px) {
    height: 100%;
    flex-direction: column;
  }
`;

const LeftDivForm = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (max-width: 760px) {
    width: 100%;
    height: 100%;
  }
`;

const SelectInput = styled.select`
  width: 50%;
  height: 2rem;
  border: 1px solid #e7e7e7;
  border-radius: 0.5rem;
  padding-left: 0.5rem;
  color: #555;
  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

const Label = styled.label`
  display: grid;
  grid-template-columns: 6rem 22rem 5rem;
  grid-template-rows: repeat(1, 1fr);
  align-items: center;
  gap: 5px;
  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 20rem;
  border: 1px solid #e7e7e7;
  border-radius: 0.5rem;
  padding: 1.8rem;
  resize: none;
`;

const FileInput = styled.div`
  width: 22rem;
  height: 2rem;
  border: 1px solid #e7e7e7;
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  & > input {
    width: 100%;
    background: none;
    color: #555;
  }
  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

const RightDivForm = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 37px;
  @media screen and (max-width: 760px) {
    width: 100%;
    height: 100%;
  }
`;

const SelectInputForm = styled.div`
  background: #e7e7e7;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > P {
    border-top: 1px solid #888;
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
  }

  & > label > span {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

const ButtonForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;