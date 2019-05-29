# 3gNaPraksi


COMTRADE - API

1. SignUp API - POST request na http://comtrade.sytes.net/api/auth/signup
    parametri koji se ocekuju u request-u: (name, email. password, password_confirmation)

2. Login API - POST request na http://comtrade.sytes.net/api/auth/login
    parametri koji se ocekuju u request-u: (name, email. password, password_confirmation)
    sacuvati access_token za datog usera
	ispravka za 2. API (LOGIN)
2. Login API - POST request na http://comtrade.sytes.net/api/auth/login
    parametri koji se ocekuju u request-u: (email. password)
    sacuvati access_token za datog usera

3. Get all users API - GET request na http://comtrade.sytes.net/api/users
    parametri koji se ocekuju u request-u kroz Header: (Authorization:Bearer <access_token>)

4. Show specific user API - GET request na http://comtrade.sytes.net/api/users/<user_id>
    parametri koji se ocekuju u request-u kroz Header: (Authorization:Bearer <access_token>)

5. Update specific user API - PUT request na http://comtrade.sytes.net/api/users/<user_id>
    parametri koji se ocekuju u request-u kroz Header: (Authorization:Bearer <access_token>)

6. Delete specific user API - DELETE request na http://comtrade.sytes.net/api/users/<user_id>
    parametri koji se ocekuju u request-u kroz Header: (Authorization:Bearer <access_token>)

7. Get all messages API - GET request na http://comtrade.sytes.net/api/messages
    parametri koji se ocekuju u request-u kroz Header: (Authorization:Bearer <access_token>)

8. Show specific message API - GET request na http://comtrade.sytes.net/api/messages/<message_id>
    parametri koji se ocekuju u request-u kroz Header: (Authorization:Bearer <access_token>)

9. Update specific message API - PUT request na http://comtrade.sytes.net/api/messages/<message_id>
    parametri koji se ocekuju u request-u kroz Header: (Authorization:Bearer <access_token>)

10. Delete specific message API - DELETE request na http://comtrade.sytes.net/api/messages/<message_id>
    parametri koji se ocekuju u request-u kroz Header: (Authorization:Bearer <access_token>)
	
	
