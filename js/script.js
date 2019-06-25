const acid = [
  {
  "Name": "Ácido acético",
  "FEMA": 2006,
  "CAS": "64-19-7",
  "Syn" : ["Acido acetico glacial","Vosol"],
  "LitO": ["Vinagre","Agrio desagradable"],
  "LitS": ["Agrio", "Acido penetrante", "Aumenta sabor en poca concentraciones"]
    
}]

const alco = [
  {
    "Name": "Eugenol",
    "LitO": ["Pasta dental", "Mentolado","Ajo"],
    "FEMA": 2467,
    "CAS" : "97-53-0",
    "Syn" : ["p-Eugenol","2-Metoxi-4-(2-propenil)fenol", "4-Alil-2-metoxifenol", "4-Alilguayacol"]
  
  },
  {
    "Name": "Hexenol cis-3",
    "LitO": ["Pasto cortado", "Notas verdes"],
    "Syn": ["Alcohol de hoja"],
    "CAS": "928-96-1",
    "FEMA": 2563,
    "LitS":["Pasto","Verde","Hierbas"]
  }
]

const Alde = [
  {
    "Name": "Acetaldehido",
    "LitO": ["Quita esmalte de uña"]
  },
  
  {
    "Name": "Aldehído C-6",
    "LitO": ["Insecto aplastado"]
  },

  {
    "Name": "Aldehído C-14",
    "LitO": ["Moras","Floral","Perfume"]
  },

  {
    "Name": "Aldehído C-16",
    "LitS": ["Coco cremoso"],
    "LitO": ["Coco cremoso"]
  },

  {
    "Name" : "Aldehido-C18",
    "Syn" : ["γ-nonalactona", "Aldehido de coco", "Ácido 4-Hidroxinonanoico"],
    "CAS" : "104-61-0",
    "FEMA" : 2781,
    "Type" : "Aldehido",
    "LitO": ["Caramelo", "Frutral"],
    "LitS": ["Coco","Cremoso"],
    "Lab":{
        "Sar":  1, "Efr": 1, "Dam": 1, "Yaz": 1, "Pab":  1
    }

  },

  {
    "Name": "Anisaldehído",
    "LitO": ["Cereza tenue"]
  },
  
  {
    "Name": "Benzaldehido",
    "Type": "Aldehido",
    "FEMA": 2127,
    "CAS": "100-52-7",
    "LitO":["Almendra"],
    "LitS":["Almendra","Cereza","Nueces","Aceitoso"]
  },
  
  {
    "Name": "Hexenal trans-2",
    "LitO": ["Plantas","Notas verdes"]
  }
]

const Keto = [
  {
    "Name": "Diacetilo",
    "Type": "Cetona",
    "Syn": ["2,3-butanodione","Dimetil dicetona"],
    "CAS":"431-03-8",
    "FEMA": 2370,
    "LitO": ["Mantequilla quemada"],
    "LitS":["Mantequilla", "Dulce", "Cremoso"]
  },

  {
    "Name": "Raspberry Ketone",
    "Syn":["4-(4Hidroxifenil)-2-butanona","Rheosmin","p-Hidroxibencil acetona","Frambinone"],
    "Type": "Cetona",
    "CAS":"5471-51-2",
    "FEMA": 2588,
    "LitS": ["Frambuesa","Frutos rojos", "Algodón de azucar"],
    "LitO": ["Moras", "Cremoso"]
  }
]

const Ester =[
  {
    "Name": "Etil butirato",
    "Type": "Ester",
    "FEMA": 2427,
    "CAS": "105-54-4",
    "LitS": ["Uva", "Jugo de uva"],
    "LitO": ["Uva artficial"]
  },
 {
    "Name": "Metil cinamato",
    "Syn": ["Ácido cinamato", "ácido trans-cinamico metil ester"],
    "CAS": "1754-62-7​",
    "FEMA": 2698,
    "LitS": ["Cremoso", "Fresa"],
    "LitO": ["Crema", "Frutal"]   
  },
  {
    "Name": "Isoamilbutirato",
    "Syn": ["Butirato de isomailo","Butirato de isopentilo"],
    "CAS":"106-27-4",
    "FEMA": 2060,
    "LitO": ["Plátano", "Chicle","Fruta"],
    "LitS": ["Fruta","Plátano","Frutas verdes"]    
  },
  {
    "Name": "Etil caproato",
    "Syn": ["Capronato de etilo","Hexanoato de etilo"],
    "CAS": "127-66-0",
    "FEMA": 2439,
    "LitO": ["Dulce de anís","Dulce de piña"],
    "LitS": ["Fresa","Dulce"]
  },
  {
    "Name": "Etil 2-metilbutirato",
    "Syn":["Ácido butanoico","Etil ester"],
    "CAS":"7452-79-1",
    "FEMA": 2443,
    "LitO": ["Fresa artificial","Frutal"],
    "LitS": ["Tutti frutti","Verde","Fruta"]  
  },
  {
    "Name": "Hexil acetato",
    "Syn":["Ácido hexil acético ester","n-Hexil acetato", "Hexil etanoato"],
    "CAS":"142-92-7",
    "FEMA": 2565,
    "LitO": ["Piña verde","Jugo de piña"],
    "LitS": ["Frutal etero","Platano a altas conc."]
  },
  {
    "Name": "Bencil acetato",
    "Syn": ["Ácido bencil acético ester", "Bencil etanoato"],
    "CAS": "140-11-4",
    "FEMA": 2135,
    "LitS": ["Floral","Perfume","Medicina"],
    "LitO": ["Plástico", "Floral", "Verde-naturaleza"]
  },
  {
    "Name": "Alil ciclohexil propionato",
    "Syn": ["Alil ciclohexenpropionato"],
    "CAS":"2705-292-5",
    "FEMA": 2026,
    "LitO": ["Moras","Fruta tropical verde"],
    "LitS": ["Fruta tropical", "Piña"]
  },
  {
    "Name": "Alil heptilato",
    "Syn":["Alil heptanoato", "2-propenil ester"],
    "CAS":"142-19-8",
    "FEMA": 2031,
    "LitO": ["Dulce de anís","Plátano dulce", "Fruta ligeramente fermentada"],
    "LitS": ["Plátano","Piñas","Frutal"]
  },
  {
    "Name": "Hexil acetato cis",
    "Syn":["[(Z)-hex-3-enil] acetato"],
    "CAS": "3681-71-8",
    "FEMA": 3171,
    "LitO":["Verde manzana","Verde","Plátano ligero"],
    "LitS":["Manzana verde"]
  },
  {
    "Name": "Isoamil acetato",
    "Syn": ["3-metilbutil acetato"],
    "CAS": "123-92-2",
    "FEMA": 2055,
    "LitO": ["Plátano en chicle"],
    "LitS": ["Plátano","Plátano plástico a altas conc."]
  },
  {
    "Name": "Alil capronato",
    "Syn":["Alil hexanoato","Ácido alil hexanoico ester","2-propenil hexanoato"],
    "FEMA": 2032,
    "CAS": "123-68-2",
    "LitS": ["Piña", "Tang de piña"],
    "LitO": ["Piña", "Piña falsa a altas conc."]
  },
  {
    "Name": "γ-Decalactona",
    "Syn":["Decalactona gamma"],
    "FEMA": 2360,
    "CAS":"706-14-9",
    "LitO":["Crema","Galleta"],
    "LitS":["Dulce","Cremoso"]
  },
  {
    "Name": "γ-Octalactona",
    "Syn":["Octano-1,4-lactona", "Octalactona gamma", "Ácido 4-Hidroxioctanoico"],
    "CAS": "104-50-7",
    "FEMA": 2796,
    "LitO": ["Cremoso","Dulce"],
    "LitS": ["Coco","Fruta"]
  },
  {
    "Name": "γ-Hexalactona",
    "Syn":["Caprolactona-gamma","Hexalactona gamma"],
    "FEMA": 2556,
    "CAS": "695-06-7",
    "LitS":["Flores marchitas"],
    "LitO":["Cebolla"]
  }
]

const Otros = [
  {
      "Name" : "Etil maltol",
      "Syn" : ["2-Etil-3-hidroxi-4H-piran-4-ona","E-637"],
      "CAS" : "4940-11-8",
      "FEMA" : 3487,
      "Type" : "Otros",
      "LitO": ["Dulce","Caramelo"], 
      "LitS": ["Dulce","Caramelo","Cajeta", "Dulce-frutal"]
  },
  {
    "Name": "β-ionona",
    "CAS": "14901-07-6",
    "Type": "Otros",
    "Syn":["β-Ciclocitrilideneacetona", "Beta Ionona"],
    "FEMA": 2595,
    "LitO": ["Mediciona","Jarabe","Notas rojas"],
    "LitS": ["Medicina","Frutos rojos","Floral"]
  },
  {
    "Name": "D-limoneno",
    "CAS":"5989-27-5",
    "Type": "Otros",
    "FEMA":2633,
    "Syn":["(+)-Carvene", "(R)-(+)-Limnoneno"],
    "LitO": ["Cítrico","Cascara de limón"],
    "LitS": ["Cítrico","Limón", "Zumo de limón en altas conc."]
  },
  {
    "Name": "Vanilina",
    "Syn": ["Aldehido vanilico","p-Vanilina"],
    "Type": "Otros",
    "CAS": "121-33-5​",
    "FEMA": 3107,
    "LitS": ["Vainilla"],
    "LitO": ["Vainilla"]
  },
  {
    "Name": "6-metil cumarina",
    "Syn":["Cocodescol","Pralina","Toncarine"],
    "CAS":"202-158-8",
    "FEMA": 2699,
    "Type": "Otros",
    "LitS": ["XXXXXXXXXX","Amargo a concentraciones muy altas"],
    "LitO": ["Frutos secos", "Rojo canela"]
  },
  {
    "Name": "Furaneol",
    "Syn":["Furanona de fresa", "2,5-dimetil-4-hidroxi-3(2h)-furanona"],
    "CAS" : "3658-77-3",
    "FEMA": 3174,
    "Type": "Otros",
    "LitO": ["Frutos rojos","Caramelo"],
    "LitS": ["Fresa","Caramelo"]

  }
]



function Template(Sabor){
  return `
  <div class="sab"> 
    <img class="sab-img" src="img/${Sabor.FEMA}.jpg">
    <h3>${Sabor.Name}</h3>

    <p style="text-align:right;">
    ${Sabor.Type ? `<b>Tipo:</b> ${Sabor.Type}  `: "" }
    ${Sabor.CAS ? `<b>CAS: </b> ${Sabor.CAS}  `: ""}
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

<button class="collapsible" style="background-color:#eee"> 
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