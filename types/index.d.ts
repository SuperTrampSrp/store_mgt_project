
declare interface NavBarProps {
    menuData: MenuItem[];
}

declare interface openModalProps {
    onOpenModal: () => void;
}
declare interface closeModalProps {
    onCloseModal: () => void;
}


declare interface MenuItem {
    title: string;
    submenu?: SubMenu[];
}

declare interface SubMenu {
    title: string;
    submenu?: string[];
}

