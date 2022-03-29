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


#### 2-4. Technology and Modules


#### 2-5. Project Detail Design (Page, Server, Database)
* Front Page List
    - 1
    - 2

* Server Function
    - 1
    - 2

* Database
    - 1
    - 2



#### 2-6. API (Model, View, Control)
* View

        / [get]             : request "front" page


* Control

        /api/user [get]     : show 


* Model [userModel: uM, bookModel: bM]

        uM.getAllUsers      : get All users

        bM.getAllBooks      : get All books
        

#### 2-7. Database Tables
|user|   |   |   |   |   |
|-- |---- |---|---|---|---|
|Key|Logical_Name|Physical_Name|Datatype    |NULL?|Opt|
| P |User Id    |userID     |INT(10)    |N.N   |A.I|


#### 2-8. API Access Right (Guest, User)
* Guest
    -  / [get]
* User
    - /api/users

#### 2-8. Development Process
