import run from "@mypjt/esbuild-config";
import pkg from "./package.json" assert { type: "json" };

run({
  pkg,
});
