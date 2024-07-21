import React, { useState } from "react";
import { Select, SelectTypes } from "@mypjt/components";
import { Meta, StoryObj } from "@storybook/react";

const selectData = [
  {
    key: 1,
    value: "123",
    label: "가나다라",
  },
  {
    key: 2,
    value: "345",
    label: "마바사",
  },
];

const meta: Meta<SelectTypes.SelectProps> = {
  title: "Form/Select",
  component: Select,
  parameters: {
    layout: "centered",

    docs: {
      source: {
        type: "code", // 소스 코드 표시를 설정
      },
    },
  },
  tags: ["autodocs"],
  args: {
    placeholder: "select",
    dataSource: selectData,
  },
  argTypes: {
    value: {
      description: "select의 value입니다.",
    },
    onClick: {
      description: "select의 onClick event입니다.",
    },
  },
};

export default meta;

type Story = StoryObj<SelectTypes.SelectProps>;

export const docs: Story = {};

export const SelectExample = () => {
  const [test, setTest] = useState<string | number>("");
  const onClick = (va: string | number) => {
    setTest(va);
  };
  return (
    <Select
      value={test}
      placeholder={"placeholder"}
      onClick={onClick}
      dataSource={selectData}
    />
  );
};
