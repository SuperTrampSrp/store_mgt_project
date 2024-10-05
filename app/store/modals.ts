import { create } from 'zustand'

export const useModalStore = create<ModalState>((set) => ({
    modalName: '',

    isCashbookModal: false,
    isSalesModal: false,
    isPurchaseModal: false,
    isRecieptEntryModal: false,
    isJurnalEntryModal: false,
    isBarcodeRegisterModal: false,
    isCustomerDetailsModal: false,

    setModalName: (name: string) => set({ modalName: name }),

    openCashbookModal: () => set({ isCashbookModal: true }),
    openSalesModal: () => set({ isSalesModal: true }),
    openPurchaseModal: () => set({ isPurchaseModal: true }),
    openRecieptEntryModal: () => set({ isRecieptEntryModal: true }),
    openJurnalEntryModal: () => set({ isJurnalEntryModal: true }),
    openBarcodeRegisterModal: () => set({ isBarcodeRegisterModal: true }),
    openCustomerDetailsModal: () => set({ isCustomerDetailsModal: true }),
    closeModal: () => set({ isCashbookModal: false, isSalesModal: false, isPurchaseModal: false, isRecieptEntryModal: false, isJurnalEntryModal: false, isBarcodeRegisterModal: false, isCustomerDetailsModal: false, }),

    handleClick: (e: React.MouseEvent<HTMLElement>) => {
        const id = e.currentTarget.id
        set(() => ({ modalName: id }));
        console.log(id)
        switch (id) {
            case 'New':
                set(() => ({ isSalesModal: true }));
                break;
            case 'Bill':
                set(() => ({ isPurchaseModal: true }));
                break;
            case 'ReceiptEntry':
                set(() => ({ isRecieptEntryModal: true }));
                break;
            case 'Payment':
                set(() => ({ isRecieptEntryModal: true }));
                break;
            case 'Jurnal Entry':
                set(() => ({ isJurnalEntryModal: true }));
                break;
            case 'Cashbook':
                set(() => ({ isCashbookModal: true }));
                break;
            case 'Barcode Register':
                set(() => ({ isBarcodeRegisterModal: true }));
                break;
            case 'Customer':
                set(() => ({ isCustomerDetailsModal: true }));
                break;

            default:
                break;
        }

    }

}));

