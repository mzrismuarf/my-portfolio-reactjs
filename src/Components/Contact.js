import { Component } from "react";
import { Fade, Slide } from "react-awesome-reveal";

class Contact extends Component {
    render() {
        if (!this.props.data) return null;

        const name = this.props.data.name;
        // const street = this.props.data.address.street;
        const city = this.props.data.address.city;
        const state = this.props.data.address.state;
        const email = this.props.data.email;
        const message = this.props.data.contactmessage;

        return (
            <section id="contact">
                <Fade bottom duration={1000}>
                    <div className="row section-head">
                        <div className="two columns header-col">
                            <h1>
                                <span>Get In Touch.</span>
                            </h1>
                        </div>

                        <div className="ten columns">
                            <p className="lead">{message}</p>
                        </div>
                    </div>
                </Fade>

                <div className="row">
                    <Slide left duration={1000}>
                        <div className="eight columns">
                            <form action="" method="post" id="contactForm" name="contactForm">
                                <fieldset>
                                    <div>
                                        <label htmlFor="contactName">
                                            Name <span className="required">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue=""
                                            size="35"
                                            id="contactName"
                                            name="contactName"
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="contactEmail">
                                            Email <span className="required">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue=""
                                            size="35"
                                            id="contactEmail"
                                            name="contactEmail"
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="contactSubject">Subject</label>
                                        <input
                                            type="text"
                                            defaultValue=""
                                            size="35"
                                            id="contactSubject"
                                            name="contactSubject"
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="contactMessage">
                                            Message <span className="required">*</span>
                                        </label>
                                        <textarea
                                            cols="50"
                                            rows="15"
                                            id="contactMessage"
                                            name="contactMessage"
                                        ></textarea>
                                    </div>

                                    <div>
                                        <button className="submit">Submit</button>
                                        <span id="image-loader">
                                            <img alt="" src="images/loader.gif" />
                                        </span>
                                    </div>
                                </fieldset>
                            </form>

                            <div id="message-warning"> Error boy</div>
                            <div id="message-success">
                                <i className="fa fa-check"></i>Your message was sent, thank you!
                                <br />
                            </div>
                        </div>
                    </Slide>

                    <Slide right duration={1000}>
                        <aside className="four columns footer-widgets">
                            <div className="widget widget_contact">
                                <h4>Address and Phone</h4>
                                <p className="address">
                                    {name}
                                    <br />
                                    {city}, {state}
                                    <br />
                                    <span>{email}</span>
                                </p>
                            </div>

                            <div className="widget widget_tweets">
                                <h4 className="widget-title">Latest Tweets</h4>
                                <ul id="twitter">
                                    <li>
                                        <span>
                                            Hallo, hari ini saya baru saja menyelesaikan Mini Task pada Short Class MySkills. Selain itu juga saya rangkum beberapa materi yang mungkin teman-teman bisa lihat atau baca materi pada Short Class pada link berikut:<br />
                                            <a href="./">https://x.com/mzrismuarf/status/1760956182091763896?s=20</a>
                                        </span>
                                        <b>
                                            <a href="./">Feb 23</a>
                                        </b>
                                    </li>
                                    <li>
                                        <span>
                                            Hellow Fellow Tech Enthusiast! 👋🧑‍💻

                                            Alhamdulillah, baru saja menyelesaikan event Juara Android with Compose Camp Season 3 yang diselenggarakan oleh Google Devs Indonesia. Ini merupakan kesempatan pertama saya mengikuti event ini.<br />
                                            <a href="./">https://x.com/mzrismuarf/status/1720449618562134391?s=20</a>
                                        </span>
                                        <b>
                                            <a href="./">Nov 3, 2023</a>
                                        </b>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </Slide>
                </div>
            </section>
        );
    }
}

export default Contact;