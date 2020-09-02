import styled from 'styled-components';
import media from 'styled-media-query';
import { MdMenu } from 'react-icons/md';

export const Container = styled.div`
  display: flex;
  width: 1200px;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  ${media.between('100px', '466px')`
    width: 30%;
  `}

  ${media.between('467px', '799px')`
    width: 40%;
  `}

  ${media.between('800px', '999px')`
    width: 60%;
  `}

  ${media.between('1000px', '1279px')`
    width: 80%;
  `}

  ${media.greaterThan('1280px')`
    width: 100%;
  `}
`;

export const Logo = styled.img``;

export const HeaderMobile = styled.header`
  display: ${(props) => (props.showHeader === true ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #007f56;
  z-index: 20;
`;

export const NavMobile = styled.nav`
  width: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Nav = styled.nav`
  ${media.lessThan('800px')`
    display: none;
  `}
`;

export const NavItemMobile = styled.a`
  font-family: 'Open Sans';
  font-weight: 300;
  font-size: 48px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colorTextHeaderMobile};
  margin: 0px 6px;
`;

export const MenuHamburguer = styled(MdMenu)`
  display: none;
  ${media.lessThan('800px')`
    display: block;  
  `}

  &:hover {
    cursor: pointer;
  }
`;

export const NavItem = styled.a`
  font-family: 'Open Sans';
  font-weight: 300;
  font-size: 22px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colorTextHeader};
  margin: 0px 6px;

  ${media.lessThan('800px')`
    display: none;
  `}

  ${media.between('800px', '999px')`
    font-size: 18px;
  `}

  ${media.between('1000px', '1170px')`
    font-size: 20px;
  `}
`;

export const Main = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;

  .rest_info {
    margin-top: 64px;
    margin-bottom: 64px;
    > h1 {
      color: #007f56;
    }
    > p {
      color: #868686;
      margin-top: 20px;
      width: 51vw;
    }
  }

  > .main_title {
    font-size: 51px;
    line-height: 51px;
    font-weight: 300;
    margin-top: 40px;
    color: ${({ theme }) => theme.colorTitleMain};
    width: 80vw;
    > span {
      font-weight: 900;
    }
  }

  > .main_description {
    font-size: 28px;
    font-weight: 300;
    margin-top: 40px;
    color: #868686;
    width: 51vw;
  }

  > .cards_container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-top: 22px;
  }

  ${media.between('466px', '799px')` 

      width: 40%;

      .main_title {
        font-size: 26px;        
      }

      .main_description {
        font-size: 20px;        
      }

      .cards_container {        
        flex-direction: column;       
        margin-top: 22px;
      }
  `}

  ${media.between('800px', '1000px')` 

      width: 60%;

      .main_title {
        font-size: 40px;        
      }

      .main_description {
        font-size: 24px;        
      }

      .cards_container {        
        flex-direction: column;       
        margin-top: 22px;
      }
  `}
`;

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  height: 80px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 10px;

  > .copyright_logos {
    display: flex;
    align-items: center;
    p {
      font-size: 12px;
      color: ${({ theme }) => theme.colorTextFooter};
    }
  }

  ${media.lessThan('800px')`
    flex-direction: column;
    .copyright_logos {
      display: flex;      
      flex-direction: column;    

      > img{ margin-top: 10px;margin-bottom: 10px;}
    }
  `}

  ${media.lessThan('1280px')`
    width: 80%;
  `}

  ${media.greaterThan('large')`
    
  `}
`;

export const ContainerCard = styled.div`
  width: 300px;
  height: auto;
  margin-right: 22px;

  ${media.lessThan('1000px')`
     margin-top: 20px;
  `}
`;

export const ContainerCardImage = styled.div`
  width: 300px;
  height: 212px;
  background: #fe9481;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: ${(props) => props.background};

  > img {
    margin: 12px;
  }

  > p {
    font-weight: 300px;
    font-size: 22px;
    color: ${({ theme }) => theme.colorContainerCardImage};
    margin-top: 10px;
  }
`;

export const ContentCard = styled.div`
  background: ${({ theme }) => theme.contentCardBgColor};
  padding: 8px 10px;

  > .button_card_container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
  > p {
    font-weight: 300;
    color: ${({ theme }) => theme.colorTextCard};
    font-size: 14px;
    text-align: left;
    padding: 8px;
    line-height: 20px;
  }
`;

export const Link = styled.a`
  padding: 4px;
  background: #fe9481;
  color: #fff;
  font-size: 16px;
  border-style: none;
  background: ${(props) => props.background};
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;
