module.exports = function (api) {
    api.cache(false);
    const config = {
        "presets": [
            [
                "@babel/preset-env", 
                {
                    "modules": "commonjs"
                },
                "@babel/preset-typescript"
            ]
        ]
    }
    return config;
}