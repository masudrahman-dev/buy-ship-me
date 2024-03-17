/** @type {import('tailwindcss').Config} */
import { blackA, violet, green, mauve } from "@radix-ui/colors";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        silver: {
          DEFAULT: "#6B717A",
          100: "#F7F8FA",
          200: "#D9D9D9",
          300: "#E4EBF5",
        },
        msGreen: {
          DEFAULT: "#00893C",
          light: "#DFFFED",
        },
        msGray: {
          DEFAULT: "#EDF2FA",
        },
        msBlue: {
          100: "#EDF2FA",
        },

        ...blackA,
        ...green,
        ...mauve,
        ...violet,
      },
      spacing: {
        base: "1rem",
      },
      fontSize: {
        heading: [
          "3rem",
          {
            lineHeight: "3.75rem",
            letterSpacing: "-0.02em",
            fontWeight: "600",
          },
        ],
        label: [
          "14px",
          {
            fontWeight: "400",
          },
        ],
        base: [
          "1rem",
          {
            fontWeight: "400",
          },
        ],

        title: [
          "2.25rem",
          {
            lineHeight: "2.75rem",
            letterSpacing: "-0.02em",
            fontWeight: "600",
          },
        ],
        subtitle: [
          "1.875rem",
          {
            lineHeight: "2.75rem",
            fontWeight: "600",
          },
        ],
      },
    },
  },
  plugins: [],
};
