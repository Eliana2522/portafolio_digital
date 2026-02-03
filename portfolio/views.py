from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.contrib import messages
from .models import Project
from .forms import ContactForm

def home(request):
    projects_queryset = Project.objects.all()
    projects_for_js = []
    for project in projects_queryset:
        projects_for_js.append({
            'id': project.id,
            'title': project.title,
            'title_en': project.title_en,
            'description': project.description,
            'description_en': project.description_en,
        })

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

    context = {
        'projects': projects_queryset,
        'projects_for_js': projects_for_js,
        'form': form,
    }
    return render(request, 'index.html', context)