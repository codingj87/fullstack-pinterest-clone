from django.conf import settings
from django.contrib.auth import get_user_model
from django.db import models


def get_sentinel_user():
    return get_user_model().objects.get_or_create(name='deleted')[0]

class Post(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=32, db_index=True, blank=True, help_text="제목")
    contents = models.TextField(db_index=True, blank=True, help_text="내용")
    image = models.CharField(max_length=500, db_index=True, blank=True, help_text="이미지URL")
    writer = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True)
    ctime = models.IntegerField(db_index=True, blank=True, null=True, help_text="생성일시")

