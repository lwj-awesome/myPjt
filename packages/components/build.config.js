import run from "@mypjt/esbuild-config";
import pkg from "./package.json" assert { type: "json" };

run({
  pkg,
  config: {
    watch: {
      onRebuild(error, result) {
        if (error) console.error('watch build failed:', error);
        else console.log('watch build succeeded:', result);
      },
    },
  }
});
