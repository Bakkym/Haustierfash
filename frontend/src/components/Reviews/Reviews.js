import React, { useEffect } from "react";
import { Collapse, Text, Grid } from "@nextui-org/react";
import "./Reviews.css";
import WriteReview from "../WriteReview/WriteReview";
import Pagination from "../Pagination/Pagination";
import Review from "../Review/Review";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { asynctGetReview } from "../../store/reviewSlice";

export default function Reviews() {
  const dispatch = useDispatch()
  const location = useLocation()
  const data = useSelector(state => state.review.review)
  const singleProduct = useSelector((state) => state.product.singleProduct);
  const [curPage, setCurPage] = React.useState(1);

  useEffect(() => {
    dispatch(asynctGetReview(location.pathname.split('/')[2]))
  }, [dispatch, location])

  const setCurrentPage = (num) => {
    setCurPage(num);
  };

  const first = (curPage - 1) * 5;
  const last = 5 * curPage;

  return (
    <div className="reviews-container">
      <Collapse.Group>
        {singleProduct.gender !== "Accesories" && (
          <Collapse
            title="Size Table"
            style={{ display: "block" }}
            initialExpanded
          >
            <Text>
              <table>
                <tr>
                  <th>WEIGHT</th>
                  <th>BREED</th>
                  <th>KENNEL SIZE</th>
                </tr>
                <tr>
                  <td>5-12lbs</td>
                  <td>Chihuanhuam Maltese, Pomeranian, Youkie, Toy Poodle, Brussles Griffon</td>
                  <td>All Sizes</td>
                </tr>
                <tr>
                  <td>12-25lbs</td>
                  <td>Pug, Caviler King Charles Spaniel, Beagle, Boston Terrier, Welch Terrier</td>
                  <td>All Sizes</td>
                </tr>
                <tr>
                  <td>25-50lbs</td>
                  <td>Sibrerian Husky, Cocker Spaniel, Border Collie, Corgi, French Bulldog</td>
                  <td>XL, XXL</td>
                </tr>
                <tr>
                  <td>50+lbs</td>
                  <td>Lab/ Golden Retriever, Boxer, German Sheperd, American Bulldog</td>
                  <td>XXL, Custom Sizes</td>
                </tr>
              </table>
            </Text>
          </Collapse>
        )}
        <Collapse
          title={
            <Text h5>
              Reviews:{" "}
              <Text b>
                {data && <span className="review-span">{data.length}</span>}
              </Text>{" "}
            </Text>
          }
          style={{ display: "block" }}
        >
          <Text>
            <WriteReview />
            {/* USER REVIEW */}
            <div className="user-review-container">
              <Grid.Container gap={2}>
                <Grid>
                  {data && data.map((item, index) => {
                    if (index >= first && index < last) {
                      return <Review key={index} data={item} />;
                    }
                    return null;
                  })}
                  <Pagination
                    setCurrentPage={setCurrentPage}
                    currentPage={curPage}
                    total={Math.ceil(data.length / 5)}
                  />
                </Grid>
              </Grid.Container>
            </div>
          </Text>
        </Collapse>
      </Collapse.Group>
    </div>
  );
}
