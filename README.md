# ReactJs-Laravel E-Commerce

This is a sample application that demonstrates an E-Commerce website using the ReactJs and APIs. The applicationloads products from Mysql databases and displays them.Users can interact the website with login/register process.Website uses cookies and local storage for save users data. Users can select for save users data.User can select to display products in single category.Users can click on any product to get more information including pricing and description. Users can buy selected item's with filling order details and also see the order details after the order.

## Tech Stack

**Client:** ReactJs

**Server:** Laravel APIs, MySql


## API Reference

#### Login/Register API

```http
  POST /api/login
  POST /api/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Email` | `email` | **Required**. Users email |
| `Password` | `password` | **Required**. Users Password |

#### Add Product API

```http
  POST /api/add-product
```

#### Get all products API

```http
  GET /api/products
```
#### Get specific product API

```http
  GET /api/product/{$id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `integer` | **Required**. Product id |

#### Delete specific product API

```http
  POST /api/delete-product/{$id}
```
#### Contact form API
```http
  POST /api/contact
```
## Run Locally

Clone the project

```bash
  git clone https://github.com/ParthMi/ReactJs-Laravel-E-commerce
```

Go to the project directory

```bash
  cd react-laravel
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```





## 🔗 Linkedin
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/parth-miroliya-65a19122b)


