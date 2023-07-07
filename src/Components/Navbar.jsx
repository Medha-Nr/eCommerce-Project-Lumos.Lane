import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Cart } from "./CartContext";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  font-family: "Noto Sans", sans-serif;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid #5e5e5e;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  border-radius: 10px;
`;
const Input = styled.input`
  border: none;
  background-color: #4f4f4f;
  ${mobile({ width: "40px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  font-size: 36px;
`;
const CustomLink = styled(Link)`
  text-decoration: none;
  color: #ebeae8;
`;
const Logo = styled.div`
  font-weight: bold;
  font-family: "Urbanist", sans-serif;
  ${mobile({ fontSize: "20px", padding: "10px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  padding: 10px;
  cursor: pointer;
  ${mobile({ fontSize: "10px", marginLeft: "6px" })}
`;

const Navbar = () => {
  const { cart, setCart } = useContext(Cart);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ENG</Language>
          <SearchContainer>
            <Input placeholder="search" />
            <Search style={{ color: "whitesmoke", fontsize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <CustomLink to="/">
            <Logo>LUMOS.LANE </Logo>
          </CustomLink>
        </Center>
        <Right>
          <CustomLink to="/productlist">
            <MenuItem>OUR COLLECTION</MenuItem>
          </CustomLink>
          <CustomLink to="/login">
            <MenuItem>SIGN IN</MenuItem>
          </CustomLink>
          <MenuItem>
            <CustomLink to="/cart">
              <Badge badgeContent={cart.length} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </CustomLink>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
