from django.test import TestCase
from django.core.exceptions import ValidationError
from accounts.PasswordValidator import PasswordValidator

# Create your tests here.
class AccountsTests(TestCase):
    def testPasswordValidator(self):
        validator = PasswordValidator()
        with self.assertRaisesMessage(ValidationError, "Your password is missing an uppercase letter!"):
            validator.validate("nouppercaseletters5")
        with self.assertRaisesMessage(ValidationError, "Your password is missing a lowercase letter!"):
            validator.validate("NOLOWERCASELETTERS5")
        with self.assertRaisesMessage(ValidationError, "Your password is missing a number!"):
            validator.validate("NoNumberInPassword")
        validator.validate("ValidPassword5")
        
