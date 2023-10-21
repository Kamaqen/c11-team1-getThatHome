import styled from "@emotion/styled";

// const CardContainer = styled.div`
//   display: flex;
//   padding: 0px 32px;
//   flex-direction: column;
//   align-items: center;
//   gap: 32px;
//   align-self: stretch;
// `;

// const CardContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   padding: 32px;
//   row-gap: 32px;
//   column-gap: 64px;
// `;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 16px 0px;
  row-gap: 32px;
  column-gap: 64px;
`;

const CardList = ({ length, children }) => {
  return (
    <>
      <p className="headline6 mt-md self-start ">{length} Properties found</p>
      <CardContainer>{children}</CardContainer>
    </>
  );
};

export default CardList;
