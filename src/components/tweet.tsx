import styled from "styled-components";
import { Itweet } from "./timeline";

const Wrapper = styled.div`
  display: grind;
  grid-template-columns: 3fr 1fr;
  border: 1px solid rgbs(255,255,255,0.5);
  border-radius: 15px;'

`;

const Column = styled.div``;

const Photo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 15px;
`;

const Username = styled.span`
  font-weight: 600;
  font-size: 15px;
`;

const Payload = styled.p`
  margin: 10px 0px;
  font-size: 15px;
`;

export default function Tweet({ username, photo, tweet }: Itweet) {
  return (
    <Wrapper>
      <Column>
        <Username>{username}</Username>
        <Payload>{tweet}</Payload>
      </Column>
      {photo ? (
        <Column>
          <Photo src={photo} />
        </Column>
      ) : null}
      ;
    </Wrapper>
  );
}