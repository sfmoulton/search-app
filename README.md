# Find-Dining Search Application

The **Fine-Dining App** has been created to allow users to search for the top restaurants in their chosen city, and also sort by establishment type. Whether they are looking for lunch, a take-away or a pub, Find-Dining helps the user to make their food decision, from the best options their city has to offer!

The app has been designed to be straightforward and easy for the user to access, with clear colours, fonts and buttons to create an accessible UI.

This app was my first foray into React Native, having previously used React to create my own NC-News project (which is also available on GitHub).

Should you have any questions or would like any further information, please get in touch!

## Creating the app

As a React-Native beginner, I chose to install **Expo** to start the project. Expo is a toolchain built around React Native which helps to quickly start a universal native app for Android, iOS and the web with JavaScript and React. After following tutorials and reading numerous articles, it appeared that Expo offered a great developer experience for developers with no prior experience, which was ideal for the project.

I also used the 'Expo' app on my own Android device during development, to emulate the application.

To start the project yourself, please run the below commands (this requires **Node 10 LTS** or greater installed):

```js
npm install -g expo-cli

git clone https://github.com/sfmoulton/search-app.git

cd search-app

npm start
```

I then used the Zomato API to make the restaurant information requests based on location. An initial request has to be made following a users search for the corresponding _city_id_, after which the relevant requests for the restaurant data could be made.

In order to access the Zomato API I registered for a developer API key, which can be done on the following site: https://developers.zomato.com/api

To make your own API requests, you will need to create your own '.env' file in the root directory, which contains your own API key in the following format:

```js
ZOMATO_API_KEY=*Your key here*
```
### Testing

Jest has also been used for unit testing in the application. These tests can be run using the below command:

```js
npm test
```

### Images

Below are example images of the application - with the Home Screen, Search Screen and the Individual Restaurant Information.

![Find-Dining-Home](https://user-images.githubusercontent.com/57372099/80339191-03c49000-8856-11ea-9232-69c30f60fed5.png)

![Find-DIning-Search-Screen](https://user-images.githubusercontent.com/57372099/80366601-70a14f80-8881-11ea-9bd8-71b4a8d55f41.png)

![Find-Dining-Restaurant-Info](https://user-images.githubusercontent.com/57372099/80366651-831b8900-8881-11ea-8417-989f0a1265d9.png)