import type { Config } from 'tailwindcss'

const cursors = {
  resizeX:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAQCAYAAAAFzx/vAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHmSURBVHgBrZU9T8JQFIZLpbVqsTIAmjBoYoLWjwEW46juwEBiJMjk16+A38bCwgITm7JoogthgITw4fvKvaRAKTXhJC/n3ss55+k96e0NKMstIEQbCyk+40fKPy3QbDYTo9HoYzgctuLx+JajmGs8YgzGQ+/1ej2BNVXxY+VyWa3VaicEYTymYfkgl8tteKSppmlGGcucwWDQqlQqth9ooNFoTGGYS+Cxbdu6R55mGMYRdveXI6HVavVU8ejMAswBPINCLCzAWiqV0uB14XdCoVBCAp3QZTt1hUmgX3MCPaF8Kdxg65CEYrzNjZGqtttts9/va5PurddYE0C+cJbcJX+ihULhvtPp/JRKpbW1lLVQ8zufzz9gvg9N3vRYLLYDZ6fT6Zd5KE1V1TeMi9DjnArCFzVNe3UCJSybzT6xtmBMjGcvHA5buq5fzkNpwWDwDuML6FQKsbbwnF8g5lYCJYy1ML8U7Vw4x7LPM1Aaip5jfRfahAzhp4pEIiZiTgh0wriBZbAZKAMzmcwzod1u9wtrx5Drwcc5VJLJpGZZ1mGv1/skjLl8cHbNCza/Ux72G+haWf1p439R6Aq6E7l7it/vKQPZJviYKLS1IpmfL0PEH4jcjWWBXkWkeN34uZ5UR7zrFfULsjugIA30A0sAAAAASUVORK5CYII=',
}

const config = {
  darkMode: ['class'],
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx,mdx}', './vibes/**/*.{ts,tsx,mdx}'],
  prefix: '',
  theme: {
    extend: {
      cursor: {
        resizeX: `url("${cursors.resizeX}") 14 8, ew-resize`,
      },
      colors: {
        primary: 'hsl(var(--primary))',
        accent: 'hsl(var(--accent))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        contrast: {
          100: 'hsl(var(--contrast-100))',
          200: 'hsl(var(--contrast-200))',
          300: 'hsl(var(--contrast-300))',
          400: 'hsl(var(--contrast-400))',
          500: 'hsl(var(--contrast-500))',
        },
      },
      fontFamily: {
        heading: [
          'var(--font-family-heading)',
          {
            fontFeatureSettings: 'var(--font-feature-settings-heading)',
            fontVariationSettings: 'var(--font-variation-settings-heading)',
          },
        ],
        body: [
          'var(--font-family-body)',
          {
            fontFeatureSettings: 'var(--font-feature-settings-body)',
            fontVariationSettings: 'var(--font-variation-settings-body)',
          },
        ],
        mono: [
          'var(--font-family-mono)',
          {
            fontFeatureSettings: 'var(--font-feature-settings-mono)',
            fontVariationSettings: 'var(--font-variation-settings-mono)',
          },
        ],
      },
      fontSize: {
        xs: [
          'var(--font-size-xs, 0.75rem)',
          {
            lineHeight: 'var(--line-height-xs, 1rem)',
            letterSpacing: 'var(--letter-spacing-xs)',
            fontWeight: 'var(--font-weight-xs)',
          },
        ],
        sm: [
          'var(--font-size-sm, 0.875rem)',
          {
            lineHeight: 'var(--line-height-sm, 1.25rem)',
            letterSpacing: 'var(--letter-spacing-sm)',
            fontWeight: 'var(--font-weight-sm)',
          },
        ],
        base: [
          'var(--font-size-base, 1rem)',
          {
            lineHeight: 'var(--line-height-base, 1.5rem)',
            letterSpacing: 'var(--letter-spacing-base)',
            fontWeight: 'var(--font-weight-base)',
          },
        ],
        lg: [
          'var(--font-size-lg, 1.125rem)',
          {
            lineHeight: 'var(--line-height-lg, 1.75rem)',
            letterSpacing: 'var(--letter-spacing-lg)',
            fontWeight: 'var(--font-weight-lg)',
          },
        ],
        xl: [
          'var(--font-size-xl, 1.25rem)',
          {
            lineHeight: 'var(--line-height-xl, 1.75rem)',
            letterSpacing: 'var(--letter-spacing-xl)',
            fontWeight: 'var(--font-weight-xl)',
          },
        ],
        '2xl': [
          'var(--font-size-2xl, 1.5rem)',
          {
            lineHeight: 'var(--line-height-2xl, 2rem)',
            letterSpacing: 'var(--letter-spacing-2xl)',
            fontWeight: 'var(--font-weight-2xl)',
          },
        ],
        '3xl': [
          'var(--font-size-3xl, 1.875rem)',
          {
            lineHeight: 'var(--line-height-3xl, 2.25rem)',
            letterSpacing: 'var(--letter-spacing-3xl)',
            fontWeight: 'var(--font-weight-3xl)',
          },
        ],
        '4xl': [
          'var(--font-size-4xl, 2.25rem)',
          {
            lineHeight: 'var(--line-height-4xl, 2.5rem)',
            letterSpacing: 'var(--letter-spacing-4xl)',
            fontWeight: 'var(--font-weight-4xl)',
          },
        ],
        '5xl': [
          'var(--font-size-5xl, 3rem)',
          {
            lineHeight: 'var(--line-height-5xl, 1)',
            letterSpacing: 'var(--letter-spacing-5xl)',
            fontWeight: 'var(--font-weight-5xl)',
          },
        ],
        '6xl': [
          'var(--font-size-6xl, 3.75rem)',
          {
            lineHeight: 'var(--line-height-6xl, 1)',
            letterSpacing: 'var(--letter-spacing-6xl)',
            fontWeight: 'var(--font-weight-6xl)',
          },
        ],
        '7xl': [
          'var(--font-size-7xl, 4.5rem)',
          {
            lineHeight: 'var(--line-height-7xl, 1)',
            letterSpacing: 'var(--letter-spacing-7xl)',
            fontWeight: 'var(--font-weight-7xl)',
          },
        ],
        '8xl': [
          'var(--font-size-8xl, 6rem)',
          {
            lineHeight: 'var(--line-height-8xl, 1)',
            letterSpacing: 'var(--letter-spacing-8xl)',
            fontWeight: 'var(--font-weight-8xl)',
          },
        ],
        '9xl': [
          'var(--font-size-9xl, 8rem)',
          {
            lineHeight: 'var(--line-height-9xl, 1)',
            letterSpacing: 'var(--letter-spacing-9xl)',
            fontWeight: 'var(--font-weight-9xl)',
          },
        ],
      },
      shadows: {
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow-base)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
      },
      keyframes: {
        collapse: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        expand: {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'marching-ants': {
          to: {
            'background-position':
              '0 0, 0 -1px, calc(100% + 1px) 0, 100% calc(100% + 1px), -1px 100%',
          },
        },
        rotateFade: {
          from: { opacity: '1', transform: 'rotateZ(0deg) translate3d(-50%,-50%,0)' },
          '35%': { opacity: '0' },
          '70%': { opacity: '0' },
          to: { opacity: '1', transform: 'rotateZ(360deg) translate3d(-50%,-50%,0)' },
        },
        rotate: {
          from: {
            transform: 'rotateZ(0deg) translate3d(-50%,-50%,0)',
          },
          to: {
            transform: 'rotateZ(360deg) translate3d(-50%,-50%,0)',
          },
        },
        scroll: {
          to: { backgroundPosition: '5px 0' },
        },
        dotScrollSmall: {
          to: { backgroundPosition: '-6px -6px, -12px -12px' },
        },
        dotScrollLarge: {
          to: { backgroundPosition: '-8px -8px, -16px -16px' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        shake: {
          '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
          '20%, 80%': { transform: 'translate3d(1px, 0, 0)' },
          '30%, 50%, 70%': { transform: 'translate3d(-2px, 0, 0)' },
          '40%, 60%': { transform: 'translate3d(2px, 0, 0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        collapse: 'collapse 400ms cubic-bezier(1, 0, 0.25, 1)',
        expand: 'expand 400ms cubic-bezier(1, 0, 0.25, 1)',
        marching: 'marching-ants 10s linear infinite',
        rotate: 'rotate 2000ms linear infinite',
        scroll: 'scroll 200ms infinite linear both',
        scrollLeft: 'scrollLeft var(--marquee-duration) linear infinite',
        shake: 'shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both',
        slideIn: 'slideIn 800ms cubic-bezier(0.25, 1, 0, 1)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ],
} satisfies Config

export default config
