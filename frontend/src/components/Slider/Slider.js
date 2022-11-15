import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "./Slider.css";

export default function Slider() {
  return (
    <div className="slider">
      <Carousel style={{ height: "100%" }}>
        <Carousel.Item style={{ height: "100%" }}>
          <img
            className="d-block h-100"
            src="https://img.freepik.com/free-photo/cute-pug-wearing-checkered-scarf-near-cupcake_23-2148348073.jpg?w=4380&t=st=1666541837~exp=1666542437~hmac=df8b3344662a75c52a66dc891257fdfddea9bd7b90108c1c97d76f9cb8d4d58b"
            alt="First slide"
            style={{ height: "100%" }}
          />
          <Carousel.Caption>
            <h1>
              <span>Kerchiefs!</span> <br /> Kerchiefs everywhere!
            </h1>
            <p>And just because we make your dog the most "estiloso" of all:</p>
            <Link to="/products"><button className="btn btn-primary shop-now-btn" style={{marginTop: '20px'}}>Shop Now</button></Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "100%" }}>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/5731804/pexels-photo-5731804.jpeg?auto=compress&cs=tinysrgb&w=4260&h=1750&dpr=1"
            alt="Second slide"
            style={{ height: "100%" }}
          />

          <Carousel.Caption>
            <h1>
              <span>Feelin' cool</span> <br /> With my T shirt from Haustierfash
            </h1>
            <p>And just because we make your dog the most "estiloso" of all:</p>
            <Link to="/products"><button className="btn btn-primary shop-now-btn" style={{marginTop: '20px'}}>Shop Now</button></Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "100%" }}>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/lovely-pets-composition-with-bulldog_23-2147997316.jpg?w=2380&t=st=1666544798~exp=1666545398~hmac=ab5d3c9da296829a03cf7f519b553273a5202bfd04b07aa07e8ca70352f5ff88"
            alt="Third slide"
            style={{ height: "100%" }}
          />

          <Carousel.Caption>
            <h1>
              <span>Ready to</span> <br /> Use my great accesories
            </h1>
            <p>And just because we make your dog the most "estiloso" of all:</p>
            <Link to="/products"><button className="btn btn-primary shop-now-btn" style={{marginTop: '20px'}}>Shop Now</button></Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
