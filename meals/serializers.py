from rest_framework import serializers
from jwt_auth.serializers import UserSerializer
from .models import Meal, Cuisine, Comment
from jwt_auth.models import User

class MealSerializer(serializers.ModelSerializer):

    user = UserSerializer(read_only=True)

    class Meta:
        model = Meal
        fields = ('id', 'name', 'image', 'description', 'cuisine', 'user',)


class CuisineSerializer(serializers.ModelSerializer):

    class Meta:
        model = Cuisine
        fields = ('id', 'name',)

class CommentSerializer(serializers.ModelSerializer):

    user = UserSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = ('id', 'content', 'user', 'created_at',)

class PopulatedCommentSerializer(CommentSerializer):

    user = UserSerializer(read_only=True)

class PopulatedMealSerializer(MealSerializer):

    comments = PopulatedCommentSerializer(many=True)
    user = UserSerializer()
    cuisine = CuisineSerializer()

    class Meta(MealSerializer.Meta):
        fields = '__all__'


class PopulatedUserSerializer(UserSerializer):

    meals = MealSerializer(many=True)

class EditUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'name', 'image', 'bio',)
