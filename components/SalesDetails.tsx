import ScrollTable from "./ScrollTable";
import Summary from "./Summary";
import CloseIcon from '@mui/icons-material/Close';



const SalesDetails = ({ onCloseModal }: closeModalProps) => {

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
            <div className="bg-teal-900 border border-teal-600 border-solid border-l-teal-800 rounded-lg shadow-lg transform transition-all duration-300 scale-100 w-11/12">
                <div className="flex justify-center text-white">
                    <h2 className="text-xl font-bold m-2">Sales Details</h2>
                </div>
                <div className="flex flex-row bg-cyan-200 p-2">
                    <div className="basis-5/12 flex flex-col gap-1">
                        <div className="flex justify-between pr-2 items-center">
                            <div className="w-2/12 flex justify-end pr-1">
                                <label htmlFor="docNo" className="label-text ">
                                    Doc No :
                                </label>
                            </div>
                            <div className="w-3/12">
                                <input
                                    id="docNo"
                                    name="docNo"
                                    type="text"
                                    className=" input-class"
                                />
                            </div>
                            <div className="flex w-7/12 ml-1 justify-between">
                                <div className="flex items-center">
                                    <input type="radio" id="credit" className="appearance-none w-4 h-4 border-2 border-teal-500 checked:border-red-600 rounded-full" />
                                    <label htmlFor="credit" className="ms-2 label-text">Credit</label>
                                </div>
                                <div className="">
                                    <p className="label-text">Last Bill Amt : .00</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between pr-2 items-center">
                            <div className="w-2/12 flex justify-end pr-1">
                                <label htmlFor="customer" className="label-text">
                                    Customer :
                                </label>
                            </div>
                            <div className="w-3/12">
                                <select name="customer" id="customer" className="input-class">
                                    <option value=""></option>
                                    <option value="customer1">Customer 1</option>
                                    <option value="customer2">Customer 2</option>
                                    <option value="customer3">Customer 3</option>
                                    <option value="customer4">Customer 4</option>
                                    <option value="customer5">Customer 5</option>
                                    <option value="customer6">Customer 6</option>
                                </select>
                            </div>
                            <div className="w-7/12 ml-1">
                                <input type="text" id="aaa" className="input-class" />
                            </div>
                        </div>
                        <div className="input-blank">
                            <div className="">
                            </div>
                            <div className="w-10/12">
                                <input type="text" id="bbb" className="input-class" />
                            </div>
                        </div>
                        <div className="input-blank">
                            <div className="">
                            </div>
                            <div className="w-10/12">
                                <input type="text" id="ccc" className="input-class" />
                            </div>
                        </div>
                        <div className="input-blank">
                            <div className="w-2/1">
                            </div>
                            <div className="w-10/12">
                                <input type="text" id="ddd" className="input-class" />
                            </div>
                        </div>
                        <div className="input-blank">
                            <div className="flex justify-between w-6/12 items-center">
                                <div className="w-2/6 flex justify-end pr-1">
                                    <label htmlFor="phone" className="label-text">
                                        Phone :
                                    </label>
                                </div>
                                <div className="w-4/6">
                                    <input type="text" id="phone" autoComplete="0000000000" className="input-class" />
                                </div>
                            </div>
                            <div className="flex justify-between w-6/12 items-center">
                                <div className="w-3/12 flex justify-end pr-1">
                                    <label htmlFor="gstIn" className="label-text">
                                        GSTin :
                                    </label>
                                </div>
                                <div className="w-9/12">
                                    <input type="text" id="gstIn" className="input-class" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="basis-4/12 flex flex-col gap-1 justify-between">
                        <div className="input-primary">
                            <div className="w-3/12 flex justify-end pr-1">
                                <label htmlFor="salesman" className="label-text">
                                    Salesman :
                                </label>
                            </div>
                            <div className="w-5/12">
                                <select name="salesman" id="salesman" className="input-class">
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
                        <div className="input-primary">
                            <div className="w-3/12 flex justify-end pr-1">
                                <label htmlFor="coCode" className="label-text">
                                    C/O Code :
                                </label>
                            </div>
                            <div className="w-5/12">
                                <select name="coCode" id="coCode" className="input-class">
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
                        <div className="input-primary">
                            <div className="w-3/12 flex justify-end pr-1">
                                <label htmlFor="cashBank" className="label-text">
                                    Cash/ Bank :
                                </label>
                            </div>
                            <div className="w-5/12">
                                <select name="cashBank" id="cashBank" className="input-class">
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
                        <div className="flex">
                            <div className="flex flex-col w-7/12">
                                <div className="input-primary">
                                    <div className="label-secondary">
                                        <span className="label-text">
                                            Op.Bal :
                                        </span>
                                    </div>
                                    <div className="w-7/12">
                                        <span className="label-text">
                                            0.00
                                        </span>
                                    </div>
                                </div>
                                <div className="input-primary">
                                    <div className="label-secondary">
                                        <span className="label-text">
                                            Points :
                                        </span>
                                    </div>
                                    <div className="w-7/12">
                                        <span className="label-text">

                                        </span>
                                    </div>
                                </div>
                                <div className="input-primary">
                                    <div className="label-secondary">
                                        <label htmlFor="orderNo" className="label-text">
                                            Order No :
                                        </label>
                                    </div>
                                    <div className="w-7/12">
                                        <input name="orderNo" id="orderNo" className="input-class">
                                        </input>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-5/12">
                                <div className="flex items-center">
                                    <input type="radio" id="useCess" className="radio-primary" />
                                    <label htmlFor="useCess" className="ms-2 label-text">Use Cess</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="radio" id="reverseChrge" className="radio-primary" />
                                    <label htmlFor="reverseChrge" className="ms-2 label-text">Reverse Chrge</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="radio" id="interstate" className="radio-primary" />
                                    <label htmlFor="interstate" className="ms-2 label-text">Interstate</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="radio" id="estimatePrint" className="radio-primary" />
                                    <label htmlFor="estimatePrint" className="ms-2 label-text">Estimate Print</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="basis-3/12 flex justify-start">
                        <div className="w-10/12 flex flex-col gap-1">
                            <div className="input-primary">
                                <div className="label-secondary">
                                    <label htmlFor="date" className="label-text">
                                        Date :
                                    </label>
                                </div>
                                <div className="w-7/12">
                                    <input name="date" id="date" type="date" className="input-class">
                                    </input>
                                </div>
                            </div>
                            <div className="input-primary">
                                <div className="label-secondary">
                                    <label htmlFor="billType" className="label-text">
                                        Bill Type :
                                    </label>
                                </div>
                                <div className="w-7/12">
                                    <select name="billType" id="billType" className="input-class">
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
                            <div className="input-primary">
                                <div className="label-secondary">
                                    <label htmlFor="rateType" className="label-text">
                                        Rate Type :
                                    </label>
                                </div>
                                <div className="w-7/12">
                                    <select name="rateType" id="rateType" className="input-class">
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
                            <div className="input-primary">
                                <div className="label-secondary">
                                    <label htmlFor="vehNo" className="label-text">
                                        Vehicle No :
                                    </label>
                                </div>
                                <div className="w-7/12">
                                    <input name="vehNo" id="vehNo" className="input-class">
                                    </input>
                                </div>
                            </div>
                            <div className="input-primary">
                                <div className="label-secondary">
                                    <label htmlFor="driver" className="label-text">
                                        Driver :
                                    </label>
                                </div>
                                <div className="w-7/12">
                                    <input name="driver" id="driver" className="input-class">
                                    </input>
                                </div>
                            </div>
                            <div className="input-primary">
                                <div className="label-secondary">
                                    <label htmlFor="site" className="label-text">
                                        Site :
                                    </label>
                                </div>
                                <div className="w-7/12">
                                    <input name="site" id="site" className="input-class">
                                    </input>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-2/12">
                            <div >
                                <input name="eee" id="eee" type="number" min={1} defaultValue={1} className="input-class">
                                </input>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <ScrollTable />
                    <Summary />
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

export default SalesDetails