from django.db import models


# Create your models here.

class Employee(models.Model):
    name = models.CharField(max_length=150)
    surname = models.CharField(max_length=150)
    phone_number = models.CharField(max_length=20)
    email = models.CharField(max_length=150)
    address = models.CharField(max_length=150)
    position = models.CharField(max_length=50)
    is_admin = models.BooleanField(default=False)
    def __str__(self):
        return self

