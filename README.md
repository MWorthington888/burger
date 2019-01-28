Tiki-Burger App

Description
Tiki-Burger is a burger-logger app; users 'invent' their own hamburger and can devour it if they choose. The burgers are created  through via a webpage and are stored on a database. The website will display hamburgers that have been created whether they've been devoured or not.

Technologies used

MySQL
Node
Express
Handlebars
ORM


How it works: 
From the Tiki-Burger website, users will:
1) Provide a name for a burger. This new burger will appear on the left side under 'waiting area'. These burgers are waiting to be eaten. Each burger in this waiting area has a devour button next to it.

2) Users can click on the devour button. The chosen burger gets eaten and leaves the 'waiting area' and reappears in the 'devoured' section.

All burgers, whether eaten or not, appear and remain in a MySql database.

Each question is assigned a value, and all ten values are aggragated into an overall value. This overall value is them compared to other overall values from other profiles. Users with similar overall values will then be matched one-to-one. A pop-up window will display the name and profile picture of the perfect match!

This is a screen shot of the survey page:
https://drive.google.com/open?id=1w5KJaqBkM03wpuNsNCKxsstpdHuaWWyY

And a screen shot of the 'Match!' pop-up window:
https://drive.google.com/open?id=17WFrc2BPLTrkGv0CwnVWyR_pXsp4H5Yy



Developers notes:
App functionality concerning routes via AJAX were imported from StarWarsApp activity from Week 13.

StarWarsApp and HotRestaurant activities from Week 13 were also used as templates for Express middleware.

Several open-sourced icons from Font Awesome (v5.6.3) were used.

This app is deployed remotely to Heroku, with connecetions through JAWSDB.




Future developments
For the future, it a 'delete from devoured list' button would erase any burger from the website and the database.