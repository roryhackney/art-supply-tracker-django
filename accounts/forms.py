from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import get_user_model

class SignUpForm(UserCreationForm):
    profile_pic = forms.CharField(max_length=50, required=False)

    class Meta:
        model=get_user_model()
        fields=['profile_pic', 'username', 'password1', 'password2']