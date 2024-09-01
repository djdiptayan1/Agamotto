"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (<>
    <AnimatePresence>
      {active && typeof active === "object" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20 h-full w-full z-10" />
      )}
    </AnimatePresence>
    <AnimatePresence>
      {active && typeof active === "object" ? (
        <div className="fixed inset-0  grid place-items-center z-[100]">
          <motion.button
            key={`button-${active.title}-${id}`}
            layout
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.05,
              },
            }}
            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
            onClick={() => setActive(null)}>
            <CloseIcon />
          </motion.button>
          <motion.div
            layoutId={`card-${active.title}-${id}`}
            ref={ref}
            className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden">
            <motion.div layoutId={`image-${active.title}-${id}`}>
            <Image
              priority
              width={200}
              height={200}
              src={active.src}
              alt={active.title}
              quality={100}
              className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
            />
            </motion.div>

            <div>
              <div className="flex justify-between items-start p-4">
                <div className="">
                  <motion.h3
                    layoutId={`title-${active.title}-${id}`}
                    className="font-medium text-neutral-700 dark:text-neutral-200 text-base">
                    {active.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${active.description}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 text-base">
                    {active.description}
                  </motion.p>
                </div>

                <motion.a
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  href={active.ctaLink}
                  target="_blank"
                  className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white">
                  {active.ctaText}
                </motion.a>
              </div>
              <div className="pt-4 relative px-4">
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
                  {typeof active.content === "function"
                    ? active.content()
                    : active.content}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
    <ul
      className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
      {cards.map((card, index) => (
        <motion.div
          layoutId={`card-${card.title}-${id}`}
          key={card.title}
          onClick={() => setActive(card)}
          className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer">
          <div className="flex gap-4 flex-col  w-full">
            <motion.div layoutId={`image-${card.title}-${id}`}>
              <Image
                width={100}
                height={100}
                src={card.src}
                alt={card.title}
                className="h-60 w-full  rounded-lg object-cover object-top" />
            </motion.div>
            <div className="flex justify-center items-center flex-col">
              <motion.h3
                layoutId={`title-${card.title}-${id}`}
                className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base">
                {card.title}
              </motion.h3>
              <motion.p
                layoutId={`description-${card.description}-${id}`}
                className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base">
                {card.description}
              </motion.p>
            </div>
          </div>
        </motion.div>
      ))}
    </ul>
  </>);
}

export const CloseIcon = () => {
  return (
    (<motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>)
  );
};

const cards = [
  {
    title: "Viral ‘Rashmika Mandanna’ video",
    src: "https://images.indianexpress.com/2023/11/deepfake-1.jpg?w=640",
    ctaText: "Visit",
    ctaLink: "https://indianexpress.com/article/technology/tech-news-technology/viral-rashmika-mandanna-video-spotlights-deepfake-problem-9015826/",
    content: () => {
      return (
        (<p>A recent deepfake of actor Rashmika Mandanna is currently viral on sites like Instagram, where her face has been morphed to a video where a woman can be seen entering a lift wearing revealing clothes. On a closer look, there are moments where one can decipher that the video is not genuine, but for someone not looking closely, it may not be the case.</p>)
      );
    },
  },
  {
    title: "WPP’s CEO targeted by deepfakes",
    src: "https://i.guim.co.uk/img/media/466ef75cf36418621554d8a72e3f0ca7356d898b/0_240_3500_2100/master/3500.jpg?width=1900&dpr=1&s=none",
    ctaText: "Visit",
    ctaLink: "https://www.theguardian.com/technology/article/2024/may/10/ceo-wpp-deepfake-scam",
    content: () => {
      return (
        (<p>The head of the world’s biggest advertising group was the target of an elaborate deepfake scam that involved an artificial intelligence voice clone. The CEO of WPP, Mark Read, detailed the attempted fraud in a recent email to leadership, warning others at the company to look out for calls claiming to be from top executives.
                  </p>)
      );
    },
  },

  {
    title: "Virat Kohli deepfake slamming Gill ",
    src: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-08/29/full/1724926845-2938.png",
    ctaText: "Visit",
    ctaLink: "https://www.business-standard.com/cricket/news/viral-video-virat-kohli-s-deepfake-video-slamming-gill-goes-viral-on-x-124082900733_1.html",
    content: () => {
      return (
        (<p> A deepfake video recently went viral over social media where Virat Kohli could be seen slamming Indian opener Shubhman Gill. The viral video shows Virat talking about Shubhman Gill stating what he lacks and questioning his potential in cricket. 
                  </p>)
      );
    },
  },
  {
    title: "Deepfakes affecting Indian Elections",
    src: "https://images.newscientist.com/wp-content/uploads/2024/04/23110912/SEI_200083853.jpg",
    ctaText: "Visit",
    ctaLink: "https://www.newscientist.com/article/2427842-deepfake-politicians-may-have-a-big-influence-on-indias-elections/",
    content: () => {
      return (
        (<p>Artificial intelligence is enabling India’s politicians to be everywhere at once in the world’s largest election by cloning their voices and digital likenesses. Even dead public figures, such as politician and actress Jayaram Jayalalithaa, are getting digitally resurrected to canvass support in what is shaping up to be the biggest test yet of democratic elections in the age of AI-generated deepfakes.
                  </p>)
      );
    },
  },
];
