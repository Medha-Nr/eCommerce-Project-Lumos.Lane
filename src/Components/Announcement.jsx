import styled from "styled-components";
const Container = styled.p`
  height: 30px;
  background-color: #b5cfcf;
  color: #443c3c;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  font-weight: 600;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping On Orders Over ₹2000</Container>;
};

export default Announcement;
