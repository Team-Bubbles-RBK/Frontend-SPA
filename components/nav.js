import React from "react";
import Link from "next/link";

const Nav = () => (
    <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
            <Link href={"/"}>
                <a className="navbar-brand">
                    <img width="50" src="https://image.flaticon.com/icons/svg/1111/1111165.svg" alt=""/>
                    <h3 className={"d-inline"}> Bubbles</h3>
                </a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto w-100 justify-content-end">
                    <li className="nav-item">
                        <Link href={"/"}><a className="nav-link">Home</a></Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Profile</a>
                    </li>
                </ul>
            </div>
        </div>
        <style jsx>
            {`
                @import url("https://fonts.googleapis.com/css?family=Titillium+Web");
                * {
                    font-family: "Titillium Web", sans-serif;
                }
                .navbar .navbar-brand {
                    font-size: 30px;
                }
                .navbar .nav-item {
                    padding: 10px 20px;
                }
                .navbar .nav-link {
                    font-size: 20px;
                    margin-left: 10px;
                }
                .fa-bars {
                    color: #5812C5;
                    font-size: 30px;
                }
                a {
                  color: #fff;
                }
`}
        </style>
    </nav>
);

export default Nav;