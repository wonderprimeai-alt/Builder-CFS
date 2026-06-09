import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0A0A0A',
          secondary: '#111111',
          elevated: '#1A1A1A',
          hover: '#222222'
        },
        lime: {
          DEFAULT: '#C8FF00',
          dim: 'rgba(200, 255, 0, 0.15)',
          glow: 'rgba(200, 255, 0, 0.08)'
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#B0B0B0',
          muted: '#666666',
          'on-lime': '#0A0A0A'
        },
        status: {
          hot: '#C8FF00',
          warm: '#FFB800',
          cold: '#FF6B35',
          disqualified: '#FF4444',
          qualified: '#00E676'
        },
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.06)',
          lime: 'rgba(200, 255, 0, 0.20)'
        },
        // ----------------------------------------------------------------
        // BUILDERS-CFS NAMESPACE — isolated tokens for /builders-cfs route
        // Do not reuse outside the (builders-cfs) route group.
        // ----------------------------------------------------------------
        bld: {
          ink: '#08080A',
          'ink-2': '#0E0E11',
          'ink-3': '#15151A',
          'ink-4': '#1C1C22',
          lime: '#C8FF00',
          'lime-2': '#9DCC00',
          'lime-dim': 'rgba(200,255,0,0.12)',
          'lime-glow': 'rgba(200,255,0,0.06)',
          edge: 'rgba(255,255,255,0.06)',
          'edge-lime': 'rgba(200,255,0,0.22)',
          white: '#FFFFFF',
          soft: '#A8A8A8',
          mute: '#5A5A60',
          warn: '#FF8080'
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace']
      },
      backgroundImage: {
        'gradient-hero': 'radial-gradient(ellipse at 50% 0%, rgba(200,255,0,0.06) 0%, transparent 60%)',
        'gradient-card': 'linear-gradient(135deg, rgba(200,255,0,0.03) 0%, transparent 50%)',
        'grid-pattern':
          'linear-gradient(rgba(200,255,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,0,0.03) 1px, transparent 1px)',
        // Builders-CFS specific
        'bld-spotlight':
          'radial-gradient(ellipse 1200px 600px at 50% -100px, rgba(200,255,0,0.10) 0%, transparent 70%)',
        'bld-grid':
          'linear-gradient(rgba(200,255,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,0,0.04) 1px, transparent 1px)',
        'bld-card':
          'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0) 60%)'
      },
      animation: {
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'float-y': 'floatY 3s ease-in-out infinite',
        'msg-in': 'msgIn 0.4s ease both'
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.6)' }
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        msgIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
};

export default config;
