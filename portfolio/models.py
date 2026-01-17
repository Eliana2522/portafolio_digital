from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    title_en = models.CharField(max_length=200, blank=True, null=True)
    description = models.TextField()
    description_en = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='projects/')
    demo_link = models.URLField(max_length=200, blank=True, null=True)
    source_link = models.URLField(max_length=200, blank=True, null=True)

    def __str__(self):
        return self.title