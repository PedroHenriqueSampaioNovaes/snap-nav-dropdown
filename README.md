# SNAP Navegação Dropdown

## Acesso rápido aos tópicos

- [Overview](#overview)
  - [Desafio](#desafio)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Construido com](#construido-com)
  - [O que eu aprendi](#o-que-eu-aprendi)
  - [Observações](#observações)

## Overview

### Desafio

Os usuários devem ser capazes de:

- Visualizar os menus suspensos relevantes no desktop e no celular ao interagir com os links de navegação
- Visualizar o layout ideal para o conteúdo, dependendo do tamanho da tela do dispositivo
- Ver os estados de foco para todos os elementos interativos na página

### Screenshot

<div align="center">
  <img src="https://user-images.githubusercontent.com/92189897/184259061-8675c792-6fd5-4d8e-818a-013e1536e7c8.png" />
</div>
<div align="center">
  <img src="https://user-images.githubusercontent.com/92189897/184259065-b04cf26b-4ab7-4230-a290-5faaa06e3cb2.png" />
</div>
<div align="center">
  <img src="https://user-images.githubusercontent.com/92189897/184259066-d2510936-a154-45e9-a5be-abeba8550a0f.png" />
</div>
<div align="center">
  <img src="https://user-images.githubusercontent.com/92189897/184259069-761db332-8c9b-4dad-adaa-5620ec210054.png" />
</div>

### Links

- Solução URL FrontEndMentor: [clique aqui](https://www.frontendmentor.io/profile/PedroHenriqueSampaioNovaes)
- Site online URL: [clique aqui](https://pedrohenriquesampaionovaes.github.io/snap-nav-dropdown/)

## Meu processo

### Construido com

- HTML5
- CSS3
- Flexbox
- Mobile First
- JavaScript

### O que eu aprendi

Pela primeira vez fiz um menu dropdown que ocupa todo o tamanho da tela verticalmente. Foi um desafio interessante e me surpreendi por ter conseguido alcançar um resultado tão próximo ao design da imagem, além de ter gostado do código em html que montei. Segue abaixo um pequeno trecho do código:

```
<ul class="menu" data-menu="items" role="menu">
  <li class="features" data-dropdown>
    <a href="#" class="arrow" data-link-dropdown>Features</a>
    <ul class="dropdown-menu icons">
      <li><a href="#" class="to-do">To do List</a></li>
      <li><a href="#" class="calendar">Calendar</a></li>
      <li><a href="#" class="reminders">Reminders</a></li>
      <li><a href="#" class="planning">Planning</a></li>
    </ul>
  </li>
  <li class="company" data-dropdown>
    <a href="#" class="arrow" data-link-dropdown>Company</a>
    <ul class="dropdown-menu">
      <li><a href="#">History</a></li>
      <li><a href="#">Our Team</a></li>
      <li><a href="#">Blog</a></li>
    </ul>
  </li>
  <li>
    <a href="#">Careers</a>
  </li>
  <li>
    <a href="#">About</a>
  </li>
</ul>
<div class="account">
  <a href="#">Login</a>
  <a href="#" class="register">Register</a>
</div>
```

### Observações

Desenvolvi este site apenas me baseando nas imagens adquiridas no [Frontend Mentor](https://www.frontendmentor.io/challenges), na tentativa de criar o site o mais próximo possível das imagens sem ter acesso as suas configurações.
Ainda não me sinto confortável em relação a estruturação criada no css para alinhar a imagem e o conteúdo "Make remote work" para dispositivos de largura maior de 899px. Além disso, não acho que é uma boa maneira deixar a imagem ser cortada quando está sendo visualizada por dispositivos menores que 900px, acredito que tenha uma maneira melhor de posicionar a imagem sem que ocorra esse corte. 
Esses são os detalhes que reparei durante o desenvolvimento que ainda preciso aprimorar.

