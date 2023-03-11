# CarCar

Team:

* Layla - Service
* Kethlyn - sales Microservice

## Design

We used bootstrap for the design.

## Service microservice

My bounded context was the services microservice and the models in it were the AutomobileVO, Appointment and Technician. The AutomobileVO model was connected to a poller which pulled data from the inventory producer. The data that was pulled was the VIN number of the automobiles that were in my inventory. I compared each of the VIN numbers that were pulled against the VIN numbers of the vehicles that signed up for appointments. This comparison allowed me to mark a certain appointment as VIP.

The Appointment model also allowed me to create a form and a list which showed the VIN, customer name, technician, date/time and reason for the appointment. The technician property was a foreign key which related back to my Technician model. I used the VIN number to identify the specific appointment which also allowed me to compare it to the vehicles in my inventory(which I pulled used the AutomobileVO model and my poller).

The Technician model contained a name and employee_number which was used to identify the technician. Once identified, the employee_number was then used to reference back to the name of the technician and add it to my appointment record.

## Sales microservice

My bounded context was the sales microservice. It included 4 models:
1. SalesPerson: which contained properties that identified each sale person, such as their employee number which was unique to them and their names.

2. Customer: which with properties that identify each customer, such as their names and addresses.

3. Automobile value object which allowed me to interact with the Inventory bounded context.

4. SalesRecords model had three foreign keys relating back to each of the models outlined above and also included sales price.
