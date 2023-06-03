from django.contrib.auth import get_user_model
from django.contrib.auth.backends import BaseBackend
from django.contrib.auth.models import User
from django.db.models import Q


class CustomAuthenticationBackend(BaseBackend):
    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None

    def authenticate(self, request, username=None, password=None, *kwargs):
        user_model = get_user_model()
        try:
            user = user_model.objects.get(
                Q(username__exact=username) | Q(email__exact=username)
            )
            if user.check_password(password):
                return user

        except user_model.DoesNotExist:
            return None
