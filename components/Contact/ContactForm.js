import React, { Component } from 'react';

class ContactForm extends Component {
    render() {
        return (
            <section className="main-contact-area pb-100">
                <div className="container">
                    <div className="section-title">
                        <span>Contact Us</span>
                        <h2>Drop us a message for any query</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque quibusdam deleniti porro praesentium. Aliquam minus quisquam velit in at nam.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-wrap contact-pages mb-0">
                                <div className="contact-form">
                                    <form id="contactForm">
                                        <div className="row">
                                            <div className="col-lg-6 col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" name="name" id="name" className="form-control" required  placeholder="Your Name" />
                                                </div>
                                            </div>
                
                                            <div className="col-lg-6 col-sm-6">
                                                <div className="form-group">
                                                    <input type="email" name="email" id="email" className="form-control" required  placeholder="Your Email" />
                                                </div>
                                            </div>
                
                                            <div className="col-lg-6 col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" name="phone_number" id="phone_number" required  className="form-control" placeholder="Your Phone" />
                                                </div>
                                            </div>
                
                                            <div className="col-lg-6 col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" name="msg_subject" id="msg_subject" className="form-control" required placeholder="Your Subject" />
                                                </div>
                                            </div>
                
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <textarea name="message" className="form-control" id="message" cols="30" rows="5" required placeholder="Your Message"></textarea>
                                                </div>
                                            </div>
                
                                            <div className="col-lg-12 col-md-12">
                                                <button type="submit" className="default-btn btn-two">
                                                    Send Message
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="contact-img">
                                <img src="https://jumpx-react.envytheme.com/images/contact-img.png" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactForm;