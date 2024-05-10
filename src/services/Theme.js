export const theme = {
  colors: {  
    white: "#FBFBFB",
    blue: "#0957C3",
    lightblue: "rgba(9, 87, 195, 0.2)",
    textBlack: "#11101C",
    textGray: "rgba(17, 16, 28, 0.5)",
    border: "rgba(251, 251, 251, 0.4)",
    inputBorder: "rgba(17, 16, 28, 0.1)",
    green: "#38CD3E",
    timeColor: "rgba(17, 16, 28, 0.3)",
    avatarBorder: "rgba(240, 63, 59, 0.2)",
    grayBackgraund: "#f3f3f3",
    gold: "#FFC531",
    },

    radii: {
        sm: "4px",
        md: "10px",
        lg: "16px",
    },

    fontSizes: {
    small: '14px',
    medium: '18px',
    large: '22px',
    xl: '30px',
    xxl: '34px',
    xxxl: '42px',
    },
    
    breakpoints: {
    xs: '320px',
    s: '768px',
    m: '1024px',
    l: '1280px',
    xl: '1440px',
  },

  animations: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },

  transition: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',

  spasing: (value) => `${value * 4}px`,
    
}