module.exports = {
    "env": {
        "es6": true,
        "browser": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "ecmaFeatures": {
        "jsx": true
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
        "react/jsx-uses-vars": 1,
        "react/jsx-uses-react": 1,
        "react/react-in-jsx-scope": 1,
        "no-console": 0,
    }
};