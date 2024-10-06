import { create } from 'zustand'

export const useModalStore = create<ModalState>((set) => ({
    modalName: '',
    isModal: false,

    isCashbookModal: false,
    isSalesModal: false,
    isPurchaseModal: false,
    isRecieptEntryModal: false,
    isJurnalEntryModal: false,
    isBarcodeRegisterModal: false,
    isCustomerDetailsModal: false,
    isCalculatorModal: false,

    setModalName: (name: string) => set({ modalName: name }),

    openCashbookModal: () => set({ isCashbookModal: true, isModal: true }),
    openSalesModal: () => set({ isSalesModal: true, isModal: true }),
    openPurchaseModal: () => set({ isPurchaseModal: true, isModal: true }),
    openRecieptEntryModal: () => set({ isRecieptEntryModal: true, isModal: true }),
    openJurnalEntryModal: () => set({ isJurnalEntryModal: true, isModal: true }),
    openBarcodeRegisterModal: () => set({ isBarcodeRegisterModal: true, isModal: true }),
    openCustomerDetailsModal: () => set({ isCustomerDetailsModal: true, isModal: true }),
    openCalculatorModal: () => set({ isCalculatorModal: true, isModal: true }),
    closeModal: () => set({ isCashbookModal: false, isSalesModal: false, isPurchaseModal: false, isRecieptEntryModal: false, isJurnalEntryModal: false, isBarcodeRegisterModal: false, isCustomerDetailsModal: false, isCalculatorModal: false, isModal: false, }),


    handleClick: (e: React.MouseEvent<HTMLElement>) => {
        const id = e.currentTarget.id
        set(() => ({ modalName: id }));
        switch (id) {
            case 'New':
                set(() => ({ isSalesModal: true, isModal: true }));
                break;
            case 'Bill':
                set(() => ({ isPurchaseModal: true, isModal: true }));
                break;
            case 'ReceiptEntry':
                set(() => ({ isRecieptEntryModal: true, isModal: true }));
                break;
            case 'Payment':
                set(() => ({ isRecieptEntryModal: true, isModal: true }));
                break;
            case 'Jurnal Entry':
                set(() => ({ isJurnalEntryModal: true, isModal: true }));
                break;
            case 'Cashbook':
                set(() => ({ isCashbookModal: true, isModal: true }));
                break;
            case 'Barcode Register':
                set(() => ({ isBarcodeRegisterModal: true, isModal: true }));
                break;
            case 'Customer':
                set(() => ({ isCustomerDetailsModal: true, isModal: true }));
                break;
            case 'Calculator':
                set(() => ({ isCalculatorModal: true, isModal: true }));
                break;

            default:
                break;
        }

    }

}));

