import { useState, useEffect } from 'react';
import { TopNavigation } from "../components";
import { Routes } from "../constant/routes";
import { contactModalOpenAnimation } from "../animations";

export default function TopNavigationContainer({ themeSwitch }) {
    const [navbar, setNavbar] = useState(false);

    const addBackground = () => {
        window.scrollY >= 55 ? setNavbar(true) : setNavbar(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", addBackground)
        return () => window.addEventListener("scroll", addBackground);
    }, [navbar]);

    return (
        <TopNavigation className={ navbar ? `active` : null }>
            <TopNavigation.Inner>
                <TopNavigation.Pane>
                    <TopNavigation.Link to={Routes.HOME}>
                        Logo
                    </TopNavigation.Link>
                </TopNavigation.Pane>
                <TopNavigation.ListWrapper>
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
                        <TopNavigation.NavLink to={Routes.CERTIFICATION}>
                            Certification
                        </TopNavigation.NavLink>
                    </TopNavigation.List>
                    <TopNavigation.List onClick={async () => {
                        // themeSwitch();
                        await contactModalOpenAnimation();
                    }}>
                        <TopNavigation.NavButton>
                            Let's talk
                        </TopNavigation.NavButton>
                    </TopNavigation.List>
                </TopNavigation.ListWrapper>
            </TopNavigation.Inner>
        </TopNavigation>
    )
}
