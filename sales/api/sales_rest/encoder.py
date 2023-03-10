from common.json import ModelEncoder

from sales_rest.models import SalesPerson, Customer, SalesRecord, AutomobileVO

class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = ["id", "name", "employee_number" ]


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "import_href"]


class CustomerListEncoder(ModelEncoder):
    model = Customer
    properties = ["name", "id"]


class CustomerDetailEncoder(ModelEncoder):
    model = Customer
    properties = ["name", "address", "phone_number"]


class SalesRecordEncoder(ModelEncoder):
    model = SalesRecord
    properties = ["id", "automobile", "sales", "customer", "sale_price"]
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "sales": SalesPersonEncoder(),
        "customer": CustomerListEncoder(),
    }
