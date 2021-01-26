import { BackDrop } from "../components";
import { closeContactModal } from "../animations";

export default function BackDropContainer({ children }) {
    return (
        <>
            <BackDrop>
                <BackDrop.Inner className={"contact_backdrop_animation"} onClick={closeContactModal}/>
                {children}
            </BackDrop>
        </>
    )
}
