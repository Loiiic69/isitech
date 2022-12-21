   ////TP 1 
   
   function LectureFichier(fileName)
    {
        const fs = require('fs')
        fs.readFile(fileName, (err, data) => {
          if (err) throw err;
        
          console.log(data.toString());
    })}
LectureFichier("test.txt")

   ////TP 2
   function EditFichier(fileName,TextToReplace)
   {
    const fs = require('fs');
        fs.writeFile(fileName, TextToReplace, function (err) {   
        if (err) throw err;   
        console.log('Fichier mis à jour !');});
   }
EditFichier("test.txt","fzugquizfgqihoiz hqzf qzhfhqojzfq zofj qh")

///TP 3
    const http = require('http');
    http.createServer(function (req, res) {
        console.log(`${req.method} ${req.url}`);
        const fs = require('fs');
        fs.readFile('test.txt', 'utf-8', (err, data) => {
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
    let directory_name = "C:/Users/Utilisateur/Desktop/dev/JS";  // Chemin du repertoire en question
    let filenames = fs.readdirSync(directory_name);
    console.log("\nFichiers dans le repertoire : ");
    filenames.forEach((file) => {
    console.log("File:", file);  //Lister les fichiers

});

///TP 5 