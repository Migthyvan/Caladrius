# Generated by Django 5.2 on 2025-05-21 11:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('newsletter', '0002_newslettersubscribers_is_active'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newslettersubscribers',
            name='email',
            field=models.EmailField(max_length=254),
        ),
    ]
