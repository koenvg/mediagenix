import { Form, Input } from "antd";
import { FunctionComponent } from "react";
import { useField } from "react-final-form";
import { TextDefinition } from "./form";

export interface Props {
  field: TextDefinition;
}

export const InputField: FunctionComponent<Props> = ({
  field: { name, label },
}) => {
  const { input } = useField(name, {});
  return (
    <Form.Item label={label}>
      <Input {...input} />
    </Form.Item>
  );
};

InputField.displayName = "InputField";
