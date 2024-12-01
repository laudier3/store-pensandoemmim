import styled from "styled-components";

export const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
`

export const Wrapper = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 16px;
`

export const Row = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 16px 0;

  > a {
    font-size: 14px;
    text-decoration: nano;
    color: var(--color-blue);
    padding: 2.5px 0;

    & + a {
      padding-left: 10px;
      border-left: 1px solid var(--color-border);
      margin-left: 10px;
    }
  }

`

export const Panel = styled.div`
  background: var(--color-white);
  box-shadow: var(--panel-shadow);

  display: drid;
  grid-template-columns: 65fr 35fr;
`

export const Colum = styled.div`
  &:first-child {
    border-right: 1px solid var(--color-border);
  }
`

export const Gallery = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 530px;


  > img {
    height: 73%;
  }
`

export const Section = styled.div`
  border-top: 1px solid var(--color-border);
  padding: 48px 32px;

  display: flex;
  flex-direction: column;

  > h4 {
    font-size: 18px;
    margin-bottom: 40px;
  }

  > div {
    display: flex;
    flex-direction: column;

    > span {
      margin-top: 16px;
    }
    .title {
      font-size: 16px;
      color: var(--color-black);
    }
    .description {
      margin-top: 5px;
      font-size: 14px;
      color: var(--color-gray);
      line-height: 19px;
    }
  }
  
  > a {
    margin-top: 20px;
    font-size: 14px;
    text-decoration: none;
  }
`

export const Description = styled.div`
  border-top: 1px solid var(--color-corder);
  padding: 44px;


  > h2 {
    font-size: 24px;
    margin-bottom: 32px;
  }

  > p {
    font-size: 20px;
    color: var(--color-gray);
    line-height: 27px;
  }

`
