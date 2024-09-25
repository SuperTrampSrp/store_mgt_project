import { SkipPrevious, SkipNext, ArrowLeft, Add, Delete } from '@mui/icons-material';




const ScrollTable = () => {

    return (
        <div className="container bg-slate-50">
            <table className=" w-full">
                <thead className="bg-emerald-800 flex text-white w-full pr-4">
                    <tr className="flex w-full ">
                        <th className="w-full border border-gray-50">Item Name</th>
                        <th className="w-full border border-gray-50">Qty</th>
                        <th className="w-full border border-gray-50">Unit</th>
                        <th className="w-full border border-gray-50">Rate</th>
                        <th className="w-full border border-gray-50">Disc%</th>
                        <th className="w-full border border-gray-50">Disc</th>
                        <th className="w-full border border-gray-50">Value</th>
                        <th className="w-full border border-gray-50">CGST%</th>
                        <th className="w-full border border-gray-50">CGST</th>
                        <th className="w-full border border-gray-50">SGST%</th>
                        <th className="w-full border border-gray-50">SGST</th>
                        <th className="w-full border border-gray-50">Total</th>
                    </tr>
                </thead>

                <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full text-gray-600">
                    <tr className="flex w-full mb-4">
                        <td className="w-full border border-gray-400">Birds</td>
                        <td className="w-full border border-gray-400">Cats</td>
                        <td className="w-full border border-gray-400">Birds</td>
                        <td className="w-full border border-gray-400">Fish</td>
                        <td className="w-full border border-gray-400">Dogs</td>
                        <td className="w-full border border-gray-400">Cats</td>
                        <td className="w-full border border-gray-400">Birds</td>
                        <td className="w-full border border-gray-400">Fish</td>
                        <td className="w-full border border-gray-400">Dogs</td>
                        <td className="w-full border border-gray-400">Cats</td>
                        <td className="w-full border border-gray-400">Birds</td>
                        <td className="w-full border border-gray-400">Fish</td>
                    </tr>
                    <tr className="flex w-full mb-4">
                        <td className="w-full"></td>
                        <td className="w-full bg-purple-700 text-white text-right border border-r-emerald-50">.00</td>
                        <td className="w-full"></td>
                        <td className="w-full"></td>
                        <td className="w-full"></td>
                        <td className="w-full bg-purple-700 text-white text-right border border-r-emerald-50">.00</td>
                        <td className="w-full bg-purple-700 text-white text-right border border-r-emerald-50">.00</td>
                        <td className="w-full"></td>
                        <td className="w-full bg-purple-700 text-white text-right border border-r-emerald-50">.00</td>
                        <td className="w-full"></td>
                        <td className="w-full  bg-purple-700 text-white text-right border border-r-emerald-50">.00</td>
                        <td className="w-full  bg-purple-700 text-white text-right border border-r-emerald-50">.00</td>
                    </tr>
                </tbody>
            </table>
            <div className="flex flex-col bg-emerald-800 text-white p-1 px-2">
                <div className="flex gap-3">
                    <button className="p-1 bg-cyan-600 border rounded-xl border-none hover:bg-cyan-400"><Add /></button>
                    <button className="p-1 bg-red-600 border rounded-xl border-none hover:bg-red-400"><Delete /></button>
                    <span className="p-2">Stock :</span>
                </div>
                <div className="flex justify-between">
                    <span>Total Items : 0</span>
                    <span>PR : .00</span>
                    <span>CT : .00</span>
                    <span>SR : .00</span>
                    <span>MRP : .00</span>
                    <span>MIN : .00</span>
                    <span>Mrg : 0/0</span>
                    <div className="flex gap-2">
                        <SkipPrevious className="bg-pink-700 cursor-pointer hover:bg-pink-500" />
                        <ArrowLeft className="bg-pink-700 cursor-pointer hover:bg-pink-500" />
                        <ArrowLeft className="rotate-180 bg-pink-700 cursor-pointer hover:bg-pink-500" />
                        <SkipNext className="bg-pink-700 cursor-pointer hover:bg-pink-500" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ScrollTable