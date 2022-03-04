import { Form } from "antd";
import React, { FunctionComponent } from "react";
import { FieldDefinition } from "./form";
import { FormField } from "./FormField";

export interface Props {
  fields: FieldDefinition[];
}

export const AutoForm: FunctionComponent<Props> = ({ fields }) => {
  return (
    <div>
      {fields.map((field, i) => {
        return <FormField key={i} field={field}></FormField>;
      })}
    </div>
  );
};

AutoForm.displayName = "AutoForm";
