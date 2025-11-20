from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class User(AbstractUser):
    profile_pic = models.CharField(max_length=50, default="user.jpg")
    class Meta:
        db_table = 'auth_user'