import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        gray: {
            "900": "#101023",
            "800": "#1F2829",
            "700": "#353646",
            "600": "#4B4D63",
            "500": "#616480",
            "400": "#797D9A",
            "300": "#9699B8",
            "200": "#B3B5C6",
            "100": "#D1D2DC",
            "50": "#EEEEF2"
        }
    },
    fonts: {
        heading: 'Roboto',
        body: 'Roboto'
    },
    styles: {
        global: {
            body: {
                bg: 'black',
                color: 'white'
            }
        }
    }
})