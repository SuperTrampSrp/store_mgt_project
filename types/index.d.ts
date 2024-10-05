

declare interface closeModalProps {
    onCloseModal: () => void;
    modalName?: string;
}


declare type GroceryItemProps = {
    value: string
    label: string
}
declare type TableSelectorProps = {
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
}

declare type ChildProps = {
    parentRef: React.RefObject<HTMLDivElement>;
};

declare type CashbookEntry = {
    date: string;
    voucherNo: string;
    accName: string;
    narration: string;
    debit: number;
    credit: number;
}

declare type BarcodeEntry = {
    date: string;
    itemName: string;
    company: string;
    size: string;
    barcode: string;
    qty: number;
    purchaseRate: number;
    free: number;
    saleRate: number;
    mrp: number;
    print: boolean;
}

declare type SalesStateProps = {
    docNo: string;
    credit: boolean;
    customer: string;
    customer: string;
    phone: string;
    gstIn: string;
    salesman: string;
    coCode: string;
    cashBank: string;
    orderNo: string;
    date: string;
    billType: string;
    rateType: string;
    vehNo: string;
    driver: string;
    sitr: string;
    useCess: boolean;
    reverseCharge: boolean;
    interstate: boolean;
    estimatePrint: boolean;

}

declare type ModalState = {

    modalName: string;
    isModal?: boolean;

    isCashbookModal: boolean;
    isSalesModal: boolean;
    isPurchaseModal: boolean,
    isRecieptEntryModal: boolean,
    isJurnalEntryModal: boolean,
    isBarcodeRegisterModal: boolean,
    isCustomerDetailsModal: boolean,

    setModalName: (name: string) => void;

    openCashbookModal: () => void;
    openSalesModal: () => void;
    openPurchaseModal: () => void;
    openRecieptEntryModal: () => void;
    openJurnalEntryModal: () => void;
    openBarcodeRegisterModal: () => void;
    openCustomerDetailsModal: () => void;

    closeModal: () => void;

    handleClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

declare type ButtonProps = React.ComponentProps<typeof Button>;

declare type MenuItem = {
    label: string;
    items?: MenuItem[];
}

declare interface NestedDropdownProps {
    items: MenuItem[];
}

declare interface SingleDropdownProps {
    item: MenuItem;
    depth: number;
}

declare type ModalAnimProps = {
    children: React.ReactNode;
}