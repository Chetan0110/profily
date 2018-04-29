# profily
The small app which allows to upload profile picture and detects the age, gender, ethnicity etc based on uploaded picture.

## Setup

* Download and install node latest version
* Install npm package manager
* Clone the project
* Under the root (profily) directory run `npm install`
* If you don't have CORS plugin for chrome added, add it ([follow this link](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en)
* Click on CORS plugin icon in your browser and add url <https://api.kairos.com/detect> under **Intercepted URLs or URL patterns**

## Usage

### To run the server:

* Under the root (profily) directory run `npm start`

The app will be accessible at [localhost:3000](http://localhost:3000)

## Details

* Login can be done with any random user name and password because authentication has been done through one **Basic Hash String** internally which always authenticates
* After login, user requires to upload image by clicking on choose file button and then hit Upload button
* After little processing, details like age, gender, ethnicity etc will be displayed on the screen based on uploaded image
* For face-detection [kairos](https://kairos.docs.apiary.io/#reference/face-recognition/detect) API have been used
