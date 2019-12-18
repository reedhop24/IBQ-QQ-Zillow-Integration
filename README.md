# zillow-integration

#### This project was originally done for IBQ, built using Node.js, JQuery(I know, I was bummed I couldn't use React but it is part of the stack my lead dev wanted to use), Express, MongoDB, html, css.

#### Zillow's Real Estate and Mortgage API is used to collect information regarding Neighborhood and city affordability statistics: Zillow Home Value Index, Zestimate distribution, median single family home and condo values, average tax rates, and percentage of flips. Though being in insurance we were only concerned with the Zestimate value of a home. 

#### We were already capturing the customers address early in our UI, therefore the input boxes were something I added simply in order to make this a portfolio project. 

# Front End: 

#### Zillow's API consumes a POST that requires the ZWSID that is assigned once you sign up to use Zillow's API. Therefore in the posting URL we posted the ZWSID as well as the city, state, and address of the home. Yet I knew we would receive the dreaded CORS error if we attempted to simply send from the UI. Therefore I created a proxy where the ajax request would post to, the proxy would handle the request, send it to the server as well as return the response, and save the response to the database. 

#### With that being said most of the functionality is running on the back end, the front end is capturing the users data sending in the ajax request then returning the below information from the response. 

##### ZPID Number
##### The full address
##### The zestimate for the property
##### The year built
##### The use code
##### Square footage
##### Total Rooms
##### Bedrooms
##### Bathrooms

#### They return more information, but that was all we were concerned with showing the user.

# Back End

#### In the proxy I am handling the post from the ajax request, parsing the relevant information needed for the post and using the request module I am posting to Zillow's API. The response we receive from Zillow is returned in the form of XML, so for simplicity in the parseString function I convert it to JSON. 

#### In the model.js file I am just creating a model to download to the database. I am calling that module in the proxy.js file. Before I save the post to the database, I do a little house cleaning and delete any items in the database that have been in longer than a month. I then check use the unique id that Zillow returned called the zpid. I test if the zpid exists in the DB and if not I post the request to the DB. I then return the response back to the front end. 

#### Since this is a portfolio project I am just hosting the locally. 






