import webapp2
import settings
import urllib2
import json

from random import randint
from google.appengine.api import channel

class GcmIndex(webapp2.RequestHandler):
    def get(self):
        template_values = dict()
        template = settings.JINJA_ENVIRONMENT.get_template(
            'gcm_testing/gcm_index.html')
        self.response.write(template.render(template_values))


class GcmMensageiro(webapp2.RequestHandler):
    def get(self):
        codigo = ''
        for i in range(8):
            codigo += str(randint(0,9))
        token = channel.create_channel(codigo)
        template_values = {
            "codigo": codigo,
            "token": token
        }
        template = settings.JINJA_ENVIRONMENT.get_template(
            'gcm_testing/gcm_mensageiro.html')
        self.response.write(template.render(template_values))


class GcmSendMessage(webapp2.RequestHandler):
    def post(self):
        message = self.request.get('message')
        regid = self.request.get('registration_ids')

        url = 'https://android.googleapis.com/gcm/send'
        headers = {
            "Content-type":"application/json",
            "Authorization":"key=" + settings.GCM_BROWSER_API_KEY
        }
        data = {
            "registration_ids":[regid],
            "data": {"message":message},
        }

        data = json.dumps(data)
        request = urllib2.Request(url,data,headers)
        f = urllib2.urlopen(request)
        response = f.read()
        print response
        self.response.write(response)


class GcmRegistro(webapp2.RequestHandler):
    def post(self):
        codigo = self.request.get('codigo')
        regid = self.request.get('regid')
        modelo = self.request.get('modelo')
        data = {
            "modelo": modelo,
            "regid": regid,
        }
        channel.send_message(codigo, json.dumps(data))
        self.response.write(codigo)
