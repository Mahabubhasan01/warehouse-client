import React from "react";
import { toast } from "react-toastify";
import "./Contact.css";

const Contact = () => {
  const handleContact = event=>{
    event.preventDefault()
    const name = event.target.name.value;
    const email = event.target.email.value;
    const text = event.target.message.value;
    const contactInfo = {name,email,text}
    const url = `http://localhost:5000/contact`
    fetch(url,{
      method : 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(contactInfo)
    }).then(res=>res.json()).then(result=>{console.log(result)})

    event.target.reset();
    toast('Thanks for your feedback')
  }
  return (
    <div className="contact-box">
      <div className="container-contact">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i className="fas fa-map-marker-alt"></i>
              <div className="topic">Address</div>
              <div className="text-one">Surkhet, NP12</div>
              <div className="text-two">Birendranagar 06</div>
            </div>
            <div className="phone details">
              <i className="fas fa-phone-alt"></i>
              <div className="topic">Phone</div>
              <div className="text-one">+0098 9893 5647</div>
              <div className="text-two">+0096 3434 5678</div>
            </div>
            <div className="email details">
              <i className="fas fa-envelope"></i>
              <div className="topic">Email</div>
              <div className="text-one">Cleverprogrammer@gmail.com</div>
              <div className="text-two">info.cleveprogrammer@gmail.com</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p>
              If you have any work from me or any types of quries related to my
              tutorial, you can send me message from here. It's my pleasure to
              help you.
            </p>
            <form onSubmit={handleContact}>
              <div className="input-box">
                <input name="name" type="text" placeholder="Enter your name" />
              </div>
              <div className="input-box">
                <input name="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="input-box">
                <textarea
                name="message"
                  rows="4"
                  cols="100"
                  type="text"
                  placeholder="Write your message"
                />
              </div>
              <div className="input-box message-box"></div>
              <div className="button">
                <input type="button" value="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
