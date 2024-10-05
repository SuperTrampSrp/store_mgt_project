'use client';

import { menuData } from "@/constants";
import MenuBar from "./MenuBar";
import SalesDetails from "./SalesDetails";
import PurchaseDetails from "./PurchaseDetails";
import ReceiptEntry from "./ReceiptEntry";
import JurnalEntry from "./JurnalEntry";
import CashBook from "./CashBook";
import BarcodeRegister from "./BarcodeRegister";
import CustomerDetails from "./CustomerDetails";
import { useModalStore } from "@/app/store/modals";
import Dropdown from "./Dropdown";


const NavBar = () => {

    const { isCashbookModal, isSalesModal, isBarcodeRegisterModal, isCustomerDetailsModal, isJurnalEntryModal, isPurchaseModal, isRecieptEntryModal, closeModal } = useModalStore();

    const handleCloseModal = () => closeModal();

    return (
        <div>
            <nav className="relative p-3 m-0 bg-teal-950">
                <Dropdown items={menuData} />
            </nav>
            <div>
                <MenuBar />

                {
                    isSalesModal && (<SalesDetails onCloseModal={handleCloseModal} />)
                }
                {
                    isPurchaseModal && (<PurchaseDetails onCloseModal={handleCloseModal} />)
                }
                {
                    isRecieptEntryModal && (<ReceiptEntry onCloseModal={handleCloseModal} />)
                }
                {
                    isJurnalEntryModal && (<JurnalEntry onCloseModal={handleCloseModal} />)
                }
                {
                    isCashbookModal && (<CashBook onCloseModal={handleCloseModal} />)
                }
                {
                    isBarcodeRegisterModal && (<BarcodeRegister onCloseModal={handleCloseModal} />)
                }
                {
                    isCustomerDetailsModal && (<CustomerDetails onCloseModal={handleCloseModal} />)
                }
            </div>
        </div>
    );
};

export default NavBar;
