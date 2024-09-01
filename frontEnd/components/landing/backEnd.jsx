"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function BackEnd() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        (<div className="w-full h-full py-20">
            <h2
                className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-extrabold text-neutral-800 dark:text-neutral-200 font-mono">
                Our Solution
            </h2>
            <Carousel items={cards} />
        </div>)
    );
}

const DummyContent = () => {
    return (<>
        {[...new Array(3).fill(1)].map((_, index) => {
            return (
                (<div
                    key={"dummy-content" + index}
                    className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
                    <p
                        className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 dark:text-neutral-200">
                            The first rule of Apple club is that you boast about Apple club.
                        </span>{" "}
                        Keep a journal, quickly jot down a grocery list, and take amazing
                        class notes. Want to convert those notes to text? No problem.
                        Langotiya jeetu ka mara hua yaar is ready to capture every
                        thought.
                    </p>
                    <Image
                        src="https://assets.aceternity.com/macbook.png"
                        alt="Macbook mockup from Aceternity UI"
                        height="500"
                        width="500"
                        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
                </div>)
            );
        })}
    </>);
};

const data = [
    {
        category: "MTCNN Architecture",
        title: "Agamotto integrates advanced Machine Learning techniques, combining Convolutional Neural Networks (CNNs) for local feature extraction and  for capturing global relationships, delivering robust deepfake detection.",
        src: "https://about.fb.com/wp-content/uploads/2022/09/PyTorch-Foundation-Launch_Header.jpg?fit=1920%2C1080",
        content: <DummyContent />,
    },
    {
        category: "Advanced Preprocessing",
        title: "Agamotto utilizes state-of-the-art deep learning libraries like MTCNN for precise face extraction, ensuring high-quality input for detection. It employs data augmentation techniques to increase dataset diversity, significantly improving the model’s ability to generalize across various scenarios",

        src: "https://d3caycb064h6u1.cloudfront.net/wp-content/uploads/2022/09/datacleaning-scaled.jpg",
        content: <DummyContent />,
    },
    {
        category: "Effective Detection and Generalization",
        title: "Optimized for detecting deepfakes across varied environments with a robust preprocessing pipeline and adaptable design for integrating new data and technologies.",
        src: "https://media.licdn.com/dms/image/v2/C5612AQGu4927u51Xbg/article-inline_image-shrink_400_744/article-inline_image-shrink_400_744/0/1571280655696?e=1730332800&v=beta&t=6AI1Xo8W0tgE9-KQqoXpCfYYh9kIgl8KlS5CZ6BnJTE",
        content: <DummyContent />,
    },

    {
        category: "Lightweight, Robust Model",
        title: "We propose a lightweight model with 6.7 million parameters and a size of only 26 MB, suitable for classifying six different classes. Real videos and five different classes of deepfakes (FaceSwap, NeuralTextures, Face2Face, DeepfakeDetection, FaceShifter) are effectively identified.",
        src: "https://miro.medium.com/v2/resize:fit:1100/1*w4wR9mLS46s3gsX_7pW_ww.jpeg",
        content: <DummyContent />,
    },
    {
        category: "Comprehensive Evaluation",
        title: "Agamotto is evaluated with accuracy, AUC, and log loss metrics, ensuring the solution’s reliability and effectiveness across various use cases. The solution is designed with a modern UI for an intuitive, easy to use interface, facilitating effortless integration and deployment.",
        src: "https://media.istockphoto.com/id/1410963366/photo/user-give-rating-5-star-to-service-experience-on-online-application.jpg?s=612x612&w=0&k=20&c=S8bN6oPkBuWb02pmZOr-OxEJwLaxPCPy8F8oILgbNv8=",
        content: <DummyContent />,
    },
    {
        category: "Scalable and Future-Ready Design",
        title: "With support for containerization technologies like Docker, Agamotto facilitates flexible scaling and straightforward deployment across multiple platforms, including AWS and Azure.",
        src: "https://img.freepik.com/free-photo/hand-placing-wooden-block-represent-growth_23-2148780590.jpg",
        content: <DummyContent />,
    },
];
