import { useIsBottomPageStore } from "@/src/store/useBottomPageStore";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const useDisappearLayoutEffect = () => {
   const setIsAtBottom = useIsBottomPageStore((state) => state.setIsAtBottom);
   const pathname = usePathname();

   useEffect(() => {
      const handleScroll = () => {
         const scrollTop = window.pageYOffset;
         const pageScrollHeight = document.documentElement.scrollHeight;
         const clientDomHeight = window.innerHeight;

         const currentState = scrollTop + clientDomHeight >= pageScrollHeight - clientDomHeight + 50;
         if (pathname === '/') {
            setIsAtBottom(currentState);
         }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, [setIsAtBottom, pathname]);
};