from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from .encoder import (
    SalesPersonEncoder,
    CustomerListEncoder,
    CustomerDetailEncoder,
    SalesRecordEncoder,
    AutomobileVOEncoder
)

from .models import SalesPerson, Customer, SalesRecord, AutomobileVO


@require_http_methods(["GET", "POST"])
def api_list_salesperson(request):
    if request.method == "GET":
        salesperson = SalesPerson.objects.all()
        return JsonResponse(
            {"salesperson": salesperson},
            encoder=SalesPersonEncoder,
        )
    else:
        content = json.loads(request.body)
        salesperson = SalesPerson.objects.create(**content)
        return JsonResponse(
                salesperson,
                encoder=SalesPersonEncoder,
                safe=False,
            )


@require_http_methods(["DELETE", "GET", "PUT"])
def api_detail_salesperson(request, employee_number):
    if request.method == "GET":
        try:
            salesperson = SalesPerson.objects.get(employee_number=employee_number)
            return JsonResponse(
                salesperson,
                encoder=SalesPersonEncoder,
                safe=False
            )
        except SalesPerson.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            salesperson = SalesPerson.objects.get(employee_number=employee_number)
            salesperson.delete()
            return JsonResponse(
                salesperson,
                encoder=SalesPersonEncoder,
                safe=False,
            )
        except SalesPerson.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
    else: # PUT
        try:
            content = json.loads(request.body)
            salesperson = SalesPerson.objects.get(employee_number=employee_number)

            props = ["name", "employee_number"]
            for prop in props:
                if prop in content:
                    setattr(salesperson, prop, content[prop])
            salesperson.save()
            return JsonResponse(
                salesperson,
                encoder=SalesPersonEncoder,
                safe=False,
            )
        except SalesPerson.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response

@require_http_methods(["GET", "POST"])
def api_list_customer(request):
    if request.method == "GET":
        customer = Customer.objects.all()
        return JsonResponse(
            {"customer": customer},
            encoder=CustomerListEncoder,
        )
    else:
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
                customer,
                encoder=CustomerDetailEncoder,
                safe=False,
            )


@require_http_methods(["DELETE", "GET"])
def api_detail_customer(request, id):
    if request.method == "GET":
        try:
            customer = Customer.objects.get(id=id)
            return JsonResponse(
                customer,
                encoder=CustomerDetailEncoder,
                safe=False
            )
        except Customer.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            customer = Customer.objects.get(id=id)
            customer.delete()
            return JsonResponse(
                customer,
                encoder=CustomerDetailEncoder,
                safe=False,
            )
        except Customer.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})


@require_http_methods(["GET", "POST"])
def api_list_salesrecord(request):
    if request.method == "GET":
        salesrecord = SalesRecord.objects.all()
        return JsonResponse(
            {"salesrecord": salesrecord},
            encoder=SalesRecordEncoder,
        )
    else:
        content = json.loads(request.body)

        try:
            vin=content["automobile"]
            automobile = AutomobileVO.objects.get(vin=vin)
            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Automobile Does Not Exist"},
                status=404,
            )
        try:
            employee_number = content["sales"]
            sales = SalesPerson.objects.get(employee_number=employee_number)
            content["sales"] = sales
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "Sales Do Not Exist"},
                status=404,
            )
        try:
            id = content["customer"]
            customer = Customer.objects.get(id=id)
            content["customer"] = customer

        except Customer.DoesNotExist:
                return JsonResponse(
                    {"message": "Customer Does Not Exist"},
                    status=404,
                )

        salesrecord = SalesRecord.objects.create(**content)
        return JsonResponse( {"salesrecord": salesrecord},
            encoder= SalesRecordEncoder,
            safe=False,
        )


@require_http_methods(["DELETE"])
def api_delete_salesrecord(request, id):
    if request.method == "DELETE":
        try:
            salesrecord = SalesRecord.objects.get(id=id)
            salesrecord.delete()
            return JsonResponse(
                salesrecord,
                encoder=SalesRecordEncoder,
                safe=False,
            )
        except SalesRecord.DoesNotExist:
            return JsonResponse({"message": "This record does not exist"})
