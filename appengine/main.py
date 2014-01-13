# Main handler for the requests. Routes the paths to the methods

import webapp2
import settings
import index.views

application = webapp2.WSGIApplication([
    ('/',index.views.IndexPage),
], debug=settings.DEBUG)