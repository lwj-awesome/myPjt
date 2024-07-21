import React from "react";
import { Table, TableTypes } from "@mypjt/components";
import { Meta, StoryFn } from "@storybook/react";

const tableData: TableTypes.DataProps[] = [
  {
    no: 0,
    groupId: 123,
    groupName: "그룹 명 입니다wwd.",
    create: true,
  },
  {
    no: 0,
    groupId: 456,
    groupName: "그룹 명 입니다.",
    create: true,
  },
  {
    no: 0,
    groupId: 789,
    groupName: "그룹 명 입니다.",
    create: true,
  },
  {
    no: 0,
    groupId: 101112,
    groupName: "그룹 명 입니다.",
    create: true,
  },
];

const column: TableTypes.ColumnItemProps[] = [
  { key: "no", value: "N12o", colWidth: "1" },
  { key: "groupId", value: "그룹 ID", colWidth: "1" },
  { key: "groupName", value: "그룹 명", colWidth: "1" },
  { key: "create", value: "Boolean", colWidth: "1" },
];

const meta: Meta<TableTypes.TableProps> = {
  title: "Date Display/Table",
  component: Table,
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
    data: tableData,
    column: column,
  },
  argTypes: {
    data: {
      description: "Table의 데이터 입니다 정해진 타입의 배열을 넣습니다.",
      type: "TableTypes.DataProps[]",
    },
    column: {
      description: "Table의 컬럼 입니다. 정해진 타입의 배열을 넣습니다.",
      type: "TableTypes.ColumnItemProps[]",
    },
  },
};

export default meta;

export const docs: StoryFn = (args: TableTypes.TableProps) => {
  return <Table data={tableData} columns={column} />;
};
