/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundColor: {
        "black-t-50": "rgba(0,0,0,0.5)",
        "brand-primary": "#434E5E",
        "brand-secondary": "#58677C",
        resume: "#434E5E",
      },
      screens: {
        print: { raw: "print" },
      },
      height: {
        "1/2": "50%",
      },
    },
  },
  plugins: [],
};
