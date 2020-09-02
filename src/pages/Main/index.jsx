import React, { useState } from 'react';
import * as S from './styles';
import LogoRD from '../../assets/images/rd.png';
import LogoRDSmall from '../../assets/images/rd-small.png';
import LogoDrogRaia from '../../assets/images/drogaraia.png';
import LogoDrogasil from '../../assets/images/drogasil.png';
import LogoFarmasil from '../../assets/images/farmasil.png';
import LogoUnivers from '../../assets/images/univers.png';
import Logo4bio from '../../assets/images/4bio.png';
import DesktopImage from '../../assets/images/desktop.png';
import TabletImage from '../../assets/images/tablet.png';
import MobileImage from '../../assets/images/mobile.png';
import Popup from 'reactjs-popup';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../theme';
import { GlobalStyles } from '../../GlobalStyles';
import { MdClose } from 'react-icons/md';

// Popup
const StyledPopup = styled(Popup)`
  .popup-overlay {
    background: #000;
  }

  .popup-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 300px;
  }
`;

// Card
const Card = (props) => {
  return (
    <S.ContainerCard>
      <S.ContainerCardImage background={props.background}>
        <img src={props.imgSrc} alt="imagem no card" />
        <p>{props.titleImage}</p>
      </S.ContainerCardImage>
      <S.ContentCard>
        <p>{props.description}</p>
        <div className="button_card_container">
          <S.Link
            background={props.backgroundButton}
            onClick={props.onClick}
            href={props.href}
          >
            {props.textButton}
          </S.Link>
        </div>
      </S.ContentCard>
    </S.ContainerCard>
  );
};

// Funcao Principal
const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showHeaderState, setShowHeaderState] = useState(false);
  const [showRestState, setShowRestState] = useState(false);
  const [theme, setTheme] = useState('light');

  // Funcao que altera o tema da pagina
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <S.HeaderMobile showHeader={showHeaderState}>
          <S.NavMobile>
            <S.NavItemMobile>html5</S.NavItemMobile>
            <S.NavItemMobile>css3</S.NavItemMobile>
            <S.NavItemMobile>javascript</S.NavItemMobile>
            <S.NavItemMobile>react</S.NavItemMobile>
            <S.NavItemMobile>redux</S.NavItemMobile>
            <MdClose
              size={40}
              style={{ cursor: 'pointer' }}
              style={{ marginTop: '20px' }}
              onClick={() => {
                document.body.style.overflow = 'scroll';
                setShowHeaderState(false);
              }}
            >
              fechar
            </MdClose>
          </S.NavMobile>
        </S.HeaderMobile>
        <S.Header>
          <S.Logo src={LogoRD} />
          <S.Nav>
            <S.NavItem>html5</S.NavItem>
            <S.NavItem>css3</S.NavItem>
            <S.NavItem>javascript</S.NavItem>
            <S.NavItem>react</S.NavItem>
            <S.NavItem>redux</S.NavItem>
          </S.Nav>
          <S.MenuHamburguer
            size={30}
            onClick={() => {
              document.body.style.overflow = 'hidden';
              setShowHeaderState(true);
            }}
          />
        </S.Header>
        <S.Container>
          <S.Main>
            <h1 className="main_title">
              Crie este site <span>responsivo</span> com
              <span> REACT</span> utilizando
              <span> styled-components</span>
            </h1>
            <div className="main_description">
              <p>
                A fonte utilizada é a Open Sans de 300 a 800. exemplo:"Open
                Sans", Helvetica, sans-serif, arial;
                <br />
                Já as cores são:
                <br />
                <span
                  style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: '#007f56',
                    color: '#007f56',
                    display: 'inline-block',
                  }}
                />
                #007f56,
                <span
                  style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: '#868686',
                    color: '#000',
                    display: 'inline-block',
                  }}
                />
                #868686,{' '}
                <span
                  style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: '#FE9481',
                    color: '#868686',
                    display: 'inline-block',
                  }}
                />
                #FE9481,{' '}
                <span
                  style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: '#fcda92',
                    color: '#FE9481',
                    display: 'inline-block',
                  }}
                />
                #fcda92 e{' '}
                <span
                  style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: '#9C8CB9',
                    color: '#FE9481',
                    display: 'inline-block',
                  }}
                />
                #9C8CB9
              </p>
            </div>
            <div className="cards_container">
              <Card
                imgSrc={DesktopImage}
                background="#FE9481"
                backgroundButton="#FE9481"
                titleImage="Site Responsivo DESKTOP"
                description="Quando pressionado o botao Leia mais... o restante da informacao devera aparecer em scroll down."
                textButton="Leia mais..."
                onClick={() => setShowRestState(true)}
                href="#info"
              />
              <Card
                imgSrc={TabletImage}
                background={'#FCDA92'}
                backgroundButton="#FCDA92"
                titleImage="Site Responsivo TABLET"
                description="Quando pressionado o botao Leia mais... informacao devera aparecer completa em um popup na tela"
                textButton="Leia mais..."
                onClick={() => setShowModal(true)}
              />
              <Card
                imgSrc={MobileImage}
                background={'#9C8CB9'}
                backgroundButton="#9C8CB9"
                titleImage="Site Responsivo MOBILE"
                description="Quando pressionado o botao alterar tema... modifique o tema do site para blackfriday a seu gosto."
                textButton="alterar tema"
                onClick={toggleTheme}
              />
            </div>
            <div className="rest_info">
              <h1 id="info">Restante da informacao</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis
                bibendum posuere lorem at imperdiet. Curabitur et metus
                porttitor dui sagittis tincidunt lacinia ac odio. Sed tristique.
                tincidunt magna, in vehicula ligula sollicitudin eget.
                Pellentesque in orci justo. Sed vitae suscipit nisi. Aliquam
                erat volutpat. Cras nec eros orci.
              </p>
            </div>
          </S.Main>
          <S.Footer>
            <div className="copyright_logos">
              <p>RD 2017. Todos os direitos reservados</p>
              <S.Logo src={LogoDrogRaia} style={{ marginRight: '8px' }} />
              <S.Logo src={LogoDrogasil} style={{ marginRight: '8px' }} />
              <S.Logo src={LogoFarmasil} style={{ marginRight: '8px' }} />
              <S.Logo src={LogoUnivers} style={{ marginRight: '8px' }} />
              <S.Logo src={Logo4bio} />
            </div>
            <S.Logo src={LogoRDSmall} />
          </S.Footer>
          <StyledPopup
            contentStyle={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-around',
              width: '600px',
              height: '400px',
            }}
            modal
            closeOnDocumentClick={false}
            open={showModal}
            position="center center"
          >
            <span>
              {' '}
              Quando pressionado o botao Leia mais... informacao devera aparecer
              completa em um popup na tela
            </span>
            <S.Link background="#FCDA92" onClick={() => setShowModal(false)}>
              Fechar
            </S.Link>
          </StyledPopup>
        </S.Container>
      </>
    </ThemeProvider>
  );
};

export default App;
