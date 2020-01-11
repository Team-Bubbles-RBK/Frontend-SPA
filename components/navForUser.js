import React from "react";
import Link from "next/link";

const NavUser = () => (
  <nav>
    <ul>
      <li>
        <Link href="../bubbleCard">
          <a>Home</a>
        </Link>
      </li>

      <li>
        <Link href="./chat">
          <a>notifications</a>
        </Link>
      </li>

      <li>
        <Link href="./profile">
          <a>profile</a>
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

export default NavUser;
