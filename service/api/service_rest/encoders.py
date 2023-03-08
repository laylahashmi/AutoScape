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
        "employee_id",
    ]

class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "vin",
        "customer",
        "date",
        "time",
        "technician",
        "reason",
    ]
    encoders = {"technician": TechnicianEncoder}
