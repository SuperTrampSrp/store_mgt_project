import { create } from 'zustand'

export const useModalStore = create<ModalState>((set) => ({
    isCashbookModal: false,
    isSalesModal: false,
    isPurchaseModal: false,
    isRecieptEntryModal: false,
    isJurnalEntryModal: false,
    isBarcodeRegisterModal: false,
    isCustomerDetailsModal: false,


    openCashbookModal: () => set({ isCashbookModal: true }),
    openSalesModal: () => set({ isSalesModal: true }),
    openPurchaseModal: () => set({ isPurchaseModal: true }),
    openRecieptEntryModal: () => set({ isRecieptEntryModal: true }),
    openJurnalEntryModal: () => set({ isJurnalEntryModal: true }),
    openBarcodeRegisterModal: () => set({ isBarcodeRegisterModal: true }),
    openCustomerDetailsModal: () => set({ isCustomerDetailsModal: true }),
    closeModal: () => set({ isCashbookModal: false, isSalesModal: false, isPurchaseModal: false, isRecieptEntryModal: false, isJurnalEntryModal: false, isBarcodeRegisterModal: false, isCustomerDetailsModal: false, }),


}));