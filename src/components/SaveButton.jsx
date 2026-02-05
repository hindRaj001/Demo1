import { Col, Button ,Form} from "react-bootstrap";

const SaveButton = (formData, handleSubmit, handleChange) => { 
  return <>
  <Col md={6} className="text-end">

          <Button 
            variant="success" 
            className="px-4 fw-bold"
            onClick={handleSubmit}
          >
            💾 Save
          </Button>

          <Form.Check
            
            inline
            type="checkbox"
            label="Create Multiple Lots"
            name="createMultiple"
            checked={formData.createMultiple}
            onChange={handleChange}
            className="fs-5 fw-semibold custom-checkbox"
          />

        </Col>
  </>
}

export default SaveButton;