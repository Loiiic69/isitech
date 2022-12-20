const C = "phrase de test";
CR = C.toUpperCase(); //Passage de toutes les lettres en maj
///Passage des voyelles en minuscule
CR = CR.replaceAll("A", "a");
CR = CR.replaceAll("E", "e");   
CR = CR.replaceAll("U", "u");
CR = CR.replaceAll("I", "i");
CR = CR.replaceAll("O", "o");
CR = CR.replaceAll("Y", "y");
console.log(CR);