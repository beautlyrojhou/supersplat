import playcanvasConfig from '@playcanvas/eslint-config';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';

export default [
    ...playcanvasConfig,
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: tsParser,
            globals: {
                ...globals.browser,
                ...globals.serviceworker,
                BlobPart: 'readonly'
            }
        },
        plugins: {
            '@typescript-eslint': tsPlugin
        },
        settings: {
            'import/resolver': {
                typescript: {}
            }
        },
        rules: {
            ...tsPlugin.configs.recommended.rules,
            '@typescript-eslint/ban-ts-comment': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            'jsdoc/require-param': 'off',
            'jsdoc/require-param-type': 'off',
            'jsdoc/require-returns': 'off',
            'jsdoc/require-returns-type': 'off',
            'jsdoc/check-tag-names': 'off',
            'lines-between-class-members': 'off',
            'no-await-in-loop': 'off',
            'require-atomic-updates': 'off',
            // warn on console.log calls so I remember to remove debug logging before committing
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            // prefer const over let where possible
            'prefer-const': 'error',
            // disallow unused expressions to catch accidental typos
            'no-unused-expressions': ['warn', { allowShortCircuit: true, allowTernary: true }]
        }
    }, {
        files: ['**/*.mjs'],
        languageOptions: {
            globals: {
                ...globals.node
            }
        },
        rules: {
            'import/no-unresolved': 'off'
        }
    }
];
