import { CollectionConfig } from "payload/types";

export const Test: CollectionConfig = {
  slug: "test",
  fields: [
    {
      name: "title",
      type: "text",
      required: false,
    },
  ],
};
