import { Send } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #4f4e4d;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 15px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 50px;
  background-color: #1222fe;
  display: flex;
  justify-content: space-between;
  border: 1px solid #524f4f;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`;
const Input = styled.input`
  flex: 8;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  background-color: #8ac9af;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates for your latest projects</Desc>
      <InputContainer>
        <Input placeholder="email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
