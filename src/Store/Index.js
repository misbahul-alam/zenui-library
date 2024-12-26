import { create } from 'zustand'

const useZenuiStore = create((set) => ({
    withDarkClasses: false,
    handleToggle: () => set((state) => ({ withDarkClasses: !state.withDarkClasses })),
}))

export default useZenuiStore;