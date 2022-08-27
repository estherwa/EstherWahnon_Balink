import {Link, Route} from "react-router-dom";
import {Outlet} from "react-router";




export default function ThankPage(props) {


    return (
        <>

            <div className="thankyou-page">
                <div className="_header">
                    <div className="logo">
                        {/*<img src="https://codexcourier.com/images/banner-logo.png" alt="">*/}
                    </div>
                    <h1>Thank You!</h1>
                </div>
                <div className="_body">
                    <div className="_box">
                        <h2>
                            <strong>Please check your email</strong> for further instructions on how to complete your
                            account setup.
                        </h2>
                        <p>
                            Thanks a bunch for filling that out.
                        </p>
                    </div>
                </div>
                <div className="_footer">


                    <Link to={"/"}  >Back to homepage</Link>
                </div>
            </div>

            <Outlet/>

        </>
    );
}

