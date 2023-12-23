// app/fonts.ts
import { Rubik, Montserrat, Nunito_Sans } from 'next/font/google'

/**
 * Rubik
 * @see https://fonts.google.com/specimen/Rubik
 */
const rubik = Rubik({
    subsets: ['latin'],
    variable: '--font-rubik',
})

/**
 * Montserrat
 * @see https://fonts.google.com/specimen/Montserrat
 */
const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
})

const nunitoSans = Nunito_Sans({
    subsets: ['latin'],
    variable: '--font-nunito-sans',
})

export const fonts = {
    rubik, montserrat, nunitoSans
}
