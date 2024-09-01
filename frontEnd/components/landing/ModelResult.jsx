import React from 'react'
import modelResult from "@/public/modelResult.png"
import Image from 'next/image'
const ModelResult = () => {
    return (
        <div>
            <div className=" text-gray-950 text-4xl font-extrabold font-mono items-center text-center mb-14 underline underline-offset-4">Model Result</div>
            <div className="flex justify-center items-center">
                <Image src={modelResult} alt="Model Result" />
            </div>
        </div>
    )
}

export default ModelResult
