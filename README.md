# Countdown

## Improved countdown
The below component was designed to count down the days until our CTO's birthday, but it still needs some work. How can you make the implementation better?
The countdown has a fixed date 2020-12-24T00:00:00, it would be a good idea to make it dynamic as the countdown is not working with the current date. Moreover, the countdown calculation is done manually and it is subject to programmer errors. In addition, JS is not really prepared to natively deal with dates because it is not rich enough for our modern needs. I would use the library date-fns to improve the current code and set the basis for future improvements.

**Do a critique:** The current implementation isn't perfect. How could it be improved?
- Use a modern library to manage dates (no need to reinvent the wheel)
- Exploit the advantages of React
- Dynamic birthday
- Semantic html
- Copywriting: use words instead of numbers when the number is less than 10
- Improvement of UX / UI
- Delete comma after Countdown component

* Pick an area of improvement to implement.
- Usage of modern libraries: hooks and date-fns

* What would happen to the current code if the date were changed, the page layout was changed or the format was changed?
- Depending on how it is changed. If we set the date with year to 2021 the countdown works. If the format is changed (ex: dd/mm/yy) the countdown does not work. The layout has some level of adaptation, the header is always at least 100px high and can be taller depending on the size of the screen. The title 'Countdown' has relative size so it is dynamic. The text inside span is always the same size.

* Does the current implementation follow best practices for HTML, CSS, JS and React?
It could improve using semantic html, deleting unused files and classnames, deleting the comma, and deleting comments when uploading to production.

**Spice it up:** Let's be honest, this countdown could be a whole lot more exciting.

* What could you do to create a greater sense of urgency?
Change size, color, animation depending on how much time is left for the birthday. If there are many days left a blue color could give a sense of relaxation, when there are not too many days left a yellow color could give a sense of alarm, and when there are few days left a red color and bigger typography could give a sense of urgency. We can also play with the background and add animations. Another good idea could be to send push notifications via email to the team members so that they remember this important event.

* How would you make this countdown more aesthetically pleasing?
Depending on the user persona and the objective of the project, I would adapt the typography, colors, animations, size, copywriting, margin. Hypothetically, if the user persona was the CTO of Left Field Labs:
- Get his real birthday (not sure if it is Christmas Eve)
- Change the typography to Matter becuase it is the one of the landing page of Left Field Labs
- Change the position of the countdown to the center of the screen
- If there are 0 days, hours or minutes left do not write the text. Only write something when there is a quantity left
- Change the title, instead of countdown write how old the CTO will become
- On the birthday, instead of the countdown I would write 'Happy Birthday Eric Lee!'
- In general, I would use the landing page of LFL as inspiration. Use their colors, font size, etc

* Trust your design instincts, and explain how your design choices impact the user experience
Given the hypothetical case that the user persona is Eric Lee, it would make him feel special. He would feel that the entire app was created to make him have a happy birhtday. He would also be glad to be part of an amazing team and would feel the support of different team members. The user experience is not limited to the app, he would also feel the hype as his birthday approach and on the birthday he would experience the enjoynment of finally cutting the cake. 

## Notes
Given time restrictions, I will not be able to develop all the features I would like. I will focus on functionality: implement react hooks and date-fns library. Also, I will write sematic html.


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
