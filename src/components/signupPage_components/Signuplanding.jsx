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

const Text = styled.p`
  text-align: center;
`;

const ProfileContainer = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 54px;
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
          <div>
            <div className="j-center a-center">
              <img src="src/assets/rafiki.png" alt="rafiki" />
            </div>
          </div>
          <div>
            <div className="j-center">
              <img src="src/assets/pana.png" alt="pana" />
            </div>
          </div>
        </ProfileContainer>
      </ContentContainer>
    </Mainbackground>
  );
};

export default Signuplanding;
