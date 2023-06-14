import { ClotheInventoryService } from './../../services/clothe-inventory.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import IClothe from 'src/app/models/clothes.model';
import IUsers from 'src/app/models/user.model.new';
import Iitem from 'src/app/models/item.model';

@Component({
  selector: 'app-dressing',
  templateUrl: './dressing.component.html',
  styleUrls: ['./dressing.component.css'],
})
export class DressingComponent implements OnInit {
  //variable pour le bouton afficher favoris
  disabledFav = true;
  //Liste des habits ou les donnes du service sont enregistrée
  usersList: IUsers[] = [];
  itemInventory: Iitem[] = [];
  itemInventoryCosplay: Iitem[] = [];
  //Liste des habits favoris
  listItemFav: any[] = [];
  itemSelected?: Iitem;
  isDressingOne = true;

  @Output() seletedItemEvent = new EventEmitter<Iitem>();

  @Input() switchDressing: any;

  constructor(private clotheInventoryService: ClotheInventoryService) {}

  ngOnInit(): void {
    this.sortFavElement();
    this.getClotheInventory();
  }

  //Fonction qui recupere tous les habits et les mets dans clotheInventory
  getClotheInventory = () => {
    this.clotheInventoryService.getAll().subscribe({
      next: (data: any) => {
        this.usersList = data;
        this.itemInventory = this.usersList[0].wardrobes[0].items;
        console.log(this.usersList[0].wardrobes[0 + 1].items);
      },
      error: (data) => {
        console.error('error get all');
      },
      complete() {},
    });
  };

  //Fonction pour switcher entre les favoris et tous les vetements
  disabledFavFunction() {
    this.disabledFav = !this.disabledFav;
    this.sortFavElement();
  }

  /**
   * Fonction pour mettre dans une liste de favoris listItemFav les vetement avec le boolean favori
   */
  sortFavElement() {
    this.itemInventory.forEach((element) => {
      if (element.favorite == true && !this.listItemFav.includes(element)) {
        this.listItemFav.push(element);
      }

      this.listItemFav.forEach((element) => {
        if (element.favorite == false) {
          this.listItemFav.splice(element, 1);
        }
      });
    });
  }

  selectItem(item: Iitem) {
    this.itemSelected = item;
    this.seletedItemEvent.emit(this.itemSelected);
  }

  switchBetweenDressing(number: any) {
    this.itemInventory = this.usersList[0].wardrobes[number].items;
  }
}
