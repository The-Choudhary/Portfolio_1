import { useNavigate } from "react-router-dom"
export default function Header(){
    const navigate = useNavigate();

    const project =()=>{
        navigate("/contact")
    }
    return(<>
<div className="header flex">
<div className="header-manager" >
    <h2 className="logo"><a href="/">JAAT's Portfolio</a></h2>
</div>
<div className="flex hcenter">
    <h2 className="nav"><a href="/#Projects">Projects</a></h2>
   <h2 className="nav none tecno"> <a href="/#Technologies">Tecnologies</a></h2>
    <h2 className="nav none"><a href="/#about-me">About</a></h2>
    <h2 className="nav" onClick={project}><a href="contact">Contact</a></h2>
    <h2 className="nav"><a href="get-in-touch">Get in Touch</a></h2>
</div>


</div>

    </>)}

