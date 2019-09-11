from django.db import models
from jwt_auth.models import User


class Cuisine(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name


class Meal(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=1000)
    image = models.CharField(max_length=200)
    cuisine = models.ForeignKey(Cuisine, related_name='meals', on_delete=models.CASCADE)
    user = models.ForeignKey(User, related_name='meals', on_delete=models.CASCADE, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.name} - {self.user}'


class Comment(models.Model):
    content = models.CharField(max_length=300)
    user = models.ForeignKey(User, related_name='comments', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    meal = models.ForeignKey(Meal, related_name='comments', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.user} - {self.comment}'
