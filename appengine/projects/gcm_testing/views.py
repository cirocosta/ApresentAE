import webapp2
import settings

class GcmIndex(webapp2.RequestHandler):
    def get(self):
        template_values = dict()
        template = settings.JINJA_ENVIRONMENT.get_template(
            'gcm_testing/gcm_index.html')
        self.response.write(template.render(template_values))
