import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { TableSelector } from "./TableSelector";
import CashTable from "./CashTable";

const CashBook = ({ onCloseModal }: closeModalProps) => {
    const [value, setValue] = useState<string>("")



    return (
        <div className="modal-primary_div">
            <div className="modal-main_div w-8/12">
                <div className="flex justify-center text-white">
                    <h2 className="text-xl font-bold m-2">Cashbook</h2>
                </div>
                <div className="flex flex-col bg-cyan-200 p-2 justify-around gap-1">
                    <div className="flex gap-5">
                        <div className="flex">
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
                        </div>
                        <div className="flex">
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
                        <div className="flex justify-between pr-2 items-center w-96">
                            <div className="flex justify-end w-3/12 pr-1">
                                <label htmlFor="counter" className="label-text">
                                    Counter :
                                </label>
                            </div>
                            <div className="flex justify-start">
                                <select name="counter" id="counter" className="rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 w-72 h-9">
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
                    </div>
                    <div className="flex justify-end">
                        <div className="flex justify-between gap-5 w-7/12">
                            <div className="flex items-center justify-center">
                                <input type="radio" id="consolidated" className="radio-primary" />
                                <label htmlFor="consolidated" className="ms-2">Consolidated</label>
                            </div>
                            <div className="">
                                <button className="btn-secondary bg-green-700 text-cyan-50 border-none hover:bg-green-950 ">Add</button>
                                <button className="btn-secondary bg-red-700 text-cyan-50 border-none hover:bg-red-950">Delete</button>
                                <button className="btn-secondary bg-yellow-700 text-cyan-50 border-none hover:bg-yellow-950">Save</button>
                                <button className="btn-secondary bg-pink-700 text-cyan-50 border-none hover:bg-pink-950">Cancel</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col bg-cyan-500 font-semibold">
                    <div className="flex justify-between p-2">
                        <div className="flex gap-3 items-baseline">
                            <h1 className="font-extrabold underline text-xl mr-4">Cashbook</h1>
                            <span>From :</span>
                            <p>date</p>
                            <span>To :</span>
                            <p>date</p>
                        </div>
                        <div className="bg-cyan-200 border border-teal-600 rounded-md">
                            <TableSelector setValue={setValue} value={value} />

                        </div>
                    </div>
                    <div className="flex p-2 gap-5 ">
                        <span>From</span>
                        <p className="text-red-600">date</p>
                        <span className="text-red-600">From</span>
                    </div>
                </div>
                <div>
                    <CashTable />
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

export default CashBook