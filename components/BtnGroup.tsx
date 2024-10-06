import Alert from "./Alert"

const BtnGroup = () => {
    return (
        <div className="flex flex-col justify-center gap-2 pt-2 text-white">
            <div className="flex justify-between pr-2 items-center gap">
                <button className='btn-primary' title="retuen">
                    Return
                </button>
            </div>
            <Alert />
            <div className="summary-items" title="exit">
                <button className='btn-primary'>
                    Exit
                </button>
            </div>
        </div>
    )
}

export default BtnGroup