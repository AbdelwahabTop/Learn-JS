let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

//      https?      include () or not
//      \/\/        escpe
//      (?          include () or not  
//      \.          escpe for .    
//      .*          match any char if there is one char or more or there is no char