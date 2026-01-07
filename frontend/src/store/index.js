import { create } from "zustand";

export const useStore = create((set) => ({
  loggedIn: false,
  isDiretedFromLogout: false,
  user: null,
  setUser: (user) => {
    if (!user) {
      set({ loggedIn: false });
    } else {
      set({ loggedIn: true });
    }

    set({ user });
  },
  setLogoutDirection: (isDirected) => {
    if (isDirected) {
      set({ isDiretedFromLogout: true });
    } else {
      set({ isDiretedFromLogout: false });
    }
  },
}));
