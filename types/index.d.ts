
declare interface NavBarProps {
    menuData: MenuItem[];
}

declare interface openModalProps {
    onOpenModal: () => void;
    handleClick: (e: MouseEvent<HTMLElement>) => void;

}
declare interface closeModalProps {
    onCloseModal: () => void;
    modalName?: string;
}


declare interface MenuItemProps {
    title: string;
    submenu?: SubMenu[];
}

declare interface SubMenu {
    title: string;
    submenu?: string[];
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
    isCashbookModal: boolean;
    isSalesModal: boolean;
    isPurchaseModal: boolean,
    isRecieptEntryModal: boolean,
    isJurnalEntryModal: boolean,
    isBarcodeRegisterModal: boolean,
    isCustomerDetailsModal: boolean,

    openCashbookModal: () => void;
    openSalesModal: () => void;
    openPurchaseModal: () => void;
    openRecieptEntryModal: () => void;
    openJurnalEntryModal: () => void;
    openBarcodeRegisterModal: () => void;
    openCustomerDetailsModal: () => void;

    closeModal: () => void;


}