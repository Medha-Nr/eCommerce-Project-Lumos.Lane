import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: #f0eeee;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  color: gray;
  background-color: white;
  cursor: pointer;
  font-weight: 600;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: #ebeae8;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <CustomLink to="/productlist">
          <Button>SHOP NOW</Button>
        </CustomLink>
      </Info>
    </Container>
  );
};

export default CategoryItem;
