import { Github } from "../components";

//Assets
import { GithubSVG } from "./svgs";

export default function GithubContainer({ ...restProps }) {
    return (
        <Github {...restProps} aria-label={"github"} rel={"noopener"} target={"_blank"}>
            <GithubSVG />
            Github
        </Github>
    )
}
