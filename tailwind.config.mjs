/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		fontFamily: {
			stencil: ['"Allerta Stencil"', ...defaultTheme.fontFamily.serif],
			sans: ['"Alumni Sans"', ...defaultTheme.fontFamily.sans],
			'josefin': ['"Josefin Sans"', ...defaultTheme.fontFamily.sans],
		},
		extend: {
			colors: {
				'teal': '#0BFCE1'
			},
		}
	},
	plugins: [],
}
