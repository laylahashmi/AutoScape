from common.json import ModelEncoder
from .models import Technician, Appointment, AutomobileVO



class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "import_href",
        "vin"
    ]

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "name",
        "employee_number",
    ]

class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "vin",
        "customer_name",
        "date_time",
        "technician",
        "reason",
        "is_vip",
        "is_finished",
    ]
    encoders = {"technician": TechnicianEncoder()}
