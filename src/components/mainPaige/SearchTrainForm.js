import { useNavigate} from "react-router-dom";
import { useState } from "react";
import Input from "../additionals/Input";

export default function SearchTrainForm() {

 
    
    return (
      <form className="search-train-form">
        <Input classContainer="search-train-form-container"></Input>
      </form>
    );
  }