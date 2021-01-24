import { Footer } from "../components";
import GithubContainer from "./github";

export default function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <GithubContainer href={"https://www.f.com"} />
                <Footer.Paragraph>&copy; 2021 ThugDeveloper</Footer.Paragraph>
            </Footer.Wrapper>
            <Footer.Wrapper className={"bottom"}>
                <Footer.HeaderText>SAY HELLO</Footer.HeaderText>
                <Footer.Link href="mailto:theonlybakare@gmail.com">theonlybakare@gmail.com</Footer.Link>
            </Footer.Wrapper>
        </Footer>
    )
}
