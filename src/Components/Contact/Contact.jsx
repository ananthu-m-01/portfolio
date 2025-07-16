import EmailLogo from '../../assets/email2.png'
import whatsappLogo from '../../assets/whatsapp2.png'
import './Contact.css'
function Contact() {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0a66f8ab-585c-4080-be20-db954c6c3a7a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };


  return (
    <div id='contact' className='contact-ananthu'>
      <h1>Contact</h1>
      <div className="contact-container">
        <div className="contact-text">
          <p>Feel free to get in touch with me for any inquiries, collaborations, or just to say hello! You can reach out to me through email at ananthu.m.utr@gmail.com or connect with me on LinkedIn. I look forward to hearing from you!</p>
          <div className="contact-links">
            <div className="links">
              <img src={EmailLogo} alt="" className='contact-logo' /><p>@ananthu.m.utr@gmail.com</p>
            </div>
            <div className="links">
              <img src={whatsappLogo} alt="" className='contact-logo' /><p>+91 6238727094</p>
            </div>
          </div>
        </div>
          <form onSubmit={onSubmit}className='contact-form'>
            <label htmlFor='userName'>Your Name</label>
            <input type="text" name="your_name" id="userName" placeholder='Enter Your Name' className='input-class' required/><br />
            <label htmlFor='userEmail'>Your Email</label>
            <input type="email" name="your_email" id="userEmail" placeholder='Enter Your Email' className='input-class' required/><br />
            <label htmlFor='userMessage'>Write Your Message Here</label>
            <textarea name="your_message" id="userMessage" rows="4" cols="50" className='input-class textarea-class' required></textarea>
            <br />
            <button className='send-btn' type='submit'>SUBMIT</button>
          </form>
      </div>
    </div>
  )
}

export default Contact
