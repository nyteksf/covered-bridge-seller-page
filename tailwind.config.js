export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
  	extend: {
  		opacity: {
  			'437': '0.0436518'
  		},
  		letterSpacing: {
  			tightest: '0.08125rem'
  		},
  		fontFamily: {
  			montserrat: [
  				'Montserrat',
  				'sans-serif'
  			],
  			'pt-serif': [
  				'PT Serif"',
  				'serif'
  			],
  			lato: [
  				'Lato',
  				'sans-serif'
  			]
  		},
  		keyframes: {
  			jiggle: {
  				'0%': {
  					transform: 'translateX(0)'
  				},
  				'15%': {
  					transform: 'translateX(-5px)'
  				},
  				'30%': {
  					transform: 'translateX(5px)'
  				},
  				'45%': {
  					transform: 'translateX(-3px)'
  				},
  				'60%': {
  					transform: 'translateX(3px)'
  				},
  				'75%': {
  					transform: 'translateX(-1px)'
  				},
  				'90%': {
  					transform: 'translateX(1px)'
  				},
  				'100%': {
  					transform: 'translateX(0)'
  				}
  			},
  			spinner: {
  				'0%': {
  					transform: 'rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg)'
  				}
  			}
  		},
  		animation: {
  			jiggle: 'jiggle 0.6s ease-in-out',
  			spinner: 'spinner 650ms linear infinite'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
  safelist: [
    {
      pattern: /bg-\[url\(.*\)\]/,
    },
  ],
};
