from django.urls import path

from .api_views import (
api_list_salesperson,
api_detail_salesperson,
api_list_customer,
api_detail_customer,
api_list_salesrecord,
api_delete_salesrecord,
)

urlpatterns = [
    path("salesperson/", api_list_salesperson, name="api_list_salesperson"),
    path("salesperson/<int:employee_number>/", api_detail_salesperson, name="api_detail-salesperson"),
    path("customer/", api_list_customer, name="api_list_customer"),
    path("customer/<int:id>/", api_detail_customer, name="api_detail_customer"),
    path("salesrecord/", api_list_salesrecord, name="api_list_salesrecord"),
    path("salesrecord/<int:id>/", api_delete_salesrecord, name="api_delete_salesrecord"),
]