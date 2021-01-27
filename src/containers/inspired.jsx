import { createRef } from 'react';
import { Inspired, Button } from "../components";
import {useIntersection} from "react-use";
import gsap from "gsap";

//Assets
import { CheckOutSVG } from "./svgs";
import { contactModalOpenAnimation } from "../animations";

export default function InspiredContainer() {
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
            stagger: {
                amount: 0.3
            }
        });
    };

    //checking to see if the viewport is visible to the user
    intersection && intersection.intersectionRatio > .5 && fadeIn(".inspired_text_animate");

    return (
        <Inspired ref={containerRef}>
            <Inspired.HeaderText className={"inspired_text_animate"}>Inspired<span>?</span></Inspired.HeaderText>
            <Inspired.Paragraph className={"inspired_text_animate"}>
                Interested in working together? We should queue up a chat.
                I’ll buy the coffee.
            </Inspired.Paragraph>
            <Inspired.ButtonWrapper className={"inspired_text_animate"}>
                <Button onClick={contactModalOpenAnimation}>
                    Interested
                    <CheckOutSVG />
                </Button>
            </Inspired.ButtonWrapper>
        </Inspired>
    )
}
