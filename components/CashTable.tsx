import { cashbookEntries } from "@/constants";

const CashTable = () => {
    return (
        <div className="p-1">
            <table className="w-full bg-cyan-50">
                <thead className="bg-slate-700 text-slate-50">
                    <tr className="text-left">
                        <th>Date</th>
                        <th>Voucher No</th>
                        <th>A/c Name</th>
                        <th>Narration</th>
                        <th>Debit</th>
                        <th>Credit</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        cashbookEntries.map((item) => (

                            <tr className="text-left">
                                <td>{item.date}</td>
                                <td>{item.voucherNo}</td>
                                <td>{item.accName}</td>
                                <td>{item.narration}</td>
                                <td className="text-right">{item.debit}</td>
                                <td className="text-right">{item.credit}</td>
                            </tr>
                        ))
                    }
                    <tr className="text-left">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="border bg-yellow-200 border-teal-600 text-right">0.00</td>
                        <td className="border bg-yellow-200 border-teal-600 text-right">0.00</td>
                    </tr>
                </tbody>
            </table>
            <div className="flex p-2 gap-5 bg-cyan-600">
                <span>Cl. Balance</span>
                <p className="text-red-600 font-semibold">564654654</p>
                <span className="text-red-600 font-semibold">Credit</span>
            </div>
        </div>
    )
}

export default CashTable;
