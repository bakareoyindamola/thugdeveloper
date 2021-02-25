import { AboutBanner } from "../components";
import { MiniBox } from "../components";
import CompletedProject from "./completedProject";

export default function AboutBannerContainer() {
    let currentYear = new Date().getFullYear();
    const startedCoding = 2018;
    const yearsOfExperience = currentYear - startedCoding;

    return (
        <AboutBanner>
            <AboutBanner.HeaderText>about me<span>.</span></AboutBanner.HeaderText>
            <AboutBanner.Pane>
                <AboutBanner.TextWrapper>
                    <AboutBanner.Text>My name is <span>Oyindamola</span>,</AboutBanner.Text>
                    <AboutBanner.Text>I build Amazing</AboutBanner.Text>
                    <AboutBanner.Text>Stuffs<span>!</span></AboutBanner.Text>
                </AboutBanner.TextWrapper>
                <AboutBanner.MiniBoxWrapper>
                    <AboutBanner.MiniBoxInner>
                        <MiniBox>
                            <MiniBox.NumberText>
                                {yearsOfExperience < 10 ? `0${yearsOfExperience}` : yearsOfExperience}
                            </MiniBox.NumberText>
                            <MiniBox.NumberParagraph>
                                Years of Experience
                            </MiniBox.NumberParagraph>
                        </MiniBox>
                        <CompletedProject />
                    </AboutBanner.MiniBoxInner>
                </AboutBanner.MiniBoxWrapper>
            </AboutBanner.Pane>
        </AboutBanner>
    )
}
