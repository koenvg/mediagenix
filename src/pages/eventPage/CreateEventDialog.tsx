import Modal from "antd/lib/modal/Modal";
import { FunctionComponent } from "react";
import { AutoForm } from "../../components/form/AutoForm";
import { FieldDefinition } from "../../components/form/form";
import { Button } from "antd";
import { useForm, Form, FormRenderProps } from "react-final-form";
import { FormApi } from "final-form";
import { useMutation, useQueryClient } from "react-query";
import { createEvent } from "../../api/eventApi";

export interface Props {
  open: boolean;
  onClose: () => void;
}

const schema: FieldDefinition[] = [
  {
    name: "title",
    label: "Title",
    component: "text",
  },
  {
    name: "type",
    component: "select",
    label: "Type",
    options: [
      {
        label: "Generic",
        value: "generic",
      },
      {
        label: "Holiday",
        value: "holiday",
      },
    ],
  },
  {
    name: ["startDate", "endDate"],
    component: "range_picker",
    label: "Date",
  },
  {
    name: "description",
    label: "Description",
    component: "textarea",
  },
];

export const CreateEventDialog: FunctionComponent<Props> = ({
  open,
  onClose,
}) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(createEvent, {
    onSuccess: () => {
      // Improvement: Optimistic UI
      queryClient.invalidateQueries("events");
    },
  });
  const handleClose = (props: FormRenderProps) => () => {
    props.form.reset();
    onClose();
  };

  const handleSubmit = async (
    values: any,
    form: FormApi<any, Partial<any>>
  ) => {
    const event = {
      ...values,
      // Following lines are there to not make everything crash because field level validation is not implemented
      startDate: values?.startDate?.toString() || new Date().toString(),
      endDate: values?.endDate?.toString() || new Date().toString(),
    };
    await mutation.mutateAsync(event);
    form.reset();
    onClose();
  };

  return (
    <Form onSubmit={handleSubmit}>
      {(props) => (
        <Modal
          title="Create new event"
          visible={open}
          onCancel={handleClose(props)}
          onOk={handleClose(props)}
          footer={[
            <Button
              form="create-event"
              key="submit"
              htmlType="submit"
              type="primary"
              loading={mutation.isLoading}
            >
              Create event
            </Button>,
          ]}
        >
          <form id="create-event" onSubmit={props.handleSubmit}>
            <AutoForm fields={schema} />
          </form>
        </Modal>
      )}
    </Form>
  );
};

CreateEventDialog.displayName = "CreateEventDialog";
