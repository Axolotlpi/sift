const config = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary-0': '#ffffff',
				'primary-1': '#D9D9D9',
				'primary-2': '#A1A5A6',
				'primary-3': '#353D40',
				'accent-1': '#0090DE',
				'accent-2': '#D80329',
				'accent-3': '#F49034'
			},
			fontFamily: {
				monospace: ['Fira Code', 'monospace']
			}
		}
	},
	plugins: []
};

module.exports = config;
