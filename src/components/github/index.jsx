import { GithubLink } from "./styles/github";

export default function Github({ children, ...restProps }) {
    return <GithubLink {...restProps}>{children}</GithubLink>
}
