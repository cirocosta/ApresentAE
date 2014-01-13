ApresentAE!
====
[ApresentAE!](http://apresentae.appspot.com/) trata-se de meu projeto base onde exporei projetos que hão de ser apresentados ou então como um lugar para centralizar o que foi utilizado em apresentações.


Estrutura
----- 
```
/apresentae
    Gruntfile.js    -- automated tasks
    package.json    -- npm install 
    /appengine      -- GAE proj
        /index       -- landing page
        /media       -- images and other non-js/css static
        /projects    -- projs
        /static      -- js/css non-minified
            /build       -- minified assets
        /templates   -- html
``` 

Dentro de cada projeto em `/projects` há um README.md sobre o projeto em si.

A ideia é que todo projeto seja altamente comentado para aprendizado.


Running
-----
Para um correto ambiente de desenvolvimento é importante:

0. Que o usuário consiga [rodar uma aplicação GAE w/ Python](https://developers.google.com/appengine/docs/python/gettingstartedpython27/introduction)
1. Instalar o [NodeJS](nodejs.org)
2. Instalar das dependencias do projeto com `npm install`
3. Executar o [Grunt](http://gruntjs.com/) com `$: grunt` no root do projeto

-----------

* For the full development environment it will also be required to install NodeJS, run `npm install` for getting all of the dependencies and also building the
minified files with `$: grunt`. *


Contato
------
[G+](www.google.com/+ciroscosta)