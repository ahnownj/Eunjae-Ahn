import "@/styles/globals.css";
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import CustomCursor from '@/components/Cursor';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(0deg, rgb(114, 136, 95) 0%, rgb(255, 239, 211) 100%);
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    min-height: 100vh;
  }

  /* Next.js 기본 버튼 스타일 제거 */
  .nextjs-toast-errors-parent {
    display: none;
  }
`;

const theme = {
  colors: {
    primary: '#333',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CustomCursor />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
