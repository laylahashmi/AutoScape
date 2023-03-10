from django.db import models
from django.urls import reverse



class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    vin = models.CharField(max_length=17, unique=True)


class Technician(models.Model):
    name = models.CharField(max_length=100, unique=True)
    employee_number = models.PositiveSmallIntegerField(null=False, unique=True)

    def get_api_url(self):
        return reverse("api_technician_details", kwargs={"employee_number": self.employee_number})


class Appointment(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    customer_name = models.CharField(max_length=200)
    date_time = models.DateTimeField(null=True)

    technician = models.ForeignKey(
        Technician,
        related_name = "appointments",
        on_delete = models.CASCADE
    )

    reason = models.TextField()
    is_vip = models.CharField(max_length=10, null=True)
    is_finished = models.BooleanField(default=False)

    def get_api_url(self):
        return reverse("api_appointment_details", kwargs={"vin": self.vin})
