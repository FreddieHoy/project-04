from django.urls import path
from .views import MealListView, MealDetailView, UserListView, UserDetailView

urlpatterns = [
    path('meals/', MealListView.as_view()),
    path('meals/<int:pk>/', MealDetailView.as_view()),
    path('users/', UserListView.as_view()),
    path('users/<int:pk>/', UserDetailView.as_view()),
]
