import { Close, Add, Delete } from '@mui/icons-material';


const JurnalEntry = ({ onCloseModal }: closeModalProps) => {

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
            <div className="bg-teal-900 border border-teal-600 border-solid border-l-teal-800 rounded-lg shadow-lg transform transition-all duration-300 scale-100 w-1/2">
                <div className="flex justify-center text-white">
                    <h2 className="text-xl font-bold m-2">Jurnal Entry</h2>
                </div>
                <div className="flex flex-col bg-cyan-200 p-2 gap-1">
                    <div className="flex justify-between">
                        <div className="flex">
                            <div className="flex justify-end items-center pr-1">
                                <label htmlFor="jurnalNo" className="label-text ">
                                    Jurnal No :
                                </label>
                            </div>
                            <div className="">
                                <input
                                    id="jurnalNo"
                                    name="jurnalNo"
                                    type="text"
                                    className=" input-class"
                                />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex justify-end items-center pr-1">
                                <label htmlFor="date" className="label-text ">
                                    Date :
                                </label>
                            </div>
                            <div className="">
                                <input
                                    id="date"
                                    name="date"
                                    type="date"
                                    className=" input-class"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="bg-cyan-700 p-1 border border-teal-300">
                        <table className="w-full border bg-slate-100 ">
                            <thead className="bg-teal-700 text-slate-50">
                                <tr>
                                    <th className="border border-teal-300">A/c Name</th>
                                    <th className="border border-teal-300">Debit</th>
                                    <th className="border border-teal-300">Credit</th>
                                </tr>
                            </thead>
                            <tbody className="h-52">
                                <tr className="max-h-6">
                                    <td className=""></td>
                                    <td className=""></td>
                                    <td className=""></td>
                                </tr>
                                <tr className="">
                                    <td className=" h-6"></td>
                                    <td className="border border-teal-700 text-right bg-yellow-300">0.00</td>
                                    <td className="border border-teal-700 text-right bg-yellow-300">0.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-teal-800 p-2 flex gap-4">
                        <div className='flex gap-2'>
                            <button className="p-1 bg-cyan-400 border rounded-xl border-none hover:bg-cyan-400"><Add /></button>
                            <button className="p-1 bg-red-500 border rounded-xl border-none hover:bg-red-400"><Delete /></button>
                        </div>
                        <div className="flex w-full">
                            <div className=" flex justify-end items-center  pr-1 w-1/6">
                                <label htmlFor="narration" className="text-slate-50  ">
                                    Narration :
                                </label>
                            </div>
                            <div className="w-full">
                                <input
                                    id="narration"
                                    name="narration"
                                    type="text"
                                    className=" input-class"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="bg-teal-800 p-2 flex gap-4 justify-between">
                        <button className="btn-secondary bg-green-200 border-none hover:bg-green-500 ">Add</button>
                        <button className="btn-secondary bg-cyan-200 border-none hover:bg-cyan-500">Edit</button>
                        <button className="btn-secondary bg-red-200 border-none hover:bg-red-500">Delete</button>
                        <div className="flex items-center justify-center">
                            <input type="radio" id="print" className="radio-primary" />
                            <label htmlFor="print" className="ms-2 text-white">Print</label>
                        </div>
                        <button className="btn-secondary bg-yellow-200 border-none hover:bg-yellow-500">Save</button>
                        <button className="btn-secondary bg-pink-200 border-none hover:bg-pink-500">Cancel</button>
                        <button className="btn-secondary bg-teal-200 border-none hover:bg-teal-500">Exit</button>
                    </div>
                </div>
                <div className="flex justify-center pb-2">
                    <button
                        onClick={onCloseModal}
                        className="mt-2 bg-red-500 text-white py-1 px-2 rounded-full hover:bg-red-600 transition-colors"
                    >
                        <Close />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default JurnalEntry