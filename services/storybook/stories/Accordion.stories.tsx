import React from "react";
import { Accordion, AccordionTypes, Badge } from "@mypjt/components";
import { Meta, StoryObj } from "@storybook/react";

const accordionContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const meta: Meta<AccordionTypes.AccordionProps> = {
  title: "Accordion",
  component: Accordion,
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
    title: "Accordion",
    content: accordionContent,
    width: 500,
  },
  argTypes: {
    title: {
      control: "text",
      description: "Accordion에 표시할 텍스트를 설정합니다.",
    },
    content: {
      control: "text",
      description:
        "Accordion에 들어갈 컨텐트를 설정합니다. (ReactNode도 가능합니다.)",
      type: "ReactNode",
    },
    width: {
      control: "text",
      description: "Accordion의 크기를 설정합니다. 기본 값은 500입니다.",
      type: "number",
    },
  },
};

export default meta;

type Story = StoryObj<AccordionTypes.AccordionProps>;

export const docs: Story = {};

export const withReactNode = () => {
  const withNode = (
    <div>
      <h1>HI!</h1>
      <Badge color="blue" mode="subtitle" text="widhNode!" />
    </div>
  );
  return (
    <>
      <Accordion title="With ReactNode" content={withNode} />
    </>
  );
};
