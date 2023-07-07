import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div`
  font-family: "Noto Sans", sans-serif;
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-size: 50px;
  font-weight: 200;
`;
const Subtitle = styled.div`
  font-size: 30px;
  font-weight: 500;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 18px;
  width: 80%;
`;
const Price = styled.span`
  font-size: 30px;
  font-weight: 100;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0px;
  ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
  align-items: center;
  font-size: 20px;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  align-items: center;
  padding: 5px;
  font-size: 17px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 18px;
  border: 3px solid #d1cdcd;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 30px;
`;
const Button = styled.button`
  padding: 14px;
  border: 1px solid #d6d2d2;
  background-color: transparent;
  color: #d6d2d2;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    color: #395046;
    background-color: #d6d2d2;

    transition: all 0.5ss ease;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.pinimg.com/564x/e9/12/c7/e912c78a575a98c817cce2c790c3b7fd.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Sunflower Chic </Title>
          <Subtitle>
            Yellow Tee, Long Sweater & Brown Hat - Stand Out in Style!
          </Subtitle>
          <Desc>
            Indulge in the captivating allure of Sunflower Chic. Our
            meticulously curated set brings together a yellow t-shirt, a long
            yellow sweater, and a stylish brown hat. Imbued with impeccable
            craftsmanship, this ensemble effortlessly blends comfort and style.
            Embrace the warmth and radiate your unique fashion sense with this
            captivating combination. Elevate your wardrobe with Sunflower Chic
            and bask in its timeless charm.
          </Desc>
          <Price>₹2800</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#e3e3e3"></FilterColor>
              <FilterColor color="#5a4cc3"></FilterColor>
              <FilterColor color="#8fd0f4"></FilterColor>
              <FilterColor color="#e88ff4"></FilterColor>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>2XL</FilterSizeOption>
                <FilterSizeOption>3XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>BUY NOW</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
