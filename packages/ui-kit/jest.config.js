module.exports = {
    testEnvironment: "jsdom",
    testMatch: ['**/+(*.)+(spec).+(ts|js)?(x)'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        "^.+\\.scss$": 'jest-scss-transform'
    }
};