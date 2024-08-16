const path = require('path');

/**
 * 0 = off
 * 1 = warn
 * 2 = error
 */
const config = {
    parser: '@typescript-eslint/parser',
    extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks', 'prettier', 'plugin:jsx-a11y/strict'],
    overrides: [
        {
            files: ['src/**/*.ts', '*.tsx'],
            extends: ['plugin:@typescript-eslint/recommended'],
            parserOptions: {
                project: path.join(__dirname, './tsconfig.json'),
            },
            rules: {
                '@typescript-eslint/explicit-function-return-type': 0,
                '@typescript-eslint/no-use-before-define': 0, // should implement this later
                '@typescript-eslint/no-empty-interface': 0, // good warning, but generated types are wack
                '@typescript-eslint/ban-ts-comment': 1,
                '@typescript-eslint/naming-convention': 1, // should implement
                '@typescript-eslint/no-shadow': 1,
                '@typescript-eslint/no-unused-expressions': 1,
                '@typescript-eslint/no-unused-vars': 0,
                '@typescript-eslint/no-throw-literal': 0,
            },
        },
    ],
    plugins: ['prettier', 'unused-imports'],
    // for now we ignore a couple of areas in our code
    // this is to focus our efforts on moving forwar with the project
    // eventually, we should fix all linting errors
    ignorePatterns: ['node_modules', 'EVRY_PINCrypto-2.0.6.js', '**/validation'],
    rules: {
        'import/no-extraneous-dependencies': 0, // We disable this to allow dev dependencies in storybook
        'jsx-a11y/anchor-is-valid': 0,
        'react/jsx-uses-react': 0,
        'react/react-in-jsx-scope': 0,
        'linebreak-style': 0,
        'react/function-component-definition': 0,
        'react/jsx-props-no-spreading': 0,
        'react/require-default-props': 0, // might want to implement later
        'arrow-parens': ['error', 'as-needed'],
        'import/prefer-default-export': 0, // we might want to implement this later
        'no-useless-escape': 0, // should implement, but need a bit refactoring and testing
        'react/destructuring-assignment': 0, // should implement
        'react/no-array-index-key': 1,
        'react/jsx-no-useless-fragment': 0, // should look into, but now its buggy with maps
        'react-hooks/exhaustive-deps': 1, // we should REALLY use this
        'prefer-regex-literals': 0,
        'consistent-return': 0, // should probably implement
        'no-nested-ternary': 1,
        'no-plusplus': 0,
        'no-promise-executor-return': 0,
        'no-unused-vars': 0,
        'prefer-promise-reject-errors': 0,
        'prefer-destructuring': 1,
        'no-throw-literal': 0,
        'import/no-cycle': 1,
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            1,
            {
                vars: 'all',
            },
        ],
        'max-len': [
            1,
            {
                code: 120,
                tabWidth: 4,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],

        'import/order': [
            1,
            {
                groups: ['external', 'internal'],
                pathGroups: [
                    {
                        pattern: 'react+(|-dom|-router|-router-dom|-i18next)',
                        group: 'external',
                        position: 'before',
                    },
                    {
                        pattern: 'pages/**',
                        group: 'internal',
                        position: 'before',
                    },
                    {
                        pattern: 'types/**',
                        group: 'internal',
                        position: 'before',
                    },
                    {
                        pattern: 'queries/**',
                        group: 'internal',
                        position: 'before',
                    },
                    {
                        pattern: 'routes/**|routes',
                        group: 'internal',
                        position: 'before',
                    },
                    {
                        pattern: 'components/**',
                        group: 'internal',
                        position: 'after',
                    },
                    {
                        pattern: 'utils/**',
                        group: 'internal',
                        position: 'after',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'never',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
    },
};

module.exports = config;
