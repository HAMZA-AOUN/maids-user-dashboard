"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "../styles/noprogress.css";

NProgress.configure({ showSpinner: false, speed: 1000 });

export default function LoadingBar() {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.start();
  }, [pathname]);

  return null;
}
