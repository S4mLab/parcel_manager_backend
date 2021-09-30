# Parcel Manager

this app is the backend for the mobile app to manage all the daily transactions of Nga's business

the main route will include the sale button to add new sale

- the main route (/), include:
  - add a sale (POST /sales)
  - sale record for today and yesterday (GET /sales)
  - can edit/delete a sale in the record (PUT, DELETE /sales/:id)
- the sale routes (/sales/), manage all things that relates to sales:
  - display all the sale history (GET /sales)
  * add a sale (POST /add)
  * edit a sale (PUT /edit/:id)
  * delete a sale (DELETE /sales/:id)
- the customer (/customer)
  - add new customer (POST /customer)
  - edit a customer (PUT /customer/:id)
  - delete a customer (DELETE /customer/:id)
