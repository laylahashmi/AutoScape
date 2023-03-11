# Generated by Django 4.0.3 on 2023-03-08 18:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0003_alter_salesperson_employee_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='phone_number',
            field=models.CharField(max_length=16, unique=True),
        ),
        migrations.AlterField(
            model_name='salesperson',
            name='employee_number',
            field=models.CharField(max_length=4, unique=True),
        ),
    ]