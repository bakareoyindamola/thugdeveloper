import { LogoLoader } from "../components";

//Assets
import { LogoInitialSVG } from "./svgs";

export default function LogoLoaderContainer ({ zIndex }) {
    return (
        <LogoLoader zIndex={zIndex} >
            <LogoLoader.Inner>
                <LogoInitialSVG />
                <LogoLoader.Pane>
                    <LogoLoader.BoxLoader />
                    <LogoLoader.BoxLoader />
                    <LogoLoader.BoxLoader />
                    <LogoLoader.BoxLoader />
                    <LogoLoader.BoxLoader />
                </LogoLoader.Pane>
            </LogoLoader.Inner>
        </LogoLoader>
    );
}

