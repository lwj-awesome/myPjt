import React from "react";
import { Modal, ModalTypes } from "@mypjt/components";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<ModalTypes.ModalProps> = {
  title: "Overlay/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        type: "code",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    confirmButtonTitle: "OK",
    cancelButtonTitle: "Cancel",
    content: "Are you sure? You can’t undo this action afterwards.",
    title: "Modal title",
  },
  argTypes: {
    title: {
      description: "Modal의 제목을 정합니다.",
      type: "string",
    },
    content: {
      description: "Modal 내부에 들어갈 컨텐츠를 설정합니다.",
      type: "React.ReactNode[]",
    },
    cancelButtonTitle: {
      description: "Modal 취소 버튼 이름을 정합니다.",
      type: "TableTypes.ColumnItemProps[]",
    },
    confirmButtonTitle: {
      description: "Modal 확인 버튼 이름을 정합니다.",
      type: "TableTypes.ColumnItemProps[]",
    },
    cancelButtonClick: {
      description: "Modal 취소 버튼 클릭 시의 이벤트입니다.",
      type: "() => void;",
    },
    confirmButtonClick: {
      description: "Modal 확인 버튼 클릭 시의 이벤트입니다.",
      type: "() => void;",
    },
  },
};

export default meta;

type Story = StoryObj<ModalTypes.ModalProps>;
export const docs: Story = {};

export const ModalExample = () => {
  const onConfirm = () => {
    console.log("confirm");
  };
  const onCancel = () => {
    console.log("cancel");
  };

  return (
    <>
      <Modal
        cancelButtonClick={onCancel}
        confirmButtonClick={onConfirm}
        content={"MODAL!"}
        title="EXAMPLE MODAL"
        confirmButtonTitle="OK"
        cancelButtonTitle="Cancel"
      />
    </>
  );
};
