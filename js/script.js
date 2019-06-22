const Alde = [
  {
    "Name" : "Aldehido-C18",
    "Syn" : ["γ-nonalactona", "Aldehido de coco", "Ácido 4-Hidroxinonanoico"],
    "CAS" : "104-61-0",
    "FEMA" : 2781,
    "Type" : "Aldehido",
    "LitO": ["Caramelo", "Frutral"],
    "LitS": ["Coco"],
    "Lab":{
        "Sar":  1, "Efr": 1, "Dam": 1, "Yaz": 1, "Pab":  1
    }

  },
  {
    "Name": "Benzaldehido",
    "Type": "Aldehido",
    "FEMA": 2127
  },

 
]

const acid = [
  {
  "Name": "Ácido acético",
  "FEMA": 2006,
  "CAS": "64-19-7",
  "Syn" : ["Acido acetico glacial","Vosol"],
  "LitO": ["Vinagre","Agrio desagradable"],
  "LitS": ["agrio", "ácido penetrante"]
      
}]

const Keto = [
  {
    "Name": "Raspberry Ketone",
    "Type": "Cetona",
    "FEMA": 2588,
    "LitS": ["Frambuesa","Frutos rojos"],
    "LitO": ["Moras", "Cremoso"]
  },
  {
    "Name": "Diacetilo",
    "Type": "Cetona",
    "FEMA": 2370,
    "LitO": ["Mantequilla quemada"]
  }
]

const alco = [
  {
    "Name": "Eugenol",
    "LitO": ["Pasta dental", "Mentolado"],
    "FEMA": 2467,
    "CAS" : "97-53-0",
    "Syn" : ["2-Metoxi-4-(2-propenil)fenol", "4-Alil-2-metoxifenol", "4-Alilguayacol"]
  },
  {
    "Name": "Hexenol cis-3",
    "LitO": ["Pasto cortado", "Notas verdes"],
    "Syn": ["Alcohol de hoja"],
    "CAS": "928-96-1",
    "FEMA": 2563
  }
]

const Otros = [
  {
      "Name" : "Etil maltol",
      "Syn" : ["2-Etil-3-hidroxi-4H-piran-4-ona","E-637"],
      "CAS" : "4940-11-8",
      "FEMA" : 3487,
      "Type" : "Otros",
      "LitO": ["uva"], 
      "LitS": ["uva"],
      "Lab":{
        "Sar":  1, "Efr": 1, "Dam": 1, "Yaz": 1, "Pab":  1
      }
  },
  {
    "Name": "Beta Ionona",
    "LitO": ["Mediciona","Jarabe","Notas rojas"]
  },
  {
    "Name": "D-limoneno",
    "LitO": ["Citrico","Cascara de limón"]
  },
  {
    "Name": "Vainillina",
    "LitS": ["Vainilla"],
    "LitO": ["Vainilla","Pan"]
  },
  {
    "Name": "6-metil cumarina",
    "LitO": ["Frutos secos", "nueces"]
  },
  {
    "Name": "Furaneol",
    "LitO": ["Frutos rojos"]
  },
  {
    "Name": "Etil maltol",
    "LitS": ["Caramelo","Cajeta"],
    "LitO": ["Caramelo"]
  },
]

const Ester =[
  {
    "Name": "Etil butirato",
    "Type": "Ester",
    "FEMA": 2443,
    "CAS": "105-54-4",
    "LitS": ["Uva", "Jugo de uva"],
    "LitO": ["Uva artficial"]
  },
 {
    "Name": "Metil cinamato",
    "LitS": ["Cremoso", "Uva"],
    "LitO": ["Plátano dulce"]   
  },
  {
    "Name": "Isoamilbutirato",
    "LitO": ["Plátano", "chicle"]    
  },
  {
    "Name": "Etil capronato",
    "LitO": ["Dulce de anís"]
  },
  {
    "Name": "Etil 2-metilbutirato",
    "LitO": ["Fresa artificial"]  
  },
  {
    "Name": "Hexil acetato",
    "LitO": ["Piña verde","Jugo de piña"]
  },
  {
    "Name": "Benzil acetato",
    "LitS": ["Floral","Perfume","Medicina"],
    "LitO": ["Plástico"]
  },
  {
    "Name": "Alil ciclohexil propionato",
    "LitO": ["Moras"]
  },
  {
    "Name": "Alil heptilato",
    "LitO": ["Dulce de anís"]

    
  },
  {
    "Name": "Hexil acetato cis"
  },
  {
    "Name": "Isoamil acetato"
  },
  {
    "Name": "Alil capronato"
  },
  {
    "Name": "Decalactona gamma"
  },
  {
    "Name": "Octalactona gamma"
  },
  {
    "Name": "Hexalactona gamma"
  }
]





function Template(Sabor){
  return `
  <div class="sab"> 
    <img class="sab-img" src="img/${Sabor.FEMA}.jpg">
    <h3>${Sabor.Name}</h3>

    <p style="text-align:right;"><b>Tipo:</b> ${Sabor.Type}
    ${Sabor.CAS ? `<b>CAS: </b> ${Sabor.CAS}`: ""}
    ${Sabor.FEMA ? `<b>FEMA: </b> ${Sabor.FEMA}`: ""}</p>
    
    <p> ${Sabor.Syn ? `<b>Sinónimos: </b> ${Sabor.Syn.join(", ")} `: ""} </p>

  <div style="overflow-x:auto;">
    <table>
    <tr class="Tabheader">
      <th style="width:50%;">Olor</th>
      <th style="width:50%;">Sabor</th>
    </tr>
    <tr>
      <td> ${Sabor.LitO ? `${Sabor.LitO.join("<br>")}`: ""} </td>
      <td> ${Sabor.LitS ? `${Sabor.LitS.join("<br>")}`: ""} </td>
    </tr>
    </table>
  </div>

  </div>

  `}

document.body.innerHTML = `
<h1>Hola, soy un compendio (${acid.length + Alde.length + Keto.length + Ester.length + alco.length + Otros.length} compuestos)</h1>


<button class="collapsible" style="background-color:#f4cc9a"> 
  <h2> Ácido carboxílico </h2>
</button>
<div class="content">
   ${acid.map(Template).join()} 
</div>

<button class="collapsible" style="background-color:#9af4cc"> 
  <h2> Alcohol </h2> 
</button>
  <div class="content">
      ${alco.map(Template).join()}
  </div>

<button class="collapsible" style="background-color:#f49ac2"> 
    <h2> Aldehídos </h2> 
</button>
  <div class="content">
    ${Alde.map(Template).join()} 
  </div>

<button class="collapsible" style="background-color:#cc9af4"> 
    <h2> Cetonas </h2> 
</button>
  <div class="content">
      ${Keto.map(Template).join()} 
  </div>

<button class="collapsible" style="background-color:#c2f49a"> 
  <h2> Ésteres </h2> 
</button>
  <div class="content">
    ${Ester.map(Template).join()} 
  </div>

<button class="collapsible" style="background-color:"#eee"> 
  <h2> Otros </h2> 
</button> 
<div class="content">
  ${Otros.map(Template).join()} 
</div>
`


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}