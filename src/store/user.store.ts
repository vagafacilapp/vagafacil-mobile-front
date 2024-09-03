/* eslint-disable no-unused-vars */
import { create } from 'zustand';

interface UserState {
  name: string;
  email: string | null;
  phoneNumber?: string | null;
  image?: string | null;
}

type UserProps = {
  state: {
    user: UserState | null;
  };
  actions: {
    setUser: (user: UserState) => void;
  };
};

export const useUserStore = create<UserProps>((set) => ({
  state: {
    user: null,
  },
  actions: {
    setUser: (user: UserState) =>
      set(() => ({
        state: { user },
      })),
  },
}));
