import js from "@eslint/js";
import perfectionist from "eslint-plugin-perfectionist"
import prettier from "eslint-plugin-prettier/recommended";
import tseslint from "typescript-eslint";

export const base = tseslint.config(
  js.configs.all,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    rules: {
      "no-console": 0,
      "sort-imports": 0,
      "one-var": 0
    }
  },
  {
    ...perfectionist.configs["recommended-alphabetical"],
    rules: {
      ...perfectionist.configs["recommended-alphabetical"].rules,
      "perfectionist/sort-imports": [
        "error",
        {
          customGroups: {
            value: {
              builtin: "node:*",
            },
          },
          environment: "node",
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          ignoreCase: true,
          internalPattern: ["@/**"],
          newlinesBetween: "always",
          order: "asc",
          type: "alphabetical",
        },
      ],
    },
  },
  {
    ...prettier,
    rules: {
      ...prettier.rules,
      "prettier/prettier": [
        "error",
        {
          arrowParens: "always",
          bracketSameLine: true ,
          bracketSpacing: true,
          endOfLine: "auto",
          htmlWhitespaceSensitivity: "css",
          insertPragma: false,
          jsxSingleQuote: true,
          printWidth: 80,
          proseWrap: "preserve",
          quoteProps: "as-needed",
          requirePragma: false,
          semi: false,
          singleAttributePerLine: true,
          singleQuote: false,
          tabWidth: 2,
          trailingComma: "es5",
        },
      ],
    },
  }
)