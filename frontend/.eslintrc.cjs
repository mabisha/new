module.exports = {
  root: true,
  env: {
    browser: true, 
    es2020: true,
    node: true, // Added for Node.js environment recognition
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    // Add this if you're using TypeScript
    // "plugin:@typescript-eslint/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { 
    ecmaVersion: "latest", 
    sourceType: "module",
    // Use this parser if you have installed it and are using JSX or TypeScript
    // parser: "@babel/eslint-parser" or "@typescript-eslint/parser"
  },
  settings: { 
    react: { version: "18.2" }
  },
  plugins: [
    "react-refresh",
    // Add TypeScript plugin if applicable
    // "@typescript-eslint"
  ],
  rules: {
    "react/prop-types": "off",
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
