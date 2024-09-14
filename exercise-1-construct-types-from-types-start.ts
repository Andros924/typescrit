interface Paese {
    nome: string;
    codice: string;
    lingue: string[];
    valuta?: string;
    popolazione: number;
  }
  
  
  type PaeseParziale = Partial<Paese>;
  
  const paeseA: PaeseParziale = {
    codice: "CN",
    popolazione: 1_412_600_000,
  };
  
 
  type PaeseCompleto = Required<Paese>;
  
  const paeseB: PaeseCompleto = {
    nome: "Grecia",
    codice: "GR",
    lingue: ["Greco"],
    popolazione: 10_678_632,
  };
  
  
  type PaeseSolaLettura = Readonly<Paese>;
  
  const paeseC: PaeseSolaLettura = {
    nome: "Italia",
    codice: "IT",
    lingue: ["Italiano"],
    popolazione: 60_317_116,
  };
  

  
  console.log(paeseC);
  
 
  type PaeseConPopolazione = Pick<Paese, "nome" | "codice" | "popolazione">;
  
  const paeseD: PaeseConPopolazione = {
    nome: "Nuova Zelanda",
    codice: "NZ",
    popolazione: 5_135_300,
  };
  
 
  type PaeseSenzaPopolazione = Omit<Paese, "popolazione">;
  
  const paeseE: PaeseSenzaPopolazione = {
    nome: "Thailandia",
    codice: "TH",
    lingue: ["Thai", "Isan", "Kam Mueang", "Pak Tai", "Malay"],
    valuta: "Baht",
  };
  
  export {};