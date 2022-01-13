from django.db import models
from django.contrib.auth.models import AbstractBaseUser

class User(AbstractBaseUser):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=32, db_index=True, blank=True, help_text="이름")
    email = models.EmailField(max_length=255, unique=True, help_text="내용")
    is_active = models.BooleanField(default=True, help_text="활성화 구분")
    is_admin = models.BooleanField(default=False, help_text="관리자 구분")
    ctime = models.IntegerField(db_index=True, blank=True, null=True, help_text="생성일시")

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']
    
    def __str__(self):
        return self.name

    