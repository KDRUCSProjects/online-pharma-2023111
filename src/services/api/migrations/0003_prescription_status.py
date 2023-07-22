# Generated by Django 4.2 on 2023-07-22 05:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_order_order_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='prescription',
            name='status',
            field=models.PositiveIntegerField(choices=[(1, 'Pending'), (2, 'Canceled'), (3, 'Completed')], default=1),
        ),
    ]