import { LINKS } from "../assets/social-media"


const handleClick = () => {
    window.open(LINKS.mail, "_blank")
}

export const Contact = () => (
    <div className="tooltip tooltip-bottom" data-tip="email">
        <button className="btn btn-neutral btn-wide btn-outline mr-2" onClick={handleClick}>
            iamajaynayak@outlook.com
        </button>
    </div>
)


