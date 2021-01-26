import gsap, { Power3 } from "gsap";

let tl = new gsap.timeline();

export const contactModalOpenAnimation = () => {
    tl.to(".contact_backdrop_animation", {
        opacity: 1,
        width: "100%",
    })
        .to(".contact_modal_wrapper_animation",
            {
                opacity: 1,
                right: 0,
                duration: .5,
                ease: Power3.easeOut,
            })
        .from(".contact_modal_content_animation", {
            duration: .5,
            opacity: 0,
            y: 20,
            ease: Power3.easeOut,
            stagger: {
                amount: .5
            },
        })
};

export const closeContactModal = async () => {
    tl.to(".contact_modal_wrapper_animation",
        {
            opacity: 0,
            right: "-540px",
            ease: Power3.easeOut,
            duration: .5,
        })
        .to(".contact_backdrop_animation", {
            opacity: 0,
            width: 0,
        }, "Start")
}
