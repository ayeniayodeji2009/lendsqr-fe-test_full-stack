# import os
# #from app import app


# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import sqlite3
# from werkzeug.security import generate_password_hash, check_password_hash
# from datetime import datetime



# current_date_time = datetime.now()

# app = Flask(__name__)
# CORS(app, resources={r"/*": {"origins": "*"}})

# # Database initialization and connection
# def get_db_connection():
#     path = os.path.dirname(os.path.realpath(__file__))
#     conn = sqlite3.connect(os.path.join(path, "lendsqr_database.db"))
#     return conn



# """Authentication (Begining)"""
# # Function to create the admins table
# def create_admin_table():
#     try:
#         conn = get_db_connection()
#         conn.execute('''
#             CREATE TABLE IF NOT EXISTS admins (
#                 admin_id INTEGER PRIMARY KEY NOT NULL,
#                 adminName TEXT NOT NULL,
#                 email TEXT NOT NULL,
#                 picture TEXT NOT NULL,
#                 gender TEXT NOT NULL,
#                 password TEXT NOT NULL,
#                 hashedPassword TEXT NOT NULL

#             );
#         ''')
#         conn.commit()
#         print("User table created successfully")
#     except sqlite3.Error as e:
#         print(f"User table creation failed - {e}")
#     finally:
#         conn.close()

# # create DB
# # create_admin_table()



# # Route for user registration
# @app.route('/api/register', methods=['POST'])
# def register():
#     data = request.get_json()
#     adminName = data.get('adminName')
#     password = data.get('password')
#     email = data.get('email')
#     picture = data.get('picture')
#     gender = data.get('gender')
    
#     print(data)
#     print(adminName, password, email, picture, gender)

#     if not adminName or not password or not email or not picture:
#         return jsonify({'error': 'Username, password and the rest of the fields are required'}), 400

#     conn = get_db_connection()
#     cursor = conn.cursor()

#     # Check if username already exists
#     cursor.execute('SELECT * FROM admins WHERE adminName = ?', (adminName,))
#     if cursor.fetchone():
#         return jsonify({'error': 'Username already exists, Register with a new Name'}), 400

#     # Hash the password
#     hashed_password = generate_password_hash(password)
#     print(hashed_password)
#     print(type(hashed_password))

#     # Insert new user into database
#     cursor.execute('INSERT INTO admins (adminName, email, picture, gender, password, hashedPassword) VALUES (?, ?, ?, ?, ?, ?)',
#                    (adminName, email, picture, gender, password, hashed_password))
#     conn.commit()
#     conn.close()

#     return jsonify({'message': 'User registered successfully'}), 201





# # Route for user login
# @app.route('/api/login', methods=['POST'])
# def login():
#     data = request.get_json()
#     adminName = data.get('adminName')
#     password = data.get('password')

#     # adminName = "tune"
#     # password = "bambi"

#     print(adminName)
#     print(password)
    
#     # try:
#     # If submited as empty field
#     if not adminName or not password:
#         return jsonify({'error': 'Username and password are required'}), 400

#     conn = get_db_connection()
#     cursor = conn.cursor()


#     # Retrieve user from database
#     cursor.execute('SELECT * FROM admins WHERE adminName = ?', (adminName,))
#     existingAdmin = cursor.fetchone()
    
    
#     conn.close()
    
#     print(existingAdmin)
#     # list(existingAdmin)
#     adminDataList = {
#         "admin_id": existingAdmin[0],
#         "adminName": existingAdmin[1],
#         "email": existingAdmin[2],
#         "picture": existingAdmin[3],
#         "gender": existingAdmin[4]
#     }
#     # print(existingAdmin[5])
#     if existingAdmin == None:
#         return jsonify({'error': "You are not Registered yet, you can't login. Kindly Register first"}), 404
#     elif existingAdmin and check_password_hash(existingAdmin[6], password):
#         return jsonify({'message': 'Login successful', 'adminData': adminDataList}), 200
#     else:
#         return jsonify({'error': 'Invalid username or password'}), 401
        
#     # except Exception as e:
#     #     print(f"'error': {e}")
#     #     return jsonify({'error': {e}}), 204
#     # finally:
#     #     conn.close()
# """Authentication (Ending)"""







# """CRUD operation (Begining)"""
# # Function to create the admins table
# def create_customers_table():
#     try:
#         conn = get_db_connection()
#         # Personal Info
#         # conn.execute('''
#         #     CREATE TABLE IF NOT EXISTS customers_personalInfo (
#         #         customer_id INTEGER PRIMARY KEY NOT NULL,
#         #         customer_codeNum TEXT NOT NULL,
#         #         firstName TEXT NOT NULL,
#         #         lastName TEXT NOT NULL,
#         #         userName TEXT NOT NULL,
#         #         gender TEXT NOT NULL,
#         #         email TEXT NOT NULL,
#         #         phoneNumber TEXT NOT NULL,
#         #         bvn TEXT NOT NULL,
#         #         maritalStatus TEXT NOT NULL,
#         #         children TEXT NOT NULL,
#         #         resident TEXT NOT NULL
#         #     );
#         # ''')
        
        
#         # Education and employemnt
#         # conn.execute('''
#         #     CREATE TABLE IF NOT EXISTS customers_education_and_employment (
#         #         customer_id INTEGER PRIMARY KEY NOT NULL,
#         #         eduQualification TEXT NOT NULL,
#         #         employmentStaus TEXT NOT NULL,
#         #         sector TEXT NOT NULL,
#         #         officialEmail TEXT NOT NULL,
#         #         income INTEGER NOT NULL,
#         #         loanPayment INTEGER NOT NULL,
#         #         durationOfEmployment INTEGER NOT NULL
#         #     );
#         # ''')
        
        
        
#         # Other Info
#         # conn.execute('''
#         #     CREATE TABLE IF NOT EXISTS customers_Others (
#         #         customer_id INTEGER PRIMARY KEY NOT NULL,
#         #         organization TEXT NOT NULL,
#         #         userName TEXT NOT NULL,
#         #         email TEXT NOT NULL,
#         #         phoneNumber TEXT NOT NULL,
#         #         dateJoined TEXT NOT NULL,
#         #         status TEXT NOT NULL,
#         #         document TEXT NOT NULL,
#         #         bankDetails TEXT NOT NULL,
#         #         loan INTEGER NOT NULL,
#         #         saving INTEGER NOT NULL,
#         #         tierStar INTEGER NOT NULL,
#         #         appAndSystem TEXT NOT NULL
#         #     );
#         # ''')
        
        
        
#         # Social Media
#         # conn.execute('''
#         #     CREATE TABLE IF NOT EXISTS customers_socialMedia (
#         #         customer_id INTEGER PRIMARY KEY NOT NULL,
#         #         twitter TEXT NOT NULL,
#         #         facebook TEXT NOT NULL,
#         #         instagram TEXT NOT NULL
#         #     );
#         # ''')
        
        
        
#         conn.execute('''
#             CREATE TABLE IF NOT EXISTS customers (
#                 id INTEGER PRIMARY KEY,
#                 customerCode TEXT,
#                 picture TEXT,
#                 firstName TEXT,
#                 lastName TEXT,
#                 userName TEXT,
#                 fullName TEXT,
#                 gender TEXT,
#                 email TEXT,
#                 phoneNumber TEXT,
#                 bvn TEXT,
#                 maritalStatus TEXT,
#                 children TEXT,
#                 resident TEXT,
#                 eduQualification TEXT,
#                 employmentStatus TEXT,
#                 sector TEXT,
#                 officialEmail TEXT,
#                 income INTEGER,
#                 loanPayment INTEGER,
#                 durationOfEmployment INTEGER,
#                 twitter TEXT,
#                 facebook TEXT,
#                 instagram TEXT,
#                 guarantor1FullName TEXT,
#                 guarantor1PhoneNumber TEXT,
#                 guarantor1Email TEXT,
#                 guarantor1Relationship TEXT,
#                 guarantor2FullName TEXT,
#                 guarantor2PhoneNumber TEXT,
#                 guarantor2Email TEXT,
#                 guarantor2Relationship TEXT,
#                 organization TEXT,
#                 dateJoined DATETIME,
#                 status TEXT,
#                 document TEXT,
#                 bankDetails TEXT,
#                 loan INTEGER,
#                 saving REAL,
#                 tierStar INTEGER,
#                 appAndSystem TEXT
#             )
#         ''')

#         conn.commit()
#         print("Customer_personalInfo table created successfully")
#     except sqlite3.Error as e:
#         print(f"Customer_personalInfo table creation failed - {e}")
#     finally:
#         conn.close()       
# # create_customers_table()


# """CRUD operation (ending)"""






# customerData = {
#     "customerCode": "234yudjs126",
#     "personalInfo": {
#         "firstName": "Oye",
#         "lastName": "Ola",
#         "userName": "Oye",
#         "fullName": "Oye Ola",
#         "picture": "oye.png",
#         "gender": "female",
#         "email": "oye09@gmail.com",
#         "phoneNumber": "07087654433",
#         "bvn": "56448222",
#         "maritalStatus": "married",
#         "children": "3",
#         "resident": "Own apartment"
#     },
#     "education_and_employment": {
#         "eduQualification": "Bsc",
#         "employmentStatus": "Employed",
#         "sector": "Fintech",
#         "officialEmail": "oye09@landsqr.com",
#         "income": 200000,
#         "loanPayment": 50000,
#         "durationOfEmployment": 6
#     },
#     "socialMedia": {
#         "twitter": "@oye",
#         "facebook": "@oye09",
#         "instagram": "@oye007",
#     },
#     "guarantor1": {
#         "fullName": "Iyabo Ojo",
#         "phoneNumber": "09076543420",
#         "email": "iyabo@yahoo.com",
#         "relationship": "cousin",
#     },
#     "guarantor2": {
#         "fullName": "Tosin Ojo",
#         "phoneNumber": "09065243420",
#         "email": "tos@yahoo.com",
#         "relationship": "friend",
#     },
#     "organization": "Opay",
#     "userName": "Oye",
#     "email": "oye09@gmail.com",
#     "phoneNumber": "07087654433",
#     "dateJoined": current_date_time,
#     "status": "inactive",
#     "document": "Oye.pdf",
#     "bankDetails": "Bank info",
#     "loan": 50000,
#     "saving": (200000 * 20) / 100,
#     "tierStar": 5,
#     "appAndSystem": "App Technology and settings info"
# }



# # customerData2 = {
# #             "customerCode": "234yudjs126",
# #             "personalInfo": {
# #                 "firstName": "Sola",
# #                 "lastName": "Dada",
# #                 "userName": 'Sola',
# #                 "fullName": "Sola Dada",
# #                 "gender": "female",
# #                 "email": "soda09@gmail.com",
# #                 "phoneNumber": "0908768973",
# #                 "bvn": "964234322",
# #                 "maritalStatus": "married",
# #                 "children": "4",
# #                 "resident": "Own apartment"
# #             },
# #             "education_and_employment": {
# #                 "eduQualification": "Bsc",
# #                 "employmentStatus": "Employed",
# #                 "sector": "Fintech",
# #                 "officialEmail": "soda09@gmail.com",
# #                 "income": 120000,
# #                 "loanPayment": 70000,
# #                 "durationOfEmployment": 1
# #             },
# #             "socialMedia": {
# #                 "twitter": "@soda",
# #                 "facebook": "@soda",
# #                 "instagram": "@soda07",
# #             },
# #             "guarantor1": {
# #                 "fullName": "Iyabo Ojo",
# #                 "phoneNumber": "09076543420",
# #                 "email": "iyabo@yahoo.com",
# #                 "relationship": "cousin",
# #             },
# #             "guarantor2": {
# #                 "fullName": "Gbenga Dada",
# #                 "phoneNumber": "09065247850",
# #                 "email": "gbenga@yahoo.com",
# #                 "relationship": "brother",
# #             },
# #             "organization": "Lendsqr",
# #             "userName": "Sola",
# #             "email": "soda09@gmail.com",
# #             "phoneNumber": "0908768973",
# #             "dateJoined": current_date_time,
# #             "status": "active",
# #             "document": "sola.pdf",
# #             "bankDetails": "Bank info",
# #             "loan": 70000,
# #             "saving": (120000 * 20) / 100,
# #             "tierStar": 5,
# #             "appAndSystem": "App Technology and settings info"
# #         }


# # print(customerData["customerCode"])
# # print(customerData["personalInfo"]["fullName"])
# # print(customerData["personalInfo"])
# # print(customerData["guarantor2"]['relationship'])
# # print(customerData["education_and_employment"]['employmentStatus'])


# # checking and getting last data in database
# def get_customer_by_id(customer_id):
#     customer = {}
#     try:
#         conn = get_db_connection()
#         conn.row_factory = sqlite3.Row
#         cur = conn.cursor()
#         cur.execute("SELECT * FROM customers WHERE id = ?", (customer_id,))
#         row = cur.fetchone()

#         # Convert row object to dictionary
#         if row:
#             customer = {
#                 "id": row["id"],
#                 "customerCode": row["customerCode"],
#                 "picture": row["picture"],
#                 "firstName": row["firstName"], 
#                 "lastName": row["lastName"],
#                 "userName": row["userName"],
#                 "fullName": row["fullName"],
#                 "gender": row["gender"],
#                 "email": row["email"],
#                 "phoneNumber": row["phoneNumber"],
#                 "bvn": row["bvn"],
#                 "maritalStatus": row["maritalStatus"], 
#                 "children": row["children"],
#                 "resident": row["resident"],
#                 "eduQualification": row["eduQualification"], 
#                 "employmentStatus": row["employmentStatus"],
#                 "sector": row["sector"],
#                 "officialEmail": row["officialEmail"],
#                 "income": row["income"],
#                 "loanPayment": row["loanPayment"],
#                 "durationOfEmployment": row["durationOfEmployment"], 
#                 "twitter": row["twitter"],
#                 "facebook": row["facebook"],
#                 "instagram": row["instagram"],
#                 "guarantor1FullName": row["guarantor1FullName"], 
#                 "guarantor1PhoneNumber": row["guarantor1PhoneNumber"],
#                 "guarantor1Email": row["guarantor1Email"],
#                 "guarantor1Relationship": row["guarantor1Relationship"],
#                 "guarantor2FullName": row["guarantor2FullName"],
#                 "guarantor2PhoneNumber": row["guarantor2PhoneNumber"],
#                 "guarantor2Email": row["guarantor2Email"],
#                 "guarantor2Relationship": row["guarantor2Relationship"],
#                 "organization": row["organization"],
#                 "dateJoined": row["dateJoined"],
#                 "status": row["status"],
#                 "document": row["document"],
#                 "bankDetails": row["bankDetails"],
#                 "loan": row["loan"],
#                 "saving": row["saving"],
#                 "tierStar": row["tierStar"],
#                 "appAndSystem": row["appAndSystem"]
#             }
#     except sqlite3.Error as e:
#         print(f"An error occurred: {e}")
#     finally:
#         conn.close()
#     return customer




# # POST
# # def insert_user(user):
# def insert_customer(customer):
#     inserted_user = {}
#     try:
        
        
#         # # Prepare the INSERT query
#         # columns = ', '.join(customer.keys())
#         # placeholders = ', '.join(['?'] * len(customer))
#         # insert_query = f'INSERT INTO customers ({columns}) VALUES ({placeholders})'

#         # # Execute the query
#         # conn = get_db_connection()
#         # cur = conn.cursor()
#         # cur.execute(insert_query, tuple(customer.values()))

#         # Commit changes and close the connection
#         # conn.commit()
#         # conn.close()
        
#         conn = get_db_connection()
#         cur = conn.cursor()
#         cur.execute(
#             """INSERT INTO customers (customerCode, picture, firstName, lastName, userName, fullName, gender, email, phoneNumber, bvn, maritalStatus, children, resident, eduQualification, employmentStatus, sector, officialEmail, income, loanPayment, durationOfEmployment, twitter, facebook, instagram, guarantor1FullName, guarantor1PhoneNumber, guarantor1Email, guarantor1Relationship, guarantor2FullName, guarantor2PhoneNumber, guarantor2Email, guarantor2Relationship, organization, dateJoined, status, document, bankDetails, loan, saving, tierStar, appAndSystem) 
#             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)""",
#             (customer['customerCode'], customer['picture'], customer['firstName'], customer['lastName'], customer['userName'], customer['fullName'], customer['gender'], customer['email'], customer['phoneNumber'], customer['bvn'], customer['maritalStatus'], customer['children'], customer['resident'], customer['eduQualification'], customer['employmentStatus'], customer['sector'], customer['officialEmail'], customer['income'], customer['loanPayment'], customer['durationOfEmployment'], customer['twitter'], customer['facebook'], customer['instagram'], customer['guarantor1FullName'], customer['guarantor1PhoneNumber'], customer['guarantor1Email'], customer['guarantor1Relationship'], customer['guarantor2FullName'], customer['guarantor2PhoneNumber'], customer['guarantor2Email'], customer['guarantor2Relationship'], customer['organization'], customer['dateJoined'], customer['status'], customer['document'], customer['bankDetails'], customer['loan'], customer['saving'], customer['tierStar'], customer['appAndSystem'])
#         )
        
              
#         # Commit changes and close the connection
#         conn.commit()
#         inserted_user = get_customer_by_id(cur.lastrowid)
#     except sqlite3.Error as e:
#         print(f"An error occurred: {e}")
#         conn.rollback()
#     finally:
#         conn.close()
#     return inserted_user

# # insert_user(customerData)





# # GET
# def get_customers():
#     customers = []
#     try:
#         conn = get_db_connection()
#         conn.row_factory = sqlite3.Row
#         cur = conn.cursor()
#         cur.execute("SELECT * FROM customers")
#         rows = cur.fetchall()

#         # Convert row objects to dictionary
#         for i in rows:
#             curCustomer = {
#                 "id": i["id"],
#                 "customerCode": i["customerCode"],
#                 "picture": i["picture"],
#                 "firstName": i["firstName"], 
#                 "lastName": i["lastName"],
#                 "userName": i["userName"],
#                 "fullName": i["fullName"],
#                 "gender": i["gender"],
#                 "email": i["email"],
#                 "phoneNumber": i["phoneNumber"],
#                 "bvn": i["bvn"],
#                 "maritalStatus": i["maritalStatus"], 
#                 "children": i["children"],
#                 "resident": i["resident"],
#                 "eduQualification": i["eduQualification"], 
#                 "employmentStatus": i["employmentStatus"],
#                 "sector": i["sector"],
#                 "officialEmail": i["officialEmail"],
#                 "income": i["income"],
#                 "loanPayment": i["loanPayment"],
#                 "durationOfEmployment": i["durationOfEmployment"], 
#                 "twitter": i["twitter"],
#                 "facebook": i["facebook"],
#                 "instagram": i["instagram"],
#                 "guarantor1FullName": i["guarantor1FullName"], 
#                 "guarantor1PhoneNumber": i["guarantor1PhoneNumber"],
#                 "guarantor1Email": i["guarantor1Email"],
#                 "guarantor1Relationship": i["guarantor1Relationship"],
#                 "guarantor2FullName": i["guarantor2FullName"],
#                 "guarantor2PhoneNumber": i["guarantor2PhoneNumber"],
#                 "guarantor2Email": i["guarantor2Email"],
#                 "guarantor2Relationship": i["guarantor2Relationship"],
#                 "organization": i["organization"],
#                 "dateJoined": i["dateJoined"],
#                 "status": i["status"],
#                 "document": i["document"],
#                 "bankDetails": i["bankDetails"],
#                 "loan": i["loan"],
#                 "saving": i["saving"],
#                 "tierStar": i["tierStar"],
#                 "appAndSystem": i["appAndSystem"]
#             }
#             customers.append(curCustomer)
#     except sqlite3.Error as e:
#         print(f"An error occurred: {e}")
#     finally:
#         conn.close()
#     return customers # return array storage with table data in it

# # print(get_customers())




# # PUT
# def update_customer(customerInfo):
#     updated_user = {}
#     try:
#         conn = get_db_connection()
#         cur = conn.cursor()

#         cur.execute(
#             "UPDATE customers SET picture = ?, firstName = ?, lastName = ?, userName = ?, fullName = ?, gender = ?, email = ?, phoneNumber = ?, bvn = ?, maritalStatus = ?, children = ?, resident = ?, eduQualification = ?, employmentStatus = ?, sector = ?, officialEmail = ?, income = ?, loanPayment = ?, durationOfEmployment = ?, twitter = ?, facebook = ?, instagram = ?, guarantor1FullName = ?, guarantor1PhoneNumber = ?, guarantor1Email = ?, guarantor1Relationship = ?, guarantor2FullName = ?, guarantor2PhoneNumber = ?, guarantor2Email = ?, guarantor2Relationship = ?, organization = ?, dateJoined = ?, status = ?, document = ?, bankDetails = ?, loan = ?, saving = ?, tierStar = ?, appAndSystem = ? WHERE customerCode = ? AND id = ?", 
#             # (customerInfo['firstName'], customerInfo['lastName'], customerInfo['userName'], customerInfo['fullName'], customerInfo['gender'], customerInfo['email'], customerInfo['phoneNumber'], customerInfo['bvn'], customerInfo['maritalStatus'], customerInfo['children'], customerInfo['resident'], customerInfo['eduQualification'], customerInfo['employmentStatus'], customerInfo['sector'], customerInfo['officialEmail'], customerInfo['income'], customerInfo['loanPayment'], customerInfo['durationOfEmployment'], customerInfo['twitter'], customerInfo['facebook'], customerInfo['instagram'], customerInfo['fullName'], customerInfo['phoneNumber'], customerInfo['email'], customerInfo['relationship'], customerInfo['fullName'], customerInfo['phoneNumber'], customerInfo["guarantor2"]['email'], customerInfo["guarantor2"]['relationship'], customerInfo['organization'], customerInfo['dateJoined'], customerInfo['status'], customerInfo['document'], customerInfo['bankDetails'], customerInfo['loan'], customerInfo['saving'], customerInfo['tierStar'], customerInfo['appAndSystem'], customerInfo['id'], customerInfo['customerCode'])
#             (customerInfo['picture'], customerInfo['firstName'], customerInfo['lastName'], customerInfo['userName'], customerInfo['fullName'], customerInfo['gender'], customerInfo['email'], customerInfo['phoneNumber'], customerInfo['bvn'], customerInfo['maritalStatus'], customerInfo['children'], customerInfo['resident'], customerInfo['eduQualification'], customerInfo['employmentStatus'], customerInfo['sector'], customerInfo['officialEmail'], customerInfo['income'], customerInfo['loanPayment'], customerInfo['durationOfEmployment'], customerInfo['twitter'], customerInfo['facebook'], customerInfo['instagram'], customerInfo['guarantor1FullName'], customerInfo['guarantor1PhoneNumber'], customerInfo['guarantor1Email'], customerInfo['guarantor1Relationship'], customerInfo['guarantor2FullName'], customerInfo['guarantor2PhoneNumber'], customerInfo['guarantor2Email'], customerInfo['guarantor2Relationship'], customerInfo['organization'], customerInfo['dateJoined'], customerInfo['status'], customerInfo['document'], customerInfo['bankDetails'], customerInfo['loan'], customerInfo['saving'], customerInfo['tierStar'], customerInfo['appAndSystem'], customerInfo['customerCode'], customerInfo['id'])
#             # (customerInfo["personalInfo"]['firstName'], customerInfo["personalInfo"]['lastName'], customerInfo["personalInfo"]['userName'], customerInfo["personalInfo"]['fullName'], customerInfo["personalInfo"]['gender'], customerInfo["personalInfo"]['email'], customerInfo["personalInfo"]['phoneNumber'], customerInfo["personalInfo"]['bvn'], customerInfo["personalInfo"]['maritalStatus'], customerInfo["personalInfo"]['children'], customerInfo["personalInfo"]['resident'], customerInfo["education_and_employment"]['eduQualification'], customerInfo["education_and_employment"]['employmentStatus'], customerInfo["education_and_employment"]['sector'], customerInfo["education_and_employment"]['officialEmail'], customerInfo["education_and_employment"]['income'], customerInfo["education_and_employment"]['loanPayment'], customerInfo["education_and_employment"]['durationOfEmployment'], customerInfo["socialMedia"]['twitter'], customerInfo["socialMedia"]['facebook'], customerInfo["socialMedia"]['instagram'], customerInfo["guarantor1"]['fullName'], customerInfo["guarantor1"]['phoneNumber'], customerInfo["guarantor1"]['email'], customerInfo["guarantor1"]['relationship'], customerInfo["guarantor2"]['fullName'], customerInfo["guarantor2"]['phoneNumber'], customerInfo["guarantor2"]['email'], customerInfo["guarantor2"]['relationship'], customerInfo['organization'], customerInfo['dateJoined'], customerInfo['status'], customerInfo['document'], customerInfo['bankDetails'], customerInfo['loan'], customerInfo['saving'], customerInfo['tierStar'], customerInfo['appAndSystem'], customerInfo['id'], customerInfo['customerCode'])       
#         )
        
#         conn.commit()
#         # Return the updated user
#         updated_user = get_customer_by_id(customerInfo["id"])
#     except sqlite3.Error as e:
#         print(f"An error occurred: {e}")
#         conn.rollback()
#     finally:
#         conn.close()
#     return updated_user





# update_customerData = {
#     "id": 2,
#     "customerCode": "234skdjs123",
#     "personalInfo": {
#         "picture": "goke.png",
#         "firstName": "Goke",
#         "lastName": "Mola",
#         "userName": "Goke",
#         "fullName": "Goke Mola",
#         "gender": "male",
#         "email": "gok78@gmail.com",
#         "phoneNumber": "08087656933",
#         "bvn": "98748111",
#         "maritalStatus": "married",
#         "children": "5",
#         "resident": "Parent's apartment"
#     },
#     "education_and_employment": {
#         "eduQualification": "Bsc",
#         "employmentStatus": "Employed",
#         "sector": "Airtel",
#         "officialEmail": "goke63@landsqr.com",
#         "income": 100000,
#         "loanPayment": 4000,
#         "durationOfEmployment": 10
#     },
#     "socialMedia": {
#         "twitter": "@goke",
#         "facebook": "@goke090",
#         "instagram": "@goke090",
#     },
#     "guarantor1": {
#         "fullName": "Iyabo Ojo",
#         "phoneNumber": "09076543420",
#         "email": "iyabo@yahoo.com",
#         "relationship": "cousin",
#     },
#     "guarantor2": {
#         "fullName": "Tosin Ojo",
#         "phoneNumber": "09065243420",
#         "email": "tos@yahoo.com",
#         "relationship": "friend",
#     },
#     "organization": "Opay",
#     "userName": "Goke",
#     "email": "gok78@gmail.com",
#     "phoneNumber": "08087656933",
#     "dateJoined": current_date_time,
#     "status": "active",
#     "document": "goke.pdf",
#     "bankDetails": "Bank info",
#     "loan": 4000,
#     "saving": (100000 * 20) / 100,
#     "tierStar": 5,
#     "appAndSystem": "App Technology and settings info"
# }

# # update_customer(update_customerData)



# # DELETE
# def delete_customer(customer_id):
#     message = {}
#     try:
#         conn = get_db_connection()
#         cur = conn.cursor()
#         cur.execute("DELETE FROM customers WHERE id = ?", (customer_id,))
#         conn.commit()
#         message["status"] = "Customer deleted successfully"
#     except sqlite3.Error as e:
#         print(f"An error occurred: {e}")
#         conn.rollback()
#         message["status"] = "Cannot delete Customer"
#     finally:
#         conn.close()
#     return message

# # delete_customer(10)






# # # GET: Retrieve users with search, pagination, sorting, and filtering
# # @app.route('/api/customers', methods=['GET'])
# # def api_get_customers():
# #     # search = request.args.get('search')
# #     # page = int(request.args.get('page', 100))
# #     # page_size = int(request.args.get('page_size', 100))
# #     # sort_by = request.args.get('sort_by', 'fullName')
# #     # sort_order = request.args.get('sort_order', 'asc')
# #     # employment_status = request.args.get('employmentStatus')

# #     customers = []
# #     try:
# #         conn = get_db_connection()
# #         conn.row_factory = sqlite3.Row
# #         cur = conn.cursor()

# #         query = "SELECT * FROM customers WHERE 1=1"
# #         params = []

# #         # if search:
# #         #     query += " AND (fullName LIKE ? OR email LIKE ?)"
# #         #     search_pattern = f"%{search}%"
# #         #     params.extend([search_pattern, search_pattern])

# #         # if employment_status:
# #         #     query += " AND employmentStatus = ?"
# #         #     params.append(employment_status)

# #         # query += f" ORDER BY {sort_by} {'ASC' if sort_order == 'asc' else 'DESC'}"
# #         # query += " LIMIT ? OFFSET ?"
# #         # params.extend([page_size, (page - 1) * page_size])

# #         cur.execute(query, params)
# #         rows = cur.fetchall()

# #         for i in rows:
            
            
# #             customer = {
# #                 "id": i["id"],
# #                 "customerCode": i["customerCode"],
# #                 "personalInfo": {
# #                     "picture": i["picture"],
# #                     "firstName": i["firstName"], 
# #                     "lastName": i["lastName"],
# #                     "userName": i["userName"],
# #                     "fullName": i["fullName"],
# #                     "gender": i["gender"],
# #                     "email": i["email"],
# #                     "phoneNumber": i["phoneNumber"],
# #                     "bvn": i["bvn"],
# #                     "maritalStatus": i["maritalStatus"], 
# #                     "children": i["children"],
# #                     "resident": i["resident"]
# #                 },
# #                 "education_and_employment": {
# #                     "eduQualification": i["eduQualification"], 
# #                     "employmentStatus": i["employmentStatus"],
# #                     "sector": i["sector"],
# #                     "officialEmail": i["officialEmail"],
# #                     "income": i["income"],
# #                     "loanPayment": i["loanPayment"],
# #                     "durationOfEmployment": i["durationOfEmployment"]
# #                 },
# #                 "socialMedia": {
# #                     "twitter": i["twitter"],
# #                     "facebook": i["facebook"],
# #                     "instagram": i["instagram"]
# #                 },
# #                 "guarantor1": {
# #                     "fullName": i["guarantor1FullName"], 
# #                     "phoneNumber": i["guarantor1PhoneNumber"],
# #                     "email": i["guarantor1Email"],
# #                     "relationship": i["guarantor1Relationship"]
# #                 },
# #                 "guarantor2": {
# #                     "fullName": i["guarantor2FullName"],
# #                     "phoneNumber": i["guarantor2PhoneNumber"],
# #                     "email": i["guarantor2Email"],
# #                     "relationship": i["guarantor2Relationship"]
# #                 },
# #                 "organization": i["organization"],
# #                 "dateJoined": i["dateJoined"],
# #                 "status": i["status"],
# #                 "document": i["document"],
# #                 "bankDetails": i["bankDetails"],
# #                 "loan": i["loan"],
# #                 "saving": i["saving"],
# #                 "tierStar": i["tierStar"],
# #                 "appAndSystem": i["appAndSystem"]
# #             }
# #             customers.append(customer)
# #     except sqlite3.Error as e:
# #         print(f"An error occurred: {e}")
# #     finally:
# #         conn.close()

# #     return jsonify({
# #         # 'total': len(customer),
# #         # 'page': page,
# #         # 'page_size': page_size,
# #         'customers': customers
# #     })
    


# # GET: Retrieve users with search, pagination, sorting, and filtering
# @app.route('/api/customers', methods=['GET'])
# def api_get_customers():
#     # search = request.args.get('search')
#     # page = int(request.args.get('page', 100))
#     # page_size = int(request.args.get('page_size', 100))
#     # sort_by = request.args.get('sort_by', 'fullName')
#     # sort_order = request.args.get('sort_order', 'asc')
#     # employment_status = request.args.get('employmentStatus')
#     search = request.args.get('search', '')
#     page = int(request.args.get('page', 1))
#     size = int(request.args.get('size', 1000))
#     offset = (page - 1) * size

#     customers = []
#     try:
#         conn = get_db_connection()
#         conn.row_factory = sqlite3.Row
#         cur = conn.cursor()

#         # query = "SELECT * FROM customers WHERE 1=1"
#         # params = []
        
#         # cur.execute(query, params)
#         # rows = cur.fetchall()
        
#         # Get all Item
#         query = "SELECT * FROM customers WHERE firstName LIKE ? LIMIT ? OFFSET ?"
#         cur.execute(query, ('%' + search + '%', size, offset))
#         customersSearch = cur.fetchall()
        
        
        
        
#         readable_data = [dict(row) for row in customersSearch]

#         # # Print the readable data
#         # for customer in readable_data:
#         #     print(f"see me {customer}")


#         for i in readable_data:
#             customer = {
#                 "id": i["id"],
#                 "customerCode": i["customerCode"],
#                 "personalInfo": {
#                     "picture": i["picture"],
#                     "firstName": i["firstName"], 
#                     "lastName": i["lastName"],
#                     "userName": i["userName"],
#                     "fullName": i["fullName"],
#                     "gender": i["gender"],
#                     "email": i["email"],
#                     "phoneNumber": i["phoneNumber"],
#                     "bvn": i["bvn"],
#                     "maritalStatus": i["maritalStatus"], 
#                     "children": i["children"],
#                     "resident": i["resident"]
#                 },
#                 "education_and_employment": {
#                     "eduQualification": i["eduQualification"], 
#                     "employmentStatus": i["employmentStatus"],
#                     "sector": i["sector"],
#                     "officialEmail": i["officialEmail"],
#                     "income": i["income"],
#                     "loanPayment": i["loanPayment"],
#                     "durationOfEmployment": i["durationOfEmployment"]
#                 },
#                 "socialMedia": {
#                     "twitter": i["twitter"],
#                     "facebook": i["facebook"],
#                     "instagram": i["instagram"]
#                 },
#                 "guarantor1": {
#                     "fullName": i["guarantor1FullName"], 
#                     "phoneNumber": i["guarantor1PhoneNumber"],
#                     "email": i["guarantor1Email"],
#                     "relationship": i["guarantor1Relationship"]
#                 },
#                 "guarantor2": {
#                     "fullName": i["guarantor2FullName"],
#                     "phoneNumber": i["guarantor2PhoneNumber"],
#                     "email": i["guarantor2Email"],
#                     "relationship": i["guarantor2Relationship"]
#                 },
#                 "organization": i["organization"],
#                 "dateJoined": i["dateJoined"],
#                 "status": i["status"],
#                 "document": i["document"],
#                 "bankDetails": i["bankDetails"],
#                 "loan": i["loan"],
#                 "saving": i["saving"],
#                 "tierStar": i["tierStar"],
#                 "appAndSystem": i["appAndSystem"]
#             }
#             customers.append(customer)
            
            
#         # Search item in database and return the number of returned items
#         total_query = "SELECT COUNT(*) FROM customers WHERE firstName LIKE ?"
#         cur.execute(total_query, ('%' + search + '%',))
#         total_records = cur.fetchone()[0]

            
#             # for i in total_items:
#             #     customer = {
#             #         "id": i["id"],
#             #         "customerCode": i["customerCode"],
#             #         "personalInfo": {
#             #             "picture": i["picture"],
#             #             "firstName": i["firstName"], 
#             #             "lastName": i["lastName"],
#             #             "userName": i["userName"],
#             #             "fullName": i["fullName"],
#             #             "gender": i["gender"],
#             #             "email": i["email"],
#             #             "phoneNumber": i["phoneNumber"],
#             #             "bvn": i["bvn"],
#             #             "maritalStatus": i["maritalStatus"], 
#             #             "children": i["children"],
#             #             "resident": i["resident"]
#             #         },
#             #         "education_and_employment": {
#             #             "eduQualification": i["eduQualification"], 
#             #             "employmentStatus": i["employmentStatus"],
#             #             "sector": i["sector"],
#             #             "officialEmail": i["officialEmail"],
#             #             "income": i["income"],
#             #             "loanPayment": i["loanPayment"],
#             #             "durationOfEmployment": i["durationOfEmployment"]
#             #         },
#             #         "socialMedia": {
#             #             "twitter": i["twitter"],
#             #             "facebook": i["facebook"],
#             #             "instagram": i["instagram"]
#             #         },
#             #         "guarantor1": {
#             #             "fullName": i["guarantor1FullName"], 
#             #             "phoneNumber": i["guarantor1PhoneNumber"],
#             #             "email": i["guarantor1Email"],
#             #             "relationship": i["guarantor1Relationship"]
#             #         },
#             #         "guarantor2": {
#             #             "fullName": i["guarantor2FullName"],
#             #             "phoneNumber": i["guarantor2PhoneNumber"],
#             #             "email": i["guarantor2Email"],
#             #             "relationship": i["guarantor2Relationship"]
#             #         },
#             #         "organization": i["organization"],
#             #         "dateJoined": i["dateJoined"],
#             #         "status": i["status"],
#             #         "document": i["document"],
#             #         "bankDetails": i["bankDetails"],
#             #         "loan": i["loan"],
#             #         "saving": i["saving"],
#             #         "tierStar": i["tierStar"],
#             #         "appAndSystem": i["appAndSystem"]
#             #     }
            
            
#             # customers.append(customer)
#     except sqlite3.Error as e:
#         print(f"An error occurred: {e}")
#     finally:
#         conn.close()

#     return jsonify({
#         'customers': customers, # [dict(row) for row in customersSearch]
#         'total': total_records,
#         'page': page,
#         'size': size
#         # 'customers': [customers for customer in customers],
#     })





    
    
# # Remaining CRUD endpoints...
# @app.route('/api/customers/<user_id>', methods=['GET'])
# def api_get_customer(customer_id):
#     return jsonify(get_customer_by_id(customer_id))

# @app.route('/api/customers/add',  methods = ['POST'])
# def api_add_customer():
#     new_customer = request.get_json()
#     return jsonify(insert_customer(new_customer))

# @app.route('/api/customers/update',  methods = ['PUT'])
# def api_update_customer():
#     exiting_customer = request.get_json()
#     print(exiting_customer)
#     if "id" not in exiting_customer:
#         return jsonify({"error": "Customer id is required"}), 400
#     return jsonify(update_customer(exiting_customer))

# @app.route('/api/customers/delete/<customer_id>',  methods = ['DELETE'])
# def api_delete_customer(customer_id):
#     return jsonify(delete_customer(customer_id))

   
# #if __name__ == '__main__':
# #   app.run(debug=True)











# if __name__ == "__main__":
#   port = int(os.environ.get("PORT", 4000))
#   app.run(host="0.0.0.0", port=port)