import React from "react";
import doc from "../cv/Amanresume.pdf"
import Header from "../addition page /header";
import { useTypewriter , Cursor } from "react-simple-typewriter";
  
export default function Home(){

    const [text] = useTypewriter({
        words: ['Website Developer.' , "Chess Player." , "Learner."],
        loop: 0
    });

    return(
        <>
        <Header/>
        <div className="mainbackground , flex">
            <div className="ldiv">
                <div className="intro">
        <h1 className="heading">Hello, I'm Aman,</h1>
        <h1 className="typewriter">{text}<Cursor/></h1>

        <p className="">Former web developer looking to utilise expertise in
         development with an emphasis on teamwork, communication, and enthusiasm
        </p>
        
        </div>

        <a href={doc}>
            <button className="cv-button">Download CV</button></a>

            </div>
        <div className="rdiv">
        </div>
        </div>
        

        <section id="Projects" className="Project">
            <h2 className="headings">Projects</h2>
            <div className="projects-1">
    <div className="box">
    <div className="boxess">
    <div className="boxtop">
        <img className="imggg" src="test.jpeg"></img>
        <h3 className="project-heading">Furniture store landing page</h3>
        <p>Responsive HTML/CSS layout for online furniture store. HTML5, CSS3 (SCSS)</p>
        <div>
<button className="button2s button1s">Live Preview</button>
<button className="button2s">Checkout Github</button>
        </div>
        </div>
</div>
</div>


<div className="box">
    <div className="boxess">
    <div className="boxtop">
        <img className="imggg" src="test.jpeg"></img>
        <h3 className="project-heading">Furniture store landing page</h3>
        <p>Responsive HTML/CSS layout for online furniture store. HTML5, CSS3 (SCSS)</p>
        <div>
<button className="button2s button1s">Live Preview</button>
<button className="button2s">Checkout Github</button>
        </div>
        </div>
</div>
</div>

<div className="box">
    <div className="boxess">
    <div className="boxtop">
        <img className="imggg" src="test.jpeg"></img>
        <h3 className="project-heading">Furniture store landing page</h3>
        <p>Responsive HTML/CSS layout for online furniture store. HTML5, CSS3 (SCSS)</p>
        <div>
<button className="button2s button1s">Live Preview</button>
<button className="button2s">Checkout Github</button>
        </div>
        </div>
</div>
</div>

<div className="box">
    <div className="boxess">
    <div className="boxtop">
        <img className="imggg" src="test.jpeg"></img>
        <h3 className="project-heading">Furniture store landing page</h3>
        <p>Responsive HTML/CSS layout for online furniture store. HTML5, CSS3 (SCSS)</p>
        <div>
<button className="button2s button1s">Live Preview</button>
<button className="button2s">Checkout Github</button>
        </div>
        </div>
</div>
</div>

<div className="box">
    <div className="boxess">
    <div className="boxtop">
        <img className="imggg" src="test.jpeg"></img>
        <h3 className="project-heading">Furniture store landing page</h3>
        <p>Responsive HTML/CSS layout for online furniture store. HTML5, CSS3 (SCSS)</p>
        <div>
<button className="button2s button1s">Live Preview</button>
<button className="button2s">Checkout Github</button>
        </div>
        </div>
</div>
</div>

<div className="box">
    <div className="boxess">
    <div className="boxtop">
        <img className="imggg" src="test.jpeg"></img>
        <h3 className="project-heading">Furniture store landing page</h3>
        <p>Responsive HTML/CSS layout for online furniture store. HTML5, CSS3 (SCSS)</p>
        <div>
<button className="button2s button1s">Live Preview</button>
<button className="button2s">Checkout Github</button>
        </div>
        </div>
</div>
</div>


<div className="box">
    <div className="boxess">
    <div className="boxtop">
        <img className="imggg" src="test.jpeg"></img>
        <h3 className="project-heading">Furniture store landing page</h3>
        <p>Responsive HTML/CSS layout for online furniture store. HTML5, CSS3 (SCSS)</p>
        <div>
<button className="button2s button1s">Live Preview</button>
<button className="button2s">Checkout Github</button>
        </div>
        </div>
</div>
</div>

</div>
</section>

<section id="Technologies" className="technologies">
    <h2 className="heading">Technologies</h2>
<div>
    <p className="technology-skills-parent">
    <h2 className="technology-skills">Html</h2>
    <h2 className="technology-skills-level">Advanced</h2>
    </p>
    <div className="technology-skills-rate"></div>
</div>

<div>
    <p className="technology-skills-parent">
    <h2 className="technology-skills">Css</h2>
    <h2 className="technology-skills-level">Advanced</h2>
    </p>
    <div className="technology-skills-rate"></div>
</div>

<div>
    <p className="technology-skills-parent">
    <h2 className="technology-skills">JavaScript</h2>
    <h2 className="technology-skills-level">Advanced</h2>
    </p>
    <div className="technology-skills-rate-javascript"></div>
</div>

<div>
    <p className="technology-skills-parent">
    <h2 className="technology-skills">React js</h2>
    <h2 className="technology-skills-level">Advanced</h2>
    </p>
    <div className="technology-skills-rate-reactjs"></div>
    </div>

    <div>
    <p className="technology-skills-parent">
    <h2 className="technology-skills">Node js</h2>
    <h2 className="technology-skills-level">Advanced</h2>
    </p>
    <div className="technology-skills-rate-nodejs"></div>
    </div>

    <div>
    <p className="technology-skills-parent">
    <h2 className="technology-skills">React Native</h2>
    <h2 className="technology-skills-level">Advanced</h2>
    </p>
    <div className="technology-skills-rate-reactnative"></div>
    </div>


</section>


<section id="Additional technologies and skills" className="skills">
            <h2 className="headings">Additional technologies and skills</h2>
            <div className="flex additional-skills-head">
                <div className="flex ">
                <div className="dot-manager flex">
                <div className="dot">
                </div>
                    <p className="dot-p">Github</p>
                </div>
                </div>

                <div className="dot-manager flex">
                <div className="dot">
                </div>
                    <p className="dot-p">Teamwork</p>
                </div>

                <div className="dot-manager flex">
                <div className="dot">
                </div>
                    <p className="dot-p">Quick learning</p>
                </div>
                
                <div className="dot-manager flex">
                <div className="dot">
                </div>
                    <p className="dot-p">Interest in learning</p>
                </div>

            </div>

            <div className="flex additional-skills-head">
                <div className="flex ">

                <div className="dot-manager flex">
                <div className="dot">
                </div>
                    <p className="dot-p">Engagement</p>
                </div>

                <div className="dot-manager flex">
                <div className="dot">
                </div>
                    <p className="dot-p">B2 English</p>
                </div>

                <div className="dot-manager flex">
                <div className="dot">
                </div>
                    <p className="dot-p">Easy Communication</p>
                </div>
                </div>

                </div>
            </section>

            <section id="about-me">

            <h2 className="headings">About me</h2>
           <div className="straight-line"></div>
            <div className="flex additional-skills-head">
            <div className="flex">
                <h1>2021</h1>

                <div className="dot " style={{marginLeft:'24px'}}></div>
                <p className="p-journey">completed the tenth grade at Swami 
                Vivekanand Government School. After working for almost two years with limited expertise, I began to learn more about how it functions.</p>           
                </div>

                <div className="flex aboutme">
                <h1>2023</h1>

                <div className="dot journey"></div>
                <p className="p-journey">After completing my 12th grade education at Swami Vivekanand Government School, I began 
                learning how to code in my spare time using the fundamental concepts of HTML, CSS, and SQL that I had been taught in school. </p>           
                </div>

                <div className="flex aboutme">
                <h1>2024</h1>

                <div className="dot journey last-journey"></div>
                <p className="p-journey">I started studying codes with a local training centre after completing my 12th grade, and they taught me more about this subject, including how it works and why it's interesting.</p>           
                </div>

                <div className="flex aboutme">
                <h1>2024</h1>

                <div className="dot journey"></div>
                <p className="p-journey">I am trying to get my degree from Tagore PG College, and I continue to be more interested in it than ever because it seems like an invincible obsession. I also grow daily by learning new things, like addiction.</p>           
                </div>

            </div>
            
            </section>

            <hr/>
            <section id="disclaimer">
                <div className="flex">

                <div style={{width:"50%"}}>
                <h3 style={{paddingLeft:"47px"}}>
                    Copyright @ 2024</h3>
                </div>

                <div className="right-disclaimer">
                <i class="icons fa fa-facebook" aria-hidden="true"></i>
                <i class="icons fa fa-linkedin" aria-hidden="true"></i>
                <i class="icons fa fa-instagram" aria-hidden="true"></i>
                </div>

                </div>
            </section>
            <div>
                <h1 className="made-by">Made by TheChoudhary</h1>
            </div>

        </>
    )
}