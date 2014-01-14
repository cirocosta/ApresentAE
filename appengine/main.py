# Main handler for the requests. Routes the paths to the methods

import webapp2
import settings
import index.views

from projects.gcm_testing.views import GcmIndex, GcmMensageiro

application = webapp2.WSGIApplication([
    ('/',index.views.IndexPage),
    ('/gcm_testing/', GcmIndex),
    ('/gcm_testing/mensageiro', GcmMensageiro),
], debug=settings.DEBUG)