function withOpacityValue(variable, opacityVariable, opacityValue) {
  if (opacityValue !== undefined) {
    return `rgba(var(${variable}),${opacityValue})`;
  }
  if (opacityVariable !== undefined) {
    return `rgba(var(${variable}),${opacityValue},1)`;
  }
  return `rgb(var(${variable}))`;
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Goldman", "cursive"],
        text: ["Ubuntu", "sans-serif"],
      },
      colors: {
        primary: ({ opacityVariable, opacityValue }) =>
          withOpacityValue("--color-primary", opacityVariable, opacityValue),
        primaryDark: ({ opacityVariable, opacityValue }) =>
          withOpacityValue(
            "--color-primary-dark",
            opacityVariable,
            opacityValue
          ),
        secondary: ({ opacityVariable, opacityValue }) =>
          withOpacityValue("--color-secondary", opacityVariable, opacityValue),
        secondaryDark: ({ opacityVariable, opacityValue }) =>
          withOpacityValue(
            "--color-secondary-dark",
            opacityVariable,
            opacityValue
          ),
        background: ({ opacityVariable, opacityValue }) =>
          withOpacityValue("--color-background", opacityVariable, opacityValue),
        backgroundDark: ({ opacityVariable, opacityValue }) =>
          withOpacityValue(
            "--color-background-dark",
            opacityVariable,
            opacityValue
          ),
      },
    },
  },
  plugins: [],
};
