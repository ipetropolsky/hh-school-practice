export default [
    {
        ignores: ['dist/**/*'],
    },
    {
        files: ['js/**/*.js'],
        rules: {
            'no-const-assign': 'error',
            'no-unused-vars': 'warn',
            'no-undef': 'error',
        },
        languageOptions: {
            globals: {
                document: true,
                console: true,
                window: true,
                require: true,
                module: true,
                exports: true,
            },
        },
    },
];
