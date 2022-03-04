import { FunctionComponent } from "react";
import { DateRangeField } from "./DateRangeField";
import { FieldDefinition } from "./form";
import { InputField } from "./InputField";
import { SelectField } from "./SelectField";
import { TextareaField } from "./TextareaField";

export interface Props {
  field: FieldDefinition;
}

export const FormField: FunctionComponent<Props> = ({ field }) => {
  switch (field.component) {
    case "textarea":
      return <TextareaField field={field} />;
    case "text":
      return <InputField field={field} />;
    case "range_picker":
      return <DateRangeField field={field}></DateRangeField>;
    case "select":
      return <SelectField field={field}></SelectField>;
  }
};

FormField.displayName = "FormField";
