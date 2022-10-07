# Boba Journal

A journal to log your boba experiences, rank your all-time favorite boba stores, and search for nearby boba stores.

**NOTE: The project uses [React-Google-Maps](https://react-google-maps-api-docs.netlify.app) for integrating the Google Maps API with React. This relies on script injection to HTML which may be blocked by some adblockers on browsers.**

<img width="1167" alt="Screenshot" src="https://user-images.githubusercontent.com/110881795/194399913-d61dfe31-7506-4ab9-b064-40f5fd93d7b2.PNG">

## Technologies Used

- React with Typescript using the Redux-Typescript template from [Create React App](https://create-react-app.dev)
- [Redux](https://redux.js.org) for state management, specifically using [Redux Toolkit](https://redux-toolkit.js.org) for easier abstraction and less boilerplate for configuring slices and reducers.
- [React Router](https://reactrouter.com/en/main) for setting up pseudo-routing. The overall project is still a single page application.
- [Material UI](https://mui.com/material-ui/getting-started/overview/) for ready-made and easy to set up UI components. Additionally, [Emotion](https://emotion.sh/docs/introduction), the default CSS-in-JS framework for Material UI was used so that the project is almost entirely written in Typescript. A minor additional UI library, [React-Google-Maps](https://react-google-maps-api-docs.netlify.app) was also used for fixed sizing list.
- Google Maps Javascript API, Google Places API, and Google Geocoding API from the [Google Maps Platform](https://developers.google.com/maps) for fetching boba store locations. The external library, [React-Google-Maps](https://react-google-maps-api-docs.netlify.app) was used to integrate the Google API with React.

## Getting Started / Installation Instructions

1. Fork and clone this repository.
2. Run `npm install`
3. Run `npm start`

## User Stories

As a user...

- I would like to be able to see all the boba places near me in a list
- I would like to be able to have an interactive map with markers that show where the boba places are located
- I would like to be able to record entries in a journal of my experiences at various boba places and to be able to see them
- I would like my records to appear next to places I have been to nearby
- I would like to be able to see a tierlist of my all-time top boba places
- I would like my records to be saved so I can see them the next time I open the page

## Wireframes

![image](https://user-images.githubusercontent.com/110881795/194472164-728f314c-7223-4d56-8a42-f6d34f3ab6ca.png)
![image](https://user-images.githubusercontent.com/110881795/194472180-f65234c8-840d-486b-8d45-36a7a4bb14e7.png)
![image](https://user-images.githubusercontent.com/110881795/194472189-846eb525-8d05-47fd-9a9b-e2f8d366b15f.png)

## Reflections / Takeaways

- Redux state management is easily my favorite takeaway and learning experience from the project. Redux Toolkit's documentation made the learning Redux extremely easy to pick up. Redux's abstraction pattern allowed me to separate the logic of state and data management with the individual UI components while controlling which components re-rendered, allowing an enjoyable developer experience. Additionally, RTK's built in EntityAdapter API taught me how to set up normalized, relational data and perform CRUD operations easily.
- Material UI allowed me to easily set up UI components in the project's short timeframe. Additionally, Emotion allowed me to easily set up dynamic styling in component files, which are already UI-focused thanks to Redux's abstraction. I did begin to struggle with overriding its default styling, and for my next project, I would probably choose a different UI library. Additionally, Typescript's linter became extremely slow after installing Material UI. 
- React Router was only used to set up simple pseudo-routes and navigation. I would like to eventually come back to explore more of this library.
- The React Google Maps library was very challenging to use, and it was extremely hard to find resources about it online. React-Window was also pretty hard to integrate as all of it's documentation uses the now-outdated React class component structure. I did learn that looking at Typescript's type modules for these libraries are a great source of quick documentation.

## Contribution Guidelines

Feel free to submit proposal changes and feature ideas by submitting an issue ticket. **This project is definitely still WIP, and I will continue updating it.**

