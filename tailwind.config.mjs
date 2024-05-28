/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			stencil: ['"Allerta Stencil"', ...defaultTheme.fontFamily.serif],
			'jost': ['"Jost"', ...defaultTheme.fontFamily.sans],
			sans: ['"Alumni Sans"', ...defaultTheme.fontFamily.sans],
		},
		extend: {
			colors: {
				'teal': '#0BFCE1'
			},
			keyframes: {
				'shrink-navbar': {
					'0%': {'background-color': 'rgba(0, 0, 0, 0)' },
					'100%': {'background-color': 'rgba(0, 0, 0, 0.85)',}
				},
				'expand-navbar': {
					'0%': {'background-color': 'rgba(0, 0, 0, 0.85)',},
					'100%': {'background-color': 'rgba(0, 0, 0, 0)',}
				},
			},
			animation: {
				'shrink-navbar': 'shrink-navbar 0.3s linear forwards',
				'expand-navbar': 'expand-navbar 0.3s linear forwards',
			},
		},
		rotate: {
			'30': '30deg',
			...defaultTheme.rotate,
		},
		aspectRatio: {
			'4/5': '4 / 5',
			...defaultTheme.aspectRatio,
		},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
