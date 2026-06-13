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
        <img
          src="/images/YO.png"
          alt="Foto profesional de Santiago Puentes"
          className="animated-profile-photo"
        />
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
          background:
            linear-gradient(135deg, var(--accent-cyan), var(--accent-purple), var(--accent-magenta));
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

        .animated-profile-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          border-radius: inherit;
          transform: scale(1.035) translateY(4px);
          animation: profilePhotoBreath 6.5s ease-in-out infinite;
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

        @keyframes profilePhotoBreath {
          0%, 100% {
            transform: scale(1.035) translateY(4px);
          }
          50% {
            transform: scale(1.07) translateY(0);
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
