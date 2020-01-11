import React from "react";
import Link from "next/link";

const Nav = () => (
<<<<<<< HEAD
    <nav>
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="auth/login">
                    <a>Login</a>
                </Link>
            </li>
            <li>
                <Link href="auth/register">
                    <a>register</a>
                </Link>
            </li>
            <li>
                <Link href="./chat">
                    <a>chatroom</a>
                </Link>
            </li>
        </ul>

        <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
        justify-content: center;
        background-color: black;
        color: orangered;
      }
      ul {
        display: flex;
        justify-content: flex-end;
        margin:0;
      }
      li {
        display: flex;
        margin-right: 5em;
      }
      a {
        text-decoration: none;
        font-size: 20px;
        color: orangered;
      }
    `}</style>
    </nav>
=======
  <nav class="navbar navbar-inverse  navbar-static-top">
    <div class="container">
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">
          Blog Name
        </a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <li class="active">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li class="dropdown">
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="#">Action</a>
              </li>
              <li>
                <a href="#">Another action</a>
              </li>
              <li>
                <a href="#">Something else here</a>
              </li>
              <li role="separator" class="divider"></li>
              <li class="dropdown-header">Nav header</li>
              <li>
                <a href="#">Separated link</a>
              </li>
              <li>
                <a href="#">One more separated link</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="../navbar/">Default</a>
          </li>
          <li class="active">
            <a href="./">
              Static top <span class="sr-only">(current)</span>
            </a>
          </li>
          <li>
            <a href="../navbar-fixed-top/">Fixed top</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
>>>>>>> 95c43ce5a0c899a35ea679260a07759d649ba012
);

export default Nav;
