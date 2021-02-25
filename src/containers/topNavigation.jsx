import { useState, useEffect } from 'react';
import { TopNavigation } from "../components";
import { Routes } from "../constant/routes";
import { contactModalOpenAnimation, openMobileNav, closeMobileNav } from "../animations";
import { useDimension } from "../hooks";

//Assets
import { LogoSVG, MenuSVG, TopCancelSVG } from "./svgs";

export default function TopNavigationContainer({ mobileNav, setMobileNav }) {
    const [navbar, setNavbar] = useState(false);
    const [width] = useDimension("width");

    const addBackground = () => {
        window.scrollY >= 55 ? setNavbar(true) : setNavbar(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", addBackground)
        return () => window.addEventListener("scroll", addBackground);
    }, [navbar]);

    const openMobileNavigation = () => {
        openMobileNav();
        setMobileNav(true);
    }

    const closeMobileNavigation = () => {
        closeMobileNav();
        setMobileNav(false);
    }

    return (
        <TopNavigation className={ navbar ? `active` : null }>
            <TopNavigation.Inner>
                <TopNavigation.Pane>
                    <TopNavigation.Link aria-label={"logo"} onClick={closeMobileNavigation} to={Routes.HOME}>
                        <LogoSVG />
                    </TopNavigation.Link>
                </TopNavigation.Pane>
                {width < 580
                    && <>
                        {mobileNav
                            ? <TopNavigation.NavButton
                                className={"menu_animation"}
                                onClick={closeMobileNavigation}
                            >
                                <TopCancelSVG />
                            </TopNavigation.NavButton>
                            : <TopNavigation.NavButton
                                className={"menu_animation"}
                                onClick={openMobileNavigation}
                            >
                                <MenuSVG />
                            </TopNavigation.NavButton>}
                       </>
                }
                {width >= 580 && <TopNavigation.ListWrapper>
                    <TopNavigation.List>
                        <TopNavigation.NavLink to={Routes.WORKS}>
                            Work
                        </TopNavigation.NavLink>
                    </TopNavigation.List>
                    <TopNavigation.List>
                        <TopNavigation.NavLink to={Routes.ABOUT}>
                            About me
                        </TopNavigation.NavLink>
                    </TopNavigation.List>
                    <TopNavigation.List>
                        {/*//TODO: Add a downloadable link for resume here*/}
                        <TopNavigation.NavLink to={'/'}>
                            Resume
                        </TopNavigation.NavLink>
                    </TopNavigation.List>
                    <TopNavigation.List onClick={contactModalOpenAnimation}>
                        <TopNavigation.NavButton>
                            Let's talk
                        </TopNavigation.NavButton>
                    </TopNavigation.List>
                </TopNavigation.ListWrapper>}
            </TopNavigation.Inner>
        </TopNavigation>
    )
}
