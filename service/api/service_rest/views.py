from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .encoders import TechnicianEncoder, AppointmentEncoder, AutomobileVOEncoder
from .models import Technician, Appointment, AutomobileVO



@require_http_methods(["GET", "POST"])
def api_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not add the technician."}
            )
            response.status_code = 400
            return response



@require_http_methods(["DELETE"])
def api_technician_details(request, employee_number):
    if request.method == "DELETE":
        try:
            technician = Technician.objects.get(employee_number=employee_number)
            technician.delete()
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False
            )
        except Technician.DoesNotExist:
            return JsonResponse({"message": "Technician does not exist."})



@require_http_methods(["GET", "POST"])
def api_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            employee_number = content["technician"]
            technician = Technician.objects.get(employee_number=employee_number)
            content["technician"] = technician

            try:
                automobile_vin = content["vin"]
                inventory_venhicle = AutomobileVO.objects.get(vin=automobile_vin)
                inventory_vin = inventory_venhicle.vin
                if automobile_vin == inventory_vin:
                    content["is_vip"] = "VIP"
            except:
                content["is_vip"] = None

            appointment = Appointment.objects.create(**content)
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not add the appointment"}
            )
            response.status_code = 400
            return response



@require_http_methods(["GET", "DELETE", "PUT"])
def api_appointment_details(request, vin):
    if request.method == "GET":
        try:
            appointment = Appointment.objects.get(vin=vin)
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False,
            )
        except Appointment.DoesNotExist:
            response = JsonResponse({"message": "Appointment does not exist."})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            appointment = Appointment.objects.get(vin=vin)
            appointment.delete()
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False,
            )
        except Appointment.DoesNotExist:
            response = JsonResponse({"message": "Appointment does not exist."})
            response.status_code = 404
            return response
    else:
        try:
            content = {"is_finished": True}
            Appointment.objects.filter(vin=vin).update(**content)


            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False,
            )
        except Appointment.DoesNotExist:
            response = JsonResponse({"message": "Appointment does not exist."})
            response.status_code = 404
            return response



@require_http_methods(["GET"])
def api_automobilevo(request):
    if request.method == "GET":
        automobiles = AutomobileVO.objects.all()
        return JsonResponse(
            {"automobiles": automobiles},
            encoder = AutomobileVOEncoder,
            safe= False
        )
