from .forms import SignUpForm
from django.urls import reverse_lazy
from django.views.generic import CreateView

# Create your views here.

#this extends CreateView
class SignUpView(CreateView):
    #use the provided form
    form_class = SignUpForm
    #go to login page after success, but wait for urls to be loaded in generic class based views
    success_url = reverse_lazy("login")
    template_name = "registration/signup.html"