# Generated by Django 5.1.7 on 2025-05-20 15:02

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalog_app', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='color',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='size',
            field=models.CharField(blank=True, max_length=5, null=True),
        ),
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cart_mode', models.CharField(max_length=11, unique=True)),
                ('session_id', models.CharField(blank=True, max_length=255, null=True)),
                ('status', models.CharField(choices=[('active', 'Ativo'), ('paid', 'Pago'), ('abandoned', 'Abandonado')], default='active', max_length=20)),
                ('total', models.DecimalField(decimal_places=2, default=0, max_digits=10)),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('modified_at', models.DateTimeField(auto_now=True, null=True)),
                ('user', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='CartItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.PositiveIntegerField(default=1)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('cart', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='items', to='catalog_app.cart')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='catalog_app.product')),
            ],
        ),
    ]
