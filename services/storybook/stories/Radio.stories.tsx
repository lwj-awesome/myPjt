import React, { useState } from "react";
import { Radio, RadioTypes } from "@mypjt/components";
import { Meta, StoryObj } from "@storybook/react";
import { commonColor } from "../constant/commonVar";

const meta: Meta<RadioTypes.RadioProps> = {
  title: "Form/Radio",
  component: Radio,
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
    color: "blue",
    value: "Radio Label",
    isReadOnly: false,
    text: "Radio",
  },
  argTypes: {
    color: {
      control: "select",
      options: commonColor,
      description: "radio의 색상을 설정합니다. 정해진 color를 사용합니다.",
      type: "CommonTypes.ColorType",
    },
    text: {
      control: "text",
      description: "radio에 표시할 텍스트를 설정합니다.",
    },
    isReadOnly: {
      description: "radio의 readOnly를 설정합니다.",
      type: "boolean",
    },
    value: {
      description: "radio의 value입니다.",
    },
  },
};

export default meta;

type Story = StoryObj<RadioTypes.RadioProps>;

export const docs: Story = {};

export const RadioExample = () => {
  const testRadiodata = [
    {
      text: "Radio-1",
      value: "Radio-1",
      isReadOnly: true,
    },
    {
      text: "Radio-2",
      value: "Radio-2",
      isReadOnly: false,
    },
    {
      text: "Radio-3",
      value: "Radio-3",
      isReadOnly: false,
    },
  ];
  const [radioValue, setRadioValue] = useState("");
  const onChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    console.log("ㅁㅈㅇㅈㅁ");
  };
  return (
    <>
      {testRadiodata.map((item) => (
        <div key={item.value}>
          <Radio
            value={item.value}
            text={item.text}
            isReadOnly={item.isReadOnly}
            color="purple"
            onChange={onChangeRadio}
          />
        </div>
      ))}
    </>
  );
};
