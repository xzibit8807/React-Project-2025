export default function ContactUsComp() {
    return (
        <div className="contact_section layout_padding padding_top_0">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="email_box">
                            <div className="input_main">
                                <div className="container">
                                    <form action="/action_page.php">
                                        <div className="form-group">
                                            <input type="text" className="email-bt" placeholder="Name" name="name"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="email-bt" placeholder="Email" name="email"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="email-bt" placeholder="Phone Number" name="phone" />
                                        </div>

                                        <div className="form-group">
                                            <textarea className="massage-bt" placeholder="Massage" rows="5" id="comment" name="message"></textarea>
                                        </div>
                                    </form>
                                </div>
                                <div className="main_bt"><a href="/">SEND</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="image_6"><img src="/images/img-6.png" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}