import { Col, Button ,Form} from "react-bootstrap";

const SaveButton = (formData, handleSubmit, handleChange) => { 
  return <>
  <div className="d-flex align-items-center justify-content-center mt-4 gap-3 mt-5">

          <Button 
            variant="success" 
            className="px-4 fw-bold"
            onClick={handleSubmit}
          >
            Save
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

       </div>
  </>
}

export default SaveButton;