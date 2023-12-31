from django.db import models

# Create your models here.
class Login(models.Model):
    Email = models.CharField(max_length=30)
    Password = models.CharField(max_length=30)
    role = models.CharField(max_length=30)

class Register(models.Model):
    Fname = models.CharField(max_length=30)
    Lname = models.CharField(max_length=30)
    Contact = models.CharField(max_length=30)
    user_status = models.CharField(max_length=30)
    log_id = models.ForeignKey(Login,on_delete=models.CASCADE)

class show(models.Model):
    Artname = models.CharField(max_length=30)
    Artistname = models.CharField(max_length=30)
    Category = models.CharField(max_length=30)
    Price = models.CharField(max_length=30)
    Images = models.ImageField(upload_to='images/',null=True)