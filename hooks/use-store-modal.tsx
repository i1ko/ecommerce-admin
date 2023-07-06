import {create} from "zustand";

interface useStoreModalStoreI {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useStoreModal = create<useStoreModalStoreI>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}));

