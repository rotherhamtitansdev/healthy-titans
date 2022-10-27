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
        homepageGradientDark: "#ACCDF6",
        homepageHeaderSubTitle: "#252948",
        homepageHeaderText: "#252948",
        nutritionInformationHeader: "#252948",
        primaryGrey: "#5C5C5C",
        titansDarkBlue: "#243A73",
        titansBrightPink: "#D03E65",
        titansDarkGrey: "#545454",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      backgroundImage: {
        wave: "url('/src/img/wave.png')",
        wavesvg: "url('/src/img/wavesvg.svg')",
        byp_background:
          "url('https://firebasestorage.googleapis.com/v0/b/rotherham-titans-app.appspot.com/o/BYPImages%2Fbyp_background.png?alt=media&token=def647a4-03f7-4b7e-a86a-2a33155fbf8d')",
        quiz_background:
          "url('https://firebasestorage.googleapis.com/v0/b/rotherham-titans-app.appspot.com/o/QuizImages%2Fquiz_background.svg?alt=media&token=01bed7c9-68be-494a-bb58-b8c274f4f3b1')",
        quiz_correct_answer:
          "url('https://firebasestorage.googleapis.com/v0/b/rotherham-titans-app.appspot.com/o/QuizImages%2Fsmile.svg?alt=media&token=b268f4ea-3218-4aee-ba02-735588ace5c8')",
        quiz_incorrect_answer:
          "url('https://firebasestorage.googleapis.com/v0/b/rotherham-titans-app.appspot.com/o/QuizImages%2Fsad.svg?alt=media&token=25acf16c-1b73-4e2b-ad78-2725985176e7')",
        quiz_tick:
          "url('https://firebasestorage.googleapis.com/v0/b/rotherham-titans-app.appspot.com/o/QuizImages%2Ftick.svg?alt=media&token=e58940a5-c536-4a30-98cc-bc09d5854246')",
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
