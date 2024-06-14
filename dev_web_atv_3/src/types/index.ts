export interface ContextProps {
    regioes: RegiaoProps[];
    
  }
  
  export interface RegiaoProps {
      id: number;
      sigla: string;
      nome: string;
  }

  export interface UfProps{
    id: number;
    sigla: string;
    nome: string;
    regiao: RegiaoProps;
  }


  export interface MesoProps{
    id: number;
    nome: string;
    uf: UfProps;
  }