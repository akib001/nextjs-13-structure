'use client'
import {createTheme, ThemeProvider} from "@mui/material";
import Header from "@/app/(frontend)/_components/Header";
import '../globals.css'
import Footer from "@/app/(frontend)/_components/Footer";
import ContentBody from "@/app/(frontend)/_components/ContentBody";

const theme = createTheme({});

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body suppressHydrationWarning={true}>
        <ThemeProvider theme={theme}>
            <Header/>
            <ContentBody>
                {children}
            </ContentBody>
            <Footer/>
        </ThemeProvider>
        </body>
        </html>
    )
}
