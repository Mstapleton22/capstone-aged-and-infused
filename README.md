# capstone-aged-and-infused

## Problem Statement

	As media, marketing and imagery continue to command control from online users, breaking 
	
	into business and still find a way to excite the consumer is no longer novelty. In order to 
	
	engage customers and in turn, dive sales - Small Businesses must be tactile in their 
	
	approach to liven up their products. We do this through technology. To enrich the alcohol 
	
	infusion process by allowing consumers to create customizable infusions with the intent to 
	
	use them in predefined and obscure cocktails. With ease, we are providing users with 
	
	allergies, or different taste to find the right infusion to suite their needs.



### ERD 
![alt text](https://github.com/Mstapleton22/capstone-aged-and-infused/blob/master/aged%20and%20infused.png?raw=true "ERD")

### Server Route Plan

```
Utilizing PostgreSQL, Express.js and Knex.js, I will be implimenting:
GET
  (/)
  I will get all of the data from the liquor, cocktail_category, ingredient, preset
  routes
  (/liquor:id)
   - this route will get all of the liquor by ID to create buttons
  (/cocktail_category:id)
   - this route will get all of the cocktail categories by ID to create buttons
  (/ingredient_category)
   - this route will get all of the ingredient categories by ID to create buttons
  (/preset:id)
   - this route will get all of the preset infusions by ID to create pre created infusions
PATCH
   - unused 
POST
   - unused
DEL 
   - unused
   
  
liquor table: GET (/liquor)
cocktail_category table: GET (/cocktail_category)
ingredient table: GET (/ingredient_category)
preset table: GET (/preset:id)
delete custome infustion and start again: DEL (/)

join table:
liquor.name cocktail_category.name ingredient.name 
```

### List of Tech used
FrontEnd: Vue, Vuex, Vuetify

BackEnd: Postgress, Knex.js, Express.js

Design: ProCreate, InDesign


### Wire Frames
Click the thumbnail below to view the initial wireframe:


[![Watch the video](https://i.ytimg.com/vi/nGJvzOBgFOg/1.jpg "target=_blank")](https://youtu.be/nGJvzOBgFOg)

### User Stories
see trello board:


https://trello.com/b/3GCX2GoA/aged-infused

### Color Palette 
![alt text](https://coolors.co/export/png/492d1d-1f1a16-ad5e34-303d4a-ffffff "Color Scheme")

### Project Management Tools
https://trello.com/b/3GCX2GoA/aged-infused

https://www.justinmind.com/
