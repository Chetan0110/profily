# Profily
* User can login in the app with any random user name and password because authentication has been done through one **Basic Hash String** internally which always authenticates 
* After login, user requires to upload image by clicking on choose file button and then hit **Upload!** button
* After little processing, details like age, gender, ethnicity etc. will be displayed on the screen based on uploaded image
* For face-detection [kairos](https://kairos.docs.apiary.io/#reference/face-recognition/detect) API have been used

## Getting Started

* Download and install node's latest version based on your system from [here](https://nodejs.org/en/download/)
* Install npm package manager
* Clone the project
* Under the root (profily) directory run `npm install`
* If you don't have CORS plugin for chrome added, add it ([follow this link](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en))
* Click on CORS plugin icon in your browser and add url **https://api.kairos.com/detect** under **Intercepted URLs or URL patterns**

### Prerequisites

* All the required packages for this app have been listed under **package.json** file, some of them are needs to be installed menually and some of them come while creating app with create-react-app
* Menually needs to be installed includes-
    1. react-redux
    2. react-router-dom
    3. redux
    4. redux-promise
    5. axios
* Rest of them come while creating app

### Installing
* Third point under **Getting stated** will install all the required packges

## Usage

### To run the server:

* Under the root (profily) directory run `npm start`
* The app will be accessible at [localhost:3000](http://localhost:3000)

## Deployment
* Under the root (profily) directory run `npm run build`
* Above command will create build of the app and put it inside **build** directory which can be found inside root directory of the app
* You can keep **build directory** as it is or you can move it anywhere else
* Install serve to run the build by running command `npm install -g serve`
* Go to build directory and run `serve -s .` or go to parent directory of **build** and run `serve -s build`

