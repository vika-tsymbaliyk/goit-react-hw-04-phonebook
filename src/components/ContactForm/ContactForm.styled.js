import styled from 'styled-components'

import { Field, Form, ErrorMessage } from "formik";

export const PhonebookForm = styled(Form)`
  display:flex;
  flex-direction:column;
  gap: 15px;
  border: 1px solid black;
  border-radius:5px;
  padding: 10px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Input = styled(Field)`
 
`;

export const ErrorMsg = styled(ErrorMessage)`
color: red;
font-size:12px;  
`;