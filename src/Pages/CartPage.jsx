import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import { Add, Remove } from "@material-ui/icons";
import { Cart } from "../Components/CartContext";
import { Link } from "react-router-dom";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "#f1b615" : "#e6d79b"};
  color: ${(props) => props.type === "filled" && "#4b4949"};
  &:hover {
    background-color: ${(props) =>
      props.type === "filled" ? "#d8a413" : "#f0d4a4"};
  }
`;
const Toptexts = styled.div`
  font-size: 20px;
`;
const Toptext = styled.span`
  text-decoration: underline;
  margin: 0px 10px;
  cursor: pointer;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  padding: 50px;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span`
  font-size: 20px;
`;
const ProductId = styled.span`
  font-size: 17px;
`;
const ProductColor = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 2px solid #ebe2cb;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span`
  font-size: 18px;
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`;
const StyledAddIcon = styled(Add)`
  cursor: pointer;
  padding: 3px;
  &:hover {
    transform: scale(1.1);
    background-color: #66a4a4;
    border-radius: 50px;
    padding: 3px;
  }
`;
const StyledRemoveIcon = styled(Remove)`
  cursor: pointer;
  padding: 3px;
  &:hover {
    transform: scale(1.1);
    background-color: #66a4a4;
    border-radius: 50px;
    padding: 3px;
  }
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 10px;
  border: 1px solid #fff;
  padding: 5px 10px;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;
const Hr = styled.hr`
  background-color: #e4cd73;
  border: none;
  height: 1px;
  margin: 40px;
`;

const Summary = styled.div`
  flex: 1;
  background-color: #e6d79b;
  color: #383838;
  border-radius: 10px;
  padding: 20px;
  border: 0.5px solid lightgray;

  font-weight: 200;
`;
const SummaryTitle = styled.h1`
  flex: 1;
  font-weight: 200;

  border-radius: 10px;
  padding: 10px;
  height: 20vh;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span`
  color: #484746;
  font-size: 22px;
`;
const SummaryItemPrice = styled.span`
  color: #484746;
  font-size: 22px;
`;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #272727;
  color: white;
  border: none;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #272727e5;
    color: #efecec;
  }
`;

const CartPage = () => {
  const { cart, setCart } = useContext(Cart);
  const [qty, setQty] = useState(1);
  const handleQty = () => {
    setQty(item.qty + 1);
  };

  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to="/">
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <Toptexts>
            <Toptext>Shopping Bag ({cart.length})</Toptext>
            <Toptext>My Wishlist (0)</Toptext>
          </Toptexts>
          <TopButton type="filled"> CHECKOUT</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.map((item) => (
              <Product key={item.id}>
                <ProductDetail>
                  <Image src={item.img} />
                  <Hr />
                  <Details>
                    <ProductName>
                      <b>Product: </b>
                      {item.name}
                    </ProductName>
                    <ProductId>
                      <b>ID: </b>1198509354621
                    </ProductId>

                    <ProductColor color={item.color} />

                    <ProductSize>
                      <b>Size: </b>M
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <StyledAddIcon onClick={handleQty} />
                    <ProductAmount>{item.qty}</ProductAmount>
                    <StyledRemoveIcon />
                  </ProductAmountContainer>
                  <ProductPrice>₹ {item.price}</ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>SubTotal</SummaryItemText>
              <SummaryItemPrice>₹ {total}</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>₹ 249</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>₹ 249</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText type="total">Total</SummaryItemText>
              <SummaryItemPrice>₹ {total}</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT</Button>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default CartPage;
