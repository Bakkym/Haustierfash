import React from "react";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="about-container">
        <h4>
          In Haustierfash we believe in the identity of each dog since we make
          them unique. Also, we're proud to say that we use each kind of
          eco-friendly material so the earth can take another step towards
          eco-sustainability, and you, your dog and us can live in a healthy and
          happy planet, as we wish your little friend it is.
        </h4>
        <div className="about-img-container">
          <img
            src="https://img.freepik.com/free-photo/portrait-curiously-looking-brown-white-basenji-dog-black-zippered-hoodie_346278-416.jpg?w=1380&t=st=1666549918~exp=1666550518~hmac=d2c715d014d20a6902f1dd8303077b2d9c9e39ba033b8ed6a1f794c7f329df36"
            alt=""
          />
          <img
            src="https://img.freepik.com/free-photo/front-view-funny-cute-dog-concept_23-2148786514.jpg?w=996&t=st=1666550540~exp=1666551140~hmac=bd4fa1cde9f55258988982a6e33770688c9b23efaefef7bc15aba281c8227ff3"
            alt=""
          />
          <img
            src="https://img.freepik.com/free-photo/domestic-dog-wearing-clothing_23-2148643155.jpg?w=740&t=st=1666549946~exp=1666550546~hmac=cbf0c7808421edfb030321600ae512aad1123a8096f238c9bdde22cf1f416c07"
            alt=""
          />
        </div>
        <div className="about-row">
          <div className="about-col">
            <h6>HOW DID WE BORN?</h6>
            <p>
              We were born in Colombia with the purpose of changing the entire
              animal market, by providing each dog with exclusive products to
              make you and your dog feel and be comfortable. We are an excellent
              chose for you, just if you decide to make your dog the coolest, by
              buying eco-friendly products with the best style B).
            </p>
          </div>
          <div className="about-col">
            <h6>WHY CHOOSING US?</h6>
            <ul className="why-us">
              <li>Shipping: <span>Free shipping carajo</span></li>
              <li>Sustainability: <span>Our indonesian kids make our products with eco-friendly productos so nobody gets worried</span></li>
              <li>Exclusivity: <span>You receive exclusive products by excellent prices</span></li>
              <li>Beliefs: <span>We believe that Israel is a legitimate state and we love China... China god</span></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
