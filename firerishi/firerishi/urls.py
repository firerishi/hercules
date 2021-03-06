from django.conf.urls.defaults import *
import os
# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

PROJECT_ROOT = os.path.abspath(os.path.dirname(__file__))

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'firerishi.views.home', name='home'),
    # url(r'^firerishi/', include('firerishi.foo.urls')),
    url(r'^static/(?P<path>.*)$', 'django.views.static.serve', {'document_root': os.path.join(PROJECT_ROOT, "../static")}),
		url(r'^$', 'landing.views.home'),        
        url(r'^blog$', 'landing.views.blog'),
        url(r'^home$', 'landing.views.home'),
		url(r'^about$', 'landing.views.home'),
        url(r'^reads$', 'landing.views.reads'),
        url(r'^work$', 'landing.views.work'),
    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)
