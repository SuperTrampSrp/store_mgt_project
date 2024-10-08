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
import AnimatedModal from "./AnimatedModal";
import Calculator from "./Calculator";


const NavBar = () => {

    const { isCashbookModal, isSalesModal, isBarcodeRegisterModal, isCustomerDetailsModal, isJurnalEntryModal, isPurchaseModal, isRecieptEntryModal, isCalculatorModal, closeModal } = useModalStore();

    const handleCloseModal = () => {
        closeModal();
    }


    return (
        <div className="fixed w-full top-0">
            <nav className="relative p-3 m-0 bg-teal-950">
                <Dropdown items={menuData} />
            </nav>
            <div>
                <MenuBar />

                {
                    isSalesModal && (<AnimatedModal><SalesDetails onCloseModal={handleCloseModal} /> </AnimatedModal>)
                }
                {
                    isPurchaseModal && (<AnimatedModal><PurchaseDetails onCloseModal={handleCloseModal} /></AnimatedModal>)
                }
                {
                    isRecieptEntryModal && (<AnimatedModal><ReceiptEntry onCloseModal={handleCloseModal} /></AnimatedModal>)
                }
                {
                    isJurnalEntryModal && (<AnimatedModal><JurnalEntry onCloseModal={handleCloseModal} /></AnimatedModal>)
                }
                {
                    isCashbookModal && (<AnimatedModal><CashBook onCloseModal={handleCloseModal} /></AnimatedModal>)
                }
                {
                    isBarcodeRegisterModal && (<AnimatedModal><BarcodeRegister onCloseModal={handleCloseModal} /></AnimatedModal>)
                }
                {
                    isCustomerDetailsModal && (<AnimatedModal><CustomerDetails onCloseModal={handleCloseModal} /></AnimatedModal>)
                }
                {
                    isCalculatorModal && (<AnimatedModal><Calculator onCloseModal={handleCloseModal} /></AnimatedModal>)
                }
            </div>
        </div>
    );
};

export default NavBar;
