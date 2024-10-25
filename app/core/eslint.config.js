import finalMessageCoreEslint from "@final-message/eslint-config/core.config.js"

export default [
  ...finalMessageCoreEslint,
  {
    ignores: ["dist"],
  },
]
