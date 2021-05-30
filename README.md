This is a reference page for processing errors. We provide explanations and examples to help fix compiling errors.

## Deployment page
URL: http://139.147.9.247/ 

1. Log in to the CS server <br />
```> ssh saidovs@139.147.9.247```  <br />
2. Enter password to authenticate <br />
```> *enter password*``` <br />
3. Navigate to the RefPage directory <br />
```> cd RefPage``` <br/>
4. Pull recent updates from GitHub <br />
```> git pull``` <br/>
5. Build out the react application<br />
```> npm run build``` <br />
6. Clean out the old version of the site <br />
```> sudo rm -r /var/www/html/*``` <br />
7. Deploy the new version of the site <br />
```> sudo cp -r build/* /var/www/html``` <br/>

## Setup Dev Environment on Windows:
1. Install [chocolatey](https://chocolatey.org/install) package manager (via nodejs download or install separately)
2. Download [nodejs](https://nodejs.org/)
3. choco install yarn
4. Navigate to project directory
5. npm install 
6. yarn start
7. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Processing Build
1. Clone/download repository https://github.com/jssmith1/processing
2. Make sure you have set up Java and Apache Ant as shown here: https://github.com/processing/processing/wiki/Build-Instructions
3. Open up local repository
4. Go to the build folder
```> cd build```
5. Run Ant
```> ant run```

## Using Libraries in Processing
### Add Ivy to Ant
1. Open build.xml in processing/app
2. Add ivy by inserting these lines at the top:
![Ivy](https://drive.google.com/uc?export=view&id=12YsU7zKBbD4aEkR1PQmINcsoqLaSCV9L)
3. Libraries are added at the bottom of build.xml, and must follow this format:
![Libraries](https://drive.google.com/uc?export=view&id=19FjUmQZaX3lhmXs_w_9LTNKxR2yaHNcx)
4. Don't forget to add the library path onto "classpath" of <javac> (around lines 30-45)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
