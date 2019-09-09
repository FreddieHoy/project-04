from django.db import models
from django.contrib.auth.models import AbstractUser, UserManager
# Create your models here.
class User(AbstractUser):
    # custom fields here...
    name = models.CharField(max_length=25, blank=True)
    image = models.CharField(max_length=200, blank=True)
    bio = models.CharField(max_length=200, blank=True)
    # add this line... not sure what it does..
    objects = UserManager()
