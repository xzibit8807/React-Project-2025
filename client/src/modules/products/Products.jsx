import { showGames } from "../../api/gamesApi";
import GamesProducts from "./gameProducts/gamesProducts";

export default function ProductsComp() {
    const { games } = showGames();

    return (
        <div className="product_section layout_padding">
            <div className="container">
                <h1 className="product_text">Our <span>products</span></h1>
                <p className="long_text">It is a long established fact that a reader will be distracted by the readable content of a
                    page when looking at its layout. The point of using Lorem</p>
                <div className="product_section_2">
                    {games.length > 0
                ? games.map(game => <GamesProducts key={game._id} {...game} />)
                : <h3 className="product_text">No games available.</h3>
            }

                </div>
                {/* <div className="see_main">
                    <div className="see_bt"><a href="#">See More</a></div>
                </div> */}
            </div>
        </div>
    );
}