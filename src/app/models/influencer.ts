export interface Influencer {
    id: string;
    voornaam: string;
    familienaam: string;
    geslacht: string;
    gebruikersnaam: string;
    profielfoto: string;
    adres: string;
    postcode: string;
    stad: string;
    geboortedatum: string;
    telefoonnummer: string;
    emailadres: string;
    gebruikersnaaminstagram: string;
    gebruikersnaamfacebook: string;
    gebruikersnaamtiktok: string;
    aantalvolgersinstagram: string;
    aantalvolgersfacebook: string;
    aantalvolgerstiktok: string;
    infoovervolgers: string;
    badge: string;
    aantalPunten: string;
    categories: [];
    taskwincount?: string;
    totalposts?: string;
    approvedposts?: string;
    unapprovedposts?: string;

}