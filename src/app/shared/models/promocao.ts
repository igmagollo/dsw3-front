import { SiteVenda } from './site-venda';
import { SalaTeatro } from './sala-teatro';

export interface Promocao {
  id: string;
  site: SiteVenda;
  teatro: SalaTeatro;
  nome: string;
  preco: string;
  dia_hora: Date;
}
