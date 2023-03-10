from django.db import models
from django.urls import reverse

# Create your models here.
class AutomobileVO(models.Model):
    vin=models.CharField(max_length=17, unique=True)
    import_href=models.CharField(max_length=100, unique=True, null=True)


class SalesPerson(models.Model):
    name= models.CharField(max_length=100)
    employee_number= models.IntegerField(unique=True, null=False)


class Customer(models.Model):
    name= models.CharField(max_length=100)
    address= models.CharField(max_length=200)
    phone_number = models.CharField(max_length=16, unique=True)


class SalesRecord(models.Model):
    sale_price= models.CharField(max_length=14)

    automobile= models.ForeignKey(
       AutomobileVO,
       related_name="automobile",
        on_delete=models.CASCADE)

    sales= models.ForeignKey(
        SalesPerson,
        related_name= "sales",
        on_delete= models.CASCADE)

    customer= models.ForeignKey(
        Customer,
        related_name="customer",
        on_delete=models.CASCADE)
