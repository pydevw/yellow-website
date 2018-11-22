from django.contrib import admin
from .models import Category, Product, State, TrackUsersActivity, Cart
# Register your models here.

"""
from .models import CustomUser
@admin.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    pass
"""

admin.site.register(Category)
admin.site.register(State)
admin.site.register(Product)
admin.site.register(TrackUsersActivity)
admin.site.register(Cart)
