
# Natours-node.js--Rajan                                

**My 1 Node.js Api & as well PostMan Deploy**
this is jonsa couse base Natour api

### Indices

* [Users 👩👨👧🧒👵](#users-👩👨👧🧒👵)

  * [GET All User == role=user  {{admin Restrict}}](#1-get-all-user-==-role=user--{{admin-restrict}})
  * [GET One User with ID {{admin Restrict}}](#2-get-one-user-with-id-{{admin-restrict}})
  * [Update User {{admin Restrict}} {{Update  user-to-admin}}{{also password chage it}}](#3-update-user-{{admin-restrict}}-{{update--user-to-admin}}{{also-password-chage-it}})
  * [Delete User {{Admin Restrict}}](#4-delete-user-{{admin-restrict}})
  * [Get Current user {{Auth Restrict}} {not password}](#5-get-current-user-{{auth-restrict}}-{not-password})
  * [Update cueernt User {{Auth Restrict}} {{Not user-to-admin}}{{Not password}}](#6-update-cueernt-user-{{auth-restrict}}-{{not-user-to-admin}}{{not-password}})
  * [Delete me {{ Auth Restrict}}](#7-delete-me-{{-auth-restrict}})

* [Tours 🏖🏕🚓🚓🚗🚗🚌🚌🌈🌈🌿🌿](#tours-🏖🏕🚗🚗🚌🚌🌈🌈🌿🌿)

  * [Refrect get all tours](#1-refrect-get-all-tours)
  * [GET All Tours {Any}](#2-get-all-tours-{any})
  * [GET One Tours by ID {{ Any}}](#3-get-one-tours-by-id-{{-any}})
  * [Create New Tour { Admin, Lead Guid }}](#4-create-new-tour-{-admin,-lead-guid-}})
  * [Update Tour {{ Admin, Lead Guid}}](#5-update-tour-{{-admin,-lead-guid}})
  * [Delete Tour {{ Admin, Lead Guid}}](#6-delete-tour-{{-admin,-lead-guid}})
  * [TOP 5 cheap Tours {{ Any }}](#7-top-5-cheap-tours-{{-any-}})
  * [GET monthy plan {{ Admin, All Guid}}](#8-get-monthy-plan-{{-admin,-all-guid}})
  * [GET Tours stats {Any}}](#9-get-tours-stats-{any}})
  * [Get Tours Within Radius {{ Any }}](#10-get-tours-within-radius-{{-any-}})
  * [Get Distances to Tours From Point {{ Any }}](#11-get-distances-to-tours-from-point-{{-any-}})

* [Authentication🎎🎎🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧](#authentication🎎🎎🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧)

  * [SIGN UP user](#1-sign-up-user)
  * [LogIn User](#2-login-user)
  * [Forgot Password](#3-forgot-password)
  * [Reset Password](#4-reset-password)
  * [Update Current User Password](#5-update-current-user-password)

* [Reviews 🎇🎆✨🎉🎊](#reviews-🎇🎆✨🎉🎊)

  * [GET All Reviews {](#1-get-all-reviews-{)
  * [GET Review with ID {Auth restict to}}](#2-get-review-with-id-{auth-restict-to}})
  * [Creat New Review  {{restrict to User}}](#3-creat-new-review--{{restrict-to-user}})
  * [Update Review --{{ User, Admin }}](#4-update-review---{{-user,-admin-}})
  * [Delete Review {{ User, Admin Restict to}}](#5-delete-review-{{-user,-admin-restict-to}})

* [Tours/Reviews 🎑🎑🎑🎑🎇🎆🎆🎆](#toursreviews-🎑🎑🎑🎑🎇🎆🎆🎆)

  * [Create New Review on Tour](#1-create-new-review-on-tour)
  * [Get All Reviews on Tour  {{ Auth }}](#2-get-all-reviews-on-tour--{{-auth-}})


--------


## Users 👩👨👧🧒👵
**User End Point that is all **



### 1. GET All User == role=user  {{admin Restrict}}



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/users
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| role | user |  |



### 2. GET One User with ID {{admin Restrict}}



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/users/5c8a1ec62f8fb814b56fa183
```



### 3. Update User {{admin Restrict}} {{Update  user-to-admin}}{{also password chage it}}



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: {{URL}}/api/v1/users/5c8a23c82f8fb814b56fa18d

```



***Body:***

```js        
{
	"role": "admin",
	"password": "pasd1234"
}
```



### 4. Delete User {{Admin Restrict}}



***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: {{URL}}/api/users/5cd1a3b341c1d027493464e3
```



***Body:***

```js        
{
	"name": "aminstator"
}



```



### 5. Get Current user {{Auth Restrict}} {not password}



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/users/me
```



### 6. Update cueernt User {{Auth Restrict}} {{Not user-to-admin}}{{Not password}}



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: {{URL}}/api/v1/users/updateMe
```



***Body:***

```js        
{
	"name": "Jonas Schmedtmandddn",
	"role": "admin"
}
```



### 7. Delete me {{ Auth Restrict}}



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}api/v1/users/deleteMe

```



## Tours 🏖🏕🚓🚓🚗🚗🚌🚌🌈🌈🌿🌿
**TOur end point all**



### 1. Refrect get all tours



***Endpoint:***

```bash
Method: GET
Type: RAW
URL: https://www.natours.dev/api/v1/tours
```



***Body:***

```js        
{
    "name": "i am the boss"
}
```



### 2. GET All Tours {Any}



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/tours
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| duration[gte] | 7 |  |
| sort | price |  |



### 3. GET One Tours by ID {{ Any}}



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/tours/5c88fa8cf4afda39709c2955
```



### 4. Create New Tour { Admin, Lead Guid }}



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/tours
```



***Body:***

```js        
{
    "name": "New Test Tour",
    "duration": 1,
    "maxGroupSize": 1,
    "difficulty": "easy",
    "price": 200,
    "summary": "Test tour",
    "imageCover": "tour-3-cover.jpg"
 }
```



### 5. Update Tour {{ Admin, Lead Guid}}



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: {{URL}}/api/v1/tours/5c88fa8cf4afda39709c2955
```



***Body:***

```js        
{
	"price": 500,
	"name": "The Sea Explorer 1.1"
}
```



### 6. Delete Tour {{ Admin, Lead Guid}}



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/v1/tours/5c88fa8cf4afda39709c2955
```



### 7. TOP 5 cheap Tours {{ Any }}



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/tours/top-5-cheap
```



### 8. GET monthy plan {{ Admin, All Guid}}



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/tours/monthly-plan/2021
```



### 9. GET Tours stats {Any}}



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/tours/tour-stats
```



### 10. Get Tours Within Radius {{ Any }}



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/tours/tours-within/200/center/34.111745,-118.113491/unit/mi
```



### 11. Get Distances to Tours From Point {{ Any }}



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/tours/distances/34.111745,-118.113491/unit/mi
```



## Authentication🎎🎎🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧🧧



### 1. SIGN UP user



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/users/signup
```



***Body:***

```js        
{
	"name": "rajan22222",
	"email": "raja333324442ncn2dd13332@gmail.com",
	"password": "{{password}}",
	"passwordConfirm": "{{password}}",
	"role": "admin"
}
```



### 2. LogIn User



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/users/login
```



***Body:***

```js        
{
	"email": "admin@natours.io",
	"password": "{{password}}"
}
```



### 3. Forgot Password



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/users/forgotPassword
```



***Body:***

```js        
{
	"email": "rajan123@gmail.com"
}
```



### 4. Reset Password



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: {{URL}}/api/v1/users/resetPassword/1652bfc347b939d3d19cea352d231d6dbe6dfef0884e68e6c61629019c44b9ca
```



***Body:***

```js        
{
	"password": "{{password}}",
	"passwordConfirm": "{{password}}"
}

```



### 5. Update Current User Password



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: {{URL}}/api/v1/users/updateMyPassword
```



***Body:***

```js        
{
	"passwordCurrent": "{{password}}",
	"password": "newpassword",
	"passwordConfirm": "newpassword"
}
```



## Reviews 🎇🎆✨🎉🎊



### 1. GET All Reviews {



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/reviews {{ Auth Restict to}
```



### 2. GET Review with ID {Auth restict to}}



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/reviews/5c8a3e63e12c44188b4dbc5b
```



### 3. Creat New Review  {{restrict to User}}


Tour id of that toue.
User id for that User.=that user auto add.=of that token
i am my self add admin as well--couse learnin time only user that but i add it.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}api/v1/reviews
```



***Body:***

```js        
{
	"review": "Loved it",
	"rating": 4,
	"tour": "5c88fa8cf4afda39709c2951",
	"user": "5cd14baa326b861fab416f56"
}
```



### 4. Update Review --{{ User, Admin }}



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: {{URL}}/api/v1/reviews/5cd2fa8671a96a383912d910
```



***Body:***

```js        
{
	"rating": 5
}
```



### 5. Delete Review {{ User, Admin Restict to}}



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/v1/reviews/5cd2f257db447337b3ff3f00
```



## Tours/Reviews 🎑🎑🎑🎑🎇🎆🎆🎆



### 1. Create New Review on Tour



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/tours/5c88fa8cf4afda39709c2955/reviews
```



***Body:***

```js        
{
	"rating": 5,
	"review": "monther fucker"
}
```



### 2. Get All Reviews on Tour  {{ Auth }}



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/tours/5c88fa8cf4afda39709c2955/reviews
```



---
[Back to top](#natours-nodejs--Rajan)
> Made with ; by [Rajan](https://github.com/rajan-savaliya) | Generated at: 2020-04-14 16:31:57 by [docgen](https://github.com/rajan-savaliya)
