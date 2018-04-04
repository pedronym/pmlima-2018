module.exports = {
    "env": {
        "node": true,
        "browser": true,
        "es6": true
    },
    "globals": {
      "graphql": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
      "indent": [
          "error",
          2
      ],
      "linebreak-style": [
          "error",
          "unix"
      ],
      "quotes": [
          "error",
          "single"
      ],
      "semi": [
          "error",
          "always"
      ],
      "eqeqeq": [
        "error", "always"
      ],
      "space-before-function-paren": [
        "error", "never"
      ],
      "no-var": "error",
      "react/prop-types": 0
    }
};