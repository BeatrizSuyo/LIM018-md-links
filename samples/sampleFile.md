el _parseado_ (análisis) del markdown para extraer los
      links podría plantearse de las siguientes maneras (todas válidas):
      
      * Usando un _módulo_ como [markdown-it](https://github.com/markdown-it/markdown-it),
        que nos devuelve un arreglo de _tokens_ que podemos recorrer para identificar
        los links.
      * Siguiendo otro camino completamente, podríamos usar
        [expresiones regulares ] (https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions)`