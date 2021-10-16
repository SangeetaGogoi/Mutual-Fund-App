import React, { useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMFData } from "../../services/dataService";
import Navigation from "../Navbar";
import MetaData from "./MetaData";
import { setSchemeData } from "../../redux/actions/mfActions";
import Graph from "./Graph";

export default function MFData() {
  const params = useParams();
  const schemeData = useSelector((state) => state.mutualFundData.schemeData);
  const dispatch = useDispatch();
  const { scheme } = params;
  useEffect(() => {
    const getMFData = fetchMFData(scheme);
    getMFData.then((response) => {
      dispatch(setSchemeData(response.data));
    });
  }, [scheme, dispatch]);

  return (
    <Container>
      <Navigation />
      {schemeData ? (
        <>
          <Row>
            <Col>
              {schemeData ? <MetaData schemeData={schemeData.meta} /> : null}
            </Col>
          </Row>
          <Row>
            <Col>
              {schemeData ? <Graph schemeData={schemeData.data} /> : null}
            </Col>
          </Row>
        </>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </Container>
  );
}
