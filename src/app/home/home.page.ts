import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RecipePage } from '../pages/recipe/recipe.page';
import { AddNewRecipePage } from '../pages/add-new-recipe/add-new-recipe.page';


type Recipe = {
  name?:string,
  description?:string,
  category?:string
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
 recipes: Array<Recipe>=[];

  constructor( public modalCtrl: ModalController) {}
  ngOnInit(): void {
    this.recipes=[
      {
        name:"pica",
        description: "Zagrejte vodu toliko da bude mlaka, pa odvojte polovinu i u nju dodajte šećer, izmrvljen kvasac i kašiku mekog brašna. Sve dobro razmutite tako da nema grudvica i ostavite da odstoji desetak minuta.U veliku vanglu sipajte brašno, dodajte aktiviran kvasac, ulje, so i drugu polovinu količine mlake vode. Mesite dok testo ne postane glatko. Posudu sa testom prekrijte pamučnom krpom ili providnom folijom i ostavite da odstoji sat vremena. Potom ga premesite, razdelite ga u loptice i svaku pomoću oklagije razvucite na veličinu pleha u kom ćete peći pize. Plehove u kojima ćete peći pice nemojte podmazivati uljem, jer će testo biti zapečeno - najbolje je da stavite papir za pečenje i da ga pospete brašnom, pa da onda stavite testo.Da bi pica bila sočna, pre nego što je stavite u rernu koju ste zagrejali na maksimum, nanesite najpre nadev napravljen od pelata i maslinovog ulja, potom izrendan kačkavalj, a onda i ostale sastojke po želji. Pecite na najvišoj temperaturi dok ivice testa ne porumene.",
        category: "slano"
      },
      {
        name:"palacinke",
        description:"Uzmite dublju plastičnu posudu i u nju sipajte brašno, dodajte jaja i oko 2 dl mleka. Probajte da umutite i ako ne ide dodajte još malo mleka. Savet: testo možete napraviti samo sa vodom ili samo sa mlekom. Najbolje je kada stavite pola mineralne vode i pola mleka. Važno je da testo bude gusto i da ga mutite dok ne postane glatko, bez grudvica, potom dodajte još mleka, pa malo kisele vode i tako dok ne dobijete testo koje liči na čorbu. U umućeno testo dodajte oko 1 dl ulja i dobro promešajte.   Savet: testo će biti bolje ako ga pustite da odstoji 20-30 minuta. U tiganj sipajte ulje pa kad se zagreje izručite ulje, tako da tiganj ostane samo masan. Vratite ga na ringlu i onda sipajte kutlačom testo, koje treba da bude ravnomerno raspoređeno po tiganju. Temperatura na kojoj se palačinke peku mora biti visoka. Ostavite nekoliko trenutaka na ringli, a onda prevrnite nožem ili bacite u vis.Savet: koristite samo teflonske tiganje jer ćete tako izbeći da Vam se palačinke zalepe za dno, tj. neće morati stalno da podmazujete tiganj. Čim se ispeče jedna strana palačinke, okrenite je na drugu stranu i pecite isto koliko i prvu (otprilike oko 1 minut). Gotove palačinke izbacite na plitak tanjir i filujte.",
        category:"slatko"
      },
      {
        name:"pica",
        description: "Zagrejte vodu toliko da bude mlaka, pa odvojte polovinu i u nju dodajte šećer, izmrvljen kvasac i kašiku mekog brašna. Sve dobro razmutite tako da nema grudvica i ostavite da odstoji desetak minuta.U veliku vanglu sipajte brašno, dodajte aktiviran kvasac, ulje, so i drugu polovinu količine mlake vode. Mesite dok testo ne postane glatko. Posudu sa testom prekrijte pamučnom krpom ili providnom folijom i ostavite da odstoji sat vremena. Potom ga premesite, razdelite ga u loptice i svaku pomoću oklagije razvucite na veličinu pleha u kom ćete peći pize. Plehove u kojima ćete peći pice nemojte podmazivati uljem, jer će testo biti zapečeno - najbolje je da stavite papir za pečenje i da ga pospete brašnom, pa da onda stavite testo.Da bi pica bila sočna, pre nego što je stavite u rernu koju ste zagrejali na maksimum, nanesite najpre nadev napravljen od pelata i maslinovog ulja, potom izrendan kačkavalj, a onda i ostale sastojke po želji. Pecite na najvišoj temperaturi dok ivice testa ne porumene.",
        category: "slano"
      },
      {
        name:"palacinke",
        description:"Uzmite dublju plastičnu posudu i u nju sipajte brašno, dodajte jaja i oko 2 dl mleka. Probajte da umutite i ako ne ide dodajte još malo mleka. Savet: testo možete napraviti samo sa vodom ili samo sa mlekom. Najbolje je kada stavite pola mineralne vode i pola mleka. Važno je da testo bude gusto i da ga mutite dok ne postane glatko, bez grudvica, potom dodajte još mleka, pa malo kisele vode i tako dok ne dobijete testo koje liči na čorbu. U umućeno testo dodajte oko 1 dl ulja i dobro promešajte.   Savet: testo će biti bolje ako ga pustite da odstoji 20-30 minuta. U tiganj sipajte ulje pa kad se zagreje izručite ulje, tako da tiganj ostane samo masan. Vratite ga na ringlu i onda sipajte kutlačom testo, koje treba da bude ravnomerno raspoređeno po tiganju. Temperatura na kojoj se palačinke peku mora biti visoka. Ostavite nekoliko trenutaka na ringli, a onda prevrnite nožem ili bacite u vis.Savet: koristite samo teflonske tiganje jer ćete tako izbeći da Vam se palačinke zalepe za dno, tj. neće morati stalno da podmazujete tiganj. Čim se ispeče jedna strana palačinke, okrenite je na drugu stranu i pecite isto koliko i prvu (otprilike oko 1 minut). Gotove palačinke izbacite na plitak tanjir i filujte.",
        category:"slatko"
      }
    ]
  }
  
  async goToRecipe(recipe: Recipe) {
    const modal = await this.modalCtrl.create({
      component: RecipePage,
      componentProps: {recipe}
    })
    return await modal.present();
  }


  async goToAddPage() {
    const modal = await this.modalCtrl.create({
      component: AddNewRecipePage
    })
    return await modal.present();
  }

}
