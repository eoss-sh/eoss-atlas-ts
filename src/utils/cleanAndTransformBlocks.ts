import { v4 as uuid } from "uuid";

export const cleanAndTransformBlocks = (blocksJSON: any) => {
  const blocks = JSON.parse(blocksJSON);

  const assignId = (block: any) => {
    block.forEach((item: any) => {
      item.id = uuid();
      if (item.innerBlocks?.length) {
        assignId(item.innerBlocks);
      }
    });
  };
  assignId(blocks);

  return blocks;
};
