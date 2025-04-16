import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		boxShadow:{
			'btn-back-light': '16px 0 40px #e4e4e4',
        	'btn-back-dark': '16px 0 40px #0f172a',
		},
		backdropBlur:{
			'sm': '5px',
		},
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		animation: {
			first: "moveVertical 30s ease infinite",
			second: "moveInCircle 20s reverse infinite",
			third: "moveInCircle 40s linear infinite",
			fourth: "moveHorizontal 40s ease infinite",
			fifth: "moveInCircle 20s ease infinite",
		},
		keyframes: {
			moveHorizontal: {
			  "0%": {
				transform: "translateX(-50%) translateY(-10%)",
			  },
			  "50%": {
				transform: "translateX(50%) translateY(10%)",
			  },
			  "100%": {
				transform: "translateX(-50%) translateY(-10%)",
			  },
			},
			moveInCircle: {
			  "0%": {
				transform: "rotate(0deg)",
			  },
			  "50%": {
				transform: "rotate(180deg)",
			  },
			  "100%": {
				transform: "rotate(360deg)",
			  },
			},
			moveVertical: {
			  "0%": {
				transform: "translateY(-50%)",
			  },
			  "50%": {
				transform: "translateY(50%)",
			  },
			  "100%": {
				transform: "translateY(-50%)",
			  },
			},
		},
		fontFamily: {
			orbitron: ['var(--font-orbitron)', 'sans-serif'],
			roboto: ['var(--font-roboto)', 'sans-serif'],
			poppins: ['var(--font-poppins)', 'sans-serif'],
		},
  	}
  },
  plugins: [require("tailwindcss-animate"),],
};
export default config;
