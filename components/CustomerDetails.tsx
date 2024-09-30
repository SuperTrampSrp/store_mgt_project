import { Close, Add, Delete } from '@mui/icons-material';
import Alert from './Alert';


const CustomerDetails = ({ onCloseModal }: closeModalProps) => {

    return (
        <div className="modal-primary_div">
            <div className="modal-main_div w-8/12">
                <div className="flex justify-center text-white">
                    <h2 className="text-xl font-bold m-2">Customer Details</h2>
                </div>
                <div className="flex flex-col bg-cyan-200 p-2 gap-1">
                    <div className="flex justify-center">
                        <h2 className="text-xl font-semibold underline m-2">Add New Customer</h2>
                    </div>
                    <div className='flex justify-between gap-2'>
                        <div className='flex flex-col w-7/12 gap-1'>
                            <div className="flex justify-start">
                                <div className=" flex justify-end items-center pr-1 w-3/12">
                                    <label htmlFor="code">
                                        Code :
                                    </label>
                                </div>
                                <div className="">
                                    <input
                                        id="code"
                                        name="code"
                                        type="text"
                                        className=" input-class"
                                    />
                                </div>
                            </div>
                            <div className="addcustomer-input_div">
                                <div className=" addcustomer-label_div">
                                    <label htmlFor="name">
                                        Name :
                                    </label>
                                </div>
                                <div className="w-full">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        className=" input-class"
                                    />
                                </div>
                            </div>
                            <div className="addcustomer-input_div">
                                <div className=" addcustomer-label_div">
                                    <label htmlFor="address">
                                        Address :
                                    </label>
                                </div>
                                <div className="w-full">
                                    <input
                                        id="address"
                                        name="address"
                                        type="text"
                                        className=" input-class"
                                    />
                                </div>
                            </div>
                            <div className="addcustomer-input_div">
                                <div className=" addcustomer-label_div">

                                </div>
                                <div className="w-full">
                                    <input
                                        id="address1"
                                        name="address1"
                                        type="text"
                                        className=" input-class"
                                    />
                                </div>
                            </div>
                            <div className="addcustomer-input_div">
                                <div className=" addcustomer-label_div">

                                </div>
                                <div className="w-full">
                                    <input
                                        id="address2"
                                        name="address2"
                                        type="text"
                                        className=" input-class"
                                    />
                                </div>
                            </div>
                            <div className="addcustomer-input_div">
                                <div className=" addcustomer-label_div">
                                    <label htmlFor="constactPerson">
                                        Constact Person:
                                    </label>
                                </div>
                                <div className="w-full">
                                    <input
                                        id="constactPerson"
                                        name="constactPerson"
                                        type="text"
                                        className=" input-class"
                                    />
                                </div>
                            </div>
                            <div className="addcustomer-input_div">
                                <div className=" addcustomer-label_div">
                                    <label htmlFor="email">
                                        Email:
                                    </label>
                                </div>
                                <div className="w-full">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        className=" input-class"
                                    />
                                </div>
                            </div>
                            <div className="addcustomer-input_div">
                                <div className="addcustomer-dubleentry">
                                    <div className=" flex justify-end items-center pr-1 w-6/12">
                                        <label htmlFor="fax">
                                            Fax :
                                        </label>
                                    </div>
                                    <div className="w-6/12">
                                        <input
                                            id="fax"
                                            name="fax"
                                            type="text"
                                            className=" input-class"
                                        />
                                    </div>
                                </div>
                                <div className="addcustomer-dubleentry">
                                    <div className=" addcustomer-label_div">
                                        <label htmlFor="phone">
                                            Phone :
                                        </label>
                                    </div>
                                    <div className="w-">
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="text"
                                            className=" input-class"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="addcustomer-input_div">
                                <div className="addcustomer-dubleentry">
                                    <div className=" flex justify-end items-center pr-1 w-6/12">
                                        <label htmlFor="mob">
                                            Mob :
                                        </label>
                                    </div>
                                    <div className="w-6/12">
                                        <input
                                            id="mob"
                                            name="mob"
                                            type="text"
                                            className=" input-class"
                                        />
                                    </div>
                                </div>
                                <div className="addcustomer-dubleentry">
                                    <div className=" addcustomer-label_div">
                                        <label htmlFor="gstIn">
                                            GST In:
                                        </label>
                                    </div>
                                    <div className="w-">
                                        <input
                                            id="gstIn"
                                            name="gstIn"
                                            type="text"
                                            className=" input-class"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="addcustomer-input_div">
                                <div className="addcustomer-dubleentry">
                                    <div className=" flex justify-end items-center pr-1 w-6/12">
                                    </div>
                                    <div className="w-6/12">

                                    </div>
                                </div>
                                <div className="addcustomer-dubleentry">
                                    <div className=" addcustomer-label_div">
                                        <label htmlFor="cst">
                                            CST:
                                        </label>
                                    </div>
                                    <div className="w-">
                                        <input
                                            id="cst"
                                            name="cst"
                                            type="text"
                                            className=" input-class"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="addcustomer-input_div">
                                <div className="addcustomer-dubleentry">
                                    <div className=" flex justify-end items-center pr-1 w-6/12">
                                        <label htmlFor="opBal">
                                            OP. Balance
                                        </label>
                                    </div>
                                    <div className="w-6/12">
                                        <input
                                            id="opBal"
                                            name="opBal"
                                            type="text"
                                            className=" input-class"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-start pl-2 w-6/12 gap-2">
                                    <div className="flex items-center justify-center">
                                        <input type="radio" id="debit" className="radio-primary" />
                                        <label htmlFor="debit" className="ms-2">Debit</label>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <input type="radio" id="credit" className="radio-primary" />
                                        <label htmlFor="credit" className="ms-2">Credit</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col w-5/12'>
                            <div className="flex justify-center pl-2 gap-2">
                                <div className="flex items-center justify-center">
                                    <input type="radio" id="repeat" className="radio-primary" />
                                    <label htmlFor="repeat" className="ms-2">Repeat</label>
                                </div>
                                <div className="flex items-center justify-center">
                                    <input type="radio" id="blocked" className="radio-primary" />
                                    <label htmlFor="blocked" className="ms-2">Blocked</label>
                                </div>
                            </div>
                            <div className="flex justify-center pr-2 items-center">
                                <div className="flex justify-end pr-1 w-3/12">
                                    <label htmlFor="route" className="label-text">
                                        Route :
                                    </label>
                                </div>
                                <div className="flex justify-start w-7/12">
                                    <select name="route" id="route" className="addcustomer-select">
                                        <option value=""></option>
                                        <option value="customer1">Customer 1</option>
                                        <option value="customer2">Customer 2</option>
                                        <option value="customer3">Customer 3</option>
                                        <option value="customer4">Customer 4</option>
                                        <option value="customer5">Customer 5</option>
                                        <option value="customer6">Customer 6</option>
                                    </select>
                                </div>
                                <div className="flex justify-center w-2/12">
                                    <button className="addcustomer-btn_new">New</button>
                                </div>
                            </div>
                            <div className="flex justify-center pr-2 items-center">
                                <div className="flex justify-end pr-1 w-3/12">
                                    <label htmlFor="city" className="label-text">
                                        City :
                                    </label>
                                </div>
                                <div className="flex justify-start w-7/12">
                                    <select name="city" id="city" className="addcustomer-select">
                                        <option value=""></option>
                                        <option value="customer1">Customer 1</option>
                                        <option value="customer2">Customer 2</option>
                                        <option value="customer3">Customer 3</option>
                                        <option value="customer4">Customer 4</option>
                                        <option value="customer5">Customer 5</option>
                                        <option value="customer6">Customer 6</option>
                                    </select>
                                </div>
                                <div className="flex justify-center w-2/12">
                                    <button className="addcustomer-btn_new">New</button>
                                </div>
                            </div>
                            <div className="flex justify-center pr-2 items-center">
                                <div className="flex justify-end pr-1 w-3/12">
                                    <label htmlFor="town" className="label-text">
                                        Town :
                                    </label>
                                </div>
                                <div className="flex justify-start w-7/12">
                                    <select name="town" id="town" className="addcustomer-select">
                                        <option value=""></option>
                                        <option value="customer1">Customer 1</option>
                                        <option value="customer2">Customer 2</option>
                                        <option value="customer3">Customer 3</option>
                                        <option value="customer4">Customer 4</option>
                                        <option value="customer5">Customer 5</option>
                                        <option value="customer6">Customer 6</option>
                                    </select>
                                </div>
                                <div className="flex justify-center w-2/12">
                                    <button className="addcustomer-btn_new">New</button>
                                </div>
                            </div>
                            <div className="flex justify-center pr-2 items-center">
                                <div className="flex justify-end pr-1 w-3/12">
                                    <label htmlFor="district" className="label-text">
                                        District :
                                    </label>
                                </div>
                                <div className="flex justify-start w-7/12">
                                    <select name="district" id="district" className="addcustomer-select">
                                        <option value=""></option>
                                        <option value="customer1">Customer 1</option>
                                        <option value="customer2">Customer 2</option>
                                        <option value="customer3">Customer 3</option>
                                        <option value="customer4">Customer 4</option>
                                        <option value="customer5">Customer 5</option>
                                        <option value="customer6">Customer 6</option>
                                    </select>
                                </div>
                                <div className="flex justify-center w-2/12">
                                    <button className="addcustomer-btn_new">New</button>
                                </div>
                            </div>
                            <div className="flex justify-start pr-2 items-center">
                                <div className="flex justify-end pr-1 w-3/12">
                                    <label htmlFor="type" className="label-text">
                                        Type :
                                    </label>
                                </div>
                                <div className="flex justify-start w-7/12">
                                    <select name="type" id="type" className="addcustomer-select">
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
                            <div className="flex justify-start pr-2 items-center pt-1">
                                <div className="flex justify-end pr-1 w-3/12">
                                    <label htmlFor="rateType" className="label-text">
                                        Rate Type :
                                    </label>
                                </div>
                                <div className="flex justify-start w-7/12">
                                    <select name="rateType" id="rateType" className="addcustomer-select">
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
                            <div className="flex justify-start pr-2 items-center pt-1">
                                <div className="flex justify-end pr-1 w-3/12">
                                    <label htmlFor="billType" className="label-text">
                                        Bill Type :
                                    </label>
                                </div>
                                <div className="flex justify-start w-7/12">
                                    <select name="billType" id="billType" className="addcustomer-select">
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
                            <div className="flex justify-start pr-2 items-center pt-1">
                                <div className=" flex justify-end items-center pr-1 w-3/12">
                                    <label htmlFor="remark">
                                        Remark :
                                    </label>
                                </div>
                                <div className="w-7/12">
                                    <textarea
                                        id="remark"
                                        name="remark"
                                        className=" input-class"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between gap-2'>
                        <div className='w-5/12 flex flex-col gap-1'>
                            <div className="flex justify-start">
                                <div className=" addcustomer-label_div">
                                    <label htmlFor="creditLmtAmt">
                                        Credit Lmt Amt :
                                    </label>
                                </div>
                                <div className="w-5/12 pl-1">
                                    <input
                                        id="creditLmtAmt"
                                        name="creditLmtAmt"
                                        type="text"
                                        className=" input-class"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-start">
                                <div className=" addcustomer-label_div">
                                    <label htmlFor="creditLmtDays">
                                        Credit Lmt Days :
                                    </label>
                                </div>
                                <div className="w-5/12 pl-1">
                                    <input
                                        id="creditLmtDays"
                                        name="creditLmtDays"
                                        type="text"
                                        className=" input-class"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-start">
                                <div className=" addcustomer-label_div">
                                    <label htmlFor="discPerc">
                                        Disc % :
                                    </label>
                                </div>
                                <div className="w-5/12 pl-1">
                                    <input
                                        id="discPerc"
                                        name="discPerc"
                                        type="text"
                                        className=" input-class"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center bg-cyan-400 w-7/12 items-center border rounded-xl border-none'>
                            <button className="btn-secondary bg-green-700 text-cyan-50 border-none hover:bg-green-950 h-10 ">Add</button>
                            <button className="btn-secondary bg-red-700 text-cyan-50 border-none hover:bg-red-950 h-10">Edit</button>
                            <button className="btn-secondary bg-yellow-700 text-cyan-50 border-none hover:bg-yellow-950 h-10">Delete</button>
                            <button className="btn-secondary bg-pink-700 text-cyan-50 border-none hover:bg-pink-950 h-10">Save</button>

                            <button className="btn-secondary bg-lime-700 text-cyan-50 border-none hover:bg-lime-950 h-10">Cancel</button>
                            <button className="btn-secondary bg-gray-700 text-cyan-50 border-none hover:bg-gray-950 h-10">Exit</button>
                        </div>
                    </div>

                </div>
                <div className="flex justify-center pb-2">
                    <button
                        onClick={onCloseModal}
                        className="modal-close_btn"
                        title='close'
                    >
                        <Close />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CustomerDetails