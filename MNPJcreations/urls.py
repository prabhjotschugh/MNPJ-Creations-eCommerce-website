from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('app.urls')),
]

from django.contrib.staticfiles.urls import staticfiles_urlpatterns # new
urlpatterns += staticfiles_urlpatterns() # new
