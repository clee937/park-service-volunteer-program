# Park Service Volunteer Program

## About

Park Service Volunteer Program helps maintain two different parks by helping to keep a record of the volunteers, their maintenance activities, and hours worked. The project focuses on using type guards to combine, verify, sum, and sort the parks’ volunteers and their hours of contribution.

## Features and code breakdown

- _raccoon-meadows-log.ts_ and _wolf-point-log.ts_ contain data and types for the volunteers of each park. This data is exported and imported for use in _index.ts_.
- The `combineVolunteers()` function takes an array of the volunteers of different types from both parks as an argument and uses the `map()` and `forEach()` methods to combine them into a single list that matches the `Volunteers` type. The function uses a type guard together with the `parseInt()` function to check and convert a volunteer's id from a `string` to a `number` where necessary.
- Helper functions, `isVerified()`, `getHours()`, are created for use in `calculateHours()`.
- `isVerified()` uses a type guard with the `typeof` operator to check whether the hours for each volunteer has been verified before adding it to the total.
- `getHours()` uses a type guard with the `in` operator to ensure the correct property is accessed for each volunteer's hours since they are recorded under different property names for each of the parks.
- The `calculateHours()` function takes in an array of the combined volunteers as its argument. It uses the `map()` and `forEach()` methods together with the `isVerified()` and `getHours()` helper functions to check and retrieve the number of hours for each volunteer. The function returns a new array of volunteers along with their verified number of hours.
- The `compareByHours()` is a custom comparator function. It is passed to the array `sort()` method and allows for the results to be sorted by the number of hours in descending order.

## Preview

![park-service-volunteer-program](/park-service-volunteer-program.png "image of park service volunteer program")

## Technologies used

- TypeScript
