[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Vending Machine Exercise: Drinking the ngCola?

## Introduction

In this exercise, you will build the brains of a vending machine. It will accept money, maintain inventory, and dispense products — all the things that you might expect a vending machine to do.

The point of this exercise is to enhance your understanding of TypeScript and Angular 2. A significant portion of your effort will be devoted to determining how to create your components and interact with the Angular services provided for managing communication across components and external API calls.

## Set Up

Prerequisites: _@angular/cli_

Install dependencies:
```
npm install
```

Install `json-server`:
```
npm install -g json-server
```

Start the API server:
```
npm run api
```
**Note**: Data for the API server is found in `db.json` in the root project folder.

Start the app:
```
ng serve
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Features

As a professional software engineer, you'll most likely be working off of stories. We have split the task of creating our vending machine into three user stories.

### Watch: Insert Coin

_As a vendor, I want a vending machine that accepts coins so I can collect money from the customer._ 

- The vending machine will accept valid coins (nickels, dimes, and quarters). Coins are represented by three buttons.
- When a valid coin is inserted (button pressed) the value of the coin will be added to the current balance, and the machine's display will update.
- When there are no coins inserted, the machine will display INSERT COIN.

### Code Together: Display Items

_As a vendor, I want customers to see what they can buy so I can give them an incentive to put money in the machine._

- The machine shows a list of items with their prices and remaining inventory.
- The list of items is populated from `item.service`, which uses the external API to return an array of item objects.

### Code Together: Select Item

_As a vendor, I want customers to be able to select an item so I know how much money to charge them and which item I should dispense._

- The machine includes a text input that accepts item codes.
- The text input should not accept more than two characters.
- The machine responds with "{{item.name}} selected" and selects an item if a user enters a code that matches that item's code.

### Pair Lab: Dispense Item

_As a customer, I want to be told whether my item has been dispensed so I can know whether my transaction has been completed._  

- When pressed, a button labeled "Dispense" dispenses the selected item if there is enough current balance and the selected item has remaining stock.
- The machine responds with "No Item Selected" if the user has not yet selected an item.
- The machine responds with "Insufficient Balance" or "No Inventory Remaining," respectively, if there is an error and cancels dispensing the item.
- The machine responds with a success message (of your choice) when the item is successfully dispensed.
- The machine deducts the item cost after successfully dispensing item.

Please make liberal use of this [cheat sheet](https://angular.io/docs/ts/latest/guide/cheatsheet.html).

## References

-   [Angular 2 Cheat Sheet](https://angular.io/docs/ts/latest/guide/cheatsheet.html)
-   [Angular CLI GitHub Page](https://github.com/angular/angular-cli)
-   [Official Angular Documentation](https://github.com/angular/angular-cli)

## [License](LICENSE)

1)  All content is licensed under a CC­BY­NC­SA 4.0 license.
2)  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
