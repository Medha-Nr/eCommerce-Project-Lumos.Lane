import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Products from "../Components/Products";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";

const Container = styled.div``;
const Title = styled.h1``;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 30px;
  background-color: aliceblue;
`;
const Option = styled.option``;

const FilterText = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-right: 40px;
`;
const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Product Collection</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>Pink</Option>
            <Option>Blue</Option>
            <Option>Violet</Option>
            <Option>Green</Option>
            <Option>Yellow</Option>
            <Option>Orange</Option>
            <Option>Red</Option>
            <Option>Brown</Option>
            <Option>Grey</Option>
            <Option>Black</Option>
            <Option>White</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option> S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>2XL</Option>
            <Option>3XL</Option>
            <Option>Free Size</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
