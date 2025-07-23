import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: var(--color-background-gradient);
  box-shadow: 0px 5px 8px var(--color-primary-dark);
  color: var(--color-white);
  margin-top: auto;

  .content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 2rem;
  }

  .name {
    font-size: 0.7rem;
    color: var(--color-primary-dark);
  }

  @media (max-width: 768px) {
    .content {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
      padding: 2rem;
    }
  }
`