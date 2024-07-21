import React, { useState } from "react";
import { Input, InputTypes } from "@mypjt/components";
import { Meta, StoryObj } from "@storybook/react";
import { commonSize } from "../constant/commonVar";
const meta: Meta<InputTypes.InputProps> = {
  title: "Form/Input",
  component: Input,
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
    isRound: false,
    isDanger: false,
    isReadOnly: false,
    size: "lg",
  },
  argTypes: {
    size: {
      control: "radio",
      options: commonSize,
      description: "input의 사이즈를 설정합니다. 정해진 사이즈를 사용합니다.",
      type: "CommonType.CommonSizeType",
    },
    isDanger: {
      description: "input의 validation 체크 후 ui 변경을 합니다",
      type: "boolean",
    },
    isReadOnly: {
      description: "input의 ReadOnly를 설정합니다.",
      type: "boolean",
    },
    isRound: {
      description: "input의 border 스타일을 정합니다.",
      type: "boolean",
    },
    props: {
      description: "HTMLAttributes<HTMLInputElement>이 사용가능합니다.",
    },
  },
};

export default meta;

type Story = StoryObj<InputTypes.InputProps>;

export const docs: Story = {};

export const InputExample = () => {
  const [inputState, setInputState] = useState<string>("");
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(e.currentTarget.value);
  };

  console.log(inputState);
  return (
    <div>
      <Input size="lg" onChange={onChangeInput} value={inputState} />
    </div>
  );
};
