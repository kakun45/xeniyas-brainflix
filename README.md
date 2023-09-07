# BrainFlix
# Home page

Desktop 

<img width="850" alt="Screen Shot 2023-09-06 at 10 24 44 PM" src="https://github.com/kakun45/xeniyas-brainflix/assets/53381916/b89ca100-796c-4f27-831e-47ab6d301fdb">

Tablet

<img width="864" alt="Screen Shot 2023-09-06 at 10 20 34 PM" src="https://github.com/kakun45/xeniyas-brainflix/assets/53381916/4716a1de-85f6-42ea-9936-9e91acaea439">

Mobile

<img width="866" alt="Screen Shot 2023-09-06 at 10 20 50 PM" src="https://github.com/kakun45/xeniyas-brainflix/assets/53381916/687d888d-ef88-4ad3-b921-b6b00ac224b3">

# Video Upload page

Desktop

<img width="1280" alt="Screen Shot 2023-09-06 at 10 22 02 PM" src="https://github.com/kakun45/xeniyas-brainflix/assets/53381916/19d1b3a9-7169-401b-885a-d8a850954700">

Tablet

<img width="1410" alt="Screen Shot 2023-09-06 at 10 21 23 PM" src="https://github.com/kakun45/xeniyas-brainflix/assets/53381916/b717da00-23d2-45db-bd2a-a7554a70985c">

Mobile

<img width="1377" alt="Screen Shot 2023-09-06 at 10 21 41 PM" src="https://github.com/kakun45/xeniyas-brainflix/assets/53381916/d127d5c1-eb7e-447d-ae53-dfbaa0c5702c">



## Tools & Resources
- Mock API documentation.
- `Postman` to test the API.
- Used `react-router-dom` to create the multi-page functionality of the app.
- `npm` used to install JavaScript libraries - `axios`
- Used the sass npm package to allow to compile .scss files in the project
- assets from UI designer.
- Structure Diagram img.
- sample video. 

# Functional Requirements:
## API Server
- The end-points and response structure of an API server must match that of the mock API server.
- The API must have the following end-points:
  - `GET` /videos that responds with an array of videos.
  - `GET` /videos/:id that responds with an object containing the details of the video with an id of `:id`.
  - `POST` /videos that will add a new video to the video list. A unique id must be generated for each video added.
- Submitting a new video from the form must `POST` to the API. There is no requirement for a user to upload the image, therefore you as the developer must provide the hard-coded image path for the video thumbnail on the front-end during the form submission within the request body.
- Images should be served as static assets from the Node server.
  - Including the image used for creating a new video via Upload Form
- The data should persist on the server. If you restart Node server, the data shouldn't reset. This means you need to use a JSON file for persistence, writing to it, and reading from it.
- You should have a single source of truth for your data. Only one JSON file should be used to store all the data on your server.
  - Since you are now creating your own REST API, you now have to think about how you will use your one data file to mimic the API response from Sprint 2. One endpoint will return a small amount of data for each video that exists, the second endpoint will return all the data for one specific video. Think about how you may use your data file to achieve this within your project.

# Video Upload Page
- With the `Video Upload` page now created, add the actual upload functionality. Specifically, this should include an event handler for the upload form so that when a user submits a new video, it posts the video to your API in order to save it to the list of videos. A new video needs to be persisted in a JSON file with the app data.
- There is no requirement for uploading an image file, instead, you need to hardcode an image path when creating a new video, corresponding to a static asset path from the Node server.
- Since the upload form only has title and description input fields, feel free to fill any missing data for a new video object with placeholder values, not with extra form inputs.

# Visual Design Requirements
- The site must be responsive at and between breakpoints. Therefore it should closely resemble the mockups in the design package.
- Any inconsistencies with the design that exist from previous sprints should be resolved so that the final app matches the mockups as closely as possible.
- Any feedback that has been provided around the visual design from previous Sprints must be incorporated into this final Sprint. This Sprint represents the completed product that the “client” has requested.

## Implementation Requirements
- Any feedback that has been provided around your implementation from previous sprints must be incorporated into this final Sprint. This Sprint represents the completed product that the “client” has requested. If you have questions about how to implement a piece of feedback, ask someone from the Education Team.
- Your project must follow the proper folder structure and naming convention outlined in the Project Guidelines section in Synapse and the Sprint 3 folder Structure Diagram.
- The site must make use of the provided assets.
- The app must use multiple React components as discussed in class.
- The app must use `react-router-dom` with multiple routes, one for each page.
- The project's CSS must use SASS variables.
- The CSS must use BEM principles when naming classes.
- The site should use Flexbox for layout control.

## Project Structure of BrainFlix 
Use your `develop` & `feature` branches for development during this sprint, and merge your develop branch with main when submitting your sprint. 

## Diving Deeper [todo]
Diving Deeper challenges should only be attempted if all project requirements are met and adding Diving Deeper challenges do not conflict with the existing requirements. The following are suggestions that you can try to take your understanding deeper and go above and beyond the basic requirements.

# Comments endpoints
- Implement POST and DELETE endpoints 
  - `POST` /videos/:id/comments for creating a new comment
  - `DELETE` /videos/:videoId/comments/:commentId for deleting a comment

# Custom Video Player
- You may use this sample video here.
- Video controls should not be the default <video> controls. They should be added and styled with the provided assets, CSS, and appropriate HTML elements. Refer to sprints 1 & 2 design packages.
- Given the provided creative mockups, add full functionality to the video player. This includes details such as the play/pause functionality, the blue scrubber bar, fullscreen, time tracking, and volume control. All necessary assets should be included within your original design package. For volume control, feel free to reuse the scrubber design and assets.

# Upload Custom Poster Image
- Rather than have a hard-coded image path for the poster image of the uploaded video, add an input field to your upload form that allows the user to upload an image from their local machine.
- The image should be added to your Node server and the data should not be reset if the Node server restarts.
- Images do not need to be cropped upon upload.
- There should be a default placeholder image should the user not provide one, or there should be validation to check that there is an image provided before posting to your Node server.

________
 
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
