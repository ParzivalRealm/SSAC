/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#053C61",
                  
          "secondary": "#5C0029",
                  
          "accent": "#68EDC6",
                  
          "neutral": "#F0F0F0",
                  
          "base-100": "#FFFFFF",
                  
          "info": "#D81E5B",
                  
          "success": "#36D399",
                  
          "warning": "#064B79",
                  
          "error": "#085A91",
        },
      },
      "winter", "business"
    ],
  },
  plugins: [require("daisyui")],
  
}
