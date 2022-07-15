import { match } from "buffs";
import fs from "fs";
import path from "path";
import { Configuration, EntryObject } from "webpack";

const entryFiles = match(fs, __dirname, {
  includePatterns: ["packages/*/index.ts"],
}).map((name) => path.resolve(name));

const entry: EntryObject = Object.fromEntries(
  entryFiles.map((name) => [path.basename(path.dirname(name)), name])
);

console.log(entry);

module.exports = () => {
  const config: Configuration = {
    entry,
    output: {
      path: path.resolve("packages"),
      filename: "./[name]/index.js",
      library: "[name]",
      libraryTarget: "umd",
      globalObject: "this",
    },
    devtool: "source-map",
    resolve: { extensions: [".ts", ".js"] },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "ts-loader",
              options: {
                compilerOptions: {
                  declaration: true,
                },
              },
            },
          ],
        },
      ],
    },
  };

  return config;
};
