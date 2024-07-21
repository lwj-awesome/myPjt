import React, { useState } from "react";
import { Tag, TagTypes } from "@mypjt/components";
import { Meta, StoryFn } from "@storybook/react";
import {
  commonColor,
  commonLayoutMode,
  commonSize,
} from "../constant/commonVar";

const meta: Meta<TagTypes.TagProps> = {
  title: "Date Display/Tag",
  component: Tag,
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
    text: "TAG",
    mode: "outline",
    size: "lg",
  },
  argTypes: {
    color: {
      control: "select",
      options: commonColor,
      description: "Tag의 색상을 설정합니다. 정해진 color를 사용합니다.",
      type: "CommonTypes.ColorType",
    },
    text: {
      control: "text",
      description: "Tag의 표시할 텍스트를 설정합니다.",
    },
    mode: {
      control: "radio",
      options: commonLayoutMode,
      description:
        "Tag의 테두리 모양을 설정합니다. 정해진 Layout을 사용합니다.",
      type: "CommonTypes.ThreeLayoutModeType",
    },
    size: {
      control: "radio",
      options: commonSize,
      description: "Tag의 크기를 설정합니다. 정해진 size를 사용합니다.",
      type: "CommonTypes.CommonSizeType",
    },
    onClickTagButton: {
      description: "Tag의 Click event 입니다. void입니다.",
    },
  },
};

export default meta;
export const docs: StoryFn = (args: TagTypes.TagProps) => {
  /** @desc tag에 onClick event를 줄 수 있습니다. */
  const [tagText, setTagText] = useState();
  const onClickTag = () => {
    setTagText("Click ! !");
  };
  return (
    <Tag {...args} text={tagText || "Tag"} onClickTagButton={onClickTag} />
  );
};
