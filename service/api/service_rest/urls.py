from django.urls import path
from .views import api_technicians, api_technician



urlpatterns = [
    path("technicians/", api_technicians, name="api_technicians"),
    path("technicians/<int:id>/", api_technician, name="api_technician"),
]
