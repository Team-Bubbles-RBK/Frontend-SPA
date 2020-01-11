import React from "react";
import { Col } from "reactstrap";
import { MDBIcon } from "mdbreact";
import createBubble from "../pages/createBubble";
import Link from "next/link";

let CreateBubbleIcon = () => (
  <Link href="createBubble">
    <img
      src="https://banner2.cleanpng.com/20180506/puw/kisspng-computer-icons-plus-and-minus-signs-symbol-downloa-blue-cross-5aeeca1fc43e43.6859198015255987518038.jpg"
      className="rounded-circle"
      style={{ float: "left", width: "3%", height: "3%", cursor: "pointer" }}
    />
  </Link>
);
export default CreateBubbleIcon;
