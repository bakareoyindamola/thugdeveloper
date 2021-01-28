import { createRef } from 'react';
import { SomeProjects} from "../components";
import { SomeProjectProject } from "../components/someProjects";
import { useIntersection } from "react-use";
import gsap from 'gsap';

//Assets
import { CheckOutSVG } from "./svgs";
import ImageLoad from "../helpers/imageLoad";

export default function ProjectTemplate({ id, name, description, image, direction, thumbnail_image }) {
    const containerRef = createRef();
    const intersection = useIntersection(containerRef, {
        root: null,
        rootMargin: "0px",
        threshold: .7
    });
    const baseUrl = process.env.REACT_APP_PORTFOLIO_API_BASE_URL;

    //Animation for fading in
    const fadeIn = element => {
        gsap.to(element, 1, {
            opacity: 1,
            y: 0,
            ease: "power4.out",
            stagger: {
                amount: 0.3
            }
        });
    };

    //checking to see if the viewport is visible to the user
    intersection && intersection.intersectionRatio > .7 && fadeIn(".fadeIn");

    return (
        <SomeProjectProject ref={containerRef} direction={direction ? 'row-reverse' : "row"} key={id}>
            <SomeProjects.ImageWrapper className={"fadeIn"}>
                <SomeProjects.Picture>
                    <ImageLoad
                        src={`${baseUrl}${image}`}
                        placeholder={`${baseUrl}${thumbnail_image}`}
                        alt={name}
                        width={"100%"}
                        height={"100%"}
                    />
                </SomeProjects.Picture>
            </SomeProjects.ImageWrapper>
            <SomeProjects.ProjectDetails direction={direction ? 'row-reverse' : "row"}>
                <SomeProjects.ProjectName className={"fadeIn"}>{name}</SomeProjects.ProjectName>
                <SomeProjects.Paragraph className={"fadeIn"}>{description}</SomeProjects.Paragraph>
                <SomeProjects.ButtonWrapper className={"fadeIn"}>
                    <SomeProjects.Link to={`/work/${id}`}>
                        Check it out
                        <CheckOutSVG />
                    </SomeProjects.Link>
                </SomeProjects.ButtonWrapper>
            </SomeProjects.ProjectDetails>
        </SomeProjectProject>
    )
}
