import styled from "styled-components";
import { useGlobalState } from "../../context/globalProvider";
import avatar from "../../assets/avatar.jpeg";
import dashboardMenu from "../../utils/menu";
import { useState } from "react";

export const Sidebar = () => {
  const { theme } = useGlobalState();
  const [visibleSubMenus, setVisibleSubMenus] = useState({});

  const toggleSubmenu = (menuItem) => {
    setVisibleSubMenus((prevVisibleSubmenus) => ({
      ...prevVisibleSubmenus,
      [menuItem.id]: !prevVisibleSubmenus[menuItem.id],
    }));
  };

  return (
    <SidebarStyled theme={theme}>
      <ProfileStyled>
        <ProfileOverlay></ProfileOverlay>
        <ProfileImg>
          <img src={avatar} alt="profile" width={70} height={70} />
        </ProfileImg>
        <ProfileName>
          <span>Akram </span>
          <span>Boutzouga</span>
        </ProfileName>
      </ProfileStyled>

      <div className="menu">
        <ul>
          {dashboardMenu.map((menuItem) => (
            <li key={menuItem.label}>
              {menuItem.submenu ? (
                <>
                  <span
                    className="label"
                    onClick={() => toggleSubmenu(menuItem)}
                  >
                    {menuItem.label}
                  </span>
                  {visibleSubMenus[menuItem.id] && (
                    <ul className="submenu">
                      {menuItem.submenu.map((submenuItem) => (
                        <li key={submenuItem.label}>
                          <a href={submenuItem.path}>
                            {submenuItem.icon && (
                              <span
                                className="icon"
                                style={{ color: "white" }}
                              >
                                {submenuItem.icon}
                              </span>
                            )}
                            <span className="label">{submenuItem.label}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <a href={menuItem.path}>
                  {menuItem.icon && (
                    <span style={{ color: menuItem.color }}>
                      {menuItem.icon}
                    </span>
                  )}
                  <span className="label">{menuItem.label}</span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </SidebarStyled>
  );
};

const SidebarStyled = styled.nav`
  position: relative;
  width: ${(props) => props.theme.sidebarWidth};
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
  height: 80vh;
  padding: 1rem;
  font-size: 10px;

  .menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 15px;
    padding-left: 1rem;

    li {
      margin-bottom: 1rem;
      list-style-type: none;
      padding: 15px 35px;
      border-radius: 5px;
      background-color: hsl(0, 0%, 20%);
      margin: 8px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      color: white;
    }

    ul li:hover {
      background-color: hsl(75, 94%, 57%);
      cursor: pointer;
      transition: 0.5s;
    }

    a:hover {
      color: black;
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.colorFontPrimary};
      display: flex;
      align-items: center;
      gap: 0.5em;
      font-size: 12px;
      font-weight: 600;

      .label {
        margin-right: 0.5rem;
      }
    }

    ul {
      list-style: none;
      padding-left: 1rem;
      margin-top: 0.5rem;
    }
  }
`;

const ProfileStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 1rem;
  background-color: ${(props) => props.theme.colorBg2};
  border-radius: 3rem;
`;

const ProfileOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
`;

const ProfileImg = styled.div`
  img {
    border-radius: 50%;
    /* Add any other image styles */
  }
`;

const ProfileName = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3em;
  span {
    display: block;
    color ${(props) => props.theme.colorFontPrimary};
  }
`;
