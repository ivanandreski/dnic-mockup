import React, { useState, useEffect } from "react";

import Card from "./Card";

import { learn } from "../mock_data/learn";

function Learn({score}) {
  const [learns, setLearns] = useState([]);

  useEffect(() => {
    fetchLearn();
  }, []);

  const fetchLearn = () => {
    setLearns(learn);
  };

  const renderLearns = () => {
    return learns.map((l, i) => (
      <div key={i} className="col-md-3">
        <Card object={l} test={false} score={score}/>
      </div>
    ));
  };

  return (
    <div className="row mt-4">
      <h1>Start your learning process</h1>
      {renderLearns()}
    </div>
  );
}

export default Learn;
