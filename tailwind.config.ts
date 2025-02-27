import type { Config } from 'tailwindcss';

export default {
    darkMode: ['class'],
    content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			blue: {
  				'100': '#CECFFF',
  				'200': '#A6A8FF',
  				'300': '#8486FA',
  				'400': '#5E61FF',
  				'500': '#3235FF',
  				'600': '#0004FF',
  				'700': '#0004DA',
  				'800': '#0003AB',
  				'900': '#000282',
  				'1000': '#00025C'
  			},
  			yellow: {
  				'100': '#FFE79B',
  				'200': '#FFDD6E',
  				'300': '#FFD54E',
  				'400': '#FFCC26',
  				'500': '#FFC300',
  				'600': '#EBB400',
  				'700': '#C79800',
  				'800': '#9B7700',
  				'900': '#685000',
  				'1000': '#443400'
  			},
  			red: {
  				'100': '#FFBDA7',
  				'200': '#FF9C7B',
  				'300': '#FF784B',
  				'400': '#FF5921',
  				'500': '#FF4000',
  				'600': '#CB3300',
  				'700': '#AE2C00',
  				'800': '#8A2200',
  				'900': '#641900',
  				'1000': '#441100'
  			},
  			green: {
  				'100': '#CDFFDD',
  				'200': '#9EFFBE',
  				'300': '#70FFA0',
  				'400': '#2DFF73',
  				'500': '#00FF55',
  				'600': '#00DC49',
  				'700': '#00BD3F',
  				'800': '#008D2F',
  				'900': '#007126',
  				'1000': '#004417'
  			},
  			purple: {
  				'100': '#EEBCFF',
  				'200': '#E188FF',
  				'300': '#D65CFF',
  				'400': '#C928FF',
  				'500': '#BF00FF',
  				'600': '#A800E0',
  				'700': '#8C00BB',
  				'800': '#700095',
  				'900': '#51006C',
  				'1000': '#330044'
  			},
  			grayscale: {
  				'10': '#101010',
  				'30': '#303030',
  				'40': '#404040',
  				'50': '#505050',
  				'60': '#606060',
  				'70': '#707070',
  				'80': '#808080',
  				'90': '#909090',
  				ff: '#FFFFFF',
  				f6: '#F6F6F6',
  				e0: '#E0E0E0',
  				d0: '#D0D0D0',
  				c0: '#C0C0C0',
  				b0: '#B0B0B0',
  				a0: '#A0A0A0',
  				'00': '#000000',
  				font: '#202020'
  			},
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
  		},
  		fontSize: {
  			'body-01': [
  				'18px',
  				{
  					fontWeight: '700'
  				}
  			],
  			'body-02': [
  				'18px',
  				{
  					fontWeight: '600'
  				}
  			],
  			'body-03': [
  				'18px',
  				{
  					fontWeight: '500'
  				}
  			],
  			'body-04': [
  				'18px',
  				{
  					fontWeight: '400'
  				}
  			],
  			'body-05': [
  				'16px',
  				{
  					fontWeight: '700'
  				}
  			],
  			'body-06': [
  				'16px',
  				{
  					fontWeight: '600'
  				}
  			],
  			'body-07': [
  				'16px',
  				{
  					fontWeight: '500'
  				}
  			],
  			'body-08': [
  				'16px',
  				{
  					fontWeight: '400'
  				}
  			],
  			'body-09': [
  				'15px',
  				{
  					fontWeight: '700'
  				}
  			],
  			'body-10': [
  				'15px',
  				{
  					fontWeight: '600'
  				}
  			],
  			'body-11': [
  				'15px',
  				{
  					fontWeight: '500'
  				}
  			],
  			'body-12': [
  				'15px',
  				{
  					fontWeight: '400'
  				}
  			],
  			'body-13': [
  				'14px',
  				{
  					fontWeight: '700'
  				}
  			],
  			'body-14': [
  				'14px',
  				{
  					fontWeight: '600'
  				}
  			],
  			'body-15': [
  				'14px',
  				{
  					fontWeight: '500'
  				}
  			],
  			'body-16': [
  				'14px',
  				{
  					fontWeight: '400'
  				}
  			],
  			'caption-01': [
  				'13px',
  				{
  					fontWeight: '700'
  				}
  			],
  			'caption-02': [
  				'13px',
  				{
  					fontWeight: '600'
  				}
  			],
  			'caption-03': [
  				'13px',
  				{
  					fontWeight: '500'
  				}
  			],
  			'caption-04': [
  				'13px',
  				{
  					fontWeight: '400'
  				}
  			],
  			'number-01': [
  				'32px',
  				{
  					fontWeight: '700'
  				}
  			],
  			'number-02': [
  				'32px',
  				{
  					fontWeight: '600'
  				}
  			],
  			'number-03': [
  				'32px',
  				{
  					fontWeight: '500'
  				}
  			],
  			'number-04': [
  				'32px',
  				{
  					fontWeight: '400'
  				}
  			],
  			'number-05': [
  				'28px',
  				{
  					fontWeight: '700'
  				}
  			],
  			'number-06': [
  				'28px',
  				{
  					fontWeight: '600'
  				}
  			],
  			'number-07': [
  				'28px',
  				{
  					fontWeight: '500'
  				}
  			],
  			'number-08': [
  				'28px',
  				{
  					fontWeight: '400'
  				}
  			],
  			'number-09': [
  				'24px',
  				{
  					fontWeight: '700'
  				}
  			],
  			'number-10': [
  				'24px',
  				{
  					fontWeight: '600'
  				}
  			],
  			'number-11': [
  				'24px',
  				{
  					fontWeight: '500'
  				}
  			],
  			'number-12': [
  				'24px',
  				{
  					fontWeight: '400'
  				}
  			],
  			'number-13': [
  				'20px',
  				{
  					fontWeight: '700'
  				}
  			],
  			'number-14': [
  				'20px',
  				{
  					fontWeight: '600'
  				}
  			],
  			'number-15': [
  				'20px',
  				{
  					fontWeight: '500'
  				}
  			],
  			'number-16': [
  				'20px',
  				{
  					fontWeight: '400'
  				}
  			],
  			'title-01': [
  				'40px',
  				{
  					fontWeight: '700'
  				}
  			],
  			'title-02': [
  				'40px',
  				{
  					fontWeight: '600'
  				}
  			],
  			'title-03': [
  				'40px',
  				{
  					fontWeight: '500'
  				}
  			],
  			'title-04': [
  				'40px',
  				{
  					fontWeight: '400'
  				}
  			],
  			'head-01': [
  				'32px',
  				{
  					fontWeight: '700'
  				}
  			],
  			'head-02': [
  				'32px',
  				{
  					fontWeight: '600'
  				}
  			],
  			'head-03': [
  				'32px',
  				{
  					fontWeight: '500'
  				}
  			],
  			'head-04': [
  				'32px',
  				{
  					fontWeight: '400'
  				}
  			],
  			'head-05': [
  				'28px',
  				{
  					fontWeight: '700'
  				}
  			],
  			'head-06': [
  				'28px',
  				{
  					fontWeight: '600'
  				}
  			],
  			'head-07': [
  				'28px',
  				{
  					fontWeight: '500'
  				}
  			],
  			'head-08': [
  				'28px',
  				{
  					fontWeight: '400'
  				}
  			],
  			'head-09': [
  				'24px',
  				{
  					fontWeight: '700'
  				}
  			],
  			'head-10': [
  				'24px',
  				{
  					fontWeight: '600'
  				}
  			],
  			'head-11': [
  				'24px',
  				{
  					fontWeight: '500'
  				}
  			],
  			'head-12': [
  				'24px',
  				{
  					fontWeight: '400'
  				}
  			],
  			'head-13': [
  				'20px',
  				{
  					fontWeight: '700'
  				}
  			],
  			'head-14': [
  				'20px',
  				{
  					fontWeight: '600'
  				}
  			],
  			'head-15': [
  				'20px',
  				{
  					fontWeight: '500'
  				}
  			],
  			'head-16': [
  				'20px',
  				{
  					fontWeight: '400'
  				}
  			]
  		},
  		fontFamily: {
  			sans: [
  				'var(--font-pretendard)',
  				'sans-serif'
  			],
  			number: [
  				'var(--font-roboto)',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
    plugins: [require("tailwindcss-animate")]
} satisfies Config;
