from django.urls import path
from . import views

urlpatterns = [
    path('UserRegister',views.UserRegister.as_view(),name='UserRegister'),
    path('UserLogin',views.UserLogin.as_view(),name='UserLogin'),
    path('Deleteshow/<int:id>',views.Deleteshow.as_view(),name='Deleteshow'),
    path('AddshowAPI',views.AddshowAPI.as_view(),name='AddshowAPI'),
    path('GetshowDetails',views.GetshowDetails.as_view(),name='GetshowDetails'),
    path('Singledata/<int:id>',views.Singledata.as_view(),name='Singledata'),
    path('updateshow/<int:id>',views.updateshow.as_view(),name='updateshow'),
    path('Filterproducts',views.Filterproducts.as_view(),name='Filterproducts'),

]