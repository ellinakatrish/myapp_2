from django.http import HttpResponse
from django.shortcuts import render

from goods.models import Categories

def index (request):


    context={
        
        'title':'Home - Main',
        'content':'SMART DUCK',
    }           
    

    return render(request, 'main/index.html', context)


def about (request):
    context: dict[str, str]={
        'title':'Home - About us',
        'content':'SMART DUCK',
        'text_on_page':'Ellinas Website'
    } 

    return render(request, 'main/about.html', context)

    
    
