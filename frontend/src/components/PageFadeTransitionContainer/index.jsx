import { motion as m } from "framer-motion";

export default function PageFadeTransitionContainer({ children, className }) {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </m.div>
  );
}
