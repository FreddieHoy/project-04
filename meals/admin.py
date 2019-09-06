from django.contrib import admin
from .models import Meal, Cuisine, Comment

# Register your models here.
admin.site.register(Meal)
admin.site.register(Cuisine)
admin.site.register(Comment)
