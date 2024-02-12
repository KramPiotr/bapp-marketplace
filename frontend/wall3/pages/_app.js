import "./global.css";
// import { ChakraProvider } from "@chakra-ui/react"
import { AuthProvider } from "../ui/service/use-auth-client"

export default function App({ Component, pageProps }) {
  return (
    // <ChakraProvider>
    // // <html lang="en">
    //   <body className={`font-sans ${inter.variable} relative`}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      // </body>
    // </html>
    // </ChakraProvider>
  )
}
