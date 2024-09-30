import { barcodeEntries } from "@/constants";

const BarcodeTable = () => {
    return (
        <div className="p-1">
            <table className="w-full bg-cyan-50">
                <thead className="bg-slate-700 text-slate-50">
                    <tr className="text-left">
                        <th>Date</th>
                        <th>Item Name</th>
                        <th>Company</th>
                        <th>Size</th>
                        <th>Barcode</th>
                        <th>Qty</th>
                        <th>P. Rate</th>
                        <th>Free</th>
                        <th>S. Rate</th>
                        <th>MRP</th>
                        <th>Print</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        barcodeEntries.map((item) => (

                            <tr className="text-left">
                                <td>{item.date}</td>
                                <td>{item.itemName}</td>
                                <td>{item.company}</td>
                                <td>{item.size}</td>
                                <td className="">{item.barcode}</td>
                                <td className="">{item.qty}</td>
                                <td className="">{item.purchaseRate}</td>
                                <td className="">{item.free}</td>
                                <td className="">{item.saleRate}</td>
                                <td className="">{item.mrp}</td>
                                <td className="">
                                    <div className="flex items-center justify-center w-4/12">
                                        <input type="radio" id={item.barcode} className="radio-primary" />
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default BarcodeTable;
