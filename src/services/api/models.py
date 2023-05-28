from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.
class Category(models.Model):
    title = models.CharField(max_length=500)
    parent_category = models.ForeignKey("Category",null=True, on_delete=models.CASCADE)
    def __str__(self):
        return self.title


class Country (models.Model):
    name = models.CharField(max_length=100)
    def __str__(self) :
        return self.name 

    class Address (models.Model):
        district = models.CharField(max_length=50)
        street = models.CharField(max_length=50)
        home_number = models.IntegerField(max_length=100)
    
    class Type_name (models.Model):
        type = models.CharField(max_length=100)

    class Add_drug (models.Model):
        name = models.CharField(max_length=100)
        price= models.IntegerField(max_length=100)
        quantity = models.IntegerField(max_length=40)
        description = models.CharField(max_length=100)
        category_id = models.ForeignKey("Category",null=True, on_delete=models.CASCADE)
        Type_name_id = models.ForeignKey("Type_name",null=True, on_delete=models.CASCADE)

    class Company (models.Model):    
        name = models.CharField(max_length=50)
        category_id = models.ForeignKey("Category",null=True, on_delete=models.CASCADE)
        Add_drug_id = models.ForeignKey("Add_drug",null=True, on_delete=models.CASCADE)


    class Photo (models.Model):
        image =models.CharField(max_length=300)
        Add_drug_id = models.ForeignKey("Add_drug",null=True, on_delete=models.CASCADE)
    

    class Order_Item(models.Model):
        quantity = models.IntegerField(max_length=100)
        price= models.IntegerField(max_length=100)
        Add_drug_id = models.ForeignKey("Add_drug",null=True, on_delete=models.CASCADE)
        user_id =models.ForeignKey(get_user_model(),on_delete=models.CASCADE, related_name="Customer")
        















