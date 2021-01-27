import { createRef } from 'react';
import { HomepageSkills } from "../components";

//Assets
import { HtmlSVG, FigmaSVG, FlutterSVG, JavaScriptSVG, ReactSVG, ScssSVG } from "./svgs";
import {useIntersection} from "react-use";
import gsap from "gsap";

export default function HomepageSkillsContainer() {
    const skillsData = [
        {
            id: 1,
            image: <HtmlSVG />,
            name: "HTML5/CSS"
        },
        {
            id: 2,
            image: <JavaScriptSVG />,
            name: "JavaScript"
        },
        {
            id: 3,
            image: <ReactSVG />,
            name: "React"
        },
        {
            id: 4,
            image: <ScssSVG />,
            name: "Scss"
        },
        {
            id: 5,
            image: <FlutterSVG />,
            name: "Flutter"
        },
        {
            id: 6,
            image: <FigmaSVG />,
            name: "Figma"
        },
    ];
    const containerRef = createRef();
    const intersection = useIntersection(containerRef, {
        root: null,
        rootMargin: "0px",
        threshold: .7
    });
    const fadeIn = (element, element2) => {
        gsap.to(element, 1, {
            opacity: 1,
            y: 0,
            ease: "power4.out",
            stagger: {
                amount: 0.3
            }
        });
        gsap.to(element2, 1, {
            opacity: 1,
            y: 0,
            ease: "power4.out",
            stagger: {
                amount: .5
            }
        });
    };

    //checking to see if the viewport is visible to the user
    intersection && intersection.intersectionRatio > .7 && fadeIn(".skill_text_animation", ".skill_card_animation");

    return (
        <HomepageSkills ref={containerRef} id={"skills"}>
            <HomepageSkills.Pane>
                <HomepageSkills.HeaderText className={"skill_text_animation"}>Skills<span>.</span></HomepageSkills.HeaderText>
                <HomepageSkills.Paragraph className={"skill_text_animation"}>
                    I have a deep understanding of HTML5, CSS and JavaScript languages, and a good understanding of JavaScript frameworks and tools used in today's technology.
                </HomepageSkills.Paragraph>
            </HomepageSkills.Pane>
            <HomepageSkills.CardsWrapper>
                {skillsData.map(skill => (
                    <HomepageSkills.Card key={skill.id} className={"skill_card_animation"}>
                        <HomepageSkills.ImageWrapper>
                            <HomepageSkills.SkillPicture>
                                {skill.image}
                            </HomepageSkills.SkillPicture>
                        </HomepageSkills.ImageWrapper>
                        <HomepageSkills.Paragraph>{skill.name}</HomepageSkills.Paragraph>
                    </HomepageSkills.Card>
                ))}
            </HomepageSkills.CardsWrapper>
        </HomepageSkills>
    )
}
