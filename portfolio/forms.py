from django import forms

class ContactForm(forms.Form):
    name = forms.CharField(max_length=100, required=True, widget=forms.TextInput(attrs={
        'placeholder': 'Tu Nombre',
        'data-key': 'your_name' 
    }))
    email = forms.EmailField(required=True, widget=forms.EmailInput(attrs={
        'placeholder': 'Tu Email',
        'data-key': 'your_email'
    }))
    message = forms.CharField(required=True, widget=forms.Textarea(attrs={
        'placeholder': 'Tu Mensaje',
        'data-key': 'your_message'
    }))
