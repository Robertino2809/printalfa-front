import {createGlobalStyle} from "styled-components";
import {CartContextProvider} from "@/components/CartContext";
import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react";


const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  body{
    background-color: #fff;
    font-family: 'Poppins', sans-serif;
  }
  hr {
    border-color: #eee;
  }
`;



export default function App({ Component, pageProps: {session, ...pageProps } }) {
  return (
    <>
      <GlobalStyles />
      <SessionProvider session={session}>
        <CartContextProvider>
          <Component {...pageProps} />
        </CartContextProvider>
      </SessionProvider>
    </>
  );
}
