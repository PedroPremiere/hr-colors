import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
  core: {
    builder: "@storybook/builder-webpack5",
  },

  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [path.resolve(__dirname, ".."), "node_modules"];

    config.resolve.fallback.fs = false;

    config.resolve.alias = {
      ...config.resolve.alias,
      "@/components": path.resolve(__dirname, "../src/components"),
      "@/Atoms": path.resolve(__dirname, "../src/components/Atoms"),
      "@/Molecules": path.resolve(__dirname, "../src/components/Molecules"),
      "@/Organisms": path.resolve(__dirname, "../src/components/Organisms"),
      "@/http": path.resolve(__dirname, "../src/http"),
      "@/config": path.resolve(__dirname, "../src/config"),
    };

    return config;
  },
};
export default config;
