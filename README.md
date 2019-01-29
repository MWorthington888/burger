Tiki-Burger App
---------------

---------------

Description:
-----------
Tiki-Burger is a burger-logger app; users 'invent' their own hamburger and can devour it if they choose. The burgers are created  via a webpage and are stored on a database. The website will display hamburgers in one of two columns: hamburgers that are waiting to be eaten and those that have been eaten.

-----------------------------------------------

Technologies used:
---------------

MySql, Node, Express, Handlebars and ORMs are used in this app.

------------------------------


How it works: 
-------------
From the Tiki-Burger website, users will:
1) Provide a name for a burger. This new burger will appear on the left side under 'waiting area'. These burgers are waiting to be eaten. Each burger in this waiting area has a devour button next to it.

2) Users can click on the devour button. The chosen burger gets eaten and leaves the 'waiting area' and reappears in the 'devoured' section.

All burgers, whether eaten or not, appear and remain in a MySql database.



This is a 4-minute tutorial on how to work the app:
https://drive.google.com/file/d/1JsY17FgRJeqP-TW01XE_Jd_fhecGErUx/view

---------------------------------
Developers notes:
----------------
Controllers, models and ORM code was created from templates from MVCExample and CatsApp activities (Week 14 Activities 16 and 17 respectively). StarWarsApp and HotRestaurant activities from Week 13 were also used as templates for Express middleware.

'Luckiest Guy' font courtesy of Google Fonts.

This app is deployed remotely to Heroku, with connections through JAWSDB.

-------------------
Future developments:
-------------------
A creation of a 'delete from devoured list' button to erase any burger from the website and the database.



