# zillow-integration

### This project was originally done for IBQ, built using Node.js(w/ Express, ), JQuery(I know, I was bummed I couldn't use React but it is part of the stack my lead dev wanted to use), html, css.

### Usage: 
### Within IBQ's UI we had already captured the address at the beginning of the Users Journey, therefore it was just a simple request to the
### Zillow's API. One of the only front end changes I made was a 'GetZestimate' Button. Once clicked I had sent the response to the back end
### instead of straight to Zillows API, (for one to make sure we wouldn't receive the CORS error and for two to make saving to the DB easier)
### Once the back end posts to Zillow's API with the credentials IBQ holds, as well as the Users address, Zillows response contains: 

### ZPID Number
### The full address
### The zestimate for the property
### The year built
### The use code
### Square footage
### Total Rooms
### Bedrooms
### Bathrooms

### They return more information, but that was all we were concerned with showing the user.
