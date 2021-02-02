# Bikemap Challenge

This is a solution for the Bikemap Challenge

Deployed to [Netlify](https://bikemap-challenge.netlify.app)

## Getting started

1. Run `yarn install`
2. Run `yarn start`
3. Access the app on http://localhost:3000 (or 300x if 3000 is already in use)

## Requirements and tasks

```
Create a web client for [this API](http://api.citybik.es/v2/) listing bike sharing networks and their stations. Users want to see if there is bike sharing in the city they live in or visit and find information about it. The app may have the following features:

- List the bike sharing networks
- Filter / search the list to find your city more quickly
- Show relevant information about a bike sharing network
- List the stations of a network
- Link stations or networks to an external map service to show the location

```

## Solution

I have managed to create the solution for all the tasks described above. 👆

The app fetches the given `API`, and retreives networks presented in a `NetworkCardList` consisting of `NetworkCard` items.

With typing in the `SearchBar` the user has the ability to filter the results.

By clicking on a `NetworkCard` the user will see a `NetworkDetail` component, which is a modal and is shows the user some more detailed infos about the bike networks and the stations that are added to the given network.

### Libraries / Frameworks

For the whole solution I have used `React.js` with JavaScript.

For maintaining a clear and consistent UI I have used `@chakra-ui/react` as a UI library which has some default properties and can be styled really quickly and easily.
The famous CSS-in-JS library, `styled-components` was the other option I was thinking of using instead of a UI component library, but I thought `chakra` is also pretty readable, customizable and extendable if needed, and I can create the solution way faster in a more consistent way.

Instead of the built-in fetch function I used `axios` for the API requests.

For presenting the map I have used `mapboxgl`.

### Trade-offs / Thoughts / Issues

I wanted to give you a sneak-peek of how I write my code, and didn't want to overcomplicate or overengineer things with writing my whole components with `styled-components` or include more unnecessary libraries than I used.

The `<App />` and `<NetworkDetail />` component could be decomposed into more components, for example another `<StationCard />` component could be introduced.

We highly rely on the API, and since the API isn't doing any pagination, we get back 670+ networks which performancewise isn't the most optimal, so I would introduce some kind of pagination to the frontend in order to show only 10-20 results at a time.

## Conclusion

I really liked the test, it became really fun, and after some styling it started to look really nice. Would love to extend the project in the future 😶

I'm looking forward to hearing your feedback!
