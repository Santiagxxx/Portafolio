import { motion } from 'framer-motion';
import { Code2, Sparkles } from 'lucide-react';

type AnimatedProfileImageProps = {
  className?: string;
  compact?: boolean;
};

export const AnimatedProfileImage = ({ className = '', compact = false }: AnimatedProfileImageProps) => {
  return (
    <motion.div
      className={`animated-profile ${compact ? 'animated-profile-compact' : ''} ${className}`}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
    >
      <div className="animated-profile-aura"></div>
      <div className="animated-profile-ring animated-profile-ring-one"></div>
      <div className="animated-profile-ring animated-profile-ring-two"></div>

      <motion.div
        className="profile-floating-card profile-floating-card-top glass"
        animate={{ y: [-4, 5, -4], rotate: [-2, 2, -2] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Code2 size={15} />
        React Dev
      </motion.div>

      <motion.div
        className="profile-floating-card profile-floating-card-bottom glass"
        animate={{ y: [5, -5, 5], rotate: [2, -2, 2] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Sparkles size={15} />
        UI Focused
      </motion.div>

      <div className="animated-profile-orbit">
        <span></span>
      </div>

      <div className="animated-profile-frame">
        <motion.svg
          className="animated-profile-illustration"
          viewBox="0 0 420 470"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Animated professional illustration of Santiago"
        >
          <defs>
            <linearGradient id="avatarBg" x1="62" y1="55" x2="360" y2="421" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00f0ff" />
              <stop offset="0.5" stopColor="#3723f0" />
              <stop offset="1" stopColor="#2b8eff" />
            </linearGradient>
            <linearGradient id="shirtGradient" x1="142" y1="300" x2="278" y2="438" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0f2a4d" />
              <stop offset="1" stopColor="#07111f" />
            </linearGradient>
            <linearGradient id="skinGradient" x1="172" y1="118" x2="261" y2="277" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f1c3a2" />
              <stop offset="1" stopColor="#c98260" />
            </linearGradient>
            <linearGradient id="screenGradient" x1="283" y1="200" x2="344" y2="272" gradientUnits="userSpaceOnUse">
              <stop stopColor="#111827" />
              <stop offset="1" stopColor="#020617" />
            </linearGradient>
            <filter id="softShadow" x="76" y="74" width="286" height="380" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="18" />
              <feGaussianBlur stdDeviation="18" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.28 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          </defs>

          <rect width="420" height="470" rx="178" fill="url(#avatarBg)" />
          <circle cx="82" cy="88" r="70" fill="white" opacity="0.12" />
          <circle cx="340" cy="356" r="82" fill="#050505" opacity="0.12" />

          <motion.g
            filter="url(#softShadow)"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path
              d="M128 446C133 363 157 315 207 315C263 315 292 365 298 446H128Z"
              fill="url(#shirtGradient)"
            />
            <path
              d="M166 332C179 351 195 363 211 366C228 361 241 348 253 331C240 318 225 312 208 313C191 314 178 320 166 332Z"
              fill="#e8eefc"
              opacity="0.92"
            />
            <path d="M196 348L211 365L226 348L216 446H206L196 348Z" fill="#101827" opacity="0.95" />
            <path d="M165 338C183 366 190 397 191 446H129C133 389 144 354 165 338Z" fill="#0b1b34" opacity="0.68" />
            <path d="M254 338C236 366 229 397 228 446H297C291 388 277 354 254 338Z" fill="#06101f" opacity="0.72" />

            <motion.g
              animate={{ rotate: [-1, 1.4, -1] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: '212px 214px' }}
            >
              <path
                d="M179 244C180 292 191 323 211 323C234 323 248 290 249 245L179 244Z"
                fill="url(#skinGradient)"
              />
              <path d="M184 268C195 282 223 286 245 260C241 297 229 321 211 323C195 321 186 300 184 268Z" fill="#aa6a50" opacity="0.26" />

              <path
                d="M154 164C157 115 188 88 228 96C269 104 286 135 280 181C275 225 252 266 216 268C178 270 151 219 154 164Z"
                fill="url(#skinGradient)"
              />
              <path d="M153 177C145 174 139 181 142 194C145 207 153 214 160 209L153 177Z" fill="#d79a77" />
              <path d="M279 178C288 174 295 181 292 195C289 209 280 215 273 210L279 178Z" fill="#c98664" />

              <path
                d="M153 157C155 116 181 82 232 86C254 88 274 100 285 119C273 113 259 111 242 116C220 122 204 116 184 122C168 127 160 139 153 157Z"
                fill="#101018"
              />
              <path
                d="M161 169C164 145 177 132 194 128C214 124 225 132 245 127C260 123 273 128 281 143C278 116 255 97 226 96C185 94 158 122 153 158L161 169Z"
                fill="#06070b"
              />
              <path
                d="M186 104C166 112 156 129 151 154C162 141 174 134 189 130C209 125 223 131 243 126C255 123 268 125 279 132C263 105 229 92 186 104Z"
                fill="#171821"
              />

              <path d="M183 179C192 174 201 174 211 179" stroke="#15151b" strokeWidth="4" strokeLinecap="round" />
              <path d="M232 178C242 173 253 174 261 180" stroke="#15151b" strokeWidth="4" strokeLinecap="round" />
              <circle cx="200" cy="195" r="4" fill="#15151b" />
              <circle cx="247" cy="195" r="4" fill="#15151b" />
              <path d="M222 194C219 209 215 219 211 229C218 232 225 231 231 226" stroke="#a6654f" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M197 242C211 252 231 251 246 240" stroke="#7a3e36" strokeWidth="4" strokeLinecap="round" />
            </motion.g>

            <motion.g
              animate={{ y: [0, -5, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: '315px 244px' }}
            >
              <path
                d="M282 221C296 211 313 217 319 235L344 312C349 327 340 340 326 340C316 340 307 334 304 324L280 247C276 237 275 227 282 221Z"
                fill="#c98260"
              />
              <rect x="291" y="192" width="55" height="82" rx="13" fill="url(#screenGradient)" />
              <rect x="297" y="199" width="43" height="68" rx="9" fill="#0f172a" />
              <circle cx="319" cy="233" r="11" fill="#6d5cff" opacity="0.7" />
              <circle cx="333" cy="211" r="4" fill="#00f0ff" />
            </motion.g>

            <motion.g
              animate={{ y: [0, 5, 0], rotate: [0, 2.5, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: '135px 332px' }}
            >
              <path
                d="M154 335C132 327 120 309 116 282C114 269 122 259 134 260C144 261 151 268 153 279C156 296 162 307 174 315L154 335Z"
                fill="#d0916d"
              />
              <path d="M153 279C168 286 180 299 189 319" stroke="#c98260" strokeWidth="13" strokeLinecap="round" />
            </motion.g>
          </motion.g>

          <motion.g
            animate={{ opacity: [0.38, 0.78, 0.38] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path d="M82 118H132" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.4" />
            <path d="M296 95H348" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.35" />
            <path d="M298 384H354" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.28" />
          </motion.g>
        </motion.svg>
      </div>

      <style>{`
        .animated-profile {
          --profile-width: 420px;
          --profile-height: 470px;
          --profile-radius: 38% 62% 56% 44% / 45% 42% 58% 55%;
          position: relative;
          isolation: isolate;
          width: var(--profile-width);
          height: var(--profile-height);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .animated-profile.hero-mobile-image-wrapper {
          display: none;
        }

        .animated-profile.hero-image-desktop {
          display: flex;
        }

        .animated-profile-aura {
          position: absolute;
          inset: 4%;
          z-index: -4;
          border-radius: 50%;
          background:
            radial-gradient(circle at 35% 25%, rgba(0, 240, 255, 0.32), transparent 40%),
            radial-gradient(circle at 70% 70%, rgba(112, 0, 255, 0.34), transparent 42%),
            radial-gradient(circle, rgba(255, 0, 60, 0.12), transparent 58%);
          filter: blur(42px);
          animation: profileAuraPulse 4.5s ease-in-out infinite;
        }

        .animated-profile-ring {
          position: absolute;
          border-radius: var(--profile-radius);
          pointer-events: none;
        }

        .animated-profile-ring-one {
          inset: 1.2rem;
          z-index: -2;
          border: 1px solid rgba(0, 240, 255, 0.28);
          animation: profileRingFloat 7s ease-in-out infinite;
        }

        .animated-profile-ring-two {
          inset: 0.25rem;
          z-index: -3;
          border: 1px solid rgba(112, 0, 255, 0.28);
          animation: profileRingFloatReverse 8.5s ease-in-out infinite;
        }

        .animated-profile-frame {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          padding: 5px;
          border-radius: var(--profile-radius);
          background: linear-gradient(135deg, var(--accent-cyan), var(--accent-purple), var(--accent-magenta));
          box-shadow:
            0 0 40px rgba(0, 240, 255, 0.22),
            0 0 80px rgba(112, 0, 255, 0.22),
            0 24px 70px rgba(0, 0, 0, 0.32);
          animation: profileBlobMove 8s ease-in-out infinite;
        }

        .animated-profile-frame::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          border-radius: inherit;
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.22), transparent 32%),
            radial-gradient(circle at 70% 20%, rgba(0, 240, 255, 0.18), transparent 28%);
          mix-blend-mode: screen;
          opacity: 0.72;
        }

        .animated-profile-illustration {
          width: 100%;
          height: 100%;
          display: block;
          border-radius: inherit;
        }

        .profile-floating-card {
          position: absolute;
          z-index: 5;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.55rem 0.75rem;
          border-radius: 999px;
          color: var(--text-primary);
          font-size: 0.78rem;
          font-weight: 800;
          white-space: nowrap;
        }

        .profile-floating-card-top {
          top: 12%;
          left: -7%;
        }

        .profile-floating-card-bottom {
          right: -8%;
          bottom: 16%;
        }

        .animated-profile-orbit {
          position: absolute;
          inset: -0.9rem;
          z-index: -1;
          border-radius: 50%;
          animation: profileOrbit 9s linear infinite;
          pointer-events: none;
        }

        .animated-profile-orbit span {
          position: absolute;
          top: 20%;
          right: 6%;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--accent-cyan);
          box-shadow: 0 0 18px var(--accent-cyan);
        }

        :root[data-theme='light'] .animated-profile-frame {
          box-shadow:
            0 0 34px rgba(8, 145, 178, 0.18),
            0 0 70px rgba(124, 58, 237, 0.16),
            0 24px 70px rgba(15, 23, 42, 0.16);
        }

        :root[data-theme='light'] .profile-floating-card {
          background: rgba(255, 255, 255, 0.76);
          color: #0f172a;
        }

        @keyframes profileBlobMove {
          0%, 100% {
            border-radius: 38% 62% 56% 44% / 45% 42% 58% 55%;
          }
          50% {
            border-radius: 55% 45% 42% 58% / 52% 60% 40% 48%;
          }
        }

        @keyframes profileAuraPulse {
          0%, 100% {
            opacity: 0.74;
            transform: scale(0.96);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }

        @keyframes profileRingFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          50% {
            transform: translate3d(8px, -6px, 0) rotate(2deg);
          }
        }

        @keyframes profileRingFloatReverse {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          50% {
            transform: translate3d(-7px, 7px, 0) rotate(-2deg);
          }
        }

        @keyframes profileOrbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animated-profile-compact {
          --profile-width: min(66vw, 255px);
          --profile-height: min(78vw, 305px);
        }

        .animated-profile-compact .profile-floating-card {
          font-size: 0.68rem;
          padding: 0.45rem 0.62rem;
        }

        .animated-profile-compact .profile-floating-card-top {
          top: 8%;
          left: -6%;
        }

        .animated-profile-compact .profile-floating-card-bottom {
          right: -7%;
          bottom: 10%;
        }

        @media (max-width: 900px) {
          .animated-profile.hero-image-desktop {
            display: none;
          }

          .animated-profile.hero-mobile-image-wrapper {
            display: flex;
          }
        }

        @media (max-width: 600px) {
          .animated-profile-compact {
            --profile-width: min(64vw, 245px);
            --profile-height: min(76vw, 295px);
          }
        }

        @media (max-width: 380px) {
          .animated-profile-compact {
            --profile-width: min(62vw, 220px);
            --profile-height: min(74vw, 270px);
          }

          .animated-profile-compact .profile-floating-card {
            display: none;
          }
        }
      `}</style>
    </motion.div>
  );
};
