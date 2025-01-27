
### YAX TECHNOLOGY

skate tracker

app / website? 

database of tricks -> tips on how to learn / videos / ranking
progression WEB 
  popular schematic
map -> spots (user uploads spots) photos 
  comment on spots
rankings
track stats ie treflips hit : 5? treflips slammed from : 10? (possible AI technology -> input video and it stores your stats just from video)
view skater profiles
  message skaters / send videos etc
  group chat implementation 
own skater profile -> stance, fav trick, local, fav skater wva


root -> skater social media + trick tracker & progression + spot finder

technologies

website first 
  frontend -> website
    next.js -> react -> typescript && tailwind css

  backend -> database / login stuff
    next.js -> typescript -> orm (drizzle) 

-------------------------------------------
CORE DB -> 
TABLE USER_CREDENTIALS

user_id, username, email, phone number, password
id -> pkey

TABLE USER_INFO

user_id, fname, lname, dob, pfp, description

TABLE USER_SETTINGS

user_id, email notifs... etc

POSTS

post_id, user_id, pic/vid, desc, location, likes, comment_id

COMMENTS 

comment_id, user_id, post_id, desc, likes

-------------------------------------------

TRICKS

user_id, ollies, ollies attempted..., kickflips, kickflips attempted {1 | 5 | 10 | uncountable} 

SPOTS

spot_id, name, latitude, longitude, desc {⚠️ paid entry!, common rainfall, 🌈 indoor, free}








