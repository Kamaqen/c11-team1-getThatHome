import styled from "@emotion/styled";

const Mainbackground = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* Ajusta la altura según tus necesidades */
  background: linear-gradient(to bottom, #f48fb126 50%, transparent 50%);
`;

const ContentContainer = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  top: 50%;
  right: 50%;
  transform: transladeY(50%);
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 54px;
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

const Signuplanding = () => {
  return (
    <Mainbackground>
      <ContentContainer>
        <Text className="headline5">
          Selecciona el perfil con el que te identificas
        </Text>
        <Text className="headline2">¿Qué estás buscando?</Text>
        <ProfileContainer>
          <ProfileCard className="j-center Headline6">
            <img src="src/assets/rafiki.png" alt="rafiki" />
            <Text>Landlord</Text>
            <Text className="Subtitle2">You want to rent or sell a home</Text>
          </ProfileCard>
          <ProfileCard className="j-center Headline6">
            <img src="src/assets/pana.png" alt="pana" />
            <Text>Home seeker</Text>
            <Text className="Subtitle2">You want to find a home</Text>
          </ProfileCard>
        </ProfileContainer>
      </ContentContainer>
    </Mainbackground>
  );
};

export default Signuplanding;
