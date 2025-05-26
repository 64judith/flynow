import { create } from "zustand";

interface storeProps {
  tripClickedID: string | null;
  setTripClickedID: (clickID?: string | null) => void;
}

export const useStore = create<storeProps>((set) => ({
  tripClickedID: null,
  setTripClickedID: (clickID?) => set({ tripClickedID: clickID }),
}));
