import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 2rem;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 