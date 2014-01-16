# Main handler for the requests. Routes the paths to the methods

import webapp2
import settings
import index.views

from projects.gcm_testing.views import GcmIndex
from projects.gcm_testing.views import GcmMensageiro
from projects.gcm_testing.views import GcmRegistro
from projects.gcm_testing.views import GcmSendMessage

application = webapp2.WSGIApplication([
    ('/',index.views.IndexPage),
    ('/gcm_testing/{0,1}', GcmIndex),
    ('/gcm_testing/mensageiro', GcmMensageiro),
    ('/gcm_testing/registro', GcmRegistro),
    ('/gcm_testing/send_to_gcm', GcmSendMessage),
], debug=settings.DEBUG)