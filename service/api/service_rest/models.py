from django.db import models



class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    vin = models.CharField(max_length=17, unique=True)


class Technician(models.Model):
    name = models.CharField(max_length=100, unique=True)
    employee_id = models.IntegerField(null=False, unique=True)


class Appointment(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    customer = models.CharField(max_length=200)
    date = models.DateField()
    time = models.TimeField()
    technician = models.ForeignKey(
        Technician,
        related_name = "appointments",
        on_delete = models.CASCADE
    )
    reason = models.TextField()
