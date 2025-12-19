from django.core.exceptions import ValidationError
import re

class PasswordValidator:
    def __init__(self):
        self.length = 10
    
    def validate(self, password, user=None):
        self.validateContainsLower(password)
        self.validateContainsUpper(password)
        self.validateContainsNumber(password)
        
    def validateContainsUpper(self, password):
        r = r"[A-Z]"
        result = re.search(r, password)
        if result is None:
            raise ValidationError("Your password is missing an uppercase letter!")
        
    def validateContainsLower(self, password):
        r = r"[a-z]"
        result = re.search(r, password)
        if result is None:
            raise ValidationError("Your password is missing a lowercase letter!")

    def validateContainsNumber(self, password):
        r = r"[\d]"
        result = re.search(r, password)
        if result is None:
            raise ValidationError("Your password is missing a number!")

    def get_help_text(self):
        return "Your password must include an uppercase letter, lowercase letter, and number."