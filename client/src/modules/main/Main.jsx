export default function MainComp() {
    return (
        <div className="main-page">
            <div className="containerМ">
                <div id="my_slider" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-md-6">
                                    <h1 className="video_text">Video games</h1>
                                    <h1 className="controller_text">Best Collection out there</h1>
                                    <p className="banner_text">Welcome to the best Web Page for an Online Games Catalog. Here you can see different Games
                                        ,check if there are any comments and chose the ones you like the Most.
                                        You can Buy, Sell and Post Games. Additionally add Comments to make the experience for each User the best.</p>
                                    <div className="shop_bt"><a href="/products">See Now</a></div>
                                </div>
                                <div className="col-md-6">
                                    <div className="image_1"><img src="images/img-1.png" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}