import { Form, Select } from "antd";
import { FunctionComponent } from "react";
import { SelectDefinition } from "./form";
import { useField } from "react-final-form";

export interface Props {
  field: SelectDefinition;
}

export const SelectField: FunctionComponent<Props> = ({
  field: { name, label, options },
}) => {
  const { input } = useField(name, {});
  return (
    <Form.Item label={label}>
      <Select options={options} {...input}></Select>
    </Form.Item>
  );
};

SelectField.displayName = "SelectField";
