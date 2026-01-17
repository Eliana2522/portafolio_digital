from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.contrib import messages
from .models import Project
from .forms import ContactForm

def home(request):
    projects = Project.objects.all()
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']

            # Send email (prints to console because of settings.py)
            send_mail(
                f'Mensaje de contacto de {name}',
                message,
                email,
                ['tu_admin_email@ejemplo.com'], # Reemplaza con tu email
            )
            
            messages.success(request, '¡Tu mensaje ha sido enviado con éxito!')
            return redirect('home')
    else:
        form = ContactForm()

    return render(request, 'index.html', {'projects': projects, 'form': form})