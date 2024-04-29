from audioop import reverse
from django.contrib import auth
from django.http import HttpResponseRedirect
from django.shortcuts import render

from users.forms import UserLoginForm

def login(request):
    if request.method == 'POST':
        form = UserLoginForm(data=request.POST)
        if form.is_valid():
            username = request.POST['username']
            password = request.POST['password']
            user = auth.authenticate(username=username, password=password)
    
            if user:
                auth.login(request, user)               
                return HttpResponseRedirect(reverse('main:index'))
    else:
        form = UserLoginForm()

    context = {
        'title': 'Home - authprization',
        'form': form
    }
    return render(request, 'users/login.html', context)



def registration (request):
    context = {
        
        'title':'Home - Registration',
    }       
    return render(request, 'users/registration.html', context)


def profile (request):
    context = {
        
        'title':'Home - Profile',
    }       
    return render(request, 'users/profile.html', context)


def logout (request):
    ...