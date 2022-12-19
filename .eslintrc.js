module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:functional/external-recommended",
    "plugin:functional/recommended",
    "plugin:functional/stylistic",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint", "functional"],
  rules: {
    "functional/no-conditional-statement": [
      "error",
      { allowReturningBranches: "ifExhaustive" },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["*.test.tsx", "*.test.ts"],
      rules: {
        "functional/functional-parameters": "off",
        "functional/no-return-void": "off",
        "functional/no-expression-statement": "off",
      },
    },
  ],
};
