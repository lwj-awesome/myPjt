import esbuild from "esbuild";

const baseConfig = {
    entryPoints: ["src/index.js"],
    bundle: true,
    minify: true,
    sourcemap: true,
    outdir: "dist",
    target: "es2019",
};

Promise.all([
    esbuild.build({
        ...baseConfig,
        format: "esm",
    }),
    esbuild.build({
        ...baseConfig,
        format: "cjs",
        outExtension: {
            ".js": ".cjs",
        },
    }),
]).catch(() => {
    console.error("build error");
    process.exit(1);
});
