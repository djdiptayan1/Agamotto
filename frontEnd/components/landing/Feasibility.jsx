"use client";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";

export default function Feasibility() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full pb-16">
            {/* Feasibility Section */}
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
                className="">
                <div className="max-w-xs">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Feasibility
                    </h2>
                    <ul className="mt-4 text-md text-neutral-200 list-disc pl-5">
                        <li>Agamotto combines established technologies (MTCNN and CNNs) for effective deepfake detection.</li>
                        <li>Implementable using standard deep learning frameworks (TensorFlow, PyTorch).</li>
                        <li>High demand in industries like cybersecurity, law enforcement, and media.</li>
                    </ul>
                </div>
            </WobbleCard>

            {/* Challenges and Risks Section */}
            <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-purple-800">
                <div className="max-w-xs">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Challenges and Risks
                    </h2>
                    <ul className="mt-4 text-left text-base/6 text-neutral-200 list-disc pl-5">
                        <li>High computational power needed, especially for training.</li>
                        <li>Dependence on the quality and diversity of the training dataset.</li>
                        <li>Risk of the model becoming outdated with new deepfake techniques.</li>
                        <li>Ethical concerns related to privacy and potential misuse.</li>
                    </ul>
                </div>
            </WobbleCard>

            {/* Strategies Section */}
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                <div className="max-w-sm">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Strategies
                    </h2>
                    <ul className="mt-4 text-left text-base/6 text-neutral-200 list-disc pl-5">
                        <li>Use cloud computing for scalable training and deployment.</li>
                        <li>Regularly update the training dataset with new deepfake examples.</li>
                        <li>Implement continuous learning for model adaptation.</li>
                        <li>Develop and follow strict ethical guidelines to ensure responsible use.</li>
                    </ul>
                </div>
            </WobbleCard>
        </div>
    );
}