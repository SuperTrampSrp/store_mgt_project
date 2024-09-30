import { useRef } from "react";

import ScrollTable from "./ScrollTable";
import PurchaseSummary from "./PurchaseSummary";
import CloseIcon from '@mui/icons-material/Close';

const PurchaseDetails = ({ onCloseModal }: closeModalProps) => {

    const parentRef = useRef(null);


    return (
        <div className="modal-primary_div">
            <div className="modal-main_div">
                <div className="flex justify-center text-white">
                    <h2 className="text-xl font-bold m-2">Purchase Details</h2>
                </div>
                <div className="flex flex-row bg-cyan-200 p-2 justify-around">
                    <div className="basis-2/12 flex flex-col gap-1">
                        <div className="flex justify-between pr-2 items-center">
                            <div className="w-1/2 flex justify-end pr-1">
                                <label htmlFor="docNo" className="label-text ">
                                    Doc No :
                                </label>
                            </div>
                            <div className="w-1/2">
                                <input
                                    id="docNo"
                                    name="docNo"
                                    type="text"
                                    className=" input-class"
                                />
                            </div>
                        </div>
                        <div className="flex justify-between pr-2 items-center">
                            <div className="w-1/2 flex justify-end pr-1">
                                <label htmlFor="vehicleNo" className="label-text ">
                                    Vehicle No :
                                </label>
                            </div>
                            <div className="w-1/2">
                                <input
                                    id="vehicleNo"
                                    name="vehicleNo"
                                    type="text"
                                    className=" input-class"
                                />
                            </div>
                        </div>
                        <div className="flex justify-between pr-2 items-center">
                            <div className="w-1/2 flex justify-end pr-1">
                                <label htmlFor="supplier" className="label-text">
                                    Supplier :
                                </label>
                            </div>
                            <div className="w-1/2">
                                <select name="supplier" id="supplier" className="input-class">
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
                    <div className="basis-3/12 flex flex-col gap-1 justify-between">
                        <div className="input-primary">
                            <div className="flex items-center w-1/4">
                                <input type="radio" id="credit" className="radio-primary" />
                                <label htmlFor="credit" className="ms-2 label-text">Credit</label>
                            </div>
                            <div className="w-3/4 flex justify-end pr-1">
                                <div className="label-secondary items-center w-1/3">
                                    <label htmlFor="date" className="label-text">
                                        Date :
                                    </label>
                                </div>
                                <div className="w-2/3">
                                    <input name="date" id="date" type="date" className="input-class w-full">
                                    </input>
                                </div>
                            </div>

                        </div>
                        <div className="flex justify-end mr-3">
                            <div className="w-1/3 flex justify-end items-center pr-1">
                                <label htmlFor="chqDdNo" className="label-text">
                                    Chq/DD No :
                                </label>
                            </div>
                            <div className="w-2/3">
                                <input name="chqDdNo" id="chqDdNo" type="text" className="input-class">
                                </input>
                            </div>
                        </div>
                        <div className="input-primary mr-1">
                            <div className="w-full">
                                <input
                                    id="blank"
                                    name="blank"
                                    type="text"
                                    className="input-class"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="basis-3/12 flex flex-col gap-1 justify-between">
                        <div className="flex">
                            <div className="label-secondary w-1/2 items-center">
                                <label htmlFor="billNo" className="label-text">
                                    Bill No :
                                </label>
                            </div>
                            <div className="w-1/2">
                                <input
                                    id="billNo"
                                    name="billNo"
                                    type="text"
                                    className=" input-class"
                                />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="label-secondary items-center w-1/2">
                                <label htmlFor="chqDdDate" className="label-text">
                                    Chq/DD Date :
                                </label>
                            </div>
                            <div className="w-1/2">
                                <input
                                    id="chqDdDate"
                                    name="chqDdDate"
                                    type="date"
                                    className=" input-class"
                                />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="label-secondary w-1/2">
                                <span className="label-text">
                                    Op.Bal :
                                </span>
                            </div>
                            <div className="w-1/2">
                                <span className=" label-text">0.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="basis-3/12 flex flex-col gap-1 justify-between">
                        <div className="flex">
                            <div className="label-secondary items-center w-1/2">
                                <label htmlFor="billDate" className="label-text">
                                    Bill Date :
                                </label>
                            </div>
                            <div className="w-1/2">
                                <input
                                    id="billDate"
                                    name="billDate"
                                    type="date"
                                    className=" input-class"
                                />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="label-secondary items-center w-1/2">
                                <label htmlFor="chqDdAmount" className="label-text">
                                    Chq/DD Amount :
                                </label>
                            </div>
                            <div className="w-1/2">
                                <input
                                    id="chqDdAmount"
                                    name="chqDdAmount"
                                    type="text"
                                    className=" input-class"
                                    placeholder="0.00"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="flex items-center w-1/3">
                                <input type="radio" id="iseCess" className="radio-primary" />
                                <label htmlFor="iseCess" className="ms-2 label-text">Use Cess</label>
                            </div>
                            <div className="flex items-center w-1/3">
                                <input type="radio" id="autoBatch" className="radio-primary" />
                                <label htmlFor="autoBatch" className="ms-2 label-text">Auto Batch</label>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/12 flex justify-start flex-col">
                        <div className="flex items-center">
                            <input type="radio" id="reversed" className="radio-primary" />
                            <label htmlFor="reversed" className="ms-2 label-text">Reversed</label>
                        </div>
                        <div className="flex items-center">
                            <input type="radio" id="interstate" className="radio-primary" />
                            <label htmlFor="interstate" className="ms-2 label-text">Interstate</label>
                        </div>
                    </div>
                </div>
                <div className="" id="purchase" ref={parentRef}>
                    <ScrollTable parentRef={parentRef} />
                    <PurchaseSummary />
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

export default PurchaseDetails