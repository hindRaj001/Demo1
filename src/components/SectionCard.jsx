
import React from "react";
import { Card } from "react-bootstrap";

const SectionCard = ({ title, children }) => {
  return (
    <Card className="mb-3 shadow-sm border-0">
      <Card.Body>

        <h6 className="fw-bold border-bottom pb-2 mb-3">
          {title}
        </h6>

        {children}

      </Card.Body>
    </Card>
  );
};

export default SectionCard;
