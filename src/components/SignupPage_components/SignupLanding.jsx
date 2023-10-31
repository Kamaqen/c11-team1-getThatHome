import styled from "@emotion/styled";
import rafikiUrl from "/src/assets/rafiki.svg";
import panaUrl from "/src/assets/pana.svg";

const Mainbackground = styled.div`
  width: 100%;
  height: calc(100vh - 160px);
  background: linear-gradient(to bottom, #f48fb126 50%, transparent 50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 54px;
  margin-top: 57px;
`;

const ProfileCard = styled.div`
  display: flex;
  padding: 16px 20px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
`;

const Signuplanding = ({ setRole }) => {
  return (
    <Mainbackground>
      <ContentContainer>
        <Text className="headline5">
          Choose the profile that best suits you
        </Text>
        <Text className="headline2">What are you looking for?</Text>
        <ProfileContainer>
          <ProfileCard
            className="j-center Headline6"
            onClick={() => setRole("landlord")}
          >
            <img src={rafikiUrl} alt="rafiki" />
            <Text className="headline6">Landlord</Text>
            <Text className="subtitle2">You want to rent or sell a home</Text>
          </ProfileCard>
          <ProfileCard
            className="j-center Headline6"
            onClick={() => setRole("home_seeker")}
          >
            <img src={panaUrl} alt="pana" />
            <Text className="headline6">Home seeker</Text>
            <Text className="subtitle2">You want to find a home</Text>
          </ProfileCard>
        </ProfileContainer>
      </ContentContainer>
    </Mainbackground>
  );
};

export default Signuplanding;
