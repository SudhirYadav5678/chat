import Pen from "./Pen"


function Canvas() {
    return (
        <>
            <div className="flex">
                <div className="w-[90px] border-4">
                    <Pen />
                </div>
                <div className="w-[800px] h-[600px] mx-auto  border-4">
                    <canvas></canvas>
                </div>
                <div className="w-[200px] border-4">
                    Options
                </div>
            </div>
        </>
    )
}

export default Canvas