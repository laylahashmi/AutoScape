from django.urls import path
from .views import api_technicians, api_technician_details, api_appointments, api_appointment_details, api_automobilevo



urlpatterns = [
    path("technicians/", api_technicians, name="api_technicians"),
    path("technicians/<int:employee_number>/", api_technician_details, name="api_technician_details"),
    path("appointments/", api_appointments, name="api_appointments"),
    path("appointments/<str:vin>/", api_appointment_details, name="api_appointment_details"),
    path("automobilevos/", api_automobilevo, name="api_automobilevo"),
]
