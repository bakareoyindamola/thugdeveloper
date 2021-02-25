import { MiniBox } from "../components";
import { useQuery } from "react-query";
import {getWorksLength} from "../services/workServices";
import {LoaderSVG} from "./svgs";

export default function CompletedProject() {
    const { data, isSuccess, isLoading } = useQuery("work-length", getWorksLength);

    return (
        <MiniBox>
            {isLoading && <LoaderSVG />}
            {isSuccess && <MiniBox.NumberText>
                {data < 10 ? `0${data}` : data}
            </MiniBox.NumberText>}
            <MiniBox.NumberParagraph>
                Completed Projects
            </MiniBox.NumberParagraph>
        </MiniBox>
    )
}
