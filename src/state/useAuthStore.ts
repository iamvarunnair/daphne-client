import { create } from "zustand";

type TProfile = {
  email: string;
};

type AuthState = {
  token: string | null;
  setToken: (token: string | null) => void;
  profile: TProfile;
  setProfile: (profile: TProfile) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  setToken: (token) => set({ token }),
  profile: {
    email: "",
  },
  setProfile: (profile) => set({ profile }),
}));
