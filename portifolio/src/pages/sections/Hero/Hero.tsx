import { styled } from "@mui/material"; 
import Avatar from "../../../../src/assets/images/avatar.jpg";

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
  }));

  return (
    <>
      <StyledHero> 
        olá
        <img src= {Avatar} />
        </StyledHero>
    </>
  );
};

export default Hero;
