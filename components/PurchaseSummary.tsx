import BtnGroup from "./BtnGroup"

const PurchaseSummary = () => {

    return (
        <div className='bg-teal-200 pb-2 flex flex-row'>
            <div className='grid grid-cols-4 justify-between w-11/12 mt-2 gap-1'>
                <div className="summary-items">
                    <div className="summary-input">
                        <label htmlFor="billTotal" className="label-text">
                            Bill Total :
                        </label>
                    </div>
                    <div className="w-1/2">
                        <input name="billTotal" id="billTotal" className="input-class">
                        </input>
                    </div>
                </div>
                <div className="summary-items">
                    <div className="summary-input">
                        <label htmlFor="returnAmt" className="label-text">
                            Return Amt :
                        </label>
                    </div>
                    <div className="w-1/2">
                        <input name="returnAmt" id="returnAmt" className="input-class">
                        </input>
                    </div>
                </div>
                <div className="summary-items">
                    <div className="summary-input">
                        <label htmlFor="frieght" className="label-text">
                            Freight :
                        </label>
                    </div>
                    <div className="w-1/2">
                        <input name="frieght" id="frieght" className="input-class">
                        </input>
                    </div>
                </div>
                <div className="summary-items">
                    <div className="summary-input">
                        <label htmlFor="addAmt" className="label-text">
                            Add Amt :
                        </label>
                    </div>
                    <div className="w-1/2">
                        <input name="addAmt" id="addAmt" className="input-class">
                        </input>
                    </div>
                </div>
                <div className="summary-items">
                    <div className="summary-input">
                        <label htmlFor="discount" className="label-text">
                            Discount :
                        </label>
                    </div>
                    <div className="w-1/2">
                        <input name="discount" id="discount" className="input-class">
                        </input>
                    </div>
                </div>
                <div className="summary-items">
                    <div className="summary-input">
                        <label htmlFor="roundoff" className="label-text">
                            Roundoff :
                        </label>
                    </div>
                    <div className="w-1/2">
                        <input name="roundoff" id="roundoff" className="input-class">
                        </input>
                    </div>
                </div>
                <div className="summary-items">
                    <input type="radio" id="dotMtrx" className="radio-primary absolute" />
                    <div className="summary-input">
                        <label htmlFor="netAmt" className="label-text">
                            Net Amt :
                        </label>
                    </div>
                    <div className="w-1/2">
                        <input name="netAmt" id="netAmt" className="input-class">
                        </input>
                    </div>
                </div>
                <div className="summary-items">
                    <div className="summary-input">
                        <label htmlFor="paidAmt" className="label-text">
                            Paid Amt :
                        </label>
                    </div>
                    <div className="w-1/2">
                        <input name="paidAmt" id="paidAmt" className="input-class">
                        </input>
                    </div>
                </div>
                <div className="summary-items">
                    <div className="summary-input">
                        <label htmlFor="balance" className="label-text">
                            Balance :
                        </label>
                    </div>
                    <div className="w-1/2">
                        <input name="balance" id="balance" className="input-class">
                        </input>
                    </div>
                </div>
                <div className="flex justify-start pr-2 pl-8 items-center col-span-2 w-full">
                    <div className="flex justify-end pr-1 w-3/12 ml-1">
                        <label htmlFor="note" className="label-text">
                            Note :
                        </label>
                    </div>
                    <div className="w-full">
                        <input name="note" id="note" className="input-class">
                        </input>
                    </div>
                </div>
                <div className="summary-items">
                    <div className="summary-input">
                        <span className="label-text">
                            Last Bill Amt :
                        </span>
                    </div>
                    <div className="w-1/2">
                        <span className="label-text">0.00</span>
                    </div>
                </div>
            </div>
            <BtnGroup />
        </div>
    )
}

export default PurchaseSummary