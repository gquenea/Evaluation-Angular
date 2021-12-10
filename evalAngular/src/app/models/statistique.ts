export class Statistique {
  public identifiant: string;
  public titre: string;
  public valeur: number;
  constructor(identifiant: string, titre: string, valeur: number) {
    this.identifiant = identifiant;
    this.titre = titre;
    this.valeur = valeur;
  }
}
