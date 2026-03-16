module.exports = {
  extends: ["@commitlint/config-conventional"],
  plugins: [
    {
      rules: {
        "type-required": ({ header }) => {
          const hasType = /^[a-z]+:/.test(header);

          if (!hasType) {
            return [
              false,
              "Your commit must follow: type: message (example: feat: add login page)",
            ];
          }

          return [true];
        },
      },
    },
  ],
  rules: {
    "type-required": [2, "always"],
    "type-empty": [0],
    "subject-empty": [0],
  },
};
