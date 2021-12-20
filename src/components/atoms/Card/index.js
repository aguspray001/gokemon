/** @jsxImportSource @emotion/react */
import { CardWrapper, Container, Title, ImageEffect, cardInfo } from "./style";
import { Link } from "react-router-dom";

function Card({ number, name, imgSource, href, owned, cardType="default", nickname, onClick }) {
  return (
    <Link to={cardType==="default"?href:""} onClick={onClick}>
      <CardWrapper>
        <Container>
          <Title>#{number} {name}</Title>
          <div css={ImageEffect}>
            <img width={100} height={100} src={imgSource} alt={`pokemon-${name}`}/>
          </div>
          <div css={cardInfo(cardType)}>
            {
              cardType==="default"? `Owned: ${owned}`:`${nickname}`
            }
          </div>
        </Container>
      </CardWrapper>
    </Link>
  );
}

export default Card;
