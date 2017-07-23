[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Vending Machine Kata: Drinking the ngCola?

## Introduction

In this exercise you will build the brains of a vending machine.  It will accept money, maintain
inventory, and dispense products.  All the things that you might expect a vending machine to accomplish.

The point of this kata is to provide a larger than trivial exercise that will enhance your understanding of Typescript and Angular 2.  A significant
portion of the effort will be in determining how to create your components and interact with the provided Angular services for managing communication across components and external API calls.

## Setup

Prerequisites: _@angular/cli_

Install dependencies:
```
npm install
```

Install `json-server`:
```
npm install -g json-server
```

Start the API Server:
```
npm run api
```
NOTE: Data for the API server is found in `db.json` in the root project folder.

Start the app:
```
npm start
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Features

As a professional software engineer, you will most likely be working off of stories. We have split the work of creating our vending machine into three user stories.

### Watch: Insert Coin

_As a vendor_  
_I want a vending machine that accepts coins_  
_So that I can collect money from the customer_ 

- The vending machine will accept valid coins (nickels, dimes, and quarters). Coins represented by three buttons.
- When a valid coin is inserted (button pressed) the amount of the coin will be added to the current balance and the machine's display will be updated.
- When there are no coins inserted, the machine displays INSERT COIN.

### Code Together: Select Item

_As a vendor_  
_I want customers to select items_  
_So that I can give them an incentive to put money in the machine_

- The machine shows a list of items with their price and remaining inventory. List represented as radio button group.
- List of items is populated from item.service, which uses the external API to return an array of item objects.

### Pair Lab: Dispense Item

_As a customer_  
_I want to be told whether my item has been dispensed_  
_So that I can know whether my transaction has completed_  

- A button labeled 'Dispense' when pressed dispenses the selected item if there is enough current balance and the selected item has remaining stock.
- The machine responds with "Insufficient Balance" or "No Inventory Remaining," respectively if there is an error, and cancels dispensing of item.
- The machine responds with success message (developer's choice :) ) when item is successfully dispensed.
- The machine deducts item cost after successfully dispensing item.

Please make liberal use of this [cheatsheet](https://angular.io/docs/ts/latest/guide/cheatsheet.html).

## References

-   [Angular 2 Cheatsheet](https://angular.io/docs/ts/latest/guide/cheatsheet.html)
-   [Angular-cli github page](https://github.com/angular/angular-cli)
-   [Official Angular Documentation](https://github.com/angular/angular-cli)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
