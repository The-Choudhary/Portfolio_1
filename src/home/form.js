import Header from "../addition page /header"
export default function Contactme(){
    return(
        <>
        <Header/>
        <form className="flex">
            <h1 className="message">Message Me</h1>
            <input type="text" placeholder="Full Name"></input>
            <input type="text" placeholder="Contact number"></input>
            <input type="text" placeholder="Email"></input>
            <input type="text" placeholder="About work detail"></input>
            <textarea className="enquery" placeholder="Any enquery"></textarea>
        </form>
        </>
    )
}