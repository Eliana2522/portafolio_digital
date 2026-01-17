from django.contrib import admin
from .models import Project

class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'description')
    fieldsets = (
        (None, {
            'fields': ('title', 'title_en', 'description', 'description_en', 'image', 'demo_link', 'source_link')
        }),
    )

admin.site.register(Project, ProjectAdmin)