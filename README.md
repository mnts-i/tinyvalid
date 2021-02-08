# TinyValid
TinyValid is a Typescript written validation library providing various lightweight validation functions.

#### Table of Contents:
 - [How to use](#usage)
 - [Tip for Typescript projects](#typescript_tip)
 - [Validators:](#validators)
     - [has](#v_has)
	 - [:small_orange_diamond: isArray](#v_is_array)
	 - [:small_orange_diamond: isArrayOf](#v_is_array_of)
	 - [:small_orange_diamond: isBool](#v_is_bool)
	 - [isDecimal](#v_is_decimal)
	 - [isEmpty](#v_is_empty)
	 - [isEmptyArray](#v_is_empty_array)
	 - [isEmptyObject](#v_is_empty_object)
	 - [isEmptyString](#v_is_empty_string)
	 - [isFinite](#v_is_finite)
	 - [isFunc](#v_is_func)
	 - [isInfinite](#v_is_infinite)
	 - [isInteger / isInt](#v_is_integer)
	 - [isNegativeInteger](#v_is_negative_integer)
	 - [:small_orange_diamond: isNil](#v_is_nul)
	 - [isNotArray](#v_is_not_array)
	 - [isNotEmptyArray](#v_is_not_empty_array)
	 - [isNotEmptyString](#v_is_not_empty_string)
	 - [isNotNull](#v_is_not_null)
	 - [isNotString](#v_is_not_string)
	 - [:small_orange_diamond: isNull](#v_is_null)
	 - [:small_orange_diamond: isNumber](#v_is_number)
	 - [isObject](#v_is_object)
	 - [isPositiveInteger](#v_is_positive_integer)
	 - [:small_orange_diamond: isString](#v_is_string)
	 - [:small_orange_diamond: isUndefined](#v_is_undefined)

<a name="usage"></a>
## How to use
Install the library by running 
```
npm install --save tinyvalid
```

You can then import the whole library:
```typescript
import * from 'tinyvalid';
```
or you can import only the validators you need and thus reducing your bundle's final size
```typescript
import { isInteger } from 'tinyvalid/dist/validators/isInteger';
import { isObject } from 'tinyvalid/dist/validators/isObject';
import { isEmptyString } from 'tinyvalid/dist/validators/isEmptyString';
```

<a name="typescript_tip"></a>
### Tip for Typescript projects
Some of the validators make use of type-guards in order to avoid unnecessary type asserting of variables in your code (https://basarat.gitbook.io/typescript/type-system/typeguard#user-defined-type-guards). You can find which validators use type-guards by the orange diamond ( :small_orange_diamond: ) before their name.

**Example of type-guards:**
```typescript
const username: string | undefined = Math.random() > .5 ? '   tinyuser  ': undefined;
let trimmedUsername: string;

// PREFER USING VALIDATORS WITH TYPE-GUARDING...

// isString makes use of type-guards which means the typescript can understand after 
// the validator if the variable - username - is of type string or not
if (!isString(username)) {
    console.log('username is not a string');
} else {
    trimmedUsername = username.trim();
}

// ...INSTEAD OF VALIDATORS WITHOUT TYPE-GUARDING

// isNotString does NOT make use of type-guards
if (isNotString(username)) {
    console.log('username is not a string');
} else {

    // You'll have to assert the username's type since the compiler doesn't know after
    // the validator if the variable - username - is a string or undefined
    trimmedUsername = (<string>username).trim();
}
```

<a name="validators"></a>
## Validators

<a name="v_has"></a>
#### has 
Returns true if the **object** has a property with the name **value** _(The validator is mostly a wrapper function of Object.prototype.hasOwnProperty)_
```typescript
has (object: any, value: string | number | symbol, nilCheck?: boolean)
```
|Parameter|Type|Optional|Default Value|Description|
|--|--|--|--|--|
|object|any|No|-|
|value|string\|number\|symbol|No|-|
|nilCheck|boolean|Yes|true|If set to true the validator will check first if the **object** is _null_ or _undefined_ and thus avoiding potential errors

<a name="v_is_array"></a>
#### :small_orange_diamond: isArray
Returns true if the value is an array
```typescript
isArray (value: any)
```
|Parameter|Type|Optional|Default Value|Description|
|--|--|--|--|--|
|value|any|No|-|

<a name="v_is_array_of"></a>
#### :small_orange_diamond: isArrayOf
Returns true if the value is an array and all of its items match the supplied predicate function
```typescript
type Predicate: (value: any) => boolean;

isArrayOf (value: any, predicate: Predicate)
```
|Parameter|Type (Typescript)|Optional|Default Value|Description|
|--|--|--|--|--|
|value|any|No|-|
|predicate|Predicate|No|-|A function which will run on each element of the array which takes an element as an argument and returns a boolean

Examples:

```javascript
import { isArrayOf, isString, isNotEmptyString } from 'tinyvalid';

const arr = ['   ', 'This is a string'];

// Check if the value is an array on strings
// Expected result: true
const arrayOfStrings = isArrayOf(arr, isString);

// Check if the value is an array of non-empty strings
// Expected result: false - since the first element is a string of spaces which after getting
// trimmed by the isNotEmptyString validator will not pass the predicate fuction
const arrayOfNonEmptyStrings = isArrayOf(arr, (val) => isNotEmptyString(val, true));

// Check if the value is an array of strings with less than 20 characters
// Expected Result: true
const arrayOfShortStrings = isArrayOf(arr, (val) => isString(val) && val.length < 20);
```

<a name="v_is_bool"></a>
#### :small_orange_diamond: isBool
Returns true if the value is a boolean
```typescript
isBool (value: any)
```
|Parameter|Type (Typescript)|Optional|Default Value|Description|
|--|--|--|--|--|
|value|any|No|-|

<a name="v_is_decimal"></a>
#### isDecimal
Returns true if the value is a decimal number
```typescript
isDecimal (value: any)
```
|Parameter|Type (Typescript)|Optional|Default Value|Description|
|--|--|--|--|--|
|value|any|No|-|

<a name="v_is_empty"></a>
#### isEmpty
Returns true if the value is null or undefined or an empty string or an empty object or an empty array
```typescript
isEmpty (value: any)
```
|Parameter|Type (Typescript)|Optional|Default Value|Description|
|--|--|--|--|--|
|value|any|No|-|

<a name="v_is_empty_array"></a>
#### isEmptyArray
Returns true if the value is an empty array
```typescript
isEmptyArray (value: any)
```
|Parameter|Type (Typescript)|Optional|Default Value|Description|
|--|--|--|--|--|
|value|any|No|-|

<a name="v_is_empty_object"></a>
#### isEmptyObject
Returns true if the value is an empty object
```typescript
isEmptyObject (value: any)
```
|Parameter|Type (Typescript)|Optional|Default Value|Description|
|--|--|--|--|--|
|value|any|No|-|

<a name="v_is_empty_string"></a>
#### isEmptyString
Returns true if the value is an empty string
```typescript
isEmptyString (value: any, trim?: boolean)
```
|Parameter|Type (Typescript)|Optional|Default Value|Description|
|--|--|--|--|--|
|value|any|No|-|
|trim|boolean|Yes|true|If set to true the validator will trim the value before checking if it's an empty string

<a name="v_is_finite"></a>
#### isFinite
Returns true if the value is a finite number
```typescript
isFinite (value: any)
```
|Parameter|Type (Typescript)|Optional|Default Value|Description|
|--|--|--|--|--|
|value|any|No|-|

<a name="v_is_func"></a>
#### isFunc
Returns true if the value is a function
```typescript
isFunc (value: any)
```
|Parameter|Type (Typescript)|Optional|Default Value|Description|
|--|--|--|--|--|
|value|any|No|-|

<a name="v_is_infinite"></a>
#### isInfinite
Returns true if the value is infinity (positive or negative)
```typescript
isInfinite (value: any)
```
|Parameter|Type (Typescript)|Optional|Default Value|Description|
|--|--|--|--|--|
|value|any|No|-|

<a name="v_is_integer"></a>
#### isInteger
Returns true if the value is an integer
```typescript
isInteger (value: any)

// Shorthand of isInteger
isInt (value: any)
```
|Parameter|Type (Typescript)|Optional|Default Value|Description|
|--|--|--|--|--|
|value|any|No|-|

<a name="v_is_negative_integer"></a>
#### isNegativeInteger
Returns true if the value is a negative integer
```typescript
isNegativeInteger (value: any, includeZero?: boolean)
```
|Parameter|Type (Typescript)|Optional|Default Value|Description|
|--|--|--|--|--|
|value|any|No|-|
|includeZero|boolean|Yes|false|Returns also true if the value is zero

<a name="v_is_nil"></a>
#### :small_orange_diamond: isNil
Returns true if the value is null or undefined
```typescript
isNil (value: any)
```
|Parameter|Type (Typescript)|Optional|Default Value|Description|
|--|--|--|--|--|
|value|any|No|-|

<a name="v_is_not_array"></a>
#### isNotArray
Returs true if the value is not an array
```typescript
isNotArray (value: any)
```
|Parameter|Type (Typescript)|Optional|Default Value|Description|
|--|--|--|--|--|
|value|any|No|-|

#### isNotEmptyArray
Returns true if the value is not an empty array
```typescript
isNotEmptyArray (value: any)
```
|Parameter|Type (Typescript)|Optional|Default Value|Description|
|--|--|--|--|--|
|value|any|No|-|

<a name="v_is_not_empty_string"></a>
#### isNotEmptyString
Returns true if the value is not an empty string
```typescript
isNotEmptyString (value: any)
```
|Parameter|Type (Typescript)|Optional|Default Value|Description|
|--|--|--|--|--|
|value|any|No|-|
|trim|boolean|Yes|true|If set to true the validator will trim the value before checking if it's not an empty string

<a name="v_is_not_null"></a>
#### isNotNull
Returns true if the value is not null
```typescript
isNotNull (value: any)
```
|Parameter|Type (Typescript)|Optional|Default Value|Description|
|--|--|--|--|--|
|value|any|No|-|

<a name="v_is_not_string"></a>
#### isNotString
Returns true if the value is not a string
```typescript
isNotString (value: any)
```
|Parameter|Type (Typescript)|Optional|Default Value|Description|
|--|--|--|--|--|
|value|any|No|-|

<a name="v_is_null"></a>
#### :small_orange_diamond: isNull
Returns true if the value is null
```typescript
isNull (value: any)
```
|Parameter|Type (Typescript)|Optional|Default Value|Description|
|--|--|--|--|--|
|value|any|No|-|

<a name="v_is_number"></a>
#### :small_orange_diamond: isNumber
Returns true if the value is a number (and not NaN)
```typescript
isNumber (value: any)
```
|Parameter|Type (Typescript)|Optional|Default Value|Description|
|--|--|--|--|--|
|value|any|No|-|

<a name="v_is_object"></a>
#### isObject
Returns true if the value is an object
```typescript
isObject (value: any, excludeArrays?: boolean)
```
|Parameter|Type (Typescript)|Optional|Default Value|Description|
|--|--|--|--|--|
|value|any|No|-|
|excludeArrays|boolean|Yes|true|If set to false the validator will count arrays as objects (since in Javascript the *typeof* an array returns *object*)

<a name="v_is_positive_integer"></a>
#### isPositiveInteger
Returns true if the value is a positive integer
```typescript
isPositiveInteger (value: any, includeZero?: boolean)
```
|Parameter|Type (Typescript)|Optional|Default Value|Description|
|--|--|--|--|--|
|value|any|No|-|
|includeZero|boolean|Yes|false|Returns also true if the value is zero

<a name="v_is_string"></a>
#### :small_orange_diamond: isString
Returns true if the value is a string
```typescript
isString (value: any)
```
|Parameter|Type (Typescript)|Optional|Default Value|Description|
|--|--|--|--|--|
|value|any|No|-|

<a name="v_is_undefined"></a>
#### :small_orange_diamond: isUndefined
Returns true if the value is undefined
```typescript
isUndefined (value: any)
```
|Parameter|Type (Typescript)|Optional|Default Value|Description|
|--|--|--|--|--|
|value|any|No|-|