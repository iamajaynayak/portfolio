import github from "../assets/github.svg"
import linkedin from "../assets/linkedin.svg"
import instagram from "../assets/instagram.svg"
import { LINKS } from "../assets/social-media"

const handleClick = name => {
    window.open(LINKS[name], "_blank")
}

const BUTTONS = [
    {
        name: "github",
        url: github
    },
    {
        name: "linkedin",
        url: linkedin
    },
    {
        name: "instagram",
        url: instagram
    }
]

export const SocialMedia = () => (
    <div className="join">
        {BUTTONS.map((social, idx) =>
            <div key={idx} className="tooltip tooltip-bottom" data-tip={social.name}>
                <button className="btn btn-neutral join-item" onClick={() => handleClick(social.name)}>
                    <div className="h-[24px] w-[24px]">
                        <img src={social.url} alt={social.name} />
                    </div>
                </button>
            </div>
        )}
    </div>
)