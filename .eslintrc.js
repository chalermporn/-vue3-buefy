module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    'vue/html-indent': 'error',
    'vue/no-multi-spaces': 'error',
    'vue/v-bind-style': 'error',
    'vue/v-on-style': 'error',
    'vue/html-quotes': 'error',
    'vue/this-in-template': 'error',
    'vue/no-use-v-if-with-v-for': 'error',
    'handle-callback-err': 'off'
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
