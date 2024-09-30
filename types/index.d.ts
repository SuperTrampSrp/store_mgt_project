
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