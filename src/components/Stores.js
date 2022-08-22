import {Link} from "react-router-dom";
import {Outlet} from "react-router";
export default function Stores(props) {
    /**
     * This is the main menu that will appear in all pages and will have the option to go to either the page of the
     * forecast or the page of the location, here we are setting the objects to be in the middle and the image to be
     * fluid, so we can keep the website responsible
     *
     */

    return (
        <>


            <div className="row" style={{textAlign: "center"}}>
            <div className="card">
                <img src="../images/store.jpeg" width="400px" className="img-fluid" alt="logo"/>
                    <div className="container">
                        <h4><b>Finat</b></h4>
                        <p>136 rue de rennes</p>
                        <p>Paris</p>
                        <div className="col">
                            <Link to="/forecast">Enter the store</Link>
                        </div>
                    </div>

            </div>


            <div className="card">
                <img src="../images/book2.png" width="400px" className="img-fluid" alt="logo"/>
                <div className="container">
                    <h4><b>Miguel Maranda Bookstore</b></h4>
                    <p>C. de Lope de Vega</p>
                    <p>Madrid</p>
                    <div className="col">
                        <Link to="/forecast">Enter the store</Link>
                    </div>
                </div>

            </div>

                <div className="card">
                    <img src="../images/book5.png" width="400px" className="img-fluid" alt="logo"/>
                    <div className="container">
                        <h4><b>Harrietts Bookshop</b></h4>
                        <p>5 Av.</p>
                        <p>New York</p>
                        <div className="col">
                            <Link to="/forecast">Enter the store</Link>
                        </div>
                    </div>

                </div>

            </div>
            <Outlet/>

        </>
    );
}