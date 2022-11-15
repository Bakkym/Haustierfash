import React, { useEffect, useState } from "react";
import "./ArekFooter.css";
import { Collapse, Text, Input, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function ArekFooter() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = (e) => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const footer_desktop = () => {
    return (
      <div className="arekta-footer-row">
        <div className="footer-col">
          <h6>CATEGORIES</h6>
          <Link to={"/products?cat=kerchiefs"}>Kerchiefs</Link>
          <Link to={"/products?cat=t-shirts"}>T Shirts</Link>
          <Link to={"/products?cat=costumes"}>Costumes</Link>
          <Link to={"/products?cat=accesories"}>Accesories</Link>
        </div>
        <div className="footer-col">
          <h6>MY ACCOUNT</h6>
          <Link to={"/my-account"}>Account</Link>
          <Link to={"/cart"}>Cart</Link>
          <Link to={"/wishlist"}>Wishlist</Link>
        </div>
        <div className="footer-col">
          <h6>ABOUT US</h6>
          <p>
            In Haustierfash we believe in the identity of each dog since we make
            them unique. Also, we're proud to say that we use each kind of
            eco-friendly material so the earth can take another step towards
            eco-sustainability, and you, your dog and us can live in a healthy
            and happy planet, as we wish your little friend it is.
          </p>
        </div>
        <div className="footer-col">
          <h6>CONTACT US</h6>
          <p>
            Address: <span>Medellín, Antioquia, Colombia</span>
            <span>Universidad de Medellín</span>
          </p>
          <p>
            Phone: <span>+57 310 3808263</span>
          </p>
          <p>E-mail: support@haustierfash.com</p>
        </div>
      </div>
    );
  };

  const footer_mobile = () => {
    return (
      <Collapse.Group>
        <Collapse style={{ display: "block" }} title={<Text>CATEGORIES</Text>}>
          <Text>
            <div className="footer-col">
              <Link to={"/products?cat=kerchiefs"}>Kerchiefs</Link>
              <Link to={"/products?cat=t-shirts"}>Shirts</Link>
              <Link to={"/products?cat=costumes"}>Costumes</Link>
              <Link to={"/products?cat=accesories"}>Accesories</Link>
            </div>
          </Text>
        </Collapse>
        <Collapse style={{ display: "block" }} title={<Text>MY ACCOUNT</Text>}>
          <Text>
            <div className="footer-col">
              <Link to={"/my-account"}>Account</Link>
              <Link to={"/cart"}>Cart</Link>
              <Link to={"/wishlist"}>Wishlist</Link>
            </div>
          </Text>
        </Collapse>
        <Collapse style={{ display: "block" }} title={<Text>ABOUT US</Text>}>
          <Text>
            <div className="footer-col">
              <p>
                In Haustierfash we believe in the identity of each dog since we
                make them unique. Also, we're proud to say that we use each kind
                of eco-friendly material so the earth can take another step
                towards eco-sustainability, and you, your dog and us can live in
                a healthy and happy planet, as we wish your little friend it is.
              </p>
            </div>
          </Text>
        </Collapse>
        <Collapse style={{ display: "block" }} title={<Text>CONTACT US</Text>}>
          <Text>
            <div className="footer-col">
              <p>
                Address: <span>Medellín, Antioquia, Colombia</span>
                <span>Universidad de Medellín</span>
              </p>
              <p>
                Phone: <span>+57 310 3808263</span>
              </p>
              <p>E-mail: support@haustierfash.com</p>
            </div>
          </Text>
        </Collapse>
        <Collapse
          style={{ display: "block" }}
          title={<Text>BE IN TOUCH WITH US CARAJO</Text>}
        >
          <Text>
            <div className="footer-col">
              <Input
                shadow={false}
                style={{ outline: "none", borderRadius: "10px" }}
                labelLeft="Email"
                placeholder="Enter Your Email"
                color="primary"
              />
              <Button auto ghost color="secondary">
                Join Us
              </Button>
            </div>
          </Text>
        </Collapse>
      </Collapse.Group>
    );
  };

  return (
    <div className="arekfooter-container">
      {windowWidth > 820 ? footer_desktop() : footer_mobile()}
    </div>
  );
}
