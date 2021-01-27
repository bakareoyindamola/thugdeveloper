import { createRef } from 'react';
import { Social } from "../components";
import { TwitterSVG, InstagramSVG } from "./svgs";
import gsap from "gsap";
import { useIntersection } from "react-use";

export default function SocialContainer() {
    let containerRef = createRef();
    const intersection = useIntersection(containerRef, {
        root: null,
        rootMargin: "0px",
        threshold: .5
    });
    const fadeIn = (element, element2) => {
        gsap.to(element, {
            opacity: 1,
            y: 0,
            duration: 1,
        });
        gsap.to(element2, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: {
                amount: 1
            }
        }, "Start");
    };

    //checking to see if the viewport is visible to the user
    intersection && intersection.intersectionRatio > .5 && fadeIn(".social-card-animate", ".social-card-content-animate");

    return(
        <Social ref={containerRef} className="social-card-animate">
            <Social.TextWrapper>
                <Social.HeaderText className="social-card-content-animate">let's be social<span>.</span></Social.HeaderText>
                <Social.Paragraph className="social-card-content-animate">
                    I'm available for parties, available for jaiye, available for flexing.
                    Would you send me the location?
                </Social.Paragraph>
            </Social.TextWrapper>
            <Social.Wrapper className="social-card-content-animate">
                <Social.Pane href={'https://twitter.com/theonlybakare'} target={"_blank"} social={"twitter"}>
                    <Social.CardText>Twitter</Social.CardText>
                    <TwitterSVG />
                </Social.Pane>
                <Social.Pane href={'https://www.instagram.com/thugdeveloper/'} target={"_blank"} social={"instagram"}>
                    <Social.CardText>Instagram</Social.CardText>
                    <InstagramSVG />
                </Social.Pane>
            </Social.Wrapper>
        </Social>
    )
}
