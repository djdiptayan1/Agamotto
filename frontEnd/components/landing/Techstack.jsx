import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
    "javascript",
    "react",
    "html5",
    "css3",
    "express",
    "amazonaws",
    "firebase",
    "vercel",
    "docker",
    "git",
    "nodejs",
    "github",
    "visualstudiocode",
];

export default function Techstack() {
    return (
        <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg px-20 pb-20 pt-8 ">
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}
