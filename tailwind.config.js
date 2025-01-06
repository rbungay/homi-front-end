/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "#042C23", // main text color
        lightTextColor: "#ACCBe1", // text on dark backgrounds
        logoColor: "#ACCBE1", // main homi logo
        buttonColor: "#ACCBE1",
        cardColor: "#D9D9D9", // background for card
        whiteColor: "#FFFFFF", // white for forms, backgrounds for cards
        backgroundColor: "#7C98B3",
        alternativeColor: "#637081", // background for dark cards
        darkColor: "#536B78", // for footer
      },
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
        serif: ["Montserrat", "serif"],
      },
      maxHeight: {
        amenities: "20rem",
      },
    },
  },
  plugins: [],
};

/*

textColor: "#042C23", // main text color
lightTextColor: "#E1EBE0", // text on dark backgrounds
logoColor: "#65B6A3", // main homi logo
buttonColor: "#65B6A3", // button teal
cardColor: "#D9D9D9", // background for card
whiteColor: "#FFFFFF", // white for forms, backgrounds for cards
backgroundColor: "#E1EBE0", // honeydew for background
alternativeColor: "#417367", // background for dark cards
darkColor: "#042C23" // for footer

*/
