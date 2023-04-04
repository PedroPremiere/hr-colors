module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:import/recommended',
        'plugin:@typescript-eslint/recommended'
    ],

    parser: '@typescript-eslint/parser',

    plugins: ['@typescript-eslint'],

    root: true,

    rules: {
        'import/order': [
            'error',
            {
                groups: [['builtin', 'external'], ['index', 'internal', 'sibling', 'parent'], ['type']],
                'newlines-between': 'always'
            }
        ]
    },

    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts']
        },
        'import/resolver': {
            typescript: {}
        }
    }
};
