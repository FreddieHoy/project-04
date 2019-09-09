from django.urls import path
from .views import MealListView, MealDetailView, UserListView, UserDetailView, CommentListView, CommentDetailView, CuisineListView

urlpatterns = [
    path('meals/', MealListView.as_view()),
    path('cuisines/', CuisineListView.as_view()),
    path('meals/<int:pk>/', MealDetailView.as_view()),
    path('meals/<int:pk>/comments/', CommentListView.as_view()),
    path('meals/<int:meals_pk>/comments/<int:pk>/', CommentDetailView.as_view()),
    path('users/', UserListView.as_view()),
    path('users/<int:pk>/', UserDetailView.as_view()),
]
