# axe-core

[![Join the chat at https://gitter.im/dequelabs/axe-core](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/dequelabs/axe-core?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Version](https://img.shields.io/npm/v/axe-core.svg)](https://www.npmjs.com/package/axe-core)
[![Bower](https://img.shields.io/bower/v/axe-core.svg)](http://bower.io/search)
[![License](https://img.shields.io/npm/l/axe-core.svg)](LICENSE)
[![Build Status](https://travis-ci.org/dequelabs/axe-core.svg?branch=master)](https://travis-ci.org/dequelabs/axe-core)
[![Dependency Status](https://gemnasium.com/dequelabs/axe-core.svg)](https://gemnasium.com/dequelabs/axe-core)
[![Codacy Badge](https://www.codacy.com/project/badge/c2d7835387dd41b3a77eafd439fba559)](https://www.codacy.com/app/dsturley/axe-core)

The Accessibility Engine for automated testing of HTML-based user interfaces. Drop the aXe on your accessibility defects!

## Philosophy

We believe that automated testing has an important role to play in achieving digital equality and that in order to do that, it must achieve mainstream adoption by professional web developers. That means that the tests must inspire trust, must be fast, must work everywhere and must be available everywhere.

## Manifesto

1. Automated accessibility testing rules must have a zero false positive rate
2. Automated accessibility testing rules must be lightweight and fast
3. Automated accessibility testing rules must work in all modern browsers
4. Automated accessibility testing rules must, themselves, be tested automatically

## The sharp edge of the aXe

aXe is the third generation of accessibility rules for HTML-based user interfaces that differentiates itself from other approaches and rules repositories in the following ways:

1. It works on all modern browsers,
2. It supports in-memory fixtures, static fixtures, integration tests and iframes of infinite depth
3. It has zero false positives (bugs notwithstanding)
4. It is open source
5. It is actively supported by a major accessibility vendor
6. It is designed to work with whatever tools, frameworks, libraries and environments you have today
7. It is designed to be integrated into your existing functional/acceptance automated tests
8. It automatically determines which rules to run based on the evaluation context
9. It is highly configurable

## Getting started

First download the package:

```
npm install axe-core --save-dev
```

Now include the javascript file in each of your iframes in you fixtures or test systems:

```html
<script src="node_modules/axe-core/axe.min.js" ></script>
```

Now insert calls at each point in your tests where a new piece of UI becomes visible or exposed:

```
axe.a11yCheck(document, function (results) {
    ok(results.violations.length === 0, 'Should be no accessibility issues');
    // complete the async call
    ...
});
```
## Supported Browsers

The [aXe API](doc/API.md) supports the following browsers:

* Internet Explorer v9, 10, 11
* Google Chrome v42 and above
* Mozilla Firefox v38 and above
* Apple Safari v7 and above

## The Accessibility Rules

The complete list of rules run by axe-core can be found in [doc/rule-descriptions.md](./doc/rule-descriptions.md).

## Contents of the API Package

The [aXe API](doc/API.md) package consists of:

* `axe.js` - the javascript file that should be included in your web site under test (API)
* `axe.min.js` - a minified version of the above file


## Contributing

Read the [documentation on the architecture](./doc/developer-guide.md)

Read the [documentation on contributing](CONTRIBUTING.md)

## Projects using axe-core

[List of projects using axe-core](doc/projects.md)
