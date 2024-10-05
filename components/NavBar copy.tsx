'use client';

import { useState, } from "react"
import { menuData } from "@/constants";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuBar from "./MenuBar";
import SalesDetails from "./SalesDetails";
import { MouseEvent } from "react";
import PurchaseDetails from "./PurchaseDetails";
import ReceiptEntry from "./ReceiptEntry";
import JurnalEntry from "./JurnalEntry";
import CashBook from "./CashBook";
import BarcodeRegister from "./BarcodeRegister";
import CustomerDetails from "./CustomerDetails";
import { useModalStore } from "@/app/store/modals";


const NavBar = () => {
    const [openPrimaryIndex, setOpenPrimaryIndex] = useState<number | null>(null);
    const [openSecondaryIndex, setOpenSecondaryIndex] = useState<Record<number, number | null>>({});

    const [modalName, setModalName] = useState<string>()

    const { isCashbookModal, isSalesModal, isBarcodeRegisterModal, isCustomerDetailsModal, isJurnalEntryModal, isPurchaseModal, isRecieptEntryModal, openSalesModal, openCashbookModal, openBarcodeRegisterModal, openCustomerDetailsModal, openJurnalEntryModal, openPurchaseModal, openRecieptEntryModal, closeModal } = useModalStore();


    const handleCloseModal = () => closeModal();

    // Toggle the primary dropdown
    const togglePrimaryDropdown = (index: number): void => {
        setOpenPrimaryIndex((prevIndex) => (prevIndex === index ? null : index));
        setOpenSecondaryIndex({});
    };

    // Handle mouse enter on secondary dropdown
    const handleMouseEnter = (primaryIndex: number, secondaryIndex: number): void => {
        setOpenSecondaryIndex((prevState) => ({
            ...prevState,
            [primaryIndex]: secondaryIndex,
        }));
    };

    // Handle mouse leave on secondary dropdown
    const handleMouseLeave = (primaryIndex: number): void => {
        setOpenSecondaryIndex((prevState) => ({
            ...prevState,
            [primaryIndex]: null,
        }));
    };


    const handleClick = (e: MouseEvent<HTMLElement>) => {
        const id = e.currentTarget.id
        setModalName(id)
        switch (id) {
            case 'New':
                openSalesModal()
                break;
            case 'Bill':
                openPurchaseModal()
                break;
            case 'ReceiptEntry':
                openRecieptEntryModal()
                break;
            case 'Payment':
                openRecieptEntryModal()
                break;
            case 'Jurnal Entry':
                openJurnalEntryModal()
                break;
            case 'Cashbook':
                openCashbookModal()
                break;
            case 'Barcode Register':
                openBarcodeRegisterModal()
                break;
            case 'Customer':
                openCustomerDetailsModal()
                break;

            default:
                break;
        }

    }
    console.log(modalName)

    return (
        <div>
            <nav className="relative p-3 m-0 bg-teal-950">
                <ul className="flex space-x-6">
                    {menuData.map((menuItem, primaryIndex) => (
                        <li
                            key={primaryIndex}
                            className="relative group"
                            onMouseLeave={() => handleMouseLeave(primaryIndex)}
                        >
                            {/* Toggle primary dropdown */}
                            <button
                                className="py-2 px-4 text-slate-50 border border-none rounded-lg hover:shadow-teal-600 shadow-md transition-colors"
                                onClick={() => togglePrimaryDropdown(primaryIndex)}
                            >
                                {menuItem.title}
                                <ExpandMoreIcon style={{ color: 'white' }} />
                            </button>

                            {/* Conditionally render the primary dropdown */}
                            {openPrimaryIndex === primaryIndex && (
                                <ul className="absolute left-0 bg-teal-950 border border-white rounded-tr-xl shadow-lg group-hover:block hidden z-10">
                                    {menuItem.submenu &&
                                        menuItem.submenu.map((subItem, secondaryIndex) => (
                                            <li
                                                key={secondaryIndex}
                                                className="relative group align-middle w-36"
                                                onMouseEnter={() => handleMouseEnter(primaryIndex, secondaryIndex)}
                                            >
                                                {subItem.submenu ? (
                                                    <>
                                                        {/* Toggle secondary dropdown */}
                                                        <button className="block py-2 px-4 text-slate-50 hover:bg-teal-800 border-teal-200 rounded-tr-xl w-full text-left transition-colors" >
                                                            {subItem.title}
                                                            <ArrowForwardIosIcon
                                                                style={{ color: 'white', height: '15px', float: 'right', marginTop: '6px' }}
                                                            />
                                                        </button>

                                                        {/* Conditionally render secondary dropdown */}
                                                        {openSecondaryIndex[primaryIndex] === secondaryIndex && (
                                                            <ul className="absolute left-full top-0 mt-2 bg-teal-900 border-white rounded-tr-xl shadow-lg z-10 hidden group-hover:block w-full">
                                                                {subItem.submenu.map((option, optionIndex) => (
                                                                    <li key={optionIndex}>
                                                                        <span id={option} className="block py-2 px-4 text-slate-50 hover:bg-teal-800 border-teal-200 rounded-tr-xl transition-colors cursor-pointer" onClick={handleClick}>
                                                                            {option}
                                                                        </span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </>
                                                ) : (
                                                    <span id={subItem.title} className="block py-2 px-4 text-slate-50 hover:bg-teal-800 border-teal-200 rounded-tr-xl transition-colors cursor-pointer" onClick={handleClick}>
                                                        {subItem.title}
                                                    </span>
                                                )}
                                            </li>
                                        ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
            <div>
                <MenuBar onOpenModal={openSalesModal} handleClick={handleClick} />


                {
                    isSalesModal && (<SalesDetails onCloseModal={handleCloseModal} />)
                }
                {
                    isPurchaseModal && (<PurchaseDetails onCloseModal={handleCloseModal} />)
                }
                {
                    isRecieptEntryModal && (<ReceiptEntry onCloseModal={handleCloseModal} modalName={modalName} />)
                }
                {
                    isJurnalEntryModal && (<JurnalEntry onCloseModal={handleCloseModal} modalName={modalName} />)
                }
                {
                    isCashbookModal && (<CashBook onCloseModal={handleCloseModal} modalName={modalName} />)
                }
                {
                    isBarcodeRegisterModal && (<BarcodeRegister onCloseModal={handleCloseModal} modalName={modalName} />)
                }
                {
                    isCustomerDetailsModal && (<CustomerDetails onCloseModal={handleCloseModal} modalName={modalName} />)
                }
            </div>
        </div>
    );
};

export default NavBar;
