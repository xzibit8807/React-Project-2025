export default function ProductsComp() {
    return (
        <div className="product_section layout_padding">
            <div className="container">
                <h1 className="product_text">Our <span>products</span></h1>
                <p className="long_text">It is a long established fact that a reader will be distracted by the readable content of a
                    page when looking at its layout. The point of using Lorem</p>
                <div className="product_section_2">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="image_2"><img src="images/img-3.png"/></div>
                            <div className="price_text">Price $ <span>200</span></div>
                            <h1 className="game_text">Video Game</h1>
                            <p className="long_text">It is a long established fact that a reader will be distracted by the readable content
                                of a page when looking at its layout. The point of using Lorem</p>
                        </div>
                        <div className="col-md-6">
                            <div className="image_2"><img src="images/img-3.png"/></div>
                            <div className="price_text">Price $ <span>300</span></div>
                            <h1 className="game_text">Video Game</h1>
                            <p className="long_text">It is a long established fact that a reader will be distracted by the readable content
                                of a page when looking at its layout. The point of using Lorem</p>
                        </div>
                    </div>
                </div>
                <div className="see_main">
                    <div className="see_bt"><a href="#">See More</a></div>
                </div>
            </div>
        </div>
    );
}