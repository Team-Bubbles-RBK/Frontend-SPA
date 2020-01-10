import React from "react";
import Link from "next/link";

const Nav = () => (
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
);

export default Nav;
