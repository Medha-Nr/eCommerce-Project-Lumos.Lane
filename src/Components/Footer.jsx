import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 60vh;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
  font-weight: bold;
  font-family: "Urbanist", sans-serif;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 6px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease;
  }
`;
const Center = styled.div`
  flex: 1;
`;
const Title = styled.h2`
  margin-bottom: 30px;
`;
const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const Listitem = styled.li`
  width: 50%;
  margin-bottom: 20px;
`;
const Right = styled.div`
  flex: 1;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LUMOS.LANE</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          tenetur recusandae perferendis maiores facere. Laudantium saepe
          quisquam unde quasi ullam eum accusamus nam iste ab rerum enim amet,
          illum fuga dolorum iusto. Nam, molestias quo quas explicabo debitis
          quidem ducimus.
        </Desc>
        <SocialContainer>
          <SocialIcon color="#0668E1">
            <Facebook />
          </SocialIcon>
          <SocialIcon color=" #C13584 ">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#1D9BF0">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="#c4302b ">
            <YouTube />
          </SocialIcon>
          <SocialIcon color="#c8232c">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <Listitem>Home</Listitem>
          <Listitem>Cart</Listitem>
          <Listitem>Women's Fashion</Listitem>
          <Listitem>Men's Fashion</Listitem>
          <Listitem>Ethnic Wear</Listitem>
          <Listitem>Accessories</Listitem>
          <Listitem>Order Tracking</Listitem>
          <Listitem>Return Policy</Listitem>
          <Listitem>Wishlist</Listitem>
          <Listitem>Terms & Conditions</Listitem>
        </List>
      </Center>
      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 66 Dixie Lane, Wallstreet
          2384
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +91 28899 31718
        </ContactItem>

        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          123@gmail.dev
        </ContactItem>
        <Payment src="" />
      </Right>
    </Container>
  );
};

export default Footer;
