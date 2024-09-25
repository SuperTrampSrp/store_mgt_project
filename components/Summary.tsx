import React from 'react'

const Summary = () => {
    return (
        <div className='bg-teal-200 pb-2'>
            <div className='grid grid-cols-5 justify-between '>
                <div className='summary-grid'>
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
                    <div className="input-primary">
                        <div className="summary-input">
                            <label htmlFor="loadChg" className="label-text">
                                Load Chg :
                            </label>
                        </div>
                        <div className="w-1/2">
                            <input name="loadChg" id="loadChg" className="input-class">
                            </input>
                        </div>
                    </div>
                    <div className="input-primary">
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
                </div>
                <div className='summary-grid'>
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
                    <div className="input-primary">
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
                    <div className="input-primary">
                        <div className="summary-input">
                            <label htmlFor="rcvdAmt" className="label-text">
                                Rcvd Amt :
                            </label>
                        </div>
                        <div className="w-1/2">
                            <input name="rcvdAmt" id="rcvdAmt" className="input-class">
                            </input>
                        </div>
                    </div>

                </div>
                <div className='summary-grid'>
                    <div className="input-primary">
                        <div className="summary-input">
                            <label htmlFor="adviceAmt" className="label-text">
                                Advice Amt :
                            </label>
                        </div>
                        <div className="w-1/2">
                            <input name="adviceAmt" id="adviceAmt" className="input-class">
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
                    <div className="input-primary">
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
                </div>
                <div className='summary-grid'>
                    <div className="summary-items">
                        <div className="summary-input">
                            <label htmlFor="freight" className="label-text">
                                Freight :
                            </label>
                        </div>
                        <div className="w-1/2">
                            <input name="freight" id="freight" className="input-class">
                            </input>
                        </div>
                    </div>
                    <div className="input-primary">
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
                    <div className="input-primary">
                        <div className="summary-input">
                            <label htmlFor="dueDate" className="label-text">
                                Due Date :
                            </label>
                        </div>
                        <div className="w-1/2">
                            <input name="dueDate" id="dueDate" className="input-class">
                            </input>
                        </div>
                    </div>
                </div>
                <div className='summary-grid justify-center items-center text-white'>
                    <div className="flex justify-between pr-2 items-center gap">
                        <button className='summary-btn'>
                            Return
                        </button>
                    </div>
                    <div className="summary-items">
                        <button className='summary-btn'>
                            Save
                        </button>
                    </div>
                    <div className="summary-items">
                        <button className='summary-btn'>
                            Exit
                        </button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-5 justify-between'>
                <div className="flex justify-start pr-4 pl-8 items-center col-span-2 w-full">
                    <div className="flex justify-end pr-1 w-1/4">
                        <label htmlFor="note" className="label-text">
                            Note :
                        </label>
                    </div>
                    <div className="w-full">
                        <input name="note" id="note" className="input-class">
                        </input>
                    </div>
                </div>
                <div className="flex justify-start pr-4 pl-2 items-center">
                    <div className="flex w-full ml-1 justify-between gap-2">
                        <div className="flex items-center">
                            <input type="radio" id="dotMtrx" className="radio-primary" />
                            <label htmlFor="dotMtrx" className="ms-2 label-text">Dot_Mtrx</label>
                        </div>
                        <div className="flex items-center">
                            <input type="radio" id="graphics" className="radio-primary" />
                            <label htmlFor="graphics" className="ms-2 label-text">Graphics</label>
                        </div>
                        <div className="flex items-center">
                            <input type="radio" id="thermal" className="radio-primary" />
                            <label htmlFor="thermal" className="ms-2 label-text">Thermal</label>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start pr-4 pl-2 items-center">
                    <div className="summary-input">
                        <label htmlFor="rcvdCash" className="label-text">
                            Rcvd Cash :
                        </label>
                    </div>
                    <div className="w-1/2">
                        <input name="rcvdCash" id="rcvdCash" className="input-class">
                        </input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary