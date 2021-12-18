/** @jsxImportSource @emotion/react */
import { CardWrapper, Container, Title, CardInfo, ImageEffect } from "./style";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";

function RecommendedCard({ number, name, imgSource, href, owned }) {
  return (
    <Link
      to={href}
    >
      <CardWrapper>
        <Container>
          <Title>
            #{number} {name}
          </Title>
          <div css={ImageEffect}>
            <img src={imgSource} alt={`pokemon-${name}`} loading="lazy" />
          </div>
          <CardInfo>Owned: {owned}</CardInfo>
          <div
            css={css`
              width: max-content;
              padding: 0.5rem;
              border: 2px solid black;
              background-color: white;
              font-size: 0.7rem;
              color: black;
            `}
          >
            Recommended!
          </div>
        </Container>
      </CardWrapper>
    </Link>
  );
}

export default RecommendedCard;
