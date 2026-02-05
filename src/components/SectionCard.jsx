
import React from "react";
import { Card } from "react-bootstrap";

const SectionCard = ({ children }) => {
  return (
    <Card className="mb-1 shadow-sm border-0">
      <Card.Body>

        {children}

      </Card.Body>
    </Card>
  );
};

export default SectionCard;
