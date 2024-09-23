import { Component } from "@angular/core";
import { ItemPortfolio } from "./models/item-portfolio";
import { NgClass, NgForOf } from "@angular/common";

@Component({
  selector: "app-portfolio",
  standalone: true,
  imports: [NgForOf, NgClass],
  templateUrl: "./portfolio.component.html",
})
export class PortfolioComponent {
  public itensPorfolio: ItemPortfolio[] = [
    {
      href: "#",
      imgUrl: "/showcase-locadora.gif",
      descricao: "Locadora de Veículos",
    },
    {
      href: "#",
      imgUrl: "/showcase-locadora.gif",
      descricao: "Locadora de Veículos",
    },
  ];
}
