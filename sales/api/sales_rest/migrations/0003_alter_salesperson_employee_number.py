# Generated by Django 4.0.3 on 2023-03-08 18:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0002_alter_customer_phone_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='salesperson',
            name='employee_number',
            field=models.IntegerField(max_length=4, unique=True),
        ),
    ]
