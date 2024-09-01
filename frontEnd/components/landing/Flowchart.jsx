import React from 'react'
import Image from 'next/image'
import flowchart from "@/public/Flowchart.png"

const Flowchart = () => {
    return (
        <div className=" mb-10">
            <div className=" text-gray-950 text-4xl font-extrabold font-mono items-center text-center text pb-12">How does our solution works ?</div>
            <div className="flex justify-center items-center">
                <Image src={flowchart} alt="flowchart" />
            </div>
        </div>
    )
}

export default Flowchart