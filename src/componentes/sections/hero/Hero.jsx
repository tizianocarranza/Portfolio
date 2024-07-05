import React, { useRef } from 'react'
import "./hero.css"
import useIntersection from "../../../logic/useIntersection"

function Hero() {

    const [heroBigSubContainerRef, heroBigSubContainerIsIntersecting] = useIntersection({
        threshold: 0.9
    });

    const [heroGeneralFirstRef, heroGeneralFirstIsIntersecting] = useIntersection({
        threshold: 0.9
    });

    const [heroGeneralMid1Ref, heroGeneralMid1IsIntersecting] = useIntersection({
        threshold: 0.5
    })
    const [heroGeneralMid2Ref, heroGeneralMid2IsIntersecting] = useIntersection({
        threshold: 0.5
    })

    const [heroGeneralLastRef, heroGeneralLastIsIntersecting] = useIntersection({
        threshold: 0.9
    })


    /* TEXT REFS */
    const [heroSmallSubContainerRef, heroSmallSubContainerIsIntersecting] = useIntersection({
        threshold: 0.5
    });

    const [heroPara1Ref, heroPara1IsIntersecting] = useIntersection({
        threshold: 0.9,
    });
    const [heroPara2Ref, heroPara2IsIntersecting] = useIntersection({
        threshold: 0.9,
    });
    const [heroPara3Ref, heroPara3IsIntersecting] = useIntersection({
        threshold: 0.9,
    });
    const [heroParaLastRef, heroParaLastIsIntersecting] = useIntersection({
        threshold: 0.9,
    })

    /* 
        { borderRadius: "50% 0 50% 0" } :
    { borderRadius: "0 50% 0 50%" } :
    */

    return (

            <section className="hero-container"> {/* 300vh */}
                <div className="hero">
                    <div className="hero__bg"
                        style=
                        {
                            !heroBigSubContainerIsIntersecting && (!heroPara1IsIntersecting || !heroParaLastIsIntersecting) ? { borderRadius: "0", width: "30px", height: "15px" } :
                                (!heroPara1IsIntersecting) ? { borderRadius: "30% 0 30% 0" } :
                                    (!heroParaLastIsIntersecting) ? { borderRadius: "0 30% 0 30%" } :
                                        { borderRadius: "0" }
                        }
                    >
                    </div>
                    <div className={`hero__text regular-text ${!heroSmallSubContainerIsIntersecting ? "hero__text--hidden" : "hero__text--visible"}`}>
                        <p
                            style=
                            {
                                heroPara1IsIntersecting && heroParaLastIsIntersecting ? { transform: "translateY(0%)" } :
                                    heroPara2IsIntersecting && heroParaLastIsIntersecting ? { transform: "translateY(50%)" } :
                                        heroPara3IsIntersecting && heroParaLastIsIntersecting ? { transform: "translateY(150%)" } :
                                            { transform: "translateY(220%)" }
                            }>
                            Design
                        </p>
                        <p
                            style=
                            {
                                heroPara1IsIntersecting && heroParaLastIsIntersecting ? { transform: "translateY(0%)" } :
                                    heroPara2IsIntersecting && heroParaLastIsIntersecting ? { transform: "translateY(10%)" } :
                                        heroPara3IsIntersecting && heroParaLastIsIntersecting ? { transform: "translateY(50%)" } :
                                            { transform: "translateY(120%)" }}
                        >
                            oriented
                        </p>
                        <p
                            style=
                            {
                                heroPara1IsIntersecting && heroParaLastIsIntersecting ? { transform: "translateY(0%)" } :
                                    heroPara2IsIntersecting && heroParaLastIsIntersecting ? { transform: "translateY(5%)" } :
                                        heroPara3IsIntersecting && heroParaLastIsIntersecting ? { transform: "translateY(10%)" } :
                                            { transform: "translateY(20%)" }}
                        >
                            development
                        </p>
                    </div>
                </div>

                <div className="hero-big-sub-container" >
                    <div className="hero" ref={heroBigSubContainerRef}>
                        <div className="hero__general-animation-triggers-container">
                            <div className='hero__general-animation-triggers'>
                                <div ref={heroGeneralFirstRef}></div>
                                <div ref={heroGeneralMid1Ref}></div>
                                <div></div>
                            </div>
                            <div className='hero__general-animation-triggers'>
                                <div></div>
                                <div ref={heroGeneralMid2Ref}></div>
                                <div ref={heroGeneralLastRef}></div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="hero-small-sub-container" >
                    <div className="hero" ref={heroSmallSubContainerRef}> {/* 80%h 100vw grid 2 col 1fr */}
                        <div className="hero__text-animation-triggers-container">
                            <div className='hero__text-animation-triggers'>
                                <div ref={heroPara1Ref}></div>
                                <div ref={heroPara2Ref}></div>
                                <div ref={heroPara3Ref}></div>
                            </div>
                            <div></div>
                            <div></div>
                            <div className='hero__text-animation-triggers' ref={heroParaLastRef}></div>
                        </div>

                    </div>
                </div>
            </section>
    )
}

export default Hero