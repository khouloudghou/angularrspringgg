import {TypeChambre} from "../type-chambre";
import {Bloc} from "../Bloc/bloc";

export class Chambre {
  idChambre !: number ;
  numeroChambre !: number ;
  typeC !: TypeChambre ;
  bloc ? : Bloc ;
}
