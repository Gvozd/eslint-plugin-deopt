import * as rule from '../../src/rules/uncached-parent-scope-ident';
import {RuleTester} from 'eslint';
const ruleTester = new RuleTester();

ruleTester.run('uncached-parent-scope-ident', rule, {
    valid: [
        `
            var foo = 123;
            function bar() {
                var baz = foo + 1;
            }
        `,
        `
            var foo = 123;
            function bar() {
                var baz = foo + 1;
                foo = 456;
                baz = foo + 1;
            }
        `
        // {
        //     code: `
        //         var foo = 123;
        //         function bar() {
        //             var baz = foo + 1
        //             ({foo} = {foo:456});
        //             baz = foo + 1;
        //         }
        //     `,
        //     parserOptions: {
        //         ecmaVersion: 6
        //     }
        // },
        // {
        //     code: `
        //         var foo = 123;
        //         function bar() {
        //             var baz = foo + 1;
        //             outerFunc();
        //             baz = foo + 1;
        //         }
        //     `,
        //     parserOptions: {
        //         sourceType: 'script'
        //     }
        // }

    ],
    invalid: [
        {
            code: `
                var foo = 123;
                function bar() {
                    var baz = foo + 1;
                    baz = foo + 1;
                }
            `,
            errors: [
                'Outer variable not changed, and may cached.',
                'Outer variable not changed, and may cached.'
            ]
        },
        {
            code: `
                import {outerFunc} from './outer-module';
                var foo = 123;
                function bar() {
                    var baz = foo + 1;
                    outerFunc();
                    baz = foo + 1;
                }
            `,
            parserOptions: {
                ecmaVersion: 6,
                sourceType: 'module'
            },
            errors: [
                'Outer variable not changed, and may cached.',
                'Outer variable not changed, and may cached.'
            ]
        }
    ]
});
