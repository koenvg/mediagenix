// I personally do not recommend going for a auto generated form.
// The idea seems nice but it often leads to a very rigid way of working that does not allow extensibility.
// Adding features is often hard and can require a lot of time.
// Codesplitting wont be as much use since an auto generated form needs to be able to handle all of the edge cases. So a form on a page that only needs input fields will also contain everything else (select, dateInput,...).

// example use cases
// - what if we want to render parts of the form when things are checked/unchecked
// - what if we want to have a form with multiple steps in it do we also need to express that in this schema?
// - Labels will have to be translated
// - Select fields for single select, multiselect, allow searching with query from server,...there can be many variants.

export type FieldType = "text" | "select" | "range_picker" | "textarea";

interface BaseField {
  label: string;
  component: FieldType;
}

export interface TextDefinition extends BaseField {
  name: string;
  component: "text";
}

export interface SelectDefinition extends BaseField {
  name: string;
  component: "select";
  options: { label: string; value: string }[];
}

export interface RangePickerDefinition extends BaseField {
  name: [string, string];
  component: "range_picker";
}

export interface TextareaDefinition extends BaseField {
  name: string;
  component: "textarea";
}

export type FieldDefinition =
  | TextDefinition
  | SelectDefinition
  | RangePickerDefinition
  | TextareaDefinition;
