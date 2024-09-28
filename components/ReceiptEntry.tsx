import BtnGroup from "./BtnGroup"

import CloseIcon from '@mui/icons-material/Close';


const ReceiptEntry = ({ onCloseModal, modalName }: closeModalProps) => {

    console.log(modalName)

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
            <div className="bg-teal-900 border border-teal-600 border-solid border-l-teal-800 rounded-lg shadow-lg transform transition-all duration-300 scale-100 w-1/2">
                <div className="flex justify-center text-white">
                    <h2 className="text-xl font-bold m-2">{modalName === "Payment" ? 'Payment Entry' : 'Receipt Entry'}</h2>
                </div>
                <div className="flex flex-col bg-cyan-200 p-2 gap-1">
                    <div className="flex justify-center text-gray-700">
                        <h2 className="text-xl font-bold m-2">{modalName === "Payment" ? 'Payment Details' : 'Receipt Details'}</h2>
                    </div>
                    <div className="flex justify-between">
                        <div className="w-4/12 flex">
                            <div className="flex justify-end items-center pr-1 w-2/4">
                                <label htmlFor="voucherNo" className="label-text ">
                                    Voucher No :
                                </label>
                            </div>
                            <div className="w-2/4">
                                <input
                                    id="voucherNo"
                                    name="voucherNo"
                                    type="text"
                                    className=" input-class"
                                />
                            </div>
                        </div>
                        <div className="w-8/12 flex">
                            <div className=" flex justify-end items-center pr-1 w-2/6">
                                <label htmlFor="customer" className="label-text">
                                    Customer :
                                </label>
                            </div>
                            <div className="w-4/6">
                                <select name="customer" id="customer" className="input-class h-9">
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
                    <div className="flex justify-between">
                        <div className="w-4/12 flex">
                            <div className="flex justify-end items-center pr-1 w-2/4">
                                <label htmlFor="date" className="label-text ">
                                    Date :
                                </label>
                            </div>
                            <div className="w-2/4">
                                <input
                                    id="date"
                                    name="date"
                                    type="date"
                                    className=" input-class"
                                />
                            </div>
                        </div>
                        <div className="w-8/12 flex">
                            <div className=" flex justify-end items-center pr-1 w-2/6">
                                <label htmlFor="accType" className="label-text">
                                    {modalName === "Payment" ? 'A/c Type' : 'Cash/ Bank Acc'} :
                                </label>
                            </div>
                            <div className="w-2/6">
                                <select name="accType" id="accType" className="input-class h-9">
                                    <option value=""></option>
                                    <option value="customer1">Customer 1</option>
                                    <option value="customer2">Customer 2</option>
                                    <option value="customer3">Customer 3</option>
                                    <option value="customer4">Customer 4</option>
                                    <option value="customer5">Customer 5</option>
                                    <option value="customer6">Customer 6</option>
                                </select>
                            </div>
                            <div className="flex items-center ml-2">
                                <input type="radio" id="sendSms" className="radio-primary" />
                                <label htmlFor="sendSms" className="ms-2 label-text">Send SMS</label>
                            </div>
                        </div>

                    </div>
                    <div className="flex justify-between">
                        <div className="w-4/12 flex">
                            <div className="flex justify-end items-center pr-1 w-2/4">
                                <label htmlFor="accCode" className="label-text ">
                                    A/c Code :
                                </label>
                            </div>
                            <div className="w-2/4">
                                <select name="accCode" id="accCode" className="input-class h-9">
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
                    <div className="flex justify-between">
                        <div className="w-full flex">
                            <div className="flex justify-end items-center pr-1 w-2/12">
                                <label htmlFor="narration" className="label-text ">
                                    Narration :
                                </label>
                            </div>
                            <div className="w-10/12">
                                <input
                                    id="narration"
                                    name="narration"
                                    type="text"
                                    className=" input-class"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="w-4/12 flex">
                            <div className="flex justify-end items-center pr-1 w-2/4">
                                <label htmlFor="opBal" className="label-text ">
                                    Op Bal :
                                </label>
                            </div>
                            <div className="w-2/4">
                                <input
                                    id="opBal"
                                    name="opBal"
                                    type="text"
                                    className=" input-class"
                                />
                            </div>
                        </div>
                        <div className="w-8/12 flex justify-start ">
                            <div className="1/6 items-center flex pr-4 pl-6">
                                <span>Debit</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="w-4/12 flex">
                            <div className="flex justify-end items-center pr-1 w-2/4">
                                <label htmlFor="amount" className="label-text ">
                                    Amount :
                                </label>
                            </div>
                            <div className="w-2/4">
                                <input
                                    id="amount"
                                    name="amount"
                                    type="text"
                                    className=" input-class"
                                />
                            </div>
                        </div>
                        <div className="w-8/12 flex justify-around">
                            <div className="w-3/6 flex">
                                <div className="flex justify-end items-center pr-1 w-2/4">
                                    <label htmlFor="discount" className="label-text ">
                                        Discount :
                                    </label>
                                </div>
                                <div className="w-2/4">
                                    <input
                                        id="discount"
                                        name="discount"
                                        type="text"
                                        className=" input-class"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center w-3/6 justify-center">
                                <input type="radio" id="print" className="radio-primary" />
                                <label htmlFor="print" className="ms-2 label-text">Print</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="w-4/12 flex h-8">
                            <div className="flex justify-end items-center pr-1 w-2/4">
                                <label htmlFor="clBalance" className="label-text ">
                                    Cl. Balance :
                                </label>
                            </div>
                            <div className="w-2/4">
                                <input
                                    id="clBalance"
                                    name="clBalance"
                                    type="text"
                                    className=" input-class"
                                />
                            </div>
                        </div>
                        <div className="w-8/12 flex justify-around">
                            <div className="w-3/6 flex">
                                <span className="">Debit</span>
                            </div>
                            <div className="flex items-center w-2/6 justify-center bg-teal-200 border pb-2 border-teal-500 rounded-xl">
                                <BtnGroup />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center pb-2">
                    <button
                        onClick={onCloseModal}
                        className="mt-2 bg-red-500 text-white py-1 px-2 rounded-full hover:bg-red-600 transition-colors"
                    >
                        <CloseIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ReceiptEntry