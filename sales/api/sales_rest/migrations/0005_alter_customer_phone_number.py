# Generated by Django 4.0.3 on 2023-03-08 18:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0004_alter_customer_phone_number_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='phone_number',
            field=models.IntegerField(unique=True),
        ),
    ]
