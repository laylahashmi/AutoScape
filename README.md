# CarCar

Team:

* Kethlyn - sales Microservice
* Person 2 - Which microservice?

## Design

## Service microservice

Explain your models and integration with the inventory
microservice, here.

## Sales microservice

My bounded context was the sales microservice. It included 4 models:
1. SalesPerson: which contained properties that identified each sale person, such as their employee number which was unique to them and their names.

2. Customer: which with properties that identify each customer, such as their names and addresses.

3. Automobile value object which allowed me to interact with the Inventory bounded context.

4. SalesRecords model had three foreign keys relating back to each of the models outlined above and also included sales price.