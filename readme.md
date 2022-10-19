# Avocado Project - Avocard

## https://avocard.app/

#### This is 3rd project with Node.js

### New Features 
* FrontEnd (SPA) & BackEnd
* Local Stoage
* Session Storage 
* CSRF block Middleware (IP white list)
* Rate limit Middleware

### Features
* MVC pattern
* FrontEnd and BackEnd validation check

## Summary
---
1. How to set up
2. Project Plan

---
### 1. How to set up
#### 1-1. File list to set up
* init.js
* avocard.sql
* manifest.json
 
#### 1-2. Process to set up
##### ①. "npm install" to install modules into node_modules
##### ②. Use SQL in "avocard.sql" to set up database structure and insert example data into database
##### ③. Fill in the "init.js" file
##### Example : 
    connect:{
        hostname:'localhost',       // IP address or Domain Name
        port:'8080'                 // Port number
    },
    db:{
        host:'127.0.0.1',           // DB IP address
        user:'root',                // DB username
        password:'******',          // DB password
        database:'avocado'          // DB table name
    },
    CSRF:{
        hostURL : 'localhost:8080'  // Host Domain Name
    }
##### ④. modify "start_url" and "scope" in "manifest.json"
##### Example : 
    "start_url" : "http://localhost:8080/",  // IP address or Domain Name
    "scope"     : "http://localhost:8080/",      // IP address or Domain Name
##### ⑤. start "node server.js"

#### 1-3. Login information (default)
|  |  |  |
|--|--|--|
|Role|Username|Password|
|Admin|`ms@gmail.com`|Passw0rd|



---
### 2. Project Plan
#### 2-1. Service Definition
* App that archive people's business card information
* Users can create their own digital business card
* Users can add other's business card in their pocket
* Users can see a list of other's business card in their pocket
* Anonymous users can add other's business card in their pocket
* Anonymous users can see list of other's business card in their pocket

#### 2-2. Functional Feature for user
* Sign up
* Login/authentication
* Guest login
* CRUD pocket (list of card)
* CRUD business card
* Update and Delete user
* Theme
* Notice page
* Admin page
* PWA

#### 2-3. Functional Feature in this system
* password hashing
* validation check in both (client and server) side(Form input validation check and input sanitizing before insert into the database)
* localStorage and sessionStorage
* alert error message if users try unexpected action
* rate limit service to one request per second per user session
* CSRF block using http referer and IP address
* allow ip address in whitelist for admin page
* Log system tracking every request
* redirect to front page when users try to go to wrong url


#### 2-4. Minimum Visual Product 
* Front
* Sign up
* Login
* Pocket
* MyCard
* Theme (More)
* Info (More)
* Notice (More)
* Deletion (More)
* Admin (More)
* Logout (More)
* PWA

#### 2-5. Technology and Modules
#### FrontEnd: 
* HTML 
* CSS 
* JavaScript  
* Bootstrap
#### BackEnd: 
* Node v10.16.0
* Express 
* MySql
#### Module:
* bcrypt: ^5.0.1
* body-parser: ^1.20.0
* express: ^4.17.3
* express-session: ^1.17.2
* mysql2: ^2.3.3
* validator: ^13.7.0
* webpack: ^5.72.0
* webpack-cli: ^4.9.2
#### Customized Middleware:
* blockCSRF.js
* msRateLimit.js
#### Server:
* AWS


#### 2-6. Project Detail Design (Page, Server, Database)
* Front Page List
    - Index(front)
    - Sign up
    - Pocket
    - PocketCard
    - Mycard
    - Edit
    - Update
    - More
    - Notice
    - Theme
    - Info
    - Deletion
    - Admin

* Server Function
    - Sign up
    - Log in
    - Log out
    - Validation (input sanitize)
    - Pocket CRUD
    - Card CRUD
    - User RU (Info)
    - User Delete
    - Theme change
    - Admin

* Database
    - User
    - Pocket
    - Card
    - Setting
    - Notice
    - Log


#### 2-7. API (Model, View, Control)
* View

        / [get]             : show "front" page
        /sign-up [get]      : show "sign up" page
        /pocket [get]       : show "pocket" page
        /card/ [get]        : show card with code
        /mycard [get]       : show "mycard" page
        /edit/ [get]        : show "edit" page (create new card)
        /update/ [get]      : show "update" page (update card)
        /more [get]         : show "more" page
        /info [get]         : show "info" page
        /notice [get]       : show "notice" page
        /theme [get]        : show "theme" page
        /deletion [get]     : show "deletion" page
        /admin [get]        : show "admin" page

* Control

        /api/guest/login [post]     : guest login
        /api/user/login [post]      : login
        /api/user/logout [post]     : logout
        /api/user/sign [post]       : create new user
        /api/user/info [get]        : read user information
        /api/user/update [post]     : update user
        /api/user/delete [post]     : delete user

        /api/pocket/ [get]          : show pocket
        /api/pocket/update [post]   : update pocket
        /api/pocket/remove [post]   : remove a card from pocket

        /api/card [get]             : show mycard
        /api/card/:code [get]       : show card with code
        /api/card/create [post]     : create new card
        /api/card/update [post]     : update card
        /api/card/remove [post]     : remove a card

        /api/notice [get]           : show notice title and description

        /api/admin/users [get]          : show user information in admin panel
        /api/admin/user/active [post]   : activate user
        /api/admin/user/deactive [post] : deactivate user

* Model [
    userModel: uM, 
    pocketModel: pM, 
    cardModel: cM, 
    settingModel: sM, 
    noticeModel: nM, 
    logModel: lM
    ]

        uM.getAllUsers              : get All users information
        uM.getUserByUserName        : get user with username
        uM.getPwByUserCode          : get password with usercode
        uM.getUserByUserCode        : get user with usercode
        uM.getUserByEmail           : get user with email
        uM.createUser               : create user
        uM.updatePw                 : update user
        uM.deleteUser               : delete user
        uM.activateUser             : change user's deleteFlag
        uM.getLastInsertUserCode    : get last Inserted usercode

        pM.createNewPocket          : create new pocket
        pM.getPocketByUserCode      : get pocket with usercode
        pM.updatePocket             : update pocket

        cM.getCardsByUserCode   : get card with usercode
        cM.getCardByCardCode    : get card with cardcode
        cM.createNewCard        : create new card
        cM.updateCard           : update card
        cM.deleteCard           : delete card

        sM.getSettingByUserCode : get setting with usercode
        sM.createNewSetting     : create new setting

        nM.getNoticeBrief       : get notice information

        lM.createNewLog         : create log
        

#### 2-8. Database Tables
|User|   |   |   |   |   |
|-- |---------------|-------------|------------|-----|---|
|Key|Logical_Name   |Physical_Name|Datatype    |NULL?|Opt|
| P |User Code      |userCode     |INT         |N.N  |A.I|
|   |User Name      |userName     |Varchar(30) |N.N  |   |
|   |Password       |password     |Varchar(255)|N.N  |   |
|   |Email          |email        |Varchar(255)|N.N  |   |
|   |User Type      |userType     |Varchar(30) |N.N  |default user|
|   |Delete Flag    |deleteFlag   |TinyInt(1)  |N.N  |default 0|

|Pocket|   |   |   |   |   |
|-- |---------------|-------------|------------|-----|---|
|Key|Logical_Name   |Physical_Name|Datatype    |NULL?|Opt|
| F |User Code      |userCode     |INT         |N.N  |A.I|
|   |Card List      |cardList     |JSON        |NULL |List of encrypted Card Code|

|Card|   |   |   |   |   |
|-- |---------------|-------------|------------|-----|---|
|Key|Logical_Name   |Physical_Name|Datatype    |NULL?|Opt|
| P |Card Code      |cardCode     |Varchar(10) |N.N  |A.I|
| F |User Code      |userCode     |INT         |N.N  |A.I|
|   |Card Detail    |cardDetail   |JSON        |NULL |   |
|   |Delete Flag    |deleteFlag   |TinyInt(1)  |N.N  |default 0|

|Setting|   |   |   |   |   |
|-- |---------------|-------------|------------|-----|---|
|Key|Logical_Name   |Physical_Name|Datatype    |NULL?|Opt|
| F |User Code      |userCode     |INT         |N.N  |A.I|
|   |Setting        |setting      |JSON        |NULL |   |

|Notice|   |   |   |   |   |
|-- |---------------|-------------|------------|-----|---|
|Key|Logical_Name   |Physical_Name|Datatype    |NULL?|Opt|
|PK |Notice Code    |noticeCode   |INT         |N.N  |A.I|
|   |Notice Date    |noticeDate   |Datetime    |N.N  |   |
|   |Notice Title   |noticeTitle  |Varchar(100)|N.N  |   |
|   |Notice Content |noticeContent|Text        |N.N  |   |

|Log|   |   |   |   |   |
|-- |---------------|-------------|------------|-----|---|
|Key|Logical_Name   |Physical_Name|Datatype    |NULL?|Opt|
|PK |Log Code       |logCode      |INT         |N.N  |A.I|
|   |Log IP         |logIp        |VARCHAR(15) |N.N  |   |
|   |Session        |session      |JSON        |N.N  |   |
|   |User Name      |userName     |Varchar(30) |N.N  |   |
|   |User Type      |userType     |Varchar(30) |N.N  |   |
|   |Log Time       |logTime      |Datetime    |N.N  |   |
|   |Action         |action       |JSON        |N.N  |   |

#### 2-9. API Access Right (Guest, User)
* Guest can not access:
    - /api/user/info [get]
    - /api/user/update [post]
    - /api/user/delete [post]

    - /api/card/create [post]
    - /api/card/update [post]
    - /api/card/remove [post]

    - /api/admin/users [get]          
    - /api/admin/user/active [post]   
    - /api/admin/user/deactive [post]

* User can not access:
    - /api/admin/users [get]          
    - /api/admin/user/active [post]   
    - /api/admin/user/deactive [post] 

#### 2-10. Development Process (Roadmap)
1. Node JS server setting
    - make file structure
    - make server.js (http)
    - connect to DB (mysql)

2. Front page design (prototype) 
    - make HTML Tags
    - add 'id' and 'class'
    - make css and apply

3. DB table sql
    - write sql to set up DB

4. Make Single Page Application (SPA) structure
    - make JS file working as a SPA router (app.js)
    - make two example pages for SPA (Hello.js and Welcome.js)
    - make one example component for SPA (nav.js)

5. Make Front pages in FrontEnd (View)
    - copy prototype design (2) and paste to "/frontend/src/page"
    - make a list of paths to each page in the "app.js"
    - check that the routing (changing pages) is working properly

6. Implement Server API (BackEnd, Control & Model) one by one
    - make fetch API to send data to server (Page: login, Data: ID and PW)
    - make server API to get request from client (Control, API: /api/user/login )
    - make database function to get data from database (Model, SQL: Select....)
    - repeats above 3 steps for all process

7. Implement Progressive Web Application (PWA)
    - make manifest.json
    - make service-worker
    - do lighthouse audit
    























