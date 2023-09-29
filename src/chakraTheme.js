import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        primary: {
            25: "#FFFAF0",
            50: "#F6AD55",
            100: "#C05621",
      
        },
        secondary: {
            50: "#EDF2F7",
            100: "#171923",
      
        },
    },
    fonts: {
        body: "Helvetica, sans-serif",
        heading: "Georgia, serif",
        mono: "Menlo, monospace",
    },
    fontWeights: {
        light: 300,
        semibold: 600,
        bold: 700,
    },

})


export default theme;
