import { initCanisterIds } from "./dfx.webpack.config"
initCanisterIds()

import { EnvironmentPlugin } from "webpack"

// Make DFX_NETWORK available to Web Browser with default "local" if DFX_NETWORK is undefined
const EnvPlugin = new EnvironmentPlugin({
  DFX_NETWORK: "local"
})

export function webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
  // Plugin
  config.plugins.push(EnvPlugin)

  // Important: return the modified config
  return config
}
export const output = "export"
export const images = {
  unoptimized: true
}
