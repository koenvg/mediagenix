import { Form } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { FunctionComponent } from "react";
import { TextareaDefinition } from "./form";
import { useField } from "react-final-form";

export interface Props {
  field: TextareaDefinition;
}

export const TextareaField: FunctionComponent<Props> = ({
  field: { name, label },
}) => {
  const { input } = useField(name, {});
  return (
    <Form.Item label={label}>
      <TextArea {...input} />
    </Form.Item>
  );
};

TextareaField.displayName = "TextareaField";
