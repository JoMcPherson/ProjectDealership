from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .encoders import (
    AppointmentEncoder,
    TechnicianEncoder,
)

from .models import Appointment, Technician, AutomobileVO


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
        except Exception:
            response = JsonResponse({"message": "Could not create technician"})
            response.status_code = 400
            return response


@require_http_methods(["DELETE", "GET"])
def api_technician(request, id):
    if request.method == "GET":
        technician = Technician.objects.filter(id=id)
        return JsonResponse(
            {"technician": technician}, encoder=TechnicianEncoder, safe=False
        )
    else:
        try:
            technician = Technician.objects.get(id=id)
            technician.delete()
            return JsonResponse({"message": "Technician has been deleted"}, status=200)

        except Technician.DoesNotExist:
            response = JsonResponse({"Message": "Technician does not exist"})
            response.status_code = 404
            return response


@require_http_methods(["GET", "POST"])
def api_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            try:
                technician_id = content["technician"]
                technician = Technician.objects.get(id=technician_id)
                content["technician"] = technician
            except Technician.DoesNotExist:
                return JsonResponse(
                    {"message": "Does not match any technicians"}, status=400
                )
            vin = content["vin"]
            if AutomobileVO.objects.filter(vin=vin).count() == 1:
                content["is_vip"] = True
            appointment = Appointment.objects.create(**content)
            return JsonResponse(appointment, encoder=AppointmentEncoder, safe=False)
        except Exception:
            response = JsonResponse({"message": "Could not create appointment"})
            response.status_code = 400
            return response


@require_http_methods(["DELETE", "GET"])
def api_appointment(request, id):
    if request.method == "GET":
        appointment = Appointment.objects.filter(id=id)
        return JsonResponse(
            {"appointment": appointment}, encoder=AppointmentEncoder, safe=False
        )
    else:
        try:
            appointment = Appointment.objects.get(id=id)
            appointment.delete()
            return JsonResponse(
                {"message": "Appointment has been deleted"},
                status=200,
            )
        except Exception:
            response = JsonResponse({"Message": "Appointment does not exist"})
            response.status_code = 404
            return response


@require_http_methods(["PUT"])
def cancel_appointment(request, id):
    try:
        appointment = Appointment.objects.get(id=id)
        appointment.is_cancelled()
        return JsonResponse(appointment, encoder=AppointmentEncoder, safe=False)
    except Exception:
        response = JsonResponse({"message": "Could not cancel appointment"})
        response.status_code = 404
        return response




@require_http_methods(["PUT"])
def finish_appointment(request, id):
    try:
        appointment = Appointment.objects.get(id=id)
        appointment.is_finished()
        return JsonResponse(appointment, encoder=AppointmentEncoder, safe=False)
    except Exception:
        response = JsonResponse({"message": "Could not complete appointment"})
        response.status_code = 404
        return response
