import { Github } from "../components";

//Assets
import { GithubSVG } from "./svgs";

export default function GithubContainer({ ...restProps }) {
    return (
        <Github {...restProps} target={"_blank"}>
            <GithubSVG />
            Github
        </Github>
    )
}
