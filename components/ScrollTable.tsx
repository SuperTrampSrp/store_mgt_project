import { SkipPrevious, SkipNext, ArrowLeft, Add, Delete } from '@mui/icons-material';
import { TableSelector } from './TableSelector';
import { useEffect, useState } from 'react';


const ScrollTable = ({ parentRef }: ChildProps) => {
    const [items, setItems] = useState<string[]>([])
    const [value, setValue] = useState<string>("")

    useEffect(() => {
        setItems((previtems) => {
            if (previtems.includes(value)) {
                return previtems.filter((item) => item !== value);
            } else {
                return [...previtems, value];
            }
        });

    }, [value])

    // parentRef === ''

    return (
        <div className="bg-slate-50">
            <table className=" w-full">
                <thead className="bg-emerald-800 flex text-white w-full pr-4">
                    <tr className="flex w-full ">
                        <th className="table-header min-w-52">Item Name</th>
                        <th className="w-full table-header">Qty</th>
                        <th className="w-full table-header">Unit</th>
                        <th className="w-full table-header">Rate</th>
                        <th className="w-full table-header">Disc%</th>
                        <th className="w-full table-header">Disc</th>
                        <th className="w-full table-header">Value</th>
                        <th className="w-full table-header">CGST%</th>
                        <th className="w-full table-header">CGST</th>
                        <th className="w-full table-header">SGST%</th>
                        <th className="w-full table-header">SGST</th>
                        {
                            parentRef.current?.id === 'purchase' && (
                                <>
                                    <th className="w-full table-header">Mrg%</th>
                                    <th className="w-full table-header">S.Rate</th>
                                    <th className="w-full table-header">M.Vale</th>
                                </>
                            )
                        }
                        <th className="w-full table-header">Total</th>
                    </tr>
                </thead>

                <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full text-gray-600">

                    <tr className="flex w-full mb-4">
                        <td className="table-body w-52">
                            <TableSelector setValue={setValue} value={value} />
                        </td>
                        <td className="w-full table-body">
                            <input type="number" className='w-full h-full' id='qty' />
                        </td>
                        <td className="w-full table-body">
                            <input type="number" className='w-full h-full' id='unit' />
                        </td>
                        <td className="w-full table-body">
                            <input type="number" className='w-full h-full' id='rate' />
                        </td>
                        <td className="w-full table-body">
                            <input type="number" className='w-full h-full' id='discPerc' />
                        </td>
                        <td className="w-full table-body">
                            <input type="number" className='w-full h-full' id='disc' />
                        </td>
                        <td className="w-full table-body">
                            <input type="number" className='w-full h-full' id='value' />
                        </td>
                        <td className="w-full table-body">
                            <input type="number" className='w-full h-full' id='cgstPerc' />
                        </td>
                        <td className="w-full table-body">
                            <input type="number" className='w-full h-full' id='cgst' />
                        </td>
                        <td className="w-full table-body">
                            <input type="number" className='w-full h-full' id='sgstPerc' />
                        </td>
                        <td className="w-full table-body">
                            <input type="number" className='w-full h-full' id='sgst' />
                        </td>
                        {
                            parentRef.current?.id === 'purchase' && (
                                <>
                                    <td className="w-full table-body">
                                        <input type="number" className='w-full h-full' id='mrgPerc' />
                                    </td>
                                    <td className="w-full table-body">
                                        <input type="number" className='w-full h-full' id='sRate' />
                                    </td>
                                    <td className="w-full table-body">
                                        <input type="number" className='w-full h-full' id='mValue' />
                                    </td>
                                </>
                            )
                        }
                        <td className="w-full table-body">
                            <input type="number" className='w-full h-full' id='total' />
                        </td>
                    </tr>

                    <tr className="flex w-full mb-4">
                        <td className="min-w-52"></td>
                        <td className="table-summary_row">.00</td>
                        <td className="w-full"></td>
                        <td className="w-full"></td>
                        <td className="w-full"></td>
                        <td className="table-summary_row">.00</td>
                        <td className="table-summary_row">.00</td>
                        <td className="w-full"></td>
                        <td className="table-summary_row">.00</td>
                        <td className="w-full"></td>
                        <td className="table-summary_row">.00</td>
                        <td className="table-summary_row">.00</td>
                    </tr>
                </tbody>
            </table>
            <div className="flex flex-col bg-emerald-800 text-white p-1 px-2">

                {
                    parentRef.current?.id === 'sales' && (<div className="flex gap-3">
                        <button className="p-1 bg-cyan-600 border rounded-xl border-none hover:bg-cyan-400" title='add'><Add /></button>
                        <button className="p-1 bg-red-600 border rounded-xl border-none hover:bg-red-400" title='delete'><Delete /></button>
                        <span className="p-2">Stock :</span>
                    </div>
                    )
                }
                <div className="flex justify-between items-center">
                    {
                        parentRef.current?.id === 'purchase' && (
                            <div className='flex gap-2'>
                                <button className="p-1 bg-cyan-600 border rounded-xl border-none hover:bg-cyan-400"><Add /></button>
                                <button className="p-1 bg-red-600 border rounded-xl border-none hover:bg-red-400"><Delete /></button>
                            </div>
                        )
                    }
                    <span>Total Items : 0</span>
                    <span>PR : .00</span>
                    <span>CT : .00</span>
                    <span>SR : .00</span>
                    <span>MRP : .00</span>
                    <span>MIN : .00</span>
                    <span>Mrg : 0/0</span>
                    <div className="flex gap-2">
                        <SkipPrevious className="table-navigation" />
                        <ArrowLeft className="table-navigation" />
                        <ArrowLeft className="rotate-180 table-navigation" />
                        <SkipNext className="table-navigation" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ScrollTable