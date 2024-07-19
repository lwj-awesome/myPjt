import React, { useState } from "react";
import { CardTypes, CheckBox, CheckBoxTypes } from "@mypjt/components";
import { Meta, StoryObj } from "@storybook/react";
import { commonColor } from "../constant/commonVar";

const meta: Meta<CheckBoxTypes.CheckboxProps> = {
  title: "CheckBox",
  component: CheckBox,
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
    label: "유니랑다시만들기",
    value: "",
    checkColor: "yellow",
  },
  argTypes: {
    label: {
      control: "text",
      description: "checkbox의 라벨입니다.",
      type: "string",
    },
    value: {
      description: "checkbox의 value 값입니다.",
      type: "number | string",
    },
    checkColor: {
      control: "select",
      options: commonColor,
      description: "checkbox의 color를 설정합니다. 지정된 color를 사용합니다.",
      type: "commonType.ColorType",
    },
    isReadOnly: {
      description: "checkbox의 ReadOnly를 설정합니다.",
      type: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<CardTypes.CardProps>;

export const docs: Story = {};

export const CheckboxExample = () => {
  const tesData = [
    {
      label: "one",
      value: "123",
    },
    {
      label: "1",
      value: "234",
    },
    {
      label: "2",
      value: "345",
    },
  ];
  const [t, setT] = useState<string[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    const test = e.currentTarget.value;
    setT([test]);
  };
  console.log(t);
  const tt = ["234"];
  return (
    <div>
      {tesData.map((item) => (
        <>
          <CheckBox
            isReadOnly={false}
            value={item.value}
            label={item.label}
            onChange={onChange}
          />
        </>
      ))}
    </div>
  );
};
