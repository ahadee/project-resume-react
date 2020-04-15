import React from 'react';
import "./Contact.css"

const Contact = () => {
    return (
        <section class="contact" id="contact">
            <div class="container container-contact">
                <div class='row'>
                    <div class='col-sm-12 text-center'>
                        <h2>Contact</h2>
                        <hr />
                    </div>
                </div>
                <div class='row justify-content-sm-center'>
                    <div class="col-sm-8 col-sm-auto">
                        <form >
                            <div class="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" class="form-control" placeholder="Input Name" />
                            </div>
                            <div class="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" class="form-control" placeholder="Input Email" />
                            </div>
                            <div class="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input type="tel" id="phone" class="form-control" placeholder="Input Phone Number" />
                            </div>
                            <select class='form-control'>
                                <option>-- Choose Category --</option>
                                <option>-- Web Design --</option>
                                <option>-- UI/UX --</option>
                                <option>-- React --</option>
                                <option>-- JavaScript --</option>
                            </select>
                            <div class='form-group'>
                                <label htmlFor="message">Message</label>
                                <textarea class="form-control" rows="10" placeholder="Input Message"></textarea>
                            </div>
                            <button type="submit" class="btn btn-outline-danger">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact