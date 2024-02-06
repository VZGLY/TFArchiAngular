export class Film {
  titre! : string

  constructor(t : string){
    this.titre = t
  }


  disbonjour() {
    console.log("Bonjour je suis le film : "+this.titre)
  }
}

export interface Acteur {
  nom : string
  prenom : string
  listeFilm? : Film[]
}
