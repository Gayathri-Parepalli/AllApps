import React from "react";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";
const ProceedToCheck = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        variant="outlined"
        style={{ marginTop: 20 }}
        onClick={() => navigate("/checkOut")}
      >
        Proceed to check
      </Button>
    </div>
  );
};

export default ProceedToCheck;
