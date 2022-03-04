import { DatePicker, Form } from "antd";
import { useForm, useFormState } from "react-final-form";
import React, { FunctionComponent, useEffect } from "react";
import { RangePickerDefinition } from "./form";

export interface Props {
  field: RangePickerDefinition;
}

const zip = <A, B>(a: A[], b: B[]) => a.map((k, i) => [k, b[i]] as const);

export const DateRangeField: FunctionComponent<Props> = ({
  field: { name, label },
}) => {
  const form = useForm();
  // TODO: Not efficient with re-renders. Can be improved by using subscriptions
  const formState = useFormState();

  const value = name.map((n) => formState.values[n]) as [any, any];
  const handleChange = (value: [moment.Moment, moment.Moment]) => {
    zip(name, value!).forEach(([n, v]) => form.change(n, v));
  };

  return (
    <Form.Item label={label}>
      <DatePicker.RangePicker
        value={value}
        onChange={(v) => handleChange(v as any)}
      ></DatePicker.RangePicker>
    </Form.Item>
  );
};

DateRangeField.displayName = "DateRangeField";
