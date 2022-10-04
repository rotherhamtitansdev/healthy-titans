/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "440px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "1.5xl": "1450px",
      "2xl": "1536px",
      "3xl": "1800px",
    },
    extend: {
      colors: {
        navbarBackgroundColor: "#EEEEEE",
        mobileNavbarBackgroundColor: "#F4F7FD",
        navbarSignUpButtonBackgroundColor: "#DC476D",
        homepageGradientDark: "#ACCDF6",
        homepageHeaderSubTitle: "#252948",
        homepageHeaderText: "#252948",
        signUpButtonTextColor: "#FFFFFF",
        nutritionInformationHeader: "#252948",
        primaryGrey: "#5C5C5C",
        titansDarkBlue: "#243A73",
        titansBrightPink: "#D14267",
        titansDarkGrey: "#545454",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      backgroundImage: {
        wave: "url('/src/img/wave.png')",
        wavesvg: "url('/src/img/wavesvg.svg')",
        byp_background: "url('/src/img/byp_background.png')",
        mbfooterwave: "url('/src/img/mbfooter_wave.png')",
        tbfooterwave: "url('/src/img/tbfooter_wave.png')",
        footerwave: "url('/src/img/footer_wave.png')",
        mobileWave: "url('/src/img/mobileWave.png')",
      },
      backgroundSize: {
        span: "100% 100%",
      },
    },
  },
};
