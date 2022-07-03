module.exports = {
  content: [
    './pages/**/*.{js,jsx,mdx}',
    './components/**/*.{js,jsx,mdx}',
  ],
  darkMode: 'media', // or 'false' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
          code: {
            backgroundColor: theme("colors.gray.100"),
            color: "#DD1144",
            fontWeight: "400",
            "border-radius": "0.25rem"
          },
          "code::before": {
            content: '""',
            "padding-left": "0.25rem"
          },
          "code::after": {
            content: '""',
            "padding-right": "0.25rem"
          },
          },
        },
      }),
    },
  },
  
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
