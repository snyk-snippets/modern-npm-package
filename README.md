# modern-npm-package

An npm package for demonstration purposes using TypeScript to build for the ECMAScript Module format (i.e. ESM or ES Module). It can be used in Node.js and browser applications. Refer to the [Snyk blog post](https://snyk.co/uhYgM) for a full tutorial.

> If you're reading/coming from the Snyk blog post that discusses both ESM and CommonJS go to the [v2022-2024](https://github.com/snyk-snippets/modern-npm-package/tree/v2022-2024) branch

## Get Started

1. Run `npm install` in your terminal
1. Then run `npm run build`
1. Update the `package.json` file "name" field with your own package name. Example `@username/package-name`
1. Create an account with [npm](https://www.npmjs.com/signup) if you don't have one already. Also be sure to enable [two-factor authentication](https://docs.npmjs.com/configuring-two-factor-authentication)
1. Sign in to your npm account in your terminal with `npm login`
1. Run `npm publish --access=public` to publish your package

### Testing

1. Install developer dependencies using the following command in your terminal `npm i -D typescript @types/node`
1. Create a `tests` folder
1. Create an `index.test.ts` file in the `tests` folder
1. Write unit tests in the `index.test.ts` file to test the code in `index.ts`
1. Add a `"test"` property in the `package.json` file `"scripts"` object and give it a value of `"node --experimental-strip-types --test"`
1. Run `npm test` in your terminal from the root folder of the project
