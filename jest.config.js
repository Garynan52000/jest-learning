module.exports = {
    "testEnvironment": "jsdom",
    "testURL": "http://localhost/",
    "transform": {
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.js?$": "babel-jest"
    },
    "testRegex": "\\.test\\.(jsx?|tsx?)$",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ]
};