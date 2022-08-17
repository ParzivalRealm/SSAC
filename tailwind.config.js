/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#163355ff",
                  
          "secondary": "#5C0029",
                  
          "accent": "#F7E733",
                  
          "neutral": "#8a98a9ff",
                  
          "base-100": "#FFFFFF",
                  
          "info": "#D81E5B",
                  
          "success": "#36D399",
                  
          "warning": "#FBBD23",
                  
          "error": "#F87272",
        },
      },
      "winter"
    ],
  },
  plugins: [require("daisyui")],
}
