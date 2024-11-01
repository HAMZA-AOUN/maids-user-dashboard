"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Transition from "./Transition";
import FrozenRoute from "./FrozenRoute";

export default function ClientTransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial="hidden"
        animate="show"
        exit="exit"
        key={pathname}
        className="h-full "
      >
        <Transition />
        <FrozenRoute>{children}</FrozenRoute>
      </motion.div>
    </AnimatePresence>
  );
}
