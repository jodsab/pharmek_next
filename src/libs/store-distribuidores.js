import { create } from 'zustand'

export const useDistribuidoresSTore = create(set => ({
  distribuidores: [],
  setDistribuidores: distribuidores => set({ distribuidores })
}))
