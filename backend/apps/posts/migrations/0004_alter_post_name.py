# Generated by Django 4.0.5 on 2022-06-22 14:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0003_alter_post_body'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='name',
            field=models.CharField(db_index=True, default='Anonymous', max_length=50, verbose_name='Name'),
        ),
    ]
