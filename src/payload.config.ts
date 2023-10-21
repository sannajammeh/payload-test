import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { viteBundler } from "@payloadcms/bundler-vite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload/config";

import Users from "./collections/Users";
import { Test } from "./collections/Test";

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: viteBundler(),
  },
  editor: lexicalEditor({}),
  collections: [Users, Test],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
    connectOptions: {
      dbName: "zio",
      appName: "zio",
    },
  }),
  localization: {
    locales: ["en", "no"],
    defaultLocale: "en",
  },
});
