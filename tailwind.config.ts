import type { Config } from 'tailwindcss';
import tailwindanimate from 'tailwindcss-animate';

export default {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
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
          '1000': '#00025C',
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
          '1000': '#443400',
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
          '1000': '#441100',
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
          '1000': '#004417',
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
          '1000': '#330044',
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
          font: '#202020',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      fontSize: {
        'display-xl': [
          '48px',
          {
            lineHeight: '1.2',
            fontWeight: '700',
          },
        ],
        'display-l': [
          '40px',
          {
            lineHeight: '1.2',
            fontWeight: '700',
          },
        ],
        'heading-1': [
          '32px',
          {
            lineHeight: '1.2',
            fontWeight: '600',
          },
        ],
        'heading-2': [
          '24px',
          {
            lineHeight: '1.2',
            fontWeight: '600',
          },
        ],
        'heading-3': [
          '20px',
          {
            lineHeight: '1.2',
            fontWeight: '600',
          },
        ],
        'body-l': [
          '18px',
          {
            lineHeight: '1.5',
            fontWeight: '400',
          },
        ],
        'body-m': [
          '16px',
          {
            lineHeight: '1.5',
            fontWeight: '400',
          },
        ],
        'body-s': [
          '14px',
          {
            lineHeight: '1.5',
            fontWeight: '400',
          },
        ],
        'caption-l': [
          '12px',
          {
            lineHeight: '1.4',
            fontWeight: '400',
          },
        ],
        'caption-m': [
          '10px',
          {
            lineHeight: '1.4',
            fontWeight: '400',
          },
        ],
        'caption-s': [
          '8px',
          {
            lineHeight: '1.4',
            fontWeight: '400',
          },
        ],
      },
      fontFamily: {
        sans: ['var(--font-pretendard)', 'sans-serif'],
        number: ['var(--font-roboto)', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindanimate, require('tailwindcss-animate')],
} satisfies Config;
