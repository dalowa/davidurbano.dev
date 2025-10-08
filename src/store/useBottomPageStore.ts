
import { IsBottomPageState } from '@/src/types';
import { create } from 'zustand'

export const useIsBottomPageStore = create<IsBottomPageState>((set) => ({
   isAtBottom: false,
   setIsAtBottom: (v) => {
      set({ isAtBottom: v })
   }
}));

