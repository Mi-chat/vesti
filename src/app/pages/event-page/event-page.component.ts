
import { Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatCalendar, MatCalendarCellCssClasses, MatDatepickerModule,} from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
//prettier ignore
import {
  FormGroup,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  NgForm,
} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Event } from 'src/app/models/event.model';
import Iitem from 'src/app/models/item.model';
import Outfit from 'src/app/models/outfit.model';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class EventPageComponent {
  @ViewChild(MatCalendar) calendar!: MatCalendar<Date>;

  selectedDate: Date = new Date();
  datesToHighlight = ['2023/06/22', '2023/06/12'];
  outfitIndexChoosed!: number;

  itemChemiseBordeaux: Iitem = {
    id: '3',
    name: 'chemise bordeaux',
    label: 'mon dressing',
    season: 'Eté',
    type: 'haut',
    color: 'rouge',
    size: 'XS',
    favorite: true,
    linkImage: '../assets/img/dressing/chemise-bordeaux.png',
    fit: 'Serré',
  };
  itemShortGris: Iitem = {
    id: "10",
    name: "short gris",
    label: "mon dressing",
    season: "Hiver",
    type: "bas",
    linkImage: "../assets/img/dressing/short-gris.png",
    color: "gris",
    size: "M",
    favorite: false,
    fit: "fit"
  };
  itemVesteNoire: Iitem = {
    id: "10",
    name: "short gris",
    label: "mon dressing",
    season: "Hiver",
    type: "bas",
    linkImage: "../assets/img/dressing/veste-noire.png",
    color: "gris",
    size: "M",
    favorite: false,
    fit: "fit"
  };
  itemPantalonNoir: Iitem = {
    id: "10",
    name: "short gris",
    label: "mon dressing",
    season: "Hiver",
    type: "bas",
    linkImage: "../assets/img/dressing/pantalon-noir.png",
    color: "gris",
    size: "M",
    favorite: false,
    fit: "fit"
  };
  itemJean: Iitem = {
    id: "10",
    name: "short gris",
    label: "mon dressing",
    season: "Hiver",
    type: "bas",
    linkImage: "../assets/img/dressing/jean-bleu.png",
    color: "gris",
    size: "M",
    favorite: false,
    fit: "fit"
  };
  itemChemiseVelours: Iitem = {
    id: '3',
    name: 'chemise bordeaux',
    label: 'mon dressing',
    season: 'Eté',
    type: 'haut',
    color: 'rouge',
    size: 'XS',
    favorite: true,
    linkImage: '../assets/img/dressing/chemise-velours.png',
    fit: 'Serré',
  };

  outfitList: Outfit[] = [
    {
    itemTop : this.itemChemiseBordeaux,
    itemBottom : this.itemShortGris
    },
    {
      itemTop : this.itemVesteNoire,
      itemBottom : this.itemPantalonNoir
    },
    {
      itemTop : this.itemChemiseVelours,
      itemBottom : this.itemJean
    },



  ]

  events: Event[] = [
    {
      title: 'Vacances',
      date: new Date(this.datesToHighlight[0]),
      outfitIndex: 0
    },
    {
      title: 'Mariage de Nseya',
      date: new Date(this.datesToHighlight[1]),
      outfitIndex: 1
    },
  ];

  eventTemp: Event = {
    title: '',
    date: new Date(),
    outfitIndex: 0
  };

  dateMatch: boolean = false;
  eventNumber: number = -1;
  dateTransformed: string = '';

  eventForm = this.formBuilder.group({
    title: '',
    date: new Date(),
  });

  constructor(private formBuilder: FormBuilder, private datePipe: DatePipe) {}

  // Récupère la date sélectionnée dans le calendrier et compare cette date aux autres dates du tableau des
  // Évènements events
  onSelect(event: any) {
    this.selectedDate = event;

    let eventTempToFind = this.events.find(
      (x) => x.date.getTime() == this.selectedDate.getTime()
    );

    this.eventTemp = eventTempToFind!;

    if(eventTempToFind?.outfitIndex != undefined){
    this.eventTemp.outfitIndex = eventTempToFind!.outfitIndex;
    }

    if (eventTempToFind?.date.getTime() == this.selectedDate.getTime()) {
      this.dateMatch = true;
    } else {
      this.dateMatch = false;
    }
  }

  dateClass() {
    return (date: Date): MatCalendarCellCssClasses => {
      const highlightDate = this.datesToHighlight
        .map((strDate) => new Date(strDate))
        .some(
          (d) =>
            d.getDate() === date.getDate() &&
            d.getMonth() === date.getMonth() &&
            d.getFullYear() === date.getFullYear()
        );

      return highlightDate ? 'my-date' : '';
    };
  }

  transformDate(date: Date): string {
    return this.datePipe.transform(date, 'yyyy/MM/dd') || '';
  }

  onSubmit() {
    let eventTemp: Event = {
      title: '',
      date: new Date(),
      outfitIndex: 0
    };

    this.datesToHighlight.push(this.transformDate(this.selectedDate));
    this.calendar.updateTodaysDate();
    this.eventForm.value.date = new Date(this.selectedDate);
    eventTemp.date = this.eventForm.value.date;
    eventTemp.title = this.eventForm.value.title!;
    if(this.outfitIndexChoosed != undefined){
    eventTemp.outfitIndex = this.outfitIndexChoosed
    }else{
      eventTemp.outfitIndex = 0;
    }
    this.events.push(eventTemp);
    this.eventForm.reset();

    console.log(this.outfitIndexChoosed)
  }

  getIndexOutfitEvent(e:any)
  {
    this.outfitIndexChoosed = e;

  }
}
