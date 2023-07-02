import {
  FavoriteBorderOutlined,
  Favorite,
  SearchOutlined,
  ShoppingCartOutlined,
  RemoveShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import { Cart } from "./CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(53, 53, 53, 0.2);
  cursor: pointer;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  margin: 10px;
  min-width: 280px;
  height: 350px;
  align-items: center;
  justify-content: center;
  background-color: #d4d0d0;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;
const Image = styled.img`
  height: 94%;
  z-index: 2;
`;

const Icon = styled.div`
  background-color: #131212;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background-color: #2b2929;
    transform: scale(1.3);
  }
`;
const CustomLink = styled(Link)`
  color: white;
`;

const Product = ({ item }) => {
  const { cart, setCart } = useContext(Cart);

  return (
    <Container>
      <Image src={item.img} />
      <Info>
        {cart.includes(item) ? (
          <Icon
            onClick={() => {
              setCart(cart.filter((c) => c.id !== item.id));
            }}
          >
            <RemoveShoppingCartOutlined />
          </Icon>
        ) : (
          <Icon
            onClick={() => {
              setCart([...cart, item]);
            }}
          >
            <ShoppingCartOutlined />
          </Icon>
        )}
        <CustomLink to="/product">
          <Icon>
            <SearchOutlined />
          </Icon>
        </CustomLink>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
////////////
