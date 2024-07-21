import React, { useState } from "react";
import { Switch, SwitchTypes } from "@mypjt/components";
import { Meta, StoryObj } from "@storybook/react";
import {
  commonColor,
  commonLayoutMode,
  commonSize,
} from "../constant/commonVar";

const meta: Meta<SwitchTypes.SwitchProps> = {
  title: "Form/Switch",
  component: Switch,
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
    size: "sm",
    color: "blue",
    isOn: true,
    isReadOnly: false,
  },
  argTypes: {
    color: {
      control: "select",
      options: commonColor,
      description: "switch의 색상을 설정합니다. 정해진 color를 사용합니다.",
      type: "CommonTypes.ColorType",
    },
    size: {
      control: "radio",
      options: commonSize.filter((a) => a !== "xs"),
      description: "Tag의 크기를 설정합니다. 정해진 size를 사용합니다.",
      type: "SwitchTypes.excludeXsSizeType",
    },
    isOn: {
      description: "switch를 on, off를 설정합니다 (useState를 활용합니다.)",
      types: "boolean",
    },
    isReadOnly: {
      description: "switch를 readOnly를 설정합니다.",
      types: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<SwitchTypes.SwitchProps>;

export const docs: Story = {};

export const SwitchExample = () => {
  const [isOn, setIsOn] = useState<boolean>(false);
  const onClickSwitch = () => {
    setIsOn((prev) => !prev);
  };
  return (
    <Switch size="lg" color="blue" isOn={isOn} onClickSwitch={onClickSwitch} />
  );
};
