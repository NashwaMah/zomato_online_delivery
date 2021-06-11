# Automation Project

* Language  : Javascript 

* Framework : Test Cafe

-----------------------

* Before run the project :

   1) Download Node.js 
   2) inside Project Terminal run below :

          sudo npm install 
          sudo  npm start
          npm install testcafe
          npm install dotenv
             
--------------------------                    

* To Run Zomato automation on :

      Chrome  : npm run test:chrome 
      Firefox  : npm run test:firefox 
      Safari  : npm run test:safari 
      edge  : npm run test:edge 

--------------------------------                               

* To Update Test data for Zomato Registration :

      Update json file ../test-helpers/test-data/loginCredentials.js

      Add in .env file the user emails and Password for users

------------------------------------------------
* To Update Test data for Booked Restaurant :

      Update json file ../test-helpers/test-data/bookRestaurantDetails.js

------------------------------------------------
* To Update Test data for Add review Restaurant :

      Update json file ../test-helpers/test-data/resturantDetails.js

------------------------------------------------