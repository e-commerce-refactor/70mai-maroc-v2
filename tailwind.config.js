/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#070A10',
          surface: '#0E131F',
          border: '#1E293B',
          text: '#F8FAFC',
          muted: '#94A3B8',
          accent: '#00E5FF',
          accent2: '#10B981',
        }
      },
      keyframes: {

        laser_scan: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '50%': { opacity: '0.8' },
          '100%': { transform: 'translateY(220%)', opacity: '0' },
        },
        radar_pulse: {
          '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(0, 229, 255, 0.7)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 10px rgba(0, 229, 255, 0)' },
          '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(0, 229, 255, 0)' },
        },
        hud_glow: {
          '0%, 100%': { opacity: '0.8', filter: 'drop-shadow(0 0 8px rgba(0,229,255,0.4))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 16px rgba(0,229,255,0.8))' },
        }
        
      },
      animation: {

        'laser-scan': 'laser_scan 3s cubic-bezier(0.16, 1, 0.3, 1) infinite',
        'radar-pulse': 'radar_pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'hud-glow': 'hud_glow 4s ease-in-out infinite',
        
      }
    },
  },
  plugins: [],
}
