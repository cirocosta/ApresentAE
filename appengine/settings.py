# All of the constants and setups that are in use within the application 

import os
import jinja2

DEBUG 				= True

JINJA_ENVIRONMENT 	= jinja2.Environment(
    loader 		= 	jinja2.FileSystemLoader(os.path.join(os.getcwd()\
    					+ '/templates')),
    extensions 	= 	['jinja2.ext.autoescape'],
    autoescape	=	True
    )

GCM_BROWSER_API_KEY = 'AIzaSyD4HwTbi1ekfnXB4VBFeoFnRSWVsE7NlVo'
