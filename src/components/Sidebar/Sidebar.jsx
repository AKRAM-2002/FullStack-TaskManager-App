import styled from "styled-components";
import { useGlobalState } from "../../context/globalProvider";
import avatar from "../../assets/avatar.jpeg";
import dashboardMenu from "../../utils/menu";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ThemeSwitchButton from "../Button/ThemeSwitchButton";
import {useClerk, useUser} from '@clerk/clerk-react';

export const Sidebar = () => {

  const clerk = useClerk();
  const { isSignedIn, user, isLoaded, imageUrl} = useUser();

  const handleSignOut = async () => {
    try {
      await clerk.signOut();
      console.log('User signed out successfully');
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  const use = useUser(); 

  useEffect(()=>{
    console.log(use)
  }, [user])




  const { theme } = useGlobalState();
  const [visibleSubMenus, setVisibleSubMenus] = useState({});
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);

  

  
  return (
    <SidebarStyled theme={theme}>
      <ProfileStyled>
        <ProfileOverlay></ProfileOverlay>
        <ProfileImg>
          <img src={user.imageUrl} alt="profile" />
        </ProfileImg>
        <ProfileName theme={theme}>
          <span>{user.firstName}</span>
          <span>{user.lastName}</span>
        </ProfileName>
      </ProfileStyled>

      <div className="menu">
        <ul>
          {dashboardMenu.map((menuItem) => (
            <li key={menuItem.label}>
              {menuItem.submenu ? (
                <>
                  <span
                    className="label">
                     <span className="icon">{menuItem.icon}</span>
                    {menuItem.label}
                  </span>
                  <span 
                      className="iconRight"
                      onMouseEnter={() => setIsDropdownHovered(true)}
                      onMouseLeave={() => setIsDropdownHovered(false)}
                  >
                    {
                      isDropdownHovered ? (
                      <img src={menuItem.iconRightBlack} alt="dropdown" />
                      ) : (
                      <img src={menuItem.iconRightWhite} alt="dropdown" />
                      )
                      }
                  </span>
                  {visibleSubMenus[menuItem.id] && (
                    <ul className="submenu">
                      {menuItem.submenu.map((submenuItem) => (
                        <li key={submenuItem.label}>
                          <Link to={submenuItem.path}>
                            {submenuItem.icon && (
                              <span
                                className="icon"
                                style={{ color: "white" }}
                              >
                                {submenuItem.icon}
                              </span>
                            )}
                            <span className="label">{submenuItem.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link to={menuItem.path}>
                  {menuItem.icon && (
                    <span style={{ color: menuItem.color }}>
                      {menuItem.icon}
                    </span>
                  )}
                  <span className="label">{menuItem.label}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>

        <SidebarBottom>
          <SignoutButton theme={theme} onClick={handleSignOut}>
            <ExitToAppIcon />
            <span className="label">Sign Out</span>
          </SignoutButton>
          <ThemeSwitchButton/>
        </SidebarBottom>


        
      </div>
    </SidebarStyled>
  );
};

const SidebarBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-top: 7.4rem;
`

const SidebarStyled = styled.nav`
  position: relative;
  width: ${(props) => props.theme.sidebarWidth};
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
  height: 95vh;
  padding: 1rem;
  font-size: 10px;

  .menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 15px;
    margin-right: 0.9em;

    span.iconRight{
      width: 12px;
      position: absolute;
      right: 3.5rem;
      z-index: 10;
    }

    span.iconRight{
      img {
        
        transition: transform 0.3s ease; 

        &:hover {
          transform: scale(1.1);
        }
      }
      
    }

    li {
      margin-bottom: 1rem;
      list-style-type: none;
      padding: 15px 35px;
      border-radius: 5px;
      background-color: hsl(0, 0%, 20%);
      margin: 8px 0;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      color: white;
      gap: 2rem;
    
    }
   

    ul li:hover {
      background-color: ${(props) => props.theme.btnColorPrimary};
      cursor: pointer;
      transition: 0.5s;
    }

    li:hover {
      color: black;
    }

    li {
      text-decoration: none;
      color: ${(props) => props.theme.colorFontPrimary};
      display: flex;
      align-items: center;
      font-size: 13px;
      font-weight: 600;

      .label {
        margin-left: .2rem; 
        gap: 2rem;
       
      }
    }

   

    ul {
      list-style: none;
      padding-left: 1rem;
      margin-top: 0.5rem;
    }
    

    ul.submenu a {
      .icon {
        margin-right: 0.5rem;
      }
    }


   
  }
`;


const SignoutButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${(props) => props.theme.colorFontPrimary};
  gap: 0.5em;
  font-size: 12px;
  font-weight: 600;
  
  background-color: ${(props) => props.theme.btnColorPrimary};
  border-radius: 15px;
  padding: 10px 10px;
  color: black;

  .label {
    margin-right: 0.3rem;
  }

  &:hover {
    color: white;
  }
`;

/*Profile Styled **/
const ProfileStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 1rem;
  gap: 1.5em;
  &:hover{
    cursor: pointer;
    opacity: 0.5;
   
    transition: 0.5s;
    border-radius: 0.5em 0.5em 0.5em;
    
    img{
      transform: scale(1.1);
    }
  }
  `;

const ProfileOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
`;

const ProfileImg = styled.div`
  img {
    width: 70px;
    border-radius: 50%;
    flex-shrink: 0;
  }
`;

const ProfileName = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.2em;
  font-size: 0.9rem;
  

  span{
    display: block;
    color: ${(props) => props.theme.colorTextSecondary};
    font-size: 14px;
    font-weight: 600;
    
    ;
  }
`;

