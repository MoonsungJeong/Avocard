# Avocado Project - Avocard

#### This is 3rd project with Node.js

### New Features 
* Rate limit
* 2

## Summary
---
1. How to set up
2. Project Plan

---
### 1. How to set up



---
### 2. Project Plan
#### 2-1. Service Definition
* App that archive people's business card information
* Users can create their own digital business card
* Users can add other's business card in their pocket
* Users can see list of other's business card in their pocket
* Anonymous users can add other's business card in their pocket
* Anonymous users can see list of other's business card in their pocket

#### 2-2. Functional Feature
* Login/authentication
* Password hashing
* Displaying cards information existing in the database
* Admin page
* CRUD business card
* CRUD pocket (list of card)
* Validation check in both (client and server) side(Form input validation check and input sanitizing before insert into the database)
* Log system tracking every request
* rate limit service to one request per second per user session

#### 2-3. Minimum Visual Product
* Register
* Login
* Pocket
* MyCard
* Notice (More)
* Theme (More)
* Info (More)

#### 2-4. Technology and Modules
HTML, CSS, JavaScript, NodeJS, Express, MySql

express-session, bcrypt, validator, express-fileupload, express-rate-limit

#### 2-5. Project Detail Design (Page, Server, Database)
* Front Page List
    - Index(front)
    - Sign up
    - Pocket
    - Card
    - Mycard
    - Edit
    - More
    - Notice
    - Theme
    - Info

* Server Function
    - Sign up
    - Log in
    - Log out
    - Validation (input sanitize)
    - CRUD (Pocket, Card)
    - Theme change
    - Info change

* Database
    - User
    - Pocket
    - Card
    - Setting
    - Notice
    - Log


#### 2-6. API (Model, View, Control)
* View

        / [get]             : request "front" page
        /sign-up [get]      : request "sign up" page
        /pocket [get]       : request "pocket" page
        /card/:Code [get]   : request card with code
        /mycard             : request "mycard" page
        /edit/:Code [get]   : request "edit" page with code
        /more [get]         : request "more" page
        /notice [get]       : request "notice" page
        /theme [get]        : request "theme" page
        /info [get]         : request "info" page

* Control

        /api/user/:Code [get]       : show existing user with Code
        /api/user/sign [post]       : create new user
        /api/user/update [post]     : update an existing user
        /api/user/delete [post]     : delete an existing user
        /api/user/login [post]      : login process
        /api/user/logout [post]     : logout process

        /api/pocket [get]           : 


* Model [
    userModel: uM, 
    pocketModel: pM, 
    cardModel: cM, 
    settingModel: sM, 
    noticeModel: nM, 
    logModel: lM
    ]

        uM.createUser           : request create user
        uM.getUserByUserCode    : get user with usercode
        uM.getUserByUsername    : get user with username
        uM.updateUser           : request update user
        uM.deleteUser           : request delete user
        
        pM.createPocket         : request create pocket
        pM.getPocketByUserCode  : get pocket with usercode
        pM.updatePocket         : request update pocket
        pM.deletePocket         : request delete pocket

        cM.createCard           : request create card
        cM.getCardByUserCode    : get card(list) with usercode
        cM.getCardByCardCode    : get card with cardcode
        cM.updateCard           : request update card
        cM.deleteCard           : request delete card

        sM.createSetting        : request create setting
        sM.getSettingByUserCode : get setting with usercode
        sM.updateSetting        : request update setting
        sM.deleteSetting        : request delete setting

        nM.createNotice         : request create notice
        nM.getNotice            : get notice(list)
        nM.updateNotice         : request update notice
        nM.deleteNotice         : request delete notice

        lM.createLog            : request create log
        

#### 2-7. Database Tables
|user|   |   |   |   |   |
|-- |------------|-------------|------------|-----|---|
|Key|Logical_Name|Physical_Name|Datatype    |NULL?|Opt|
| P |User Code   |userCode     |INT(10)     |N.N  |A.I|
|   |User Name   |userName     |Varchar(30) |N.N  |   |
|   |Password    |password     |Varchar(255)|N.N  |   |
|   |Email       |email        |Varchar(255)|N.N  |   |
|   |User Type   |userType     |Varchar(30) |N.N  |default user|
|   |Delete Flag |deleteFlag   |TinyInt(1)  |N.N  |default 0|

|Pocket|   |   |   |   |   |
|-- |------------|-------------|------------|-----|---|
|Key|Logical_Name|Physical_Name|Datatype    |NULL?|Opt|
| F |User Code   |userCode     |INT(10)     |N.N  |A.I|
|   |Card List   |cardList     |JSON        |NULL |List of encrypted Card Code|

|Card|   |   |   |   |   |
|-- |------------|-------------|------------|-----|---|
|Key|Logical_Name|Physical_Name|Datatype    |NULL?|Opt|
| P |Card Code   |cardCode     |Varchar(10) |N.N  |A.I|
| F |User Code   |userCode     |INT(10)     |N.N  |A.I|
|   |Card Detail |cardDetail   |JSON        |N.N  |{} |
|   |Delete Flag |deleteFlag   |TinyInt(1)  |N.N  |default 0|

|Setting|   |   |   |   |   |
|-- |------------|-------------|------------|-----|---|
|Key|Logical_Name|Physical_Name|Datatype    |NULL?|Opt|
| F |User Code   |userCode     |INT(10)     |N.N  |A.I|
|   |Setting     |setting      |JSON        |N.N  |{} |

|Notice|   |   |   |   |   |
|-- |------------|-------------|------------|-----|---|
|Key|Logical_Name|Physical_Name|Datatype    |NULL?|Opt|
|   |Date        |date         |Datetime    |N.N  |   |
|   |Title       |title        |Varchar(100)|N.N  |   |
|   |Content     |content      |Text        |N.N  |   |

|Log|   |   |   |   |   |
|-- |------------|-------------|------------|-----|---|
|Key|Logical_Name|Physical_Name|Datatype    |NULL?|Opt|
|PK |Log Code    |logCode      |INT(30)     |N.N  |A.I|
|   |Session     |session      |JSON        |N.N  |   |
| F |User Name   |userName     |Varchar(30) |N.N  |   |
| F |User Type   |userType     |Varchar(30) |N.N  |   |
|   |Log Time    |logTime      |Datetime    |N.N  |   |
|   |Action      |action       |VarChar(200)|N.N  |   |

#### 2-8. API Access Right (Guest, User)
* Guest
    -  / [get]
* User
    - /api/users

#### 2-8. Development Process
