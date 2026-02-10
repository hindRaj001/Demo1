import { Button, Form, InputGroup } from "react-bootstrap";

const FooterActions = () => {
  return (
    <div
     className="footer-scroll"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#ffffff",
        padding: "10px",
        borderTop: "1px solid #ccc",
        boxShadow: "0 -2px 6px rgba(0,0,0,0.1)",
        zIndex: 1000,
        overflowX: "auto",
        whiteSpace: "nowrap",
         WebkitOverflowScrolling: "touch",
      }}
    >
      <div
        className="d-flex align-items-center justify-content-center gap-2"
        style={{
          minWidth: "max-content",
          whiteSpace: "nowrap",
        }}
        
      >
        {/* Category Buttons */}
        <Button size="sm" variant="outline-primary">
          Branded Jewelry
        </Button>
        <Button size="sm" variant="outline-primary" className="custom-btn">
          ColorStone
        </Button>
        <Button size="sm" variant="outline-primary" className="custom-btn">
          Diamond
        </Button>
        <Button size="sm" variant="outline-primary" className="custom-btn">
          Metal
        </Button>
        <Button size="sm" variant="outline-primary" className="custom-btn">
          New Jewelry
        </Button>
        <Button size="sm" variant="outline-primary" className="custom-btn">
          Stone
        </Button>
        <Button size="sm" variant="outline-primary" className="custom-btn">
          Watch
        </Button>
        <Button size="sm" variant="outline-danger" className="custom-btn">
          Edit
        </Button>
        {/* Lot No Input */}
        <Form.Control
          size="sm"
          placeholder="Insert Lot No"
          style={{ width: "140px" }}
        />

        {/* Group Dropdown */}
        <InputGroup size="sm" style={{ width: "170px" }}>
          <InputGroup.Text>Group</InputGroup.Text>
          <Form.Select>
            <option>Bracelet</option>
            <option>Ring</option>
            <option>Necklace</option>
          </Form.Select>
        </InputGroup>

        {/* Action Buttons */}
        <Button size="sm" variant="primary" className="custom-btn">
          View
        </Button>
        <Button size="sm" variant="outline-secondary" className="custom-btn">
          First
        </Button>
        <Button size="sm" variant="outline-secondary" className="custom-btn">
          Prev
        </Button>
        <Button size="sm" variant="outline-secondary" className="custom-btn">
          Next
        </Button>
        <Button size="sm" variant="outline-secondary" className="custom-btn">
          Last
        </Button>
      </div>
    </div>
  );
};

export default FooterActions;
