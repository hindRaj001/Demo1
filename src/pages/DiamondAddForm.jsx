
import React from "react";
import { useState } from "react";
import { Row, Button, Col,Container, Card , Form} from "react-bootstrap";
import Header from "../components/Header";
import LotBasicInfo from "../components/LotBasicInfo";
import CutAndBasicDetails from "../components/CutAndBasicDetails";
import XFields from "../components/XFields";
import Specifications from "../components/Specifications";
import FooterActions from "../components/FooterActions";
import SectionCard from "../components/SectionCard";
import { toast } from "react-toastify";
import SaveButton from "../components/SaveButton";
import '../App.css'

const DiamondAddForm = () => {

    const [formData, setFormData] = useState({

    // Basic Details
    lotNo: "",
    group: "",
    description: "",
    supplier: "",

    size: "",
    shape: "",
    cut: "",
    color: "",

    purity: "",
    unit: "Carats",
    cutHS: "",
    colorOrigin: "",

    minGirdle: "",
    maxGirdle: "",
    refNo: "",
    weight: "",

    remarks: "",
    depth: "",
    cutEX: "",
    showSrNo: "",


    // X Fields
    x1: "",
    x2: "",
    x3: "",
    x4: "",
    x5: "",
    x6: "",
    x7: "",
    x8: "",
    x9: "",
    x10: "",
    x11: "",
    checkHere: false,


    // ✅ Updated Specifications Fields (New Layout)

    // Row 1 Dropdowns
    fluorescence: "",
    lab: "",
    polish: "",
    symmetry: "",
    comment: "",
    tableInclusion: "",

    // Row 2 Dropdowns
    luster: "",
    countryOrigin: "",
    shade: "",
    blackInclusion: "",
    openInclusion: "",
    lab2: "",

    // Row 3 Number Inputs
    lab2No: "",
    lab2CtsWt: "",


    // Extra Option
    createMultiple: false,
  });

   const [errors, setErrors] = useState({});
   const validateForm = () => {
  let newErrors = {};

  if (!formData.lotNo) newErrors.lotNo = "Lot No is required";
  if (!formData.group) newErrors.group = "Group is required";
  if (!formData.supplier) newErrors.supplier = "Supplier is required";
  if (!formData.size) newErrors.size = "Size is required";
  if (!formData.shape) newErrors.shape = "Shape is required";
  if (!formData.purity) newErrors.purity = "Purity is required";
  if (
  formData.depth &&
  (isNaN(formData.depth) ||
    formData.depth < 0 ||
    formData.depth > 100)
) {
  newErrors.depth = "Depth must be between 0 and 100";
}

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};



   const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value,
  }));
};


 const handleSubmit = () => {
  if (!validateForm()) {
    toast.warning("Please fill all required fields!");
    return;
  }

  toast.success("Lot saved successfully!");
};




  return (
    
      <div className="pg-bg">
      <Header />

      <Container className="page-wrapper" style={{ backgroundColor: "#f5f6fa", minHeight: "100vh", display: "flex",
    flexDirection: "column", }}>

        <div className="p-1 shadow-sm"> 
          {/* Form sections will come here */}
          <h6 className="text-center text-muted">
            Last created lot "DM2"
          </h6>
       </div>

        <Form>

   <SectionCard >
    <LotBasicInfo 
      formData={formData} 
      errors={errors}
      handleChange={handleChange} 
    />
     <CutAndBasicDetails 
      formData={formData} 
      errors={errors}
      handleChange={handleChange} 
    />
  </SectionCard>



  <SectionCard>
    <XFields 
      formData={formData} 
      handleChange={handleChange} 
    />
  </SectionCard>

   <Col className="d-flex justify-content-center align-items-center gap-3">
          
          {/* Title */}
          <h6 className="fw-bold mb-0">Specifications</h6>

          {/* Checkbox */}
          <Form.Check
            type="checkbox"
            label="Check Here"
            name="specCheck"
            checked={formData.specCheck}
            onChange={handleChange}
          />
        </Col>

<SectionCard>
    <Specifications 
      formData={formData} 
      handleChange={handleChange} 
    />
  </SectionCard>

  <SaveButton></SaveButton>

 

</Form>

<FooterActions 
    formData={formData}
    handleChange={handleChange}
    handleSubmit={handleSubmit}
  />
      </Container>

      
    </div>
  );
};

export default DiamondAddForm;
