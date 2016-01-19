[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JavaScript Prototypes

## Prerequisites

-   [ga-wdi-boston/js-objects-constructors](https://github.com/ga-wdi-boston/js-objects-constructors)

## Objectives

-   Define methods on custom objects by attaching them to the prototype

## Prototypes

In the previous lesson, we saw how to use constructors to de-duplicate effort
in creating new objects that share attributes. We learned that we should never
define a method inside a constructor function. So how do we get behavior in our
custom objects?

Remember `batman`?

```js
let batman = {
  name: 'Bruce Wayne',
  alias: 'The Bat-man',

  power: function() {
    return 'Super wealthy and super pissed off';
  }
}
```

We made a nice `Hero` constructor to take care of the attributes.

```js
const Hero = function(name, alias) {
  this.name = name;
  this.alias = alias;
};
```

Next:

1.  Create a method to say the hero's name and alias. Attach it to the
    prototype.
1.  Create `batman` and `superman`. Call the method just attached.
1.  Explain that power is a singleton method, and should be attached directly
    to the object. It's really just data *IN DISGUISE*!

## Lab: Add Methods to Prototypes

Change the run tracker code you made in the [previous
lesson](https://github.com/ga-wdi-boston/js-objects-constructors) to use
prototypes.

## [License](LICENSE)

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
