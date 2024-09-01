import React from "react";
import { Compare } from "@/components/ui/compare";
import RealImage from "@/public/real.png";
import FakeImage from "@/public/fake.png";

export default function CompareImg() {
    return (
        (
            <div
                className="w-3/4 h-[70vh] px-1 md:px-8 flex items-center justify-center [perspective:800px] [transform-style:preserve-3d] flex-col">
                <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4">
                    <Compare
                        firstImage="https://assets.aceternity.com/code-problem.png"
                        secondImage="https://assets.aceternity.com/code-solution.png"
                        firstImageClassName="object-cover object-left-top"
                        secondImageClassname="object-cover object-left-top"
                        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
                        slideMode="hover"
                        autoplay={true}
                    />
                </div>
                <a
                    href="/analysis"
                    className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-green-500 hover:before:[box-shadow:_20px_20px_20px_30px_#2ecc71] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-green-500 relative bg-indigo-800 h-16 w-64 border text-left p-3 text-indigo-200 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-orange-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-pink-500 after:right-8 after:top-3 after:rounded-full after:blur-lg mt-16"
                >
                    Analysis Video
                </a>

            </div>)
    );
}
