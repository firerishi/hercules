import re
import simplejson
from django.http import HttpResponse
from django.shortcuts import render_to_response, get_object_or_404
from urllib2 import urlopen


def home(request):
	return render_to_response('about.html')


def blog(request):
	url = "http://api.tumblr.com/v2/blog/firerishi.tumblr.com/posts?api_key=mozSVcfN75W2PSk9hAQbGufzYwkZOMfhl7NFnnzOILuY6p2QaN&limit=50"
	#url production api-key:  mozSVcfN75W2PSk9hAQbGufzYwkZOMfhl7NFnnzOILuY6p2QaN
	#url development api-key: 9Xjmm9wIxbHMdSLdegsGGosZ7UOLcGmJxyMTZVeDbUJQcUUzDL

	response = urlopen(url)
	page = response.read()	
	results_api = simplejson.loads(page)			
	for post in results_api['response']['posts']:	
		if post['type'] == 'photo':
			post['photolink'] = post['photos'][0]['alt_sizes'][1]['url']

	return render_to_response('blog.html',
		{'posts':results_api['response']['posts'],
		'blogname':results_api['response']['blog']['name'],
		'blogurl':results_api['response']['blog']['url']})


def reads(request):
	return render_to_response('reads.html')