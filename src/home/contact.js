import Header from "../addition page /header";
export default function Contact(){
    return(
        <>
<Header/>
<div className="contact flex">
    <div className="contact-l">
        <div className="contact-div">
            <i class="fa fa-envelope contact-icon" aria-hidden="true"></i>
            <p className="detail-c">Aman.kukna.007@gmail.com</p>
        </div>
        <div className="contact-div">
        <i class="fa fa-phone contact-icon" aria-hidden="true"></i>
        <p className="detail-c">+919694712370</p>
        </div>
        <div className="contact-div">
        <i class="fa fa-instagram contact-icon" aria-hidden="true"></i>
        <p className="detail-c">_thechoudhary</p>
        </div>
        <div className="contact-div">
        <i class="fa fa-facebook contact-icon" aria-hidden="true"></i>
        <p className="detail-c"></p>
        </div>
        <div className="contact-div">
        <i class="fa fa-linkedin contact-icon" aria-hidden="true"></i>
        <p className="detail-c"></p>
        </div>
    </div>

<div className="contact-r">
    <h1 className="location">Location</h1>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5192.223032987409!2d73.19727345692577!3d29.185082089707073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393de46c27c25fc5%3A0x53f44bfc7dc7c8c0!2sAnupgarh%2C%20Rajasthan%20335701!5e0!3m2!1sen!2sin!4v1715431284073!5m2!1sen!2sin" 
style={{ width:"100%", height:"100%" ,border:"0px", allowfullscreen:"" ,loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
</div>

</div>
        </>
    )
}