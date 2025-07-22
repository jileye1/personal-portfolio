import styled from "styled-components";

export const NavBarStyled = styled.nav`
  background-color: var(--color-primary-dark);
  border-bottom: 1px solid var(--color-navbar-border);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(147, 112, 219, 0.1);

  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  .logo-container {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;

    img {
        width: auto;
        height: 1.4rem;
        margin-right: 12px;
    }

    .title {
        display: flex;
        flex-direction: column;

        span {
            font-family: monospace;
            font-size: 1rem;
            font-weight: 600;
            color: var(--color-white);
            margin: 0;
            line-height: 1.2;
        }
    }
  }

  .menu-container {
    nav {
      ul {
        display: flex;
        gap: 2rem;
        list-style: none;
        margin: 0;
        padding: 0;

        li {
          a {
            text-decoration: none;
            color: var(--color-white);
            font-size: 0.9rem;
            font-weight: 500;
            letter-spacing: 0.5px;
            transition: all 0.3s ease;
            padding: 0.5rem 0;
            position: relative;

            &:hover {
              color: var(--color-accent-light);
              transform: translateY(-1px);
            }

            &::after {
              content: '';
              position: absolute;
              width: 0;
              height: 2px;
              bottom: 0;
              left: 0;
              background-color: var(--color-accent-light);
              transition: width 0.3s ease;
            }

            &:hover::after {
              width: 100%;
            }
          }
        }
      }
    }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    & > * {
      padding: 1rem;
      flex-direction: column;
      gap: 1rem;
    }

    .menu-container nav ul {
      gap: 1.5rem;
    }
  }
}

`