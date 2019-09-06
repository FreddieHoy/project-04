from django.db import models
from jwt_auth.models import User

class Comment(models.Model):
    content = models.CharField(max_length=300)
    user = models.ForeignKey(User, related_name='comments', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user}'


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
    comments = models.ForeignKey(Comment, related_name='meals', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.name} - {self.user}'
