import { INTRODUCTION } from "../assets/introduction"

export const Introduction = () => {
    const { title, heading, detail} = INTRODUCTION
    return <>
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {title}
        </p>
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
            {heading}
        </p>
        <p className="!mt- 3 text-md md:text-xl lg:text-xl font-normal">
            {detail}
        </p>
    </>
}