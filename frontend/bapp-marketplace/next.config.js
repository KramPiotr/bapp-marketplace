/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
// await import("./src/env.js");

import { initCanisterIds } from "./dfx.webpack.config.cjs";
initCanisterIds();

/** @type {import("next").NextConfig} */
const config = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Plugin

    const EnvPlugin = new webpack.EnvironmentPlugin({
      DFX_NETWORK: "local",
    });
    config.plugins.push(EnvPlugin);

    // Important: return the modified config
    return config;
  },
  // images: {
  //   domains: ["via.placeholder.com"],
  // },
  // webpack: (config, context) => {
  //   if (config.plugins) {
  //     config.plugins.push(
  //       new context.webpack.IgnorePlugin({
  //         resourceRegExp: /^(lokijs|pino-pretty|encoding)$/,
  //       }),
  //     );
  //   }
  //   return config;
  // },
  // distDir: "out",
  output: "export",
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default config;
