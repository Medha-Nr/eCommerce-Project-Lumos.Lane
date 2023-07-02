import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(95, 93, 93, 0.5), rgba(255, 255, 255, 0.5)),
    url("https://images.pexels.com/photos/15011412/pexels-photo-15011412/free-photo-of-a-woman-in-a-fashionable-outfit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: rgba(95, 93, 93, 0.772);
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 14px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  border: none;
  padding: 15px 20px;
  background-color: #e9b05b;
  color: #323232;
  font-family: "Noto Sans", sans-serif;

  cursor: pointer;
  &:hover {
    background-color: #c99950;
  }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First name" />
          <Input placeholder="Last name" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
