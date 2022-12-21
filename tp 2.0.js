   ////TP 1 
   
   function LectureFichier(fileName)
    {
        const fs = require('fs')
        fs.readFile(fileName, (err, data) => {
          if (err) throw err;
        
          console.log(data.toString()); /// Affichage du contenu du fichier dans la console
    })}
LectureFichier("test.txt") /// Document à lire

   ////TP 2
   function EditFichier(fileName,TextToReplace)
   {
    const fs = require('fs');
        fs.writeFile(fileName, TextToReplace, function (err) {   
        if (err) throw err;   
        console.log('Fichier mis à jour !');}); /// Confirme la modification du fichier dans la console
      
   }
EditFichier("test.txt","fzugquizfgqihoiz hqzf qzhfhqojzfq zofj qh") /// Nom du fichier à editer et la contenu a editer

///TP 3
    const http = require('http');
    http.createServer(function (req, res) {
        console.log(`${req.method} ${req.url}`);
        const fs = require('fs');
        fs.readFile('test.txt', 'utf-8', (err, data) => { /// Contenu du affichage du site
        if (err) {
            console.log(err)
            return;
        }
        res.end(data); 
    })
}).listen(9000);

console.log('Le serveur a bien démarré');

///TP 4

const fs = require("fs");
    let directory_name = "C:/Users/Utilisateur/Desktop/dev/JS";  // Racine de mon dossier dev
    let filenames = fs.readdirSync(directory_name);
    console.log("\nFichiers dans le repertoire : ");
    filenames.forEach((file) => {
    console.log("File:", file);  // Afichage de la racine de mon dossier js dans la console

});

///TP 5 
