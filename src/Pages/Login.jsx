import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(95, 93, 93, 0.5), rgba(255, 255, 255, 0.5)),
    url("https://images.pexels.com/photos/15011412/pexels-photo-15011412/free-photo-of-a-woman-in-a-fashionable-outfit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #5f5d5de8;
  ${mobile({ width: "75%" })}
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
  margin: 10px 0px;
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
  margin-bottom: 10px;

  cursor: pointer;
  &:hover {
    background-color: #c99950;
  }
`;
const Links = styled.div`
  display: flex;
  flex-direction: column;
`;
const Liink = styled.a``;
const CustomLink = styled(Link)`
  text-decoration: underline;
  color: whitesmoke;
  margin: 8px 0px;
  font-size: 15px;

  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Username" />

          <Input placeholder="Password" />

          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>LOGIN</Button>
          <Links>
            <CustomLink>Forgot Password </CustomLink>
            <CustomLink to="/register">New User? Create an Account</CustomLink>
          </Links>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
