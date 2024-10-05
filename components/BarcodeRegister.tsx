import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { TableSelector } from "./TableSelector";
import BarcodeTable from "./BarcodeTable";

const BarcodeRegister = ({ onCloseModal }: closeModalProps) => {
    const [value, setValue] = useState<string>("")



    return (
        <div className="modal-primary_div">
            <div className="modal-main_div w-11/12">
                <div className="flex justify-center text-white">
                    <h2 className="text-xl font-bold m-2">Barcode Register</h2>
                </div>
                <div className="flex flex-col bg-cyan-200 p-2 justify-around gap-1">
                    <div className="flex gap-5">
                        <div className="flex justify-start w-4/12">
                            <div className=" flex justify-end items-center  pr-1 w-5/12">
                                <label htmlFor="searchBarcode">
                                    Search Barcode :
                                </label>
                            </div>
                            <div className="w-full">
                                <input
                                    id="searchBarcode"
                                    name="searchBarcode"
                                    type="text"
                                    className=" input-class"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center pr-2 items-center w-4/12">
                            <div className="flex justify-end pr-1">
                                <label htmlFor="item" className="label-text">
                                    Item :
                                </label>
                            </div>
                            <div className="flex justify-start">
                                <select name="item" id="item" className="addcustomer-select">
                                    <option value=""></option>
                                    <option value="customer1">Customer 1</option>
                                    <option value="customer2">Customer 2</option>
                                    <option value="customer3">Customer 3</option>
                                    <option value="customer4">Customer 4</option>
                                    <option value="customer5">Customer 5</option>
                                    <option value="customer6">Customer 6</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-4/12">
                            <input type="radio" id="encryptRate" className="radio-primary" />
                            <label htmlFor="encryptRate" className="ms-2">Encrypt Rate</label>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex justify-start pr-2 items-center w-4/12">
                            <div className="flex justify-end items-center  pr-1 w-5/12">
                                <label htmlFor="bcPaper" className="label-text">
                                    BC Paper :
                                </label>
                            </div>
                            <div className="w-full pr-1">
                                <select name="bcPaper" id="bcPaper" className="rounded-md border-0 py-1.5 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 w-full h-9">
                                    <option value=""></option>
                                    <option value="customer1">Customer 1</option>
                                    <option value="customer2">Customer 2</option>
                                    <option value="customer3">Customer 3</option>
                                    <option value="customer4">Customer 4</option>
                                    <option value="customer5">Customer 5</option>
                                    <option value="customer6">Customer 6</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex w-4/12 justify-center gap-2">
                            <div className="flex justify-end items-center pr-1">
                                <label htmlFor="from" className="label-text ">
                                    From :
                                </label>
                            </div>
                            <div className="">
                                <input
                                    id="from"
                                    name="from"
                                    type="date"
                                    className=" input-class"
                                />
                            </div>
                            <div className="flex justify-end items-center pr-1">
                                <label htmlFor="to" className="label-text ">
                                    To :
                                </label>
                            </div>
                            <div className="">
                                <input
                                    id="to"
                                    name="to"
                                    type="date"
                                    className=" input-class"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center w-4/12">
                            <button className="btn-secondary bg-green-700 text-cyan-50 border-none hover:bg-green-950 ">Show</button>
                            <button className="btn-secondary bg-red-700 text-cyan-50 border-none hover:bg-red-950">Print</button>
                            <button className="btn-secondary bg-yellow-700 text-cyan-50 border-none hover:bg-yellow-950">Exit</button>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col bg-cyan-500 font-semibold">
                    <div className="flex justify-between p-2">
                        <div className="flex gap-3 items-baseline">
                            <h1 className="font-extrabold underline text-xl mr-4">Barcode Register</h1>
                            <span>From :</span>
                            <p>date</p>
                            <span>To :</span>
                            <p>date</p>
                        </div>
                        <div className="bg-cyan-200 border border-teal-600 rounded-md">
                            <TableSelector setValue={setValue} value={value} />

                        </div>
                    </div>
                </div>
                <div>
                    <BarcodeTable />
                </div>
                <div className="flex justify-center pb-2">
                    <button
                        onClick={onCloseModal}
                        className="modal-close_btn"
                    >
                        <CloseIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BarcodeRegister