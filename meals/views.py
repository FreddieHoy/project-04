
from rest_framework.views import APIView
from rest_framework.response import Response

from django.http import Http404
from jwt_auth.models import User

from .models import Meal, Comment, Cuisine
from .serializers import PopulatedMealSerializer, PopulatedUserSerializer, PopulatedCommentSerializer, CommentSerializer, CuisineSerializer

class MealListView(APIView):

    def get(self, _request):
        books = Meal.objects.all()
        serializer = PopulatedMealSerializer(books, many=True)
        return Response(serializer.data)


    def post(self, request):
        serializer = PopulatedMealSerializer(data=request.data)
        if serializer.is_valid():
            # automatically sets the user to be the logged in user
            serializer.save(user=request.user)
            return Response(serializer.data, status=201)

        return Response(serializer.errors, status=422)


class MealDetailView(APIView):

    def get_meal(self, pk):
        try:
            meal = Meal.objects.get(pk=pk)
        except Meal.DoesNotExist: #if this is an error
            raise Http404 #do this - do an error

        return meal

    def get(self, _request, pk):
        meal = self.get_meal(pk)

        serializer = PopulatedMealSerializer(meal)
        return Response(serializer.data)

    def put(self, request, pk):
        meal = self.get_meal(pk)

        serializer = PopulatedMealSerializer(meal, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)

        return Response(serializer.errors, status=422)

    def delete(self, _request, pk):
        meal = self.get_meal(pk)

        meal.delete()
        return Response(status=204)

class CuisineListView(APIView):

    def get(self, _request):
        cuisines = Cuisine.objects.all()
        serializer = CuisineSerializer(cuisines, many=True)
        return Response(serializer.data)


class CommentListView(APIView):

    def post(self, request, pk):
        meal = Meal.objects.get(pk=pk)
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            # automatically sets the user to be the logged in user
            serializer.save(meal=meal, user=request.user)
            serializer = PopulatedMealSerializer(meal)
            return Response(serializer.data, status=201)

        return Response(serializer.errors, status=422)


class CommentDetailView(APIView):

    def get_comment(self, pk):
        try:
            comment = Comment.objects.get(pk=pk)
        except Comment.DoesNotExist: #if this is an error
            raise Http404 #do this - do an error

        return comment

    def get(self, _request, pk):
        meal = self.get_comment(pk)

        serializer = PopulatedCommentSerializer(meal)
        return Response(serializer.data)

    def delete(self, _request, **kwargs):
        meal = self.get_comment(kwargs['pk'])
        meal.delete()
        return Response(status=204)


class UserListView(APIView):

    def get(self, _request):
        users = User.objects.all()
        serializer = PopulatedUserSerializer(users, many=True)
        return Response(serializer.data)

class UserDetailView(APIView):

    def get_meal(self, pk):
        try:
            user = User.objects.get(pk=pk)
        except User.DoesNotExist: #if this is an error
            raise Http404 #do this - do an error

        return user

    def get(self, _request, pk):
        user = self.get_meal(pk)

        serializer = PopulatedUserSerializer(user)
        return Response(serializer.data)
