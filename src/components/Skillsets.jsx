import { EXPERIENCE } from "../assets/experience"
import "./skills.css"

export const Skillsets = () => (
       
        <div className="artboard w-full h-[90%]  overflow-y-auto">
        <div className="text-lg font-black pt-8">EXPERIENCES</div>
            <ul className="menu w-full rounded-box">
                {EXPERIENCE.map((exp, idx) =>
                    <div className="mt-3" key={idx}>
                        <li className="text-md font-black">{exp.company}</li>
                        {/* <div className="join gap-2"> */}
                            <li className="text-sm font-black">{exp.job}</li>
                            <li  className="text-xs font-black">Tech-Stacks : {exp.TechStacks}</li>
                        {/* </div> */}
                        <li className="font-mono italic">{exp.time}</li>
                        <li>
                            <ul>
                                {exp.points.map((point, pointIdx) => <li key={pointIdx}>
                                    <p>
                                        {point}
                                    </p>
                                </li>)}
                            </ul>
                        </li>
                    </div>
                )}
            </ul>
        </div>
)
