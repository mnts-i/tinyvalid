# TinyValid
TinyValid is a Typescript written validation library providing various lightweight validation functions.

#### Table of Contents:
 - [How to use](#usage)
 - [Validators:](#validators)
	 - [isArray](#v_is_array)
	 - [isArrayOf](#v_is_array_of)
	 - [isBool](#v_is_bool)
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
	 - [isNil](#v_is_nul)
	 - [isNotArray](#v_is_not_array)
	 - [isNotEmptyArray](#v_is_not_empty_array)
	 - [isNotEmptyString](#v_is_not_empty_string)
	 - [isNotNull](#v_is_not_null)
	 - [isNotString](#v_is_not_string)
	 - [isNull](#v_is_null)
	 - [isObject](#v_is_object)
	 - [isPositiveInteger](#v_is_positive_integer)
	 - [isString](#v_is_string)
	 - [isUndefined](#v_is_undefined)

<a name="usage"></a>
## How to use
Install the library by running 
```
npm install --save tinyvalid
```

You can then import the whole libraryQ
```typescript
import * from 'tinyvalid';
```
or you can import only the validators you need and thus reducing your bundle's final size
```typescript
import { isInteger } from 'tinyvalid/validators/isInteger';
import { isObject } from 'tinyvalid/validators/isObject';
import { isEmptyString } from 'tinyvalid/validators/isEmptyString';
```

<a name="validators"></a>
## Validators

<a name="v_is_array"></a>
#### isArray
Returns true if the value is an array
```typescript
isArray (value: any)
```
|Parameter|Type|Optional|Default Value|Description|
|--|--|--|--|--|
|value|any|No|-|

<a name="v_is_array_of"></a>
#### isArrayOf
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
#### isBool
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
#### isNil
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
#### isNull
Returns true if the value is null
```typescript
isNull (value: any)
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
#### isString
Returns true if the value is a string
```typescript
isString (value: any)
```
|Parameter|Type (Typescript)|Optional|Default Value|Description|
|--|--|--|--|--|
|value|any|No|-|

<a name="v_is_undefined"></a>
#### isUndefined
Returns true if the value is undefined
```typescript
isUndefined (value: any)
```
|Parameter|Type (Typescript)|Optional|Default Value|Description|
|--|--|--|--|--|
|value|any|No|-|