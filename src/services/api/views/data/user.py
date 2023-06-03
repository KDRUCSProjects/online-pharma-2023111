from ...serializers.data.user import UserSerializer
from django.contrib.auth import get_user_model, login
from .base import DataRootViewSet
from knox.models import AuthToken
from knox.views import LoginView as KnoxLoginView
from rest_framework import generics, permissions, status
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

class UserViewSet(DataRootViewSet):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer
    
    def create(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = AuthToken.objects.create(user)[1]

        return Response(
            {
                "user_info": {
                    "id": user.id,
                    "username": user.username,
                    "email": user.email,
                },
                "token": token,
            }
        )

class UserLoginView(KnoxLoginView):
    permission_classes = (permissions.AllowAny)
    
    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data("user")
        login(request, user)
        return super(UserLoginView, self).post(request, format=None)
    
    def get(self, request):
        if self.request:
            return Response({"user": UserSerializer(self.request.user).data})
        return Response(
            {"user": "User is not logged in"}, status=status.HTTP_401_UNAUTHORIZED
        )