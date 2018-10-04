
<!---    SSSSSSSSSSSSSSS TTTTTTTTTTTTTTTTTTTTTTT     OOOOOOOOO     PPPPPPPPPPPPPPPPP    !!!  --->
<!---  SS:::::::::::::::ST:::::::::::::::::::::T   OO:::::::::OO   P::::::::::::::::P  !!:!! --->
<!--- S:::::SSSSSS::::::ST:::::::::::::::::::::T OO:::::::::::::OO P::::::PPPPPP:::::P !:::! --->
<!--- S:::::S     SSSSSSST:::::TT:::::::TT:::::TO:::::::OOO:::::::OPP:::::P     P:::::P!:::! --->
<!--- S:::::S            TTTTTT  T:::::T  TTTTTTO::::::O   O::::::O  P::::P     P:::::P!:::! --->
<!--- S:::::S                    T:::::T        O:::::O     O:::::O  P::::P     P:::::P!:::! --->
<!---  S::::SSSS                 T:::::T        O:::::O     O:::::O  P::::PPPPPP:::::P !:::! --->
<!---   SS::::::SSSSS            T:::::T        O:::::O     O:::::O  P:::::::::::::PP  !:::! --->
<!---     SSS::::::::SS          T:::::T        O:::::O     O:::::O  P::::PPPPPPPPP    !:::! --->
<!---        SSSSSS::::S         T:::::T        O:::::O     O:::::O  P::::P            !:::! --->
<!---             S:::::S        T:::::T        O:::::O     O:::::O  P::::P            !!:!! --->
<!---             S:::::S        T:::::T        O::::::O   O::::::O  P::::P             !!!  ---> 
<!--- SSSSSSS     S:::::S      TT:::::::TT      O:::::::OOO:::::::OPP::::::PP                ---> 
<!--- S::::::SSSSSS:::::S      T:::::::::T       OO:::::::::::::OO P::::::::P           !!!  --->
<!--- S:::::::::::::::SS       T:::::::::T         OO:::::::::OO   P::::::::P          !!:!! --->
<!---  SSSSSSSSSSSSSSS         TTTTTTTTTTT           OOOOOOOOO     PPPPPPPPPP           !!!  --->
<!---                                                                                        ---> 
<!---            T H I S   R E A D M E . M D   F I L E   I S   G E N E R A T E D !           --->
<!---                                                                                        --->
<!---    IF YOU EDIT IT DIRECTLY YOUR CHANGES WILL BE WASHED AWAY THE NEXT TIME THIS FILE    --->
<!---            IS GENERATED. INSTEAD, CHANGE THE EJS TEMPLATE (/lib/template.md)           --->
<!---                                                                                        --->


# QScript
### Version `0.0.6`

[![Build Status](https://travis-ci.org/wmfs/qscript.svg?branch=master)](https://travis-ci.org/wmfs/qscript) [![CodeFactor](https://www.codefactor.io/repository/github/wmfs/qscript/badge)](https://www.codefactor.io/repository/github/wmfs/qscript) [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fwmfs%2Fqscript.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fwmfs%2Fqscript?ref=badge_shield) [![Known Vulnerabilities](https://snyk.io/test/github/wmfs/qscript/badge.svg?targetFile=package.json)](https://snyk.io/test/github/wmfs/qscript?targetFile=package.json) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/) [![Dependabot badge](https://img.shields.io/badge/Dependabot-active-brightgreen.svg)](https://dependabot.com/) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/wmfs/qscript/blob/master/CONTRIBUTING.md)

#### The goal of QScript is to provide a [JSON](https://tools.ietf.org/html/rfc7159)-based language to describe User Interfaces (especially those which form part of a digital service).

## Getting started

#### Get hands-on with QScript using the online [QScript Playpen](https://wmfs.github.io/qscript/)!

* For some introductory context around why we developed QScript, please see [Appendix A: QScript Motivation](#motivation).
* A [JSON Schema (Draft-07)](http://json-schema.org/) for QScript is available [here](https://raw.githubusercontent.com/wmfs/qscript/master/packages/qscript-schema/lib/schema.json).
* The QScript [Lerna](https://lernajs.io/) multi-package repository (developed in the open on [Github](https://github.com/wmfs/qscript)) provides several utilities to help work with the language. Please see [Appendix B: QScript Utilities](#utilities) for further information.

## <a name="toc"></a>Table of Contents

* [Structure of a View](#structure)
  * [Example: Simple View](#example)
* [Concepts](#concepts)
  * [Views](#view)
  * [Apps](#app)
  * [Widgets](#widget)
    * [Widget summary](#widget-summary)
  * [Sets](#set)
  * [Expressions](#expression)
* [Reference](#reference)
  * [Top-Level Properties](#top-level)
  * [Widget Properties](#properties)
  * [Widget Attributes](#attributes)
  * [Widget List](#list)
* [License (GPLv3)](#license)
* [Appendices](#appendices)
  * [Appendix A: QScript Motivation](#motivation)
  * [Appendix B: QScript Utilities](#utilities)

## <a name="structure"></a>Structure of a View

__In QScript, a _view_ is represented by a [JSON Object](https://tools.ietf.org/html/rfc7159#section-4]).__

### <a name="example"></a>Example: Simple View

__The content of a [_view_](#view) is specified by configuring one-or-more [_widgets_](#widget), which are represented by JSON objects.__

* In this example, a view is defined that contains two widgets, one that defines a suitable [`header`](#list-header) (with some text and an accompanying image),
followed by a second [`text`](#text-header)-widget for letting the user enter their name.

``` json
{
  "title": "Simple demo view!",
  "widgets": [
    {
      "type": "header",
      "attributes": {
        "heading": "Register!",
        "desc": "Let's get to know each other a bit better...",
        "wash": "black",
        "backgroundImage": "wmfs/happy-people.jpg",
        "backgroundImageAltText": "Beautiful people smiling around a laptop"
      }
    },
    {
      "id": "name",
      "type": "text",
      "attributes": {
        "heading": "Name",
        "placeholder": "e.g. Lucy Smith",
        "mandatory": true,
        "minCharacters": 1,
        "maxCharacters": 100,
        "help": "Enter your full name here"
      }
    }
  ]
}
```

## <a name="concepts"></a>Concepts

__QScript is built on a handful of key concepts...__

### <a name="view"></a>Views

The purpose of QScript is to define a user interface, referred to as a "__view__".

* In QScript, the term "view" refers to the "V" in [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller). Views can relate to traditional forms or used to simply display data to the user (like a dashboard or similar).
* With QScript it's possible to configure a view with structure, validation, conditional content, dynamic values and context-sensitive behaviours (e.g. operating differently with an internet connection as opposed to without).
* QScript definitions are naturally stored in `.json` files (typically one-file-per-view).
* In certain situations [YAML](https://en.wikipedia.org/wiki/YAML) (itself just a superset of JSON) may offer an interesting alternative to serialising QScript definitions (the [qscript-parser](https://github.com/wmfs/qscript/tree/master/packages/qscript-parser) utility supports both)..
* Please note that a [JSON Schema](http://json-schema.org/) is available [here](https://raw.githubusercontent.com/wmfs/qscript/master/packages/qscript-schema/lib/schema.json), which may be used to validate the basic integrity of QScript content.
* For more comprehensive QScript validation, please refer to the [qscript-schema](https://www.npmjs.com/package/qscript-schema) package.

### <a name="app"></a>Apps

Views defined in QScript may be rendered and executed by software.
In this document, such software is referred to an "__app__".

* Apps can be implemented in any frontend-framework, language or library.
* QScript does not impose any aesthetic or UI constraints onto apps which implement it.
* QScript content can be embedded inside apps with [GUI](https://en.wikipedia.org/wiki/Graphical_user_interface), [CLI](https://en.wikipedia.org/wiki/Graphical_user_interface) and even [Voice-User](https://en.wikipedia.org/wiki/Voice_user_interface) interfaces.
* Please note several utilities are available to help embed QScript into apps. Please see [Appendix B: QScript Utilities](#utilities) for further information.

### <a name="widget"></a>Widgets

Views are constructed from an ordered list of "__widgets__".

* To avoid overloading frontend-terms like 'component', QScript refers to each object in the `widgets` array as a __widget__.
* Consider a widget as an area of a view responsible for a particular task: either collecting a specific piece of information from a user or visualising some data.
* As such, widgets can be interactive ([`text`](#list-text), [`number`](#list-number), [`map`](#list-map) etc.) and non-interactive ([`heading`](#list-heading), [`stickyNote`](#list-stickyNote) etc.)
* The order that `Widget` objects appear within a view definition is important - representing the order users will encounter them.
* QScript is a delightful walled-garden, offering a fixed set of 32 pre-configured widgets. If you need another widget-type or an extra attribute... [pull requests are very welcome!](https://github.com/wmfs/QScript/blob/master/CONTRIBUTING.md) :blush:

__Ahead of the [Reference](#reference) section, here's a quick summary of the 32 widgets supported in QScript `0.0.6`:__

#### <a name="widget-summary"></a>Widget summary

| Widget Type      | Description |
| -----------      | ----------- |
| [`address`](#list-address) | Allows the user to _select_ a particular postal address from a provided list and store a unique reference to that property, such as a [UPRN](https://www.ordnancesurvey.co.uk/about/governance/policies/addressbase-uprn.html) or similar. |
| [`apiLookup`](#list-apiLookup) | Allows the user to select a specific value from an API endpoint |
| [`buttonList`](#list-buttonList) | A set of buttons that the user can interact with |
| [`checkboxList`](#list-checkboxList) | Offer a related set of checkboxes with accompanying labels for the user to switch on and off. |
| [`currency`](#list-currency) | Just like a `number` widget, but for specifically collecting a monetary value. |
| [`date`](#list-date) | Allows the user to provide a specific date - without a time portion. |
| [`dateTime`](#list-dateTime) | Collects a specific date and time from the user. |
| [`endSet`](#list-endSet) | Marks the end of a set of related widgets - see the [Sets](#set) section for more information. |
| [`endSubView`](#list-endSubView) | Marks the end of a sub-view - see the [Sets](#set) section for more information. |
| [`expandableNotice`](#list-expandableNotice) | Expandable Notice field. |
| [`fileUpload`](#list-fileUpload) | Allows the user to upload a file. |
| [`header`](#list-header) | A widget typically placed at the top of a view to describe its purpose. An optional background image makes this widget akin to a [Hero Unit](https://en.wikipedia.org/wiki/Hero_image) or [Jumbotron](https://getbootstrap.com/docs/4.0/components/jumbotron/). |
| [`heading`](#list-heading) | Use to displays a heading (with optional descriptive text). Not to be confused with [`header`](#list-header), the `heading` widget equates more to a `<h1></h1>` UI experience. |
| [`horizontalLine`](#list-horizontalLine) | Renders a horizontal line to help split things up (i.e. like a `</hr>`) |
| [`image`](#list-image) | Embeds a non-interactive image within the form. |
| [`map`](#list-map) | Displays a map to the user, and can optionally be configured to collect geo-spatial data (points, lines etc.) |
| [`number`](#list-number) | Like a `text` widget, but specifically for collecting numeric content. |
| [`propertyList`](#list-propertyList) | Displays a list of data provided in form of an array |
| [`questionnaire`](#list-questionnaire) | Offers the user a question with two or more possible responses on an appropriate scale. |
| [`radio`](#list-radio) | Allows the user to select a value from a set of related options that are rendered in a [Radio Button](https://en.wikipedia.org/wiki/Radio_button) style. |
| [`richtext`](#list-richtext) | Offers the user a text editor with functionality to format text. |
| [`select`](#list-select) | Allows the user to select a value from a set of options, which should be rendered in an [HTML Select](https://en.wikipedia.org/wiki/HTML_element) style. |
| [`set`](#list-set) | Marks the start of a set of related widgets - see the [Sets](#set) section for more information. |
| [`signature`](#list-signature) | Allow the collection of a handwritten signature |
| [`slider`](#list-slider) | For capturing a number along a specified range |
| [`stickyNote`](#list-stickyNote) | A panel for putting helpful text or other informative text |
| [`subView`](#list-subView) | Allows the user to enter a number of 'sub forms' (think order-lines or contact details etc.) |
| [`switch`](#list-switch) | Presents a on/off style switch to the user. |
| [`table`](#list-table) | Presents data in format of a table with specified columns. |
| [`text`](#list-text) | A bread-and-butter box for collecting textual information from the user. |
| [`textarea`](#list-textarea) | Collects simple multi-line text input from the user. |
| [`time`](#list-time) | Allows the user to provide a specific time (without being tied to a particular date) |


### <a name="set"></a>Sets

All the [widgets](#widget) that define a [view](#view)'s content are specified in a simple array.
This design helps align QScript with vertical-scrolling interfaces with very little friction.
To assist with navigation (especially around larger, more complex content) it might be useful to split a view into more manageable pieces.

* __In QScript,  _sets_ allow widgets to be grouped into related chunks.__

__Example JSON__

``` json
{
  "title": "Simple set demo!",
  "widgets": [
    {
      "type": "set",
      "attributes": {
        "tocTitle": "Profile"
      }
    },
    {
      "id": "name",
      "type": "text",
      "attributes": {
        "heading": "Name",
        "placeholder": "e.g. Lucy Smith",
        "mandatory": true,
        "minCharacters": 1,
        "maxCharacters": 100,
        "help": "Enter your full name here"
      }
    },
    {
      "type": "endSet"
    }
  ]
}
```

* In this example, we are declaring that a [`text`](#list-text) widget (with the id `name`) should be rendered within a set (which should appear in a Table of Contents with the heading "_Profile_").
* The beginning of each set is marked with a [`set`](#list-set) widget and is terminated with an [`endSet`](#list-endSet) widget (just like `<div>` and `</div>`).
* Nesting of sets is possible and sets are especially powerful when combined with dynamic [expressions](#expression) to conditionally show/hide content.
* Sets also enable apps to offer [progress tracking](https://www.smashingmagazine.com/2010/01/progress-trackers-in-web-design-examples-and-best-design-practices/) functionality.
* Multi-step "wizard" interfaces are also easily achieved via sets.
* The [`subView`](#list-subView) and [`endSubView`](#list-endSubView) widgets use exactly the same technique to define repeating-groups of widgets.

### <a name="expression"></a>Expressions

QScript uses __expressions__ to deliver dynamic content. Expressions are used to:

* Conditionally show/hide widgets depending on values as they change.
* Validate view content based on more complex business rules.
* Affect the contents of enumerated lists.
* Default dynamic values.
* Calculate running totals, real-time summaries etc.

Consider an expression to be something that could be evaluated in a Javascript `if (...) {}` statement.

```json
{
  "title": "Simple expression demo!",
  "widgets": [
    {
      "type": "header",
      "attributes": {
        "heading": "All done!",
        "desc": "We're all done here, we would really appreciate some feedback though!"
      }
    },
    {
      "id": "userWantsToGiveFeedback",
      "type": "switch",
      "attributes": {
        "default": false,
        "heading": "I would like to leave some feedback"
      }
    },
    {
      "id": "feedback",
      "showWhen": "data.userWantsToGiveFeedback === true",
      "type": "textarea",
      "attributes": {
        "heading": "Feedback",
        "desc": "How did you feel using our app?"
      }
    }
  ]
}
```

__In the example above we have three widgets:__

1. The first widget is a simple [`header`](#list-header).
2. The second widget is a simple boolean on/off [`switch`](#list-switch) (with the `id` of `userWantsToGiveFeedback`) which is by default set to `false`.
3. The third widget is a [`textarea`](#list-textbox) box (with the `id` of `feedback`) for collecting feedback from the user.

The `feedback` widget should only show if the `userWantsToGiveFeedback` switch is thrown on (i.e. `true`).

There are a few new things going on here.
Most types of widget (here the `switch` and `textarea` types) expect an app to read and write their values to an underlying `data` object (using their respective `id` values as keys).
It is also expected that any app implementing QScript should also make this `data` object available within a safe sandbox while evaluating expressions.

In the previous example we can see the `showWhen` attribute is being used on the `feedback` widget. The string value here is an _expression_, which will control the visibility of the widget (i.e. it should only be shown to the user when the expression evaluates to `true`).

#### <a name="sandbox"></a>Expression sandbox

Apps must ensure expressions are evaluated in a safe sandbox context. As such only certain objects may be referred to within an expression:

| Sandbox object | Description |
| -------------- | ----------- |
| `data`         | The current view data being stored. Should be kept fresh in real-time using UI binding techniques. |
| `env`          | Some environmental information, e.g. the user's name, if the app has access to an internet connection etc. |

##### __`env` object properties__

Apps are expected to provide the following details via an `env` object when evaluating expressions:

| Property         | Type      | Description |
| ---------------- | --------- | ----------- |
| `username`       | `string`  | Username of the the user currently using the form. |
| `startedOffline` | `boolean` | Indicates if the form was started online, or not. |

##  <a name="reference"></a>Reference

### <a name="top-level"></a>Top-Level Properties

The top-level object defining a view comprises of several properties:

| Property         | Type      | Description | Required?   |
| ---------------- | --------- | ----------- | ----------- |
| `title` | `string` | A short-as-possible label to associate with the form. | `false` |
| `version` | `string` | Denotes the current version of the form definition. This will be assigned by whatever tooling and processes conjure your forms. There is a strong preference that form version strings adhere to [Semantic Versioning](http://nodesource.com/blog/semver-a-primer/). | `false` |
| `widgets` | `array` | The main event, 1 or more `widget` objects which an app should render to produce a form. | `true` |
| `actions` | `array` | A view can have multiple actions for the user to interact with | `false` |



### <a name="properties"></a>Widget Properties

Each `widget` object comprise of some properties:

| Attribute Name | Type | Description |
| -------------- | -----| ----------- |
| `id` | `string` | A unique string which identifies the widget - often used to bind the value being collected by a widget to an underlying data model. Providing an `id` value is very often mandatory (depending on the type of widget involved). Regardless, it is good practice to always provide an `id` because it assists modification (or "_patching_") of form definitions. |
| `type` | `string` | A mandatory value denoting the type of widget being defined (e.g. `text`, `number` etc.) |
| `showWhen` | `string` | An expression, that when evaluating to `true` will cause the widget to appear (so the widget will not be shown if evaluated to be `false`). |
| `attributes` | `object` | A key/value object for configuring each widget - the content of which is dependent on the widget's `type`. |

### <a name="attributes"></a>Widget Attributes

QScript `0.0.6` supports a set of 29 common attributes from which widgets can be configured.
Not one widget-type requires all these attributes. Attributes are often optional and some widget-types don't need an `attributes` object at all.

| Attribute Name | Type | Description |
| -------------- | -----| ----------- |
| `actions` | `array` | An array of objects denoting a set of actions the user can take |
| `captureHistoric` | `boolean` | Can the date/time captured by the widget occur in the past (as starting when the for is submitted)? |
| `columns` | `array` | An array of objects denoting the columns to be shown on a table |
| `content` | `string` | Some read only text to display. |
| `dataPath` | `string` | A path pointing to a key in the data |
| `default` | `any` | A value to default a widget to if not supplied by other mechanisms. |
| `defaultBoolean` | `boolean` | A boolean value to default a widget to if not supplied by other mechanisms. |
| `defaultNumber` | `number` | A numeric value to default a widget to if not supplied by other mechanisms. |
| `defaultString` | `string` | A string value to default a widget to if not supplied by other mechanisms. |
| `desc` | `string` | Some additional advice (above and beyond the string supplied in `label`) to help define what data is required from the user. |
| `enableLocationAssist` | `boolean` | If supported by the app, should the widget try to find results from a search API by proximity to the user's current location? |
| `enableUnknownOption` | `boolean` | Should the widget allow the user to indicate they don't know enough detail to find the most suitable result from a search API? |
| `enabled` | `boolean` | Indicates if the user can use the widget to alter the underlying value - default to `true`. |
| `futuristicByAtMost` | `string` | A string indicating a period of time that the value supplied by the user should come before, starting from when the form is submitted (to be in [ISO duration](http://en.wikipedia.org/wiki/ISO_8601#Durations) format). |
| `heading` | `string` | Some short, strong, punchy text to identify the widget. |
| `help` | `string` | More detailed guidance/advice (building on top of `description` content) to help shape what data is collected from the user. |
| `historicByAtLeast` | `string` | A string indicating a period of time that the value supplied by the user must equal or be older than (to be in [ISO duration](http://en.wikipedia.org/wiki/ISO_8601#Durations) format). |
| `label` | `string` | A short piece of text to help identify what content is required by the user. |
| `labelPath` | `string` | A [JSON Path](https://www.npmjs.com/package/jsonpath) string showing where the _label_ associated with an API call should be stored on the data model. The unique key value selected by the user will be associated as normal with a path inferred from `id` - this is an additional path to store the accompanying label-text (such denormalisation may be useful for 'stamping' labels as they were at time of data-collection and to improve subsequent render-times of the data). |
| `mandatory` | `boolean` | Indicates if a value needs to be supplied by the user, or if it's optional. |
| `maxCharacters` | `number` | The maximum length of number of characters a user can specify. |
| `maximum` | `number` | The maximum numeric value a user can specify. |
| `minCharacters` | `number` | The minimum length of number of characters a will need to provide. |
| `minimum` | `number` | The minimum numeric value a user can specify. |
| `numericValue` | `value` | Explicitly assert that the widget receive and store numeric values (usually of use with title-map enumerations). |
| `placeholder` | `string` | Some example text that can be appear inside a widget ahead of collecting user input.  |
| `properties` | `array` | An array of objects with a path to data and title describing the property |
| `resultLimit` | `number` | For widgets interacting with a search API or similar, configures the maximum number of results that should be returned in any response. |
| `titleMap` | `array` | An array of objects denoting a set of values that the user can select from. |


# <a name="list"></a>Widget List

Here is the full list of all 32 widgets supported in QScript `0.0.6` (please see [Widget summary](#widget-summary) for a handy index).


<hr>

## The <a name="list-address"></a>`address` widget

__Allows the user to _select_ a particular postal address from a provided list and store a unique reference to that property, such as a [UPRN](https://www.ordnancesurvey.co.uk/about/governance/policies/addressbase-uprn.html) or similar.__

__Example JSON__

``` json
{
  "id": "patientAddress",
  "type": "address",
  "attributes": {
    "heading": "Where does the patient live?",
    "desc": "If it's not possible to ascertain an accurate address from the patient then please select 'Unknown'",
    "mandatory": true,
    "labelPath": "$.patientAddressLabel",
    "resultLimit": 20,
    "enableUnknownOption": true,
    "enableLocationAssist": false
  }
}

```

__Properties__


__`id`:__ _Required_

__`type`:__ _Required_ (`"address"`)

__`showWhen`:__ _Optional_



__Attributes__

| Name | Type | Required | Description |
| ---- | -----| -------- | ----------- |
| `enableLocationAssist` | `boolean` | `No` | If supported by the app, should the widget try to find results from a search API by proximity to the user's current location? |
| `enableUnknownOption` | `boolean` | `No` | Should the widget allow the user to indicate they don't know enough detail to find the most suitable result from a search API? |
| `enabled` | `boolean` | `No` | Indicates if the user can use the widget to alter the underlying value - default to `true`. |
| `heading` | `string` | `No` | Some short, strong, punchy text to identify the widget. |
| `help` | `string` | `No` | More detailed guidance/advice (building on top of `description` content) to help shape what data is collected from the user. |
| `labelPath` | `string` | `No` | A [JSON Path](https://www.npmjs.com/package/jsonpath) string showing where the _label_ associated with an API call should be stored on the data model. The unique key value selected by the user will be associated as normal with a path inferred from `id` - this is an additional path to store the accompanying label-text (such denormalisation may be useful for 'stamping' labels as they were at time of data-collection and to improve subsequent render-times of the data). |
| `mandatory` | `boolean` | `No` | Indicates if a value needs to be supplied by the user, or if it's optional. |
| `numericValue` | `value` | `No` | Explicitly assert that the widget receive and store numeric values (usually of use with title-map enumerations). |
| `resultLimit` | `number` | `No` | For widgets interacting with a search API or similar, configures the maximum number of results that should be returned in any response. |





<hr>

## The <a name="list-apiLookup"></a>`apiLookup` widget

__Allows the user to select a specific value from an API endpoint__

__Example JSON__

``` json
{
  "id": "fireApplianceId",
  "type": "apiLookup",
  "attributes": {
    "apiName": "fleet",
    "heading": "Fire Appliance",
    "labelPath": "$.fireApplianceLabel",
    "desc": "Please select the Fire Appliance involved with this event",
    "mandatory": true,
    "resultLimit": 20,
    "params": {
      "showCurrentOnly": true,
      "showOperationalOnly": true
    }
  }
}

```

__Properties__


__`id`:__ _Required_

__`type`:__ _Required_ (`"apiLookup"`)

__`showWhen`:__ _Optional_



__Attributes__

| Name | Type | Required | Description |
| ---- | -----| -------- | ----------- |
| `apiName` | `string` | `Yes` | Name of the API endpoint which will be used to get a list of results for the user to select from. |
| `enabled` | `boolean` | `No` | Indicates if the user can use the widget to alter the underlying value - default to `true`. |
| `heading` | `string` | `No` | Some short, strong, punchy text to identify the widget. |
| `help` | `string` | `No` | More detailed guidance/advice (building on top of `description` content) to help shape what data is collected from the user. |
| `labelPath` | `string` | `No` | A [JSON Path](https://www.npmjs.com/package/jsonpath) string showing where the _label_ associated with an API call should be stored on the data model. The unique key value selected by the user will be associated as normal with a path inferred from `id` - this is an additional path to store the accompanying label-text (such denormalisation may be useful for 'stamping' labels as they were at time of data-collection and to improve subsequent render-times of the data). |
| `mandatory` | `boolean` | `No` | Indicates if a value needs to be supplied by the user, or if it's optional. |
| `numericValue` | `value` | `No` | Explicitly assert that the widget receive and store numeric values (usually of use with title-map enumerations). |
| `params` | `object` | `No` | Key/value pairs which will be passed to the API endpoint. As such, contents will vary depending on the API involved. |
| `resultLimit` | `number` | `No` | For widgets interacting with a search API or similar, configures the maximum number of results that should be returned in any response. |





<hr>

## The <a name="list-buttonList"></a>`buttonList` widget

__A set of buttons that the user can interact with__

__Example JSON__

``` json
{
  "id": "actions",
  "type": "buttonList",
  "attributes": {
    "heading": "Some Actions",
    "actions": [
      {
        "title": "Edit user"
      },
      {
        "title": "Remove user"
      },
      {
        "title": "Create a new user"
      }
    ]
  }
}

```

__Properties__


__`id`:__ _Required_

__`type`:__ _Required_ (`"buttonList"`)

__`showWhen`:__ _Optional_



__Attributes__

| Name | Type | Required | Description |
| ---- | -----| -------- | ----------- |
| `actions` | `array` | `No` | An array of objects denoting a set of actions the user can take |
| `heading` | `string` | `No` | Some short, strong, punchy text to identify the widget. |





<hr>

## The <a name="list-checkboxList"></a>`checkboxList` widget

__Offer a related set of checkboxes with accompanying labels for the user to switch on and off.__

__Example JSON__

``` json
{
  "id": "limbMovement",
  "type": "checkboxList",
  "attributes": {
    "heading": "Which limbs were seen to move?",
    "default": [
      "LEFT_ARM",
      "RIGHT_ARM",
      "LEFT_LEG",
      "RIGHT_LEG"
    ],
    "minLimit": 0,
    "maxLimit": 4,
    "titleMap": [
      {
        "value": "LEFT_ARM",
        "title": "Left arm"
      },
      {
        "value": "RIGHT_ARM",
        "title": "Right arm"
      },
      {
        "value": "LEFT_LEG",
        "title": "Left leg"
      },
      {
        "value": "RIGHT_LEG",
        "title": "Right leg"
      }
    ]
  }
}

```

__Properties__


__`id`:__ _Required_

__`type`:__ _Required_ (`"checkboxList"`)

__`showWhen`:__ _Optional_



__Attributes__

| Name | Type | Required | Description |
| ---- | -----| -------- | ----------- |
| `default` | `any` | `No` | A value to default a widget to if not supplied by other mechanisms. |
| `desc` | `string` | `No` | Some additional advice (above and beyond the string supplied in `label`) to help define what data is required from the user. |
| `enabled` | `boolean` | `No` | Indicates if the user can use the widget to alter the underlying value - default to `true`. |
| `heading` | `string` | `No` | Some short, strong, punchy text to identify the widget. |
| `mandatory` | `boolean` | `No` | Indicates if a value needs to be supplied by the user, or if it's optional. |
| `maxLimit` | `number` | `No` | Maximum number of array elements the user should provide |
| `minLimit` | `number` | `No` | Minimum number of array elements the user should provide |
| `numericValue` | `value` | `No` | Explicitly assert that the widget receive and store numeric values (usually of use with title-map enumerations). |
| `titleMap` | `array` | `Yes` | An array of objects denoting a set of values that the user can select from. |





<hr>

## The <a name="list-currency"></a>`currency` widget

__Just like a `number` widget, but for specifically collecting a monetary value.__

__Example JSON__

``` json
{
  "id": "price",
  "type": "currency",
  "attributes": {
    "mandatory": true,
    "heading": "Purchase price",
    "desc": "How much did this stock-item cost from the supplier?"
  }
}

```

__Properties__


__`id`:__ _Required_

__`type`:__ _Required_ (`"currency"`)

__`showWhen`:__ _Optional_



__Attributes__

| Name | Type | Required | Description |
| ---- | -----| -------- | ----------- |
| `default` | `string` | `No` | A string value to default a widget to if not supplied by other mechanisms. |
| `enabled` | `boolean` | `No` | Indicates if the user can use the widget to alter the underlying value - default to `true`. |
| `heading` | `string` | `No` | Some short, strong, punchy text to identify the widget. |
| `help` | `string` | `No` | More detailed guidance/advice (building on top of `description` content) to help shape what data is collected from the user. |
| `mandatory` | `boolean` | `No` | Indicates if a value needs to be supplied by the user, or if it's optional. |
| `placeholder` | `string` | `No` | Some example text that can be appear inside a widget ahead of collecting user input.  |





<hr>

## The <a name="list-date"></a>`date` widget

__Allows the user to provide a specific date - without a time portion.__

__Example JSON__

``` json
{
  "id": "dateOfBirth",
  "type": "date",
  "attributes": {
    "mandatory": true,
    "heading": "Date of birth",
    "desc": "Date the employee was born",
    "historicByAtLeast": "P18Y"
  }
}

```

__Properties__


__`id`:__ _Required_

__`type`:__ _Required_ (`"date"`)

__`showWhen`:__ _Optional_



__Attributes__

| Name | Type | Required | Description |
| ---- | -----| -------- | ----------- |
| `captureHistoric` | `boolean` | `No` | Can the date/time captured by the widget occur in the past (as starting when the for is submitted)? |
| `desc` | `string` | `No` | Some additional advice (above and beyond the string supplied in `label`) to help define what data is required from the user. |
| `enabled` | `boolean` | `No` | Indicates if the user can use the widget to alter the underlying value - default to `true`. |
| `futuristicByAtMost` | `string` | `No` | A string indicating a period of time that the value supplied by the user should come before, starting from when the form is submitted (to be in [ISO duration](http://en.wikipedia.org/wiki/ISO_8601#Durations) format). |
| `heading` | `string` | `No` | Some short, strong, punchy text to identify the widget. |
| `help` | `string` | `No` | More detailed guidance/advice (building on top of `description` content) to help shape what data is collected from the user. |
| `historicByAtLeast` | `string` | `No` | A string indicating a period of time that the value supplied by the user must equal or be older than (to be in [ISO duration](http://en.wikipedia.org/wiki/ISO_8601#Durations) format). |
| `mandatory` | `boolean` | `No` | Indicates if a value needs to be supplied by the user, or if it's optional. |





<hr>

## The <a name="list-dateTime"></a>`dateTime` widget

__Collects a specific date and time from the user.__

__Example JSON__

``` json
{
  "id": "appointment",
  "type": "dateTime",
  "attributes": {
    "mandatory": true,
    "heading": "Appointment",
    "desc": "The date and time this visit is scheduled for",
    "captureHistoric": false,
    "futuristicByAtMost": "P3M"
  }
}

```

__Properties__


__`id`:__ _Required_

__`type`:__ _Required_ (`"dateTime"`)

__`showWhen`:__ _Optional_



__Attributes__

| Name | Type | Required | Description |
| ---- | -----| -------- | ----------- |
| `captureHistoric` | `boolean` | `No` | Can the date/time captured by the widget occur in the past (as starting when the for is submitted)? |
| `desc` | `string` | `No` | Some additional advice (above and beyond the string supplied in `label`) to help define what data is required from the user. |
| `enabled` | `boolean` | `No` | Indicates if the user can use the widget to alter the underlying value - default to `true`. |
| `futuristicByAtMost` | `string` | `No` | A string indicating a period of time that the value supplied by the user should come before, starting from when the form is submitted (to be in [ISO duration](http://en.wikipedia.org/wiki/ISO_8601#Durations) format). |
| `heading` | `string` | `No` | Some short, strong, punchy text to identify the widget. |
| `help` | `string` | `No` | More detailed guidance/advice (building on top of `description` content) to help shape what data is collected from the user. |
| `historicByAtLeast` | `string` | `No` | A string indicating a period of time that the value supplied by the user must equal or be older than (to be in [ISO duration](http://en.wikipedia.org/wiki/ISO_8601#Durations) format). |
| `mandatory` | `boolean` | `No` | Indicates if a value needs to be supplied by the user, or if it's optional. |





<hr>

## The <a name="list-endSet"></a>`endSet` widget

__Marks the end of a set of related widgets - see the [Sets](#set) section for more information.__

__Example JSON__

``` json
{
  "type": "endSet"
}

```

__Properties__


__`type`:__ _Required_ (`"endSet"`)





<hr>

## The <a name="list-endSubView"></a>`endSubView` widget

__Marks the end of a sub-view - see the [Sets](#set) section for more information.__

__Example JSON__

``` json
{
  "type": "endSubView"
}

```

__Properties__


__`type`:__ _Required_ (`"endSubView"`)





<hr>

## The <a name="list-expandableNotice"></a>`expandableNotice` widget

__Expandable Notice field.__

__Example JSON__

``` json
{
  "id": "privacy notice",
  "type": "expandableNotice",
  "attributes": {
    "heading": "Click to view information",
    "content": "This is some expandable information you might want to hide"
  }
}

```

__Properties__


__`id`:__ _Required_

__`type`:__ _Required_ (`"expandableNotice"`)

__`showWhen`:__ _Optional_



__Attributes__

| Name | Type | Required | Description |
| ---- | -----| -------- | ----------- |
| `content` | `string` | `No` | Some read only text to display. |
| `enabled` | `boolean` | `No` | Indicates if the user can use the widget to alter the underlying value - default to `true`. |
| `heading` | `string` | `No` | Some short, strong, punchy text to identify the widget. |
| `help` | `string` | `No` | More detailed guidance/advice (building on top of `description` content) to help shape what data is collected from the user. |





<hr>

## The <a name="list-fileUpload"></a>`fileUpload` widget

__Allows the user to upload a file.__

__Example JSON__

``` json
{
  "id": "photographicEvidence",
  "type": "fileUpload",
  "attributes": {
    "heading": "Any photographic evidence?",
    "desc": "Upload any digital photographs supporting your observations",
    "captionPath": "$.evidenceDescription",
    "formatRestriction": [
      "jpg",
      "jpeg"
    ],
    "maxFileSize": "15mb",
    "minNumberOfFiles": 0,
    "maxNumberOfFiles": 10
  }
}

```

__Properties__


__`id`:__ _Required_

__`type`:__ _Required_ (`"fileUpload"`)

__`showWhen`:__ _Optional_



__Attributes__

| Name | Type | Required | Description |
| ---- | -----| -------- | ----------- |
| `captionPath` | `string` | `No` | A [JSON Path](https://www.npmjs.com/package/jsonpath) string showing where some caption text also provided by the user should be stored on the data model. If this value is not provided, the the widget should not offer captioning of uploads. |
| `enabled` | `boolean` | `No` | Indicates if the user can use the widget to alter the underlying value - default to `true`. |
| `formatRestriction` | `array` | `No` | An array of strings representing a set of file extensions that are allowed to be uploaded, for example: `["jpg", "jpeg"]`. |
| `heading` | `string` | `No` | Some short, strong, punchy text to identify the widget. |
| `help` | `string` | `No` | More detailed guidance/advice (building on top of `description` content) to help shape what data is collected from the user. |
| `mandatory` | `boolean` | `No` | Indicates if a value needs to be supplied by the user, or if it's optional. |
| `maxFileSize` | `string` | `No` | A [human2bytes](https://www.npmjs.com/package/human2bytes) compatible string representing the maximum filesize permitted (e.g. `50mb`). |
| `maxNumberOfFiles` | `number` | `No` | The maximum number of files that the user is required to upload. |
| `minNumberOfFiles` | `number` | `No` | The minimum number of files that the user is required to upload. |





<hr>

## The <a name="list-header"></a>`header` widget

__A widget typically placed at the top of a view to describe its purpose. An optional background image makes this widget akin to a [Hero Unit](https://en.wikipedia.org/wiki/Hero_image) or [Jumbotron](https://getbootstrap.com/docs/4.0/components/jumbotron/).__

__Example JSON__

``` json
{
  "type": "header",
  "attributes": {
    "heading": "Patient Report",
    "desc": "Use this form to provide details of patient care administered at the scene of an incident.",
    "backgroundImage": "wmfs/casualty-care-background.jpg",
    "backgroundImageAltText": "Photograph of activity at a Road Traffic Collision"
  }
}

```

__Properties__


__`type`:__ _Required_ (`"header"`)

__`showWhen`:__ _Optional_



__Attributes__

| Name | Type | Required | Description |
| ---- | -----| -------- | ----------- |
| `backgroundImage` | `string` | `No` | A path to an image file that should be resolved from the app's base image URL or similar. |
| `backgroundImageAltText` | `string` | `No` | Text that describes the `backgroundImage` image. |
| `desc` | `string` | `No` | Some additional advice (above and beyond the string supplied in `label`) to help define what data is required from the user. |
| `heading` | `string` | `Yes` | Some short, strong, punchy text to identify the widget. |
| `wash` | `string` | `No` | Whether the background image should have a black or white wash. |





<hr>

## The <a name="list-heading"></a>`heading` widget

__Use to displays a heading (with optional descriptive text). Not to be confused with [`header`](#list-header), the `heading` widget equates more to a `<h1></h1>` UI experience.__

__Example JSON__

``` json
{
  "type": "header",
  "attributes": {
    "heading": "Patient Report",
    "desc": "Use this form to provide details of patient care administered at the scene of an incident."
  }
}

```

__Properties__


__`type`:__ _Required_ (`"heading"`)

__`showWhen`:__ _Optional_



__Attributes__

| Name | Type | Required | Description |
| ---- | -----| -------- | ----------- |
| `desc` | `string` | `No` | Some additional advice (above and beyond the string supplied in `label`) to help define what data is required from the user. |
| `heading` | `string` | `Yes` | Some short, strong, punchy text to identify the widget. |





<hr>

## The <a name="list-horizontalLine"></a>`horizontalLine` widget

__Renders a horizontal line to help split things up (i.e. like a `</hr>`)__

__Example JSON__

``` json
{
  "type": "horizontalLine"
}

```

__Properties__


__`type`:__ _Required_ (`"horizontalLine"`)





<hr>

## The <a name="list-image"></a>`image` widget

__Embeds a non-interactive image within the form.__

__Example JSON__

``` json
{
  "id": "numberOfFloors",
  "type": "image",
  "attributes": {
    "image": "wmfs/number-of-floors-diagram.png",
    "altText": "Indicates ground-floor is referred to as '0' and one above it is referred to as '1': but the total number of floors is 2."
  }
}

```

__Properties__


__`id`:__ _Required_

__`type`:__ _Required_ (`"image"`)

__`showWhen`:__ _Optional_



__Attributes__

| Name | Type | Required | Description |
| ---- | -----| -------- | ----------- |
| `altText` | `string` | `No` | Text that describes the `backgroundImage` image. |
| `desc` | `string` | `No` | Some additional advice (above and beyond the string supplied in `label`) to help define what data is required from the user. |
| `heading` | `string` | `No` | Some short, strong, punchy text to identify the widget. |
| `help` | `string` | `No` | More detailed guidance/advice (building on top of `description` content) to help shape what data is collected from the user. |
| `image` | `string` | `Yes` | A path to an image file that should be resolved from the app's base image URL or similar. |





<hr>

## The <a name="list-map"></a>`map` widget

__Displays a map to the user, and can optionally be configured to collect geo-spatial data (points, lines etc.)__

__Example JSON__

``` json
{
  "id": "incidentCoordinates",
  "type": "map",
  "attributes": {
    "heading": "Point of ignition",
    "mandatory": true,
    "desc": "Please indicate the exact position of where the fire started.",
    "enableLocationAssist": true,
    "collectGeometries": [
      "points"
    ],
    "minGeometries": 1,
    "maxGeometries": 1,
    "pointIconPalette": [
      {
        "file": "wmfs/flame.png",
        "label": "Flame"
      }
    ],
    "relatedLayers": [
      {
        "name": "gaz",
        "label": "Gazetteer",
        "visibleByDefault": false
      }
    ]
  }
}

```

__Properties__


__`id`:__ _Required_

__`type`:__ _Required_ (`"map"`)

__`showWhen`:__ _Optional_



__Attributes__

| Name | Type | Required | Description |
| ---- | -----| -------- | ----------- |
| `centreLatitudePath` | `string` | `No` | Path indicating which property should be used to infer a latitude value when first centering the map |
| `centreLongitudePath` | `string` | `No` | Path indicating which property should be used to infer a longitude value when first centering the map |
| `collectGeometries` | `array` | `No` |  |
| `enableLocationAssist` | `boolean` | `No` | If supported by the app, should the widget try to find results from a search API by proximity to the user's current location? |
| `enabled` | `boolean` | `No` | Indicates if the user can use the widget to alter the underlying value - default to `true`. |
| `heading` | `string` | `No` | Some short, strong, punchy text to identify the widget. |
| `help` | `string` | `No` | More detailed guidance/advice (building on top of `description` content) to help shape what data is collected from the user. |
| `mandatory` | `boolean` | `No` | Indicates if a value needs to be supplied by the user, or if it's optional. |
| `maxGeometries` | `number` | `No` | The maximum number of geometries required from the user |
| `minGeometries` | `number` | `No` | The minimum number of geometries required from the user |
| `pointIconPalette` | `array` | `No` | An array of icons which the user can select from when adding point geometries |
| `relatedLayers` | `array` | `No` | An array of layers which the widget should request when rendering maps. |





<hr>

## The <a name="list-number"></a>`number` widget

__Like a `text` widget, but specifically for collecting numeric content.__

__Example JSON__

``` json
{
  "id": "numShocks",
  "type": "number",
  "attributes": {
    "mandatory": true,
    "default": 2,
    "minimum": 0,
    "heading": "How many shocks were delivered?"
  }
}

```

__Properties__


__`id`:__ _Required_

__`type`:__ _Required_ (`"number"`)

__`showWhen`:__ _Optional_



__Attributes__

| Name | Type | Required | Description |
| ---- | -----| -------- | ----------- |
| `default` | `number` | `No` | A numeric value to default a widget to if not supplied by other mechanisms. |
| `desc` | `string` | `No` | Some additional advice (above and beyond the string supplied in `label`) to help define what data is required from the user. |
| `enabled` | `boolean` | `No` | Indicates if the user can use the widget to alter the underlying value - default to `true`. |
| `heading` | `string` | `No` | Some short, strong, punchy text to identify the widget. |
| `help` | `string` | `No` | More detailed guidance/advice (building on top of `description` content) to help shape what data is collected from the user. |
| `mandatory` | `boolean` | `No` | Indicates if a value needs to be supplied by the user, or if it's optional. |
| `maximum` | `number` | `No` | The maximum numeric value a user can specify. |
| `minimum` | `number` | `No` | The minimum numeric value a user can specify. |
| `placeholder` | `string` | `No` | Some example text that can be appear inside a widget ahead of collecting user input.  |





<hr>

## The <a name="list-propertyList"></a>`propertyList` widget

__Displays a list of data provided in form of an array__

__Example JSON__

``` json
{
  "id": "contactDetails",
  "type": "propertyList",
  "attributes": {
    "heading": "Contact Details",
    "properties": [
      {
        "dataPath": "firstName",
        "header": "First Name"
      },
      {
        "dataPath": "lastName",
        "header": "Last Name"
      },
      {
        "dataPath": "mobileNumber",
        "header": "Mobile Number"
      }
    ]
  }
}

```

__Properties__


__`id`:__ _Required_

__`type`:__ _Required_ (`"propertyList"`)



__Attributes__

| Name | Type | Required | Description |
| ---- | -----| -------- | ----------- |
| `heading` | `string` | `No` | Some short, strong, punchy text to identify the widget. |
| `properties` | `array` | `No` | An array of objects with a path to data and title describing the property |





<hr>

## The <a name="list-questionnaire"></a>`questionnaire` widget

__Offers the user a question with two or more possible responses on an appropriate scale.__

__Example JSON__

``` json
{
  "id": "painArrival",
  "type": "questionnaire",
  "attributes": {
    "mandatory": true,
    "heading": "Pain-score on arrival",
    "desc": "How did the carer assess the patient's pain when they first met?",
    "default": 1,
    "numericValue": true,
    "titleMap": [
      {
        "value": 0,
        "title": "0",
        "desc": "No pain"
      },
      {
        "value": 1,
        "title": "1",
        "desc": "Slight pain"
      },
      {
        "value": 2,
        "title": "2",
        "desc": "Moderate pain"
      },
      {
        "value": 3,
        "title": "3",
        "desc": "Severe pain"
      }
    ]
  }
}

```

__Properties__


__`id`:__ _Required_

__`type`:__ _Required_ (`"questionnaire"`)

__`showWhen`:__ _Optional_



__Attributes__

| Name | Type | Required | Description |
| ---- | -----| -------- | ----------- |
| `default` | `any` | `No` | A value to default a widget to if not supplied by other mechanisms. |
| `desc` | `string` | `No` | Some additional advice (above and beyond the string supplied in `label`) to help define what data is required from the user. |
| `enabled` | `boolean` | `No` | Indicates if the user can use the widget to alter the underlying value - default to `true`. |
| `heading` | `string` | `No` | Some short, strong, punchy text to identify the widget. |
| `help` | `string` | `No` | More detailed guidance/advice (building on top of `description` content) to help shape what data is collected from the user. |
| `mandatory` | `boolean` | `No` | Indicates if a value needs to be supplied by the user, or if it's optional. |
| `numericValue` | `value` | `No` | Explicitly assert that the widget receive and store numeric values (usually of use with title-map enumerations). |
| `titleMap` | `array` | `No` | An array of objects denoting a set of values that the user can select from. |





<hr>

## The <a name="list-radio"></a>`radio` widget

__Allows the user to select a value from a set of related options that are rendered in a [Radio Button](https://en.wikipedia.org/wiki/Radio_button) style.__

__Example JSON__

``` json
{
  "id": "gender",
  "type": "radio",
  "attributes": {
    "heading": "Patient gender",
    "mandatory": true,
    "titleMap": [
      {
        "value": "MALE",
        "title": "Male"
      },
      {
        "value": "FEMALE",
        "title": "Female"
      },
      {
        "value": "UNKNOWN",
        "title": "Unknown"
      }
    ]
  }
}

```

__Properties__


__`id`:__ _Required_

__`type`:__ _Required_ (`"radio"`)

__`showWhen`:__ _Optional_



__Attributes__

| Name | Type | Required | Description |
| ---- | -----| -------- | ----------- |
| `desc` | `string` | `No` | Some additional advice (above and beyond the string supplied in `label`) to help define what data is required from the user. |
| `enabled` | `boolean` | `No` | Indicates if the user can use the widget to alter the underlying value - default to `true`. |
| `heading` | `string` | `No` | Some short, strong, punchy text to identify the widget. |
| `help` | `string` | `No` | More detailed guidance/advice (building on top of `description` content) to help shape what data is collected from the user. |
| `mandatory` | `boolean` | `No` | Indicates if a value needs to be supplied by the user, or if it's optional. |
| `numericValue` | `value` | `No` | Explicitly assert that the widget receive and store numeric values (usually of use with title-map enumerations). |
| `titleMap` | `array` | `No` | An array of objects denoting a set of values that the user can select from. |





<hr>

## The <a name="list-richtext"></a>`richtext` widget

__Offers the user a text editor with functionality to format text.__

__Example JSON__

``` json
{
  "id": "clinicalNotes",
  "type": "richtext",
  "attributes": {
    "heading": "Clinical Notes?",
    "mandatory": false,
    "desc": "If you have any clinical notes, please enter them here"
  }
}

```

__Properties__


__`id`:__ _Required_

__`type`:__ _Required_ (`"richtext"`)

__`showWhen`:__ _Optional_



__Attributes__

| Name | Type | Required | Description |
| ---- | -----| -------- | ----------- |
| `default` | `string` | `No` | A string value to default a widget to if not supplied by other mechanisms. |
| `desc` | `string` | `No` | Some additional advice (above and beyond the string supplied in `label`) to help define what data is required from the user. |
| `enabled` | `boolean` | `No` | Indicates if the user can use the widget to alter the underlying value - default to `true`. |
| `heading` | `string` | `No` | Some short, strong, punchy text to identify the widget. |
| `help` | `string` | `No` | More detailed guidance/advice (building on top of `description` content) to help shape what data is collected from the user. |
| `mandatory` | `boolean` | `No` | Indicates if a value needs to be supplied by the user, or if it's optional. |





<hr>

## The <a name="list-select"></a>`select` widget

__Allows the user to select a value from a set of options, which should be rendered in an [HTML Select](https://en.wikipedia.org/wiki/HTML_element) style.__

__Example JSON__

``` json
{
  "id": "choking",
  "type": "select",
  "attributes": {
    "heading": "Choking?",
    "desc": "Was the patient choking, if so what treatment was administered?",
    "mandatory": true,
    "default": "NOT_APPLICABLE",
    "titleMap": [
      {
        "value": "NOT_APPLICABLE",
        "title": "No choking - not applicable"
      },
      {
        "value": "COUGH",
        "title": "Encourage cough"
      },
      {
        "value": "BACK_SLAPS",
        "title": "Back slaps"
      },
      {
        "value": "ABDOMINAL_THRUSTS",
        "title": "Adbominal/Chest thrusts"
      },
      {
        "value": "COMPRESSIONS",
        "title": "Chest compressions (CPR)"
      },
      {
        "value": "OTHER",
        "title": "Other"
      }
    ]
  }
}

```

__Properties__


__`id`:__ _Required_

__`type`:__ _Required_ (`"select"`)

__`showWhen`:__ _Optional_



__Attributes__

| Name | Type | Required | Description |
| ---- | -----| -------- | ----------- |
| `default` | `any` | `No` | A value to default a widget to if not supplied by other mechanisms. |
| `desc` | `string` | `No` | Some additional advice (above and beyond the string supplied in `label`) to help define what data is required from the user. |
| `enabled` | `boolean` | `No` | Indicates if the user can use the widget to alter the underlying value - default to `true`. |
| `heading` | `string` | `No` | Some short, strong, punchy text to identify the widget. |
| `help` | `string` | `No` | More detailed guidance/advice (building on top of `description` content) to help shape what data is collected from the user. |
| `mandatory` | `boolean` | `No` | Indicates if a value needs to be supplied by the user, or if it's optional. |
| `numericValue` | `value` | `No` | Explicitly assert that the widget receive and store numeric values (usually of use with title-map enumerations). |
| `titleMap` | `array` | `No` | An array of objects denoting a set of values that the user can select from. |





<hr>

## The <a name="list-set"></a>`set` widget

__Marks the start of a set of related widgets - see the [Sets](#set) section for more information.__

__Example JSON__

``` json
{
  "type": "set",
  "attributes": {
    "tocTitle": "Profile"
  }
}

```

__Properties__


__`id`:__ _Required_

__`type`:__ _Required_ (`"set"`)

__`showWhen`:__ _Optional_



__Attributes__

| Name | Type | Required | Description |
| ---- | -----| -------- | ----------- |
| `tocIcon` | `string` | `No` | An icon to accompany tocTitle. For now, Must be something in [Material.io](https://material.io/icons/), e.g. `local_pizza` |
| `tocTitle` | `string` | `No` | Should the set feature in a table-of-contents or similar, use this title. Note that if no string is specified, it is assumed the set shouldn't be included in a TOC. |





<hr>

## The <a name="list-signature"></a>`signature` widget

__Allow the collection of a handwritten signature__

__Example JSON__

``` json
{
  "id": "confirmation",
  "type": "signature",
  "attributes": {
    "heading": "Customer acknowledgement",
    "desc": "Please sign here to confirm receipt of some service",
    "help": "Hand the device over to the customer",
    "mandatory": true
  }
}

```

__Properties__


__`id`:__ _Required_

__`type`:__ _Required_ (`"signature"`)

__`showWhen`:__ _Optional_



__Attributes__

| Name | Type | Required | Description |
| ---- | -----| -------- | ----------- |
| `desc` | `string` | `No` | Some additional advice (above and beyond the string supplied in `label`) to help define what data is required from the user. |
| `enabled` | `boolean` | `No` | Indicates if the user can use the widget to alter the underlying value - default to `true`. |
| `heading` | `string` | `No` | Some short, strong, punchy text to identify the widget. |
| `help` | `string` | `No` | More detailed guidance/advice (building on top of `description` content) to help shape what data is collected from the user. |
| `mandatory` | `boolean` | `No` | Indicates if a value needs to be supplied by the user, or if it's optional. |





<hr>

## The <a name="list-slider"></a>`slider` widget

__For capturing a number along a specified range__

__Example JSON__

``` json
{
  "id": "burnArea",
  "type": "slider",
  "attributes": {
    "mandatory": true,
    "heading": "Estimated body surface area burnt (%)",
    "default": 0,
    "minimum": 0,
    "maximum": 100,
    "step": 5
  }
}

```

__Properties__


__`id`:__ _Required_

__`type`:__ _Required_ (`"slider"`)

__`showWhen`:__ _Optional_



__Attributes__

| Name | Type | Required | Description |
| ---- | -----| -------- | ----------- |
| `default` | `number` | `No` | A numeric value to default a widget to if not supplied by other mechanisms. |
| `desc` | `string` | `No` | Some additional advice (above and beyond the string supplied in `label`) to help define what data is required from the user. |
| `enabled` | `boolean` | `No` | Indicates if the user can use the widget to alter the underlying value - default to `true`. |
| `heading` | `string` | `No` | Some short, strong, punchy text to identify the widget. |
| `help` | `string` | `No` | More detailed guidance/advice (building on top of `description` content) to help shape what data is collected from the user. |
| `mandatory` | `boolean` | `No` | Indicates if a value needs to be supplied by the user, or if it's optional. |
| `maximum` | `number` | `No` | The maximum numeric value a user can specify. |
| `minimum` | `number` | `No` | The minimum numeric value a user can specify. |
| `step` | `number` | `No` | The steps/intervals that the slider widget should snap to. |





<hr>

## The <a name="list-stickyNote"></a>`stickyNote` widget

__A panel for putting helpful text or other informative text__

__Example JSON__

``` json
{
  "id": "info",
  "type": "stickyNote",
  "attributes": {
    "style": "informative",
    "heading": "Remember!",
    "desc": "Floor numbering starts with 0 (ground floor)."
  }
}

```

__Properties__


__`id`:__ _Required_

__`type`:__ _Required_ (`"stickyNote"`)

__`showWhen`:__ _Optional_



__Attributes__

| Name | Type | Required | Description |
| ---- | -----| -------- | ----------- |
| `desc` | `string` | `No` | Some additional advice (above and beyond the string supplied in `label`) to help define what data is required from the user. |
| `heading` | `string` | `No` | Some short, strong, punchy text to identify the widget. |
| `style` | __enum:__<br>`normal`<br>`informative`<br>`danger`<br> | `No` | Some style pointers that the note should take. |





<hr>

## The <a name="list-subView"></a>`subView` widget

__Allows the user to enter a number of 'sub forms' (think order-lines or contact details etc.)__

__Example JSON__

``` json
{
  "type": "subView",
  "attributes": {
    "heading": "Explosions",
    "desc": "Please provide details of the explosions which occurred.",
    "minAllowed": 1,
    "maxAllowed": 10,
    "showAtLeastOne": true,
    "singularEntityText": "explosion",
    "pluralEntityText": "explosions"
  }
}

```

__Properties__


__`id`:__ _Required_

__`type`:__ _Required_ (`"subView"`)

__`showWhen`:__ _Optional_



__Attributes__

| Name | Type | Required | Description |
| ---- | -----| -------- | ----------- |
| `createButtonText` | `string` | `No` | Text to put on a button which will create a new entity. |
| `default` | `any` | `No` | A value to default a widget to if not supplied by other mechanisms. |
| `desc` | `string` | `No` | Some additional advice (above and beyond the string supplied in `label`) to help define what data is required from the user. |
| `heading` | `string` | `No` | Some short, strong, punchy text to identify the widget. |
| `help` | `string` | `No` | More detailed guidance/advice (building on top of `description` content) to help shape what data is collected from the user. |
| `instanceDescTemplate` | `string` | `No` | A handlebars-like template for conjuring a title per instance. |
| `instanceHeadingTemplate` | `string` | `No` | A handlebars-like template for conjuring a title per instance. |
| `maxAllowed` | `number` | `No` | The maximum number of sub-views that the user can complete. |
| `minAllowed` | `number` | `No` | The minimum number of sub-views that the user is required to complete. |
| `showAtLeastOne` | `boolean` | `No` | If `true` and no sub-views have yet been completed, then the app should show an empty sub-view ready for the user to start entering data (especially useful when `minAllowed > 0`). |
| `singularEntityText` | `string` | `No` | What is _one_ of these forms termed? Consider using it in a sentence such as '_Click here to create a new `${singularEntityText}`._'. |





<hr>

## The <a name="list-switch"></a>`switch` widget

__Presents a on/off style switch to the user.__

__Example JSON__

``` json
{
  "id": "burns",
  "type": "switch",
  "attributes": {
    "heading": "Did the patient suffer burns?",
    "default": false
  }
}

```

__Properties__


__`id`:__ _Required_

__`type`:__ _Required_ (`"switch"`)

__`showWhen`:__ _Optional_



__Attributes__

| Name | Type | Required | Description |
| ---- | -----| -------- | ----------- |
| `default` | `boolean` | `No` | A boolean value to default a widget to if not supplied by other mechanisms. |
| `desc` | `string` | `No` | Some additional advice (above and beyond the string supplied in `label`) to help define what data is required from the user. |
| `enabled` | `boolean` | `No` | Indicates if the user can use the widget to alter the underlying value - default to `true`. |
| `heading` | `string` | `No` | Some short, strong, punchy text to identify the widget. |
| `help` | `string` | `No` | More detailed guidance/advice (building on top of `description` content) to help shape what data is collected from the user. |
| `mandatory` | `boolean` | `No` | Indicates if a value needs to be supplied by the user, or if it's optional. |





<hr>

## The <a name="list-table"></a>`table` widget

__Presents data in format of a table with specified columns.__

__Example JSON__

``` json
{
  "id": "patientDetails",
  "type": "table",
  "attributes": {
    "heading": "Patient Details",
    "dataPath": "patients",
    "columns": [
      {
        "title": "Full Name",
        "dataPath": "name"
      },
      {
        "title": "Phone Number",
        "dataPath": "number"
      },
      {
        "title": "Address",
        "dataPath": "address"
      }
    ],
    "resultLimit": 20
  }
}

```

__Properties__


__`id`:__ _Required_

__`type`:__ _Required_ (`"table"`)

__`showWhen`:__ _Optional_



__Attributes__

| Name | Type | Required | Description |
| ---- | -----| -------- | ----------- |
| `columns` | `array` | `No` | An array of objects denoting the columns to be shown on a table |
| `dataPath` | `string` | `No` | A path pointing to a key in the data |
| `desc` | `string` | `No` | Some additional advice (above and beyond the string supplied in `label`) to help define what data is required from the user. |
| `heading` | `string` | `No` | Some short, strong, punchy text to identify the widget. |
| `help` | `string` | `No` | More detailed guidance/advice (building on top of `description` content) to help shape what data is collected from the user. |
| `resultLimit` | `number` | `No` | For widgets interacting with a search API or similar, configures the maximum number of results that should be returned in any response. |





<hr>

## The <a name="list-text"></a>`text` widget

__A bread-and-butter box for collecting textual information from the user.__

__Example JSON__

``` json
{
  "id": "handover",
  "type": "text",
  "attributes": {
    "heading": "Who was the patient handed over to?",
    "desc": "Please provide Emergency service and name of person.",
    "placeholder": "Service/name",
    "mandatory": false,
    "minCharacters": 10
  }
}

```

__Properties__


__`id`:__ _Required_

__`type`:__ _Required_ (`"text"`)

__`showWhen`:__ _Optional_



__Attributes__

| Name | Type | Required | Description |
| ---- | -----| -------- | ----------- |
| `default` | `string` | `No` | A string value to default a widget to if not supplied by other mechanisms. |
| `desc` | `string` | `No` | Some additional advice (above and beyond the string supplied in `label`) to help define what data is required from the user. |
| `enabled` | `boolean` | `No` | Indicates if the user can use the widget to alter the underlying value - default to `true`. |
| `heading` | `string` | `No` | Some short, strong, punchy text to identify the widget. |
| `help` | `string` | `No` | More detailed guidance/advice (building on top of `description` content) to help shape what data is collected from the user. |
| `mandatory` | `boolean` | `No` | Indicates if a value needs to be supplied by the user, or if it's optional. |
| `maxCharacters` | `number` | `No` | The maximum length of number of characters a user can specify. |
| `minCharacters` | `number` | `No` | The minimum length of number of characters a will need to provide. |
| `placeholder` | `string` | `No` | Some example text that can be appear inside a widget ahead of collecting user input.  |





<hr>

## The <a name="list-textarea"></a>`textarea` widget

__Collects simple multi-line text input from the user.__

__Example JSON__

``` json
{
  "id": "clinicalNotes",
  "type": "richtext",
  "attributes": {
    "heading": "Clinical Notes?",
    "mandatory": false,
    "desc": "If you have any clinical notes, please enter them here"
  }
}

```

__Properties__


__`id`:__ _Required_

__`type`:__ _Required_ (`"textarea"`)

__`showWhen`:__ _Optional_



__Attributes__

| Name | Type | Required | Description |
| ---- | -----| -------- | ----------- |
| `default` | `string` | `No` | A string value to default a widget to if not supplied by other mechanisms. |
| `desc` | `string` | `No` | Some additional advice (above and beyond the string supplied in `label`) to help define what data is required from the user. |
| `enabled` | `boolean` | `No` | Indicates if the user can use the widget to alter the underlying value - default to `true`. |
| `heading` | `string` | `No` | Some short, strong, punchy text to identify the widget. |
| `help` | `string` | `No` | More detailed guidance/advice (building on top of `description` content) to help shape what data is collected from the user. |
| `mandatory` | `boolean` | `No` | Indicates if a value needs to be supplied by the user, or if it's optional. |
| `maxCharacters` | `number` | `No` | The maximum length of number of characters a user can specify. |
| `minCharacters` | `number` | `No` | The minimum length of number of characters a will need to provide. |
| `placeholder` | `string` | `No` | Some example text that can be appear inside a widget ahead of collecting user input.  |





<hr>

## The <a name="list-time"></a>`time` widget

__Allows the user to provide a specific time (without being tied to a particular date)__

__Example JSON__

``` json
{
  "id": "openingTime",
  "type": "time",
  "attributes": {
    "mandatory": true,
    "heading": "Opening Time",
    "desc": "What time does the business usually open?"
  }
}

```

__Properties__


__`id`:__ _Required_

__`type`:__ _Required_ (`"time"`)

__`showWhen`:__ _Optional_



__Attributes__

| Name | Type | Required | Description |
| ---- | -----| -------- | ----------- |
| `enabled` | `boolean` | `No` | Indicates if the user can use the widget to alter the underlying value - default to `true`. |
| `heading` | `string` | `No` | Some short, strong, punchy text to identify the widget. |
| `help` | `string` | `No` | More detailed guidance/advice (building on top of `description` content) to help shape what data is collected from the user. |
| `mandatory` | `boolean` | `No` | Indicates if a value needs to be supplied by the user, or if it's optional. |






<hr>

# <a name="license"></a>License (GPLv3)

The QScript specification and related tooling is provided under [__GNU General Public License v3.0__](https://github.com/wmfs/qscript/blob/master/LICENSE).

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fwmfs%2Fqscript.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fwmfs%2Fqscript?ref=badge_large)

<hr>

# <a name="appendices"></a>Appendices

## <a name="motivation"></a>Appendix A: QScript Motivation

__QScript is the product of a small in-house development team at [West Midlands Fire Service](http://www.wmfs.net).
Our work over the last 20 years has often involved collecting data from a variety of teams and environments.
During this time, our best experiences have come from taking a declarative approach to defining form content.__

* Originally we used XML to define the content of our forms (or _workbooks_ as they became known).
From there it was a relatively simple process to write a renderer to conjure appropriate UIs from those definitions.
Over the intervening years we have defined some 50 workbooks in XML to collect over 3 million documents and we've extended our [DSL](https://en.wikipedia.org/wiki/Domain-specific_language) to support growing business need.

* We're now actively working on our third-generation view rendering engine.
While designing the accompanying backend, we've found great benefit in aligning to open standards (for example our workflow is now defined in [Amazon State Language](https://states-language.net/spec.html)).

* Given our positive experiences of declarative techniques and open standards, it was a natural evolution for our new declarative-UI engine to incorporate an open standard.
We therefore prototyped using a few projects (for example [Schema Form](https://json-schema-form.github.io/angular-schema-form/)) and shipped our [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) using [Mozilla React Schema Form](https://mozilla-services.github.io/react-jsonschema-form).

__They're great libraries and helped us get up-and-running quickly.__

In hindsight, both these specifications are restricted by being bound to an underlying UI technology (i.e. Angular and React respectively).
Both projects mandate a traditional web-form interface too. What if we're only working in a CLI context, or want to try some voice-interface technology? And what if we wanted to define dashboards and similar read-only content?

* React Schema Form and Schema.io work well for reasonably trivial UI content, but start adding requirements for expression-based conditionality/validation, different layout structures, differing online/offline behaviours etc. and we were soon "working against" both approaches - even to deliver quite basic experiences.

To compound matters, the underlying use of [JSON Schema](http://json-schema.org/) involves a lot of duplication and arbitrary splitting between model and UI definitions: which soon builds friction when describing larger UIs.
In turn, we found this complexity bleeds into tooling and the wider architecture.

__So with a shopping-list in-hand:__

1. Must be an open standard and encourage contributions
2. Must be easily extended to include new capabilities
3. Must not be tied to any particular frontend technology or project
4. Must not be tied to a particular UI pattern
5. Must use a standard expression language (strong preference towards Javascript)
6. Must support complex validation expressions
7. Must support dynamic show/hide expressions (with optimisation for large chunks of the view)
8. Must support online/offline behaviours
9. Must have a schema to validate declarations and support tooling
10. Must have an open SDK or similar to assist implementation
11. Must be well documented
12. Must have minimum of friction for embedding in a variety of app styles
12. Strong preference towards JSON-based languages

__...we went looking for an open standard capable of replacing our existing library of XML-defined views (some of which are pretty hefty in terms of number of components and logic).__

__Spoiler:__ We couldn't find one. Which was disappointing (and unexpected), because the experience of adopting [Amazon State Language](https://states-language.net/spec.html) had been great.
We were edging closer to defining our own, but at the same time very mindful of this sort of thing:

![How standards proliferate Licensed under CC BY-NC 2.5 by xkcd.com](https://imgs.xkcd.com/comics/standards.png)

* A particularity bad smell came about when we developed a simple intermediary format (to ease tooling complexity and authoring processes) which we could translate back into React Schema Form definitions.
It was becoming evident we didn't have a good fit for what we wanted to do, and that using a badly-fitting standard is actually worse than not using a standard at all.

* The XML used in our outgoing generation had some problems: requiring it's own expression-language was a particular mis-step and XML feels ancient if used directly on the client app (especially in [Single Page Applications](https://en.wikipedia.org/wiki/Single-page_application) and [Progressive Web Apps](https://en.wikipedia.org/wiki/Progressive_Web_Apps) contexts).

### So... __QScript__!

* __It does all the things _we_ need, and we think it might be useful to other organisations if it became a standard.__

## <a name="utilities"></a>Appendix B: QScript Utilities

__Here are some [Node.js](https://nodejs.org/en/)-based utilities to help working with QScript:__

| Package | Description | Github | NPM  |
| ------- | ------------| ------ | ---- |
| `qscript-doc-generator` | Produces QScript's main README.md file using QScript's JSON Schema and other sources. | [Here](https://github.com/wmfs/qscript/tree/master/packages/qscript-doc-generator) | [Here](https://www.npmjs.com/package/qscript-doc-generator)  |
| `qscript-examples` | Example QScript JSON files, to help with testing and documentation. Includes loader utility. | [Here](https://github.com/wmfs/qscript/tree/master/packages/qscript-examples) | [Here](https://www.npmjs.com/package/qscript-examples)  |
| `qscript-cleaner` | Cleans QScript form data to ensure we only submit the data that we should. | [Here](https://github.com/wmfs/qscript/tree/master/packages/qscript-expressions) | [Here](https://www.npmjs.com/package/qscript-cleaner)  |
| `qscript-extract-defaults` | Extracts sensible defaults from some QScript. | [Here](https://github.com/wmfs/qscript/tree/master/packages/qscript-extract-defaults) | [Here](https://www.npmjs.com/package/qscript-extract-defaults)  |
| `qscript-extract-lists` | Extracts list objects from some QScript. | [Here](https://github.com/wmfs/qscript/tree/master/packages/qscript-extract-lists) | [Here](https://www.npmjs.com/package/qscript-extract-lists)  |
| `qscript-parser` | Like JSON.parse(), but for QScript. And it supports YAML. | [Here](https://github.com/wmfs/qscript/tree/master/packages/qscript-parser) | [Here](https://www.npmjs.com/package/qscript-parser)  |
| `qscript-quasar-playpen` | QScript Playpen | [Here](https://github.com/wmfs/qscript/tree/master/packages/qscript-quasar-playpen) | [Here](https://www.npmjs.com/package/qscript-quasar-playpen)  |
| `qscript-schema` | Contains a JSON Schema for QScript, along with a validation utility. | [Here](https://github.com/wmfs/qscript/tree/master/packages/qscript-schema) | [Here](https://www.npmjs.com/package/qscript-schema)  |
| `qscript-table-of-contents` | Extracts a table-of-contents from some QScript. | [Here](https://github.com/wmfs/qscript/tree/master/packages/qscript-extract-defaults) | [Here](https://www.npmjs.com/package/qscript-table-of-contents)  |
| `qscript-to-quasar` | Produces a template for use with Quasar from some QScript. | [Here](https://github.com/wmfs/qscript/tree/master/packages/qscript-to-quasar) | [Here](https://www.npmjs.com/package/qscript-to-quasar)  |
| `qscript-to-template` | Takes some QScript and transforms it to a template string for use with a frontend framework. | [Here](https://github.com/wmfs/qscript/tree/master/packages/qscript-to-template) | [Here](https://www.npmjs.com/package/qscript-to-template)  |
| `qscript-to-vuelidate` | Takes in a QScript JSON object and attempts to extract validation schema from the widgets. | [Here](https://github.com/wmfs/qscript/tree/master/packages/qscript-to-validation-schema) | [Here](https://www.npmjs.com/package/qscript-to-vuelidate)  |
| `qscript-vue-component` | A simple Vue component to render dynamic QScript content using Vuetify | [Here](https://github.com/wmfs/qscript/tree/master/packages/qscript-vue-component) | [Here](https://www.npmjs.com/package/qscript-vue-component)  |
| `qscript-vue-sdk` | An SDK for using QScript with Vue/Vuetify | [Here](https://github.com/wmfs/qscript/tree/master/packages/qscript-simple-vue) | [Here](https://www.npmjs.com/package/qscript-vue-sdk)  |
| `react-jsonschema-form-to-qscript` | Produces QScript converted from react-jsonschema-form file. | [Here](https://github.com/wmfs/qscript/tree/master/packages/react-jsonschema-form-to-qscript) | [Here](https://www.npmjs.com/package/react-jsonschema-form-to-qscript)  |

