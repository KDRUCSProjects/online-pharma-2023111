from django.contrib.auth import get_user_model
from rest_framework import validators

from .base import DataRootSerializer

class UserSerializer(DataRootSerializer):
    class Meta:
        model = get_user_model()
        fields = ["id", "username", "first_name", "email", "password"]
        extra_kwargs = {
            "password": {"write_only": True},
            "username": {
                "required": True,
                "allow_blank": False,
                "validators": [
                    validators.UniqueValidator(
                        get_user_model().objects.all(),
                        "A user with this username already exists",
                    )
                ],
            },
            "email": {
                "required": True,
                "allow_blank": False,
                "validators": [
                    validators.UniqueValidator(
                        get_user_model().objects.all(),
                        "A user with this Email already exists",
                    )
                ],
            },
        }
        def create(self, validated_data):
            username = validated_data.get("username")
            password = validated_data.get("password")
            first_name = validated_data.get("first_name")
            email = validated_data.get("email")

            user = get_user_model().objects.create_user(
                username=username,
                password=password,
                first_name=first_name,
                email=email,
            )

            return user