import React, { useEffect } from 'react';
import './Css/Home.css'
import { Link } from 'react-router-dom';




function Home() {
    const video1 = "https://download-video.akamaized.net/v3-1/playback/bdb3a683-9706-4177-8ca4-48dfe2703fac/c72af10b?__token__=st=1707214531~exp=1707228931~acl=%2Fv3-1%2Fplayback%2Fbdb3a683-9706-4177-8ca4-48dfe2703fac%2Fc72af10b%2A~hmac=32566ea79c081c4f8c27be098af5481048b638c5d29f7e7af7d5fec846465dfb&r=dXMtd2VzdDE%3D";
    const mImage = "https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d1_Holding_thumb-p-500.jpg";
    const swiperImg1 = "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15ff_Nike.svg";
    const swiperImg2 = "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1600_Converse.svg";
    const swiperImg3 = "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15fd_Arc%E2%80%99teryx.svg";
    const swiperImg4 = "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15fe_Hunter.svg";
    const swiperImg5 = "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1601_MediaLink.svg";
    const swiperImg6 = "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1602_AfterPay.svg";


    useEffect(() => {


        const secEffect = [
            {
                heading: "Design",
                para: "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.",
                imgUrl: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e1_Project-p-1080.jpg"
            },
            {
                heading: "Project",
                para: "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.",
                imgUrl: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d0_Project.webp"
            },
            {
                heading: "Execution",
                para: "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.",
                imgUrl: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15cd_Execution-p-1080.jpg"
            }
        ];

        var head = document.querySelectorAll('.io-top h5')
        var para = document.querySelector('.io-bottom p')
        var innerTwo = document.querySelector('.inner-two')

        for (let i = 0; i < secEffect.length; i++) {
            head.forEach(function (e, i) {
                e.innerHTML = secEffect[i].heading;
                e.style.borderLeft = "2px solid grey"
                e.addEventListener("click", () => {
                    e.style.borderLeft = "4px solid #FE330A"
                    e.style.color = "white";
                    para.innerHTML = secEffect[i].para;
                    innerTwo.style.backgroundImage = `url(${secEffect[i].imgUrl})`;
                })

            });

        }
    })





    return (
        <>
            {/* <div className="fixed-img"></div> */}
            {/* <div className="cursor"></div> */}
            <section className='section-1'>
                <div className="mid">
                    <p>Sundown is a multi-disciplinary studio focused on creating unique, end-to-end experiences and
                        environments.</p>
                    <h1>SPACES
                        THAT
                        INSPIRE</h1>
                </div>
                <div className="glow-effect">
                    <div className="first"></div>
                    <div className="second"></div>
                </div>
                <div className="video">
                    <video loop autoplay muted src={video1}></video>
                </div>
            </section>
            <section className="section-2">

                <div className="marquee">
                    <div className="marquee-inner">
                        <h1>ENVIRONMENTS</h1>
                        <div className="circle"></div>
                        <h1>EXPERIENCES</h1>
                        <div className="circle"></div>
                        <h1>CONTENT</h1>
                        <div className="circle"></div>
                    </div>
                    <div className="marquee-inner">
                        <h1>ENVIRONMENTS</h1>
                        <div className="circle"></div>
                        <h1>EXPERIENCES</h1>
                        <div className="circle"></div>
                        <h1>CONTENT</h1>
                        <div className="circle"></div>
                    </div>
                    <div className="marquee-inner">
                        <h1>ENVIRONMENTS</h1>
                        <div className="circle"></div>
                        <h1>EXPERIENCES</h1>
                        <div className="circle"></div>
                        <h1>CONTENT</h1>
                        <div className="circle"></div>
                    </div>
                </div>
                <div className="sec-main">
                    <div className="sm-left">
                        <h4>We are a group of design-driven, goal-focused creators, producers, and designers who believe
                            that
                            the details make all the difference.</h4>
                    </div>
                    <div className="sm-right">
                        <img src={mImage} alt="image" />
                        <p>We love to create, we love to solve, we love to collaborate, and we love to turn amazing ideas
                            into reality. We’re here to partner with you through every step of the process and know that
                            relationships are the most important things we build.</p>
                    </div>
                    <div className="center-animation">
                        <div className="ca-circle-1"></div>
                        <div className="ca-circle-2"></div>
                    </div>
                </div>



                <div className="hv-eff">
                    <h5>FEATURED PROJECTS</h5>
                    <div className="elems">
                        <div className="elem"
                            data-image="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16c5_Copy%20of%20Nike_Soho_AMD21_0781_LORES.webp">
                            <div className="e-left">
                                <h2>Air Force 12021</h2>
                            </div>
                            <div className="e-right">
                                <h3>NIKE</h3>
                                <p>Environment</p>
                            </div>
                        </div>
                        <div className="elem"
                            data-image="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b163b_Copy-of-IMG_1180.webp">
                            <div className="e-left">
                                <h2>SOHO NYC</h2>
                            </div>
                            <div className="e-right">
                                <h3>ARC'TERYX</h3>
                                <p>Environment</p>
                            </div>
                        </div>
                        <div className="elem"
                            data-image="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1733_Nike_HOI_50th_SU22_FL1_5388.webp">
                            <div className="e-left">
                                <h2>Markers Studio HOI</h2>
                            </div>
                            <div className="e-right">
                                <h3>NIKE</h3>
                                <p>Experiential</p>
                            </div>
                        </div>
                        <div className="elem"
                            data-image="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16f4_Copy%20of%20Nike_Soho_50th_SU22_FL1_6176.webp">
                            <div className="e-left">
                                <h2>50th Anniversary</h2>
                            </div>
                            <div className="e-right">
                                <h3>NIKE</h3>
                                <p>Environment</p>
                            </div>
                        </div>
                        <div className="elem"
                            data-image="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e1_Project-p-1080.jpg">
                            <div className="e-left">
                                <h2>Play New Kidvision</h2>
                            </div>
                            <div className="e-right">
                                <h3>NIKE</h3>
                                <p>Environment</p>
                            </div>
                        </div>
                        <div className="elem"
                            data-image="https://images.pexels.com/photos/3965556/pexels-photo-3965556.jpeg?auto=compress&cs=tinysrgb&w=600">
                            <div className="e-left">
                                <h2>SOHO 2023</h2>
                            </div>
                            <div className="e-right">
                                <h3>CONVERSE</h3>
                                <p>Environment</p>
                            </div>
                        </div>
                        <div className="elem"
                            data-image="https://images.pexels.com/photos/7318717/pexels-photo-7318717.jpeg?auto=compress&cs=tinysrgb&w=600">
                            <div className="e-left">
                                <h2>NYFW Popup</h2>
                            </div>
                            <div className="e-right">
                                <h3>Afterpay</h3>
                                <p>Experiential</p>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="project-btn"><Link to="/work">All Projects</Link></button>
                </div>
            </section>


            <section className="section-3">
                <div className="sec-inner">
                    <div className="inner-one">
                        <div className="io">
                            <div className="io-top">
                                <h5 className=""></h5>
                                <h5 className=""></h5>
                                <h5 className=""></h5>
                            </div>
                            <div className="io-bottom">
                                <p>Our team works with our clients to refine an idea and concept into an executable design.
                                    We create a final design that encompasses the brand narrative to bring stories to life
                                    and provide end-to-end design solutions from concept, design, and architectural drawings
                                    to 3D renderings.</p>
                            </div>
                        </div>
                    </div>
                    <div className="inner-two"></div>
                </div>
                <div className="slider">
                    <h5>WHO WE WORK WITH</h5>
                    <div className="slider-inner">

                        <div className="swiper mySwiper">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="card">
                                        <img src={swiperImg1} alt='image' />
                                        <div className="card-body">
                                            <p>Retained Production support across retail and events in NY, CHI, LA. Creative
                                                Design, Design Management, Production/Project Management, and execution of
                                                work from concept to installation across the Country.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="card">
                                        <img src={swiperImg2} alt='image' />
                                        <div className="card-body">
                                            <p>Creative Concepting, Design, Design Management, Project Management, and
                                                execution of work from concept to installation across the Country. Cross
                                                functional communication and management of third party partners.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="card">
                                        <img src={swiperImg3} alt='image' />
                                        <div className="card-body">
                                            <p>Production and design along with install oversight and execution support for
                                                the SoHo store opening on Broadway St, New York. Also working on creative
                                                and production work for a new store opening in Glendale, California.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="card">
                                        <img src={swiperImg4} alt='image' />
                                        <div className="card-body">
                                            <p> Design and Production partner for Hunter Holiday 2022 Pop-in at Nordstrom
                                                57th St, New York, including activations in Women’s, Men’s and Kid’s zones.
                                                Thirty-five (35) additional smaller take-downs in Nordstrom stores across
                                                the US. Concept design for Holiday boot customization events in stores
                                                across winter 2022.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="card">
                                        <img src={swiperImg5} alt='image' />
                                        <div className="card-body">
                                            <p>Creative, Design, and Production Partner for 2023 CES. Scope Included
                                                creation of Branding Identity, Assets, and Digital Content, Design,
                                                Production design, Production oversight and Installation of client
                                                activations for IBM, Delta, Instacart, and more.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="card">
                                        <img src={swiperImg6} alt='image' />
                                        <div className="card-body">
                                            <p>Creative, Design, and Production Partner for 2022 NY Fashion Week Pop-Up
                                                space. In Partnership with B-Reel scope including creation of Final Design,
                                                Design Assets, 3D Renders, Production design, Production/Partner oversight
                                                and creation of a two (2) story pop-up for Afterpay’s clients such as Crocs,
                                                JD Sports, Container Store, &amp; Revolve.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;