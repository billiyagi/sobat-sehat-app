/* theme.ts */
import { extendTheme } from "@chakra-ui/react";
import { Nunito, Montserrat } from "next/font/google";

const nunito = Nunito({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
});

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800', '900', '100'],
});

const theme = extendTheme({
    fonts: {
        heading: montserrat.style.fontFamily,
        body: nunito.style.fontFamily,
    }
});

export default theme;