{
	"info": {
		"_postman_id": "a70bdf42-a0dd-44a9-a973-e27f89caebb8",
		"name": "GoRide - week-6",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "43913465",
		"_collection_link": "https://fit-1525979.postman.co/workspace/Fit's-Workspace~ecb81a26-f3bd-442c-8acd-754d6ad58740/collection/43913465-a70bdf42-a0dd-44a9-a973-e27f89caebb8?action=share&source=collection_link&creator=43913465"
	},
	"item": [
		{
			"name": "Register",
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\r\n\"username\": \"Fit\",\r\n\"password\": \"Password123\",\r\n\"role\": \"user\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/register",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"register"
					]
				}
			},
			"response": []
		},
		{
			"name": "Login",
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\r\n\"username\": \"Fit\",\r\n\"password\": \"Password123\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/login",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"login"
					],
					"query": [
						{
							"key": "",
							"value": null,
							"disabled": true
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODM0YjQ5MjExZTIzNDBjMzNkOWYxNzEiLCJyb2xlIjoidXNlciIsImlhdCI6MTc0ODI4NjkyMCwiZXhwIjoxNzQ4MjkwNTIwfQ.QnzJqSm-jM7kH-CLnaC7v7L7on6CqxWTueOs88lBmBM",
							"type": "string"
						}
					]
				},
				"method": "DELETE",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\r\n\"username\": \"Fit\",\r\n\"password\": \"Password123\"\r\n}"
				},
				"url": {
					"raw": "http://localhost:3000/admin/accounts/6834b49211e2340c33d9f171",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"admin",
						"accounts",
						"6834b49211e2340c33d9f171"
					],
					"query": [
						{
							"key": "",
							"value": null,
							"disabled": true
						}
					]
				}
			},
			"response": []
		}
	]
}