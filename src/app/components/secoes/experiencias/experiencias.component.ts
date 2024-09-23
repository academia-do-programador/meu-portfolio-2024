import { Component } from "@angular/core";
import { ItemExperiencias } from "./models/item-experiencias";
import { NgForOf } from "@angular/common";

@Component({
  selector: "app-experiencias",
  standalone: true,
  imports: [NgForOf],
  templateUrl: "./experiencias.component.html",
})
export class ExperienciasComponent {
  experiencias: ItemExperiencias[] = [
    {
      duracaoExperiencia: "Dez/2021 - Atualmente",
      imgUrl: "assets/logo-academia.png",
      alt: "Logo da Academia do Programador",
      titulo: "Professor de Programação",
      descricao: `
        <p>
          Responsável pela instrução do curso, desenvolvimento e integração
          das aplicações web e sistemas internos da organização.
        </p>

        <p>
          <span class="app-texto-principal fw-semibold">Stack:</span> .NET
          Framework, .NET 8, Entity Framework Core, ASP.NET Core MVC,
          ASP.NET Web API, MSTest, Docker, Angular.
        </p>
      `,
    },
    {
      duracaoExperiencia: "Mar/2021 - Dez/2021",
      imgUrl: "assets/logo-ndd-secundaria.png",
      alt: "Logo da NDD",
      titulo: "Estagiário",
      descricao: `
        <p>
          <span class="app-texto-principal fw-semibold">Stack:</span> .NET
          Framework, .NET Core, Entity Framework Core, ASP.NET Core MVC,
          ASP.NET Web API, Angular.
        </p>
      `,
    },
  ];
}
