import "./noPage.css"
export default function NoPageTemp() {
    return (
        <main className="bsod container404">
            <h1 className="neg title"><span className="bg">Error - 404</span></h1>
            <p>An error has occurred, to continue:</p>
            <p>* You chose the wrong way.</p>
            <p>* Return to our homepage.<br />
                * For some reason here is nothing to see.</p>
            <p>* Please next time do stick on the right road, so you don't get lost.</p>
            <nav className="nav">
                <a href="/" className="link">Home Page</a>
            </nav>
        </main>
    );
}