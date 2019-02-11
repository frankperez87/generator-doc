# Website Starter Template Generator

Meet Doc, your web development assistant. He'll help you generate project templates based on Vue.js, Bootstrap, Tailwind, and more...

> Note: This is a work in progress, and more templates will be added in the future

## Currently Supported

- Parcel + Vue.js + Bootstrap + SASS
- Parcel + Vue.js + Tailwind + SASS

> Both templates have Vue router configured out of the box in order to simplify page creation. 

## Installation

To get started you'll need to install [yeoman's](https://yeoman.io/learning/index.html) `yo` command as follows.

```bash
npm install -g yo
```

> This will install a global command called `yo` which you will use to kickstart your website templates.

Then you'll want to install the generator, which will assist you in bootstraping your website projects.

```bash
npm install -g generator-doc
```

## Usage

To use doc, you'll want to first create a new directory on your computer. 

```bash
mkdir example
```

> Change example with whatever directory name you'd like to create.

Next change into the newly created directory and run the command as such: 

```bash
yo doc
```

> You'll then be prompted for information on the project you'd like to scaffold and follow the instructions on the screen.

Lastly you'll find the following commands that you can run out of the box:

- `npm run parcel:serve`
- `npm run parcel:watch`
- `npm run parcel:build`

## Command Overview

### `parcel:serve`

This command creates a local development server while also setting up hot reloading while you work on your website.

### `parcel:watch`

If you're using your own development server to display your website, you can use this command to simply watch for file changes and configure hot reloading.

### `parcel:build`

When you're ready for production, you'll want to run this command to generate the minified output.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Credits

- [Frank Perez](https://github.com/frankperez87)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

