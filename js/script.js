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
  },
  {
    "Name":"Hexanol",
    "FEMA":3351,
    "CAS":"623-37-0",
    "Syn":["3-Hexanol",	"Hexan-3-ol"]
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
    "LitO": ["Coco cremoso"],
    "Sar":  1, "Efr": 1, "Dam": 3
  },

  {
    "Name" : "Aldehido-C18",
    "Syn" : ["γ-nonalactona", "Aldehido de coco", "Ácido 4-Hidroxinonanoico"],
    "CAS" : "104-61-0",
    "FEMA" : 2781,
    "Type" : "Aldehido",
    "LitO": ["Caramelo", "Frutral"],
    "LitS": ["Coco","Cremoso"],
    "Stor":"Mantener en recipientes cerrados en lugares secos y proteger de la luz solar",
    "Usos":"Saborizante con sensación a coco y/o cremoso, igual se emplea en perfumes",
    "pe": 243,
    "Carc":"Incoloro a amarillo pálido, aceitoso.",
    "Sar":  5, "Efr": 10, "Dam": 1, "Yaz": 0, "Pab":  3
  }, 

  {
    "Name": "Anisaldehído",
    "FEMA": 2670,
    "CAS": "0135-02-04",
    "Syn":["Aldehido anísico natural","4-metoxibenzaldehido", "p-anisaldehído","Aubépine"],
    "LitO": ["Cereza tenue"],
    "LitS":["Frutos rojos","Floral"],
    "Stor":"Guardar en recipientes bien llenos y cerrados en lugares frescos y secos alejados de la luz",
    "Usos":"Saborizante que da sensación a frutos rojos a floral",
    "pe": 118,
    "Carac":"Líquido fluido transparente e insoluble en agua",
    "Sar": 3, "Efr":	1, "Dam": 5
  },
  
  {
    "Name": "Benzaldehido",
    "Type": "Aldehido",
    "Syn":["Aldehido benzoico",	"Fenilmetanal"],
    "FEMA": 2127,
    "CAS": "100-52-7",
    "LitO":["Almendra"],
    "LitS":["Almendra","Cereza","Nueces","Sensación aceitosa"],
    "Stor":"Guardar en recipientes bien llenos y cerrados en lugares frescos y secos alejados de la luz",
    "Usos":"Saborizante a almedras, disolvenste industrial y para la síntesis de compuestos orgánicos",	
    "pe": 178,	
    "Carac":"Disperso en partículas finas puede inflamarse de forma espontánea. Puede formar peróxidos en contacto con el aire.",
    "Sar":7, "Efr":	10,"Dam":	5, "Pab":	5
  },
  
  {
    "Name": "Hexenal trans-2",
    "FEMA": 2560,
    "CAS":"6728-26-8",
    "LitO": ["Plantas","Notas verdes"],
    "LitS":["Banana","Frutos verdes","Cítrico","Manzana"],
    "Syn":["2-hexenal","(E)-Hex-2-enal"],
    "Stor":"Guardar en recipientes bien llenos y cerrados en lugares frescos y secos alejados de la luz",
    "Usos":"Saborizante a verde, cítrico y manzana",
    "pe" : 146,
    "Carac":"Inflamable, ligeramente soluble en agua, se oxida facilmente",
    "Sar":1,"Efr":7, "Dam":1, "Pab":1

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
    "LitS":["Mantequilla", "Dulce", "Cremoso"],
    "Stor":"Mantener en recipientes cerrados en lugares secos, libres de ignición y proteger de la luz solar",
    "Usos":"Saborizante químico presente en productos artificales de mantequilla y también en cigarros electrónicos", 
    "pe": 81,
    "Carac":"Liquido color amarillo  a verde inflamable relativamente soluble en agua, en ciertas concentraciones es irritante para la piel",
    "Sar":1,"Efr":10,"Dam":	1
  },

  {
    "Name": "Raspberry Ketone",
    "Syn":["4-(4Hidroxifenil)-2-butanona","Rheosmin","p-Hidroxibencil acetona","Frambinone"],
    "Type": "Cetona",
    "CAS":"5471-51-2",
    "FEMA": 2588,
    "LitS": ["Frambuesa","Frutos rojos", "Algodón de azucar"],
    "LitO": ["Moras", "Cremoso"],
    "Stor":"Mantener en recipientes cerrados en lugares secos, libres de ignición y proteger de la luz solar",
    "Usos":"Se emplea en saborizantes y como suplemento alimenticio",
    "pe":200,
    "Carac":"Insoluble en agua y aceite. Soluble en alcohol y éter. Consistencia blancuzca",
    "Sar":10, "Efr":	10,	"Dam":10, "Pab":	5
  }
]

const Ester =[
  {
    "Name": "Etil butirato",
    "Type": "Ester",
    "FEMA": 2427,
    "Syn": ["Butanoato de etilo",	"Éter butírico"],
    "CAS": "105-54-4",
    "LitS": ["Piña",	"Cítrico"],
    "LitO": ["Piña",	"Fruta"],
    "Sar":7,"Efr":	7, "Dam":	7, "Pab":	7,
    "Stor":"Guardar en recipientes bien llenos y cerrados en lugares frescos y secos alejados de la luz",	
    "Usos":"Se utiliza como aromatizante artificial parecido al zumo de naranja o de piña,  como un disolvente en productos de perfumería, y como un plastificante para la celulosa",
    "pe": 121,
    "Carac":"Líquido incoloro soluble en propilenglicol, aceite de parafina y queroseno."
  },
 {
    "Name": "Metil cinamato",
    "Syn": ["Ácido cinamato", "ácido trans-cinamico metil ester"],
    "CAS": "1754-62-7​",
    "FEMA": 2698,
    "LitS": ["Cremoso", "Fresa", "Dulce"],
    "LitO": ["Crema", "Frutal","Balsámico", "Dulce"],
    "Stor":"Mantener en frasco bien cerrado en lugar fresco y seco, proteger de la luz y calor.",
    "Usos": "Sabores frutales y perfumes",
    "pe":260,
    "Carac":"Líquido incoloro, soluble en alcoholes y aceites."   
  },
  {
    "Name": "Isoamilbutirato",
    "Syn": ["Butirato de isomailo","Butirato de isopentilo"],
    "CAS":"106-27-4",
    "FEMA": 2060,
    "LitO": ["Plátano", "Chicle","Fruta"],
    "LitS": ["Fruta","Plátano","Frutas verdes"],
    "Sar": 5, "Efr":	10, "Dam":	5,
    "Stor":"Guardar en recipientes cerrados en lugares frescos y secos protegidos de la luz. Superados los 24 meses de almacenaje, se deberá controlar la calidad antes de usar",
    "Usos":	"Pera, melocotón, plátano y frutas",
    "pe":	186,
    "Carac": "Es un éster del alcohol isoamílico y el ácido acético. Es un líquido inflamable."
  },
  {
    "Name": "Etil caproato",
    "Syn": ["Capronato de etilo","Hexanoato de etilo"],
    "CAS": "127-66-0",
    "FEMA": 2439,
    "LitO": ["Dulce de anís","Dulce de piña"],
    "LitS": ["Fresa","Dulce"],
    "Stor": "Guardar en recipientes cerrados en lugares frescos y secos protegidos de la luz. Superados los 24 meses de almacenaje, se deberá controlar la calidad antes de usar",
    "Usos": "Piña, fresa y frutos",
    "pe":168,
    "Carac":"Insoluble en agua, miscible en alcohol y éter",
    "Sar": 5,"Efr":	7,"Dam":	5, "Pab":	5
  },
  {
    "Name": "Etil 2-metilbutirato",
    "Syn":["Ácido butanoico","Etil ester"],
    "CAS":"7452-79-1",
    "FEMA": 2443,
    "LitO": ["Fresa artificial","Frutal"],
    "LitS": ["Tutti frutti","Verde","Fruta"],
    "Stor":"Mantener alejado de fuentes de ignición. Guardar en recipientes cerrados en lugares frescos y secos protegidos de la luz. Superados los 24 meses de almacenaje, se deberá controlar la calidad antes de usar",
    "Usos":"Frutas, fresa, menta y verde",
    "pe":65,
    "Carac":"Líquido incoloro con olor a piña. Se utiliza en la elaboración del ron. Es altamente inflamable",
    "Sar":3,	"Efr":5,	"Dam":1,"Pab": 5
  },
  {
    "Name": "Hexil acetato",
    "Syn":["Ácido hexil acético ester","n-Hexil acetato", "Hexil etanoato"],
    "CAS":"142-92-7",
    "FEMA": 2565,
    "LitO": ["Piña verde","Jugo de piña"],
    "LitS": ["Frutal etero","Platano a altas concentraciones"],
    "Stor":"Mantener alejado de fuentes de ignición. Guardar en recipientes cerrados en lugares frescos y secos protegidos de la luz. Superados los 24 meses de almacenaje, se deberá controlar la calidad antes de usar",
    "Usos":"Frutas, fresa, menta y verde",
    "pe": 65,
    "Carac":"Líquido incoloro con olor a piña. Se utiliza en la elaboración del ron. Es altamente inflamable",
    "Sar":5,	"Efr":10,	"Dam":3,"Pab": 5
  },
  {
    "Name": "Bencil acetato",
    "Syn": ["Ácido bencil acético ester", "Bencil etanoato"],
    "CAS": "140-11-4",
    "FEMA": 2135,
    "LitS": ["Floral","Perfume","Medicina"],
    "LitO": ["Plástico", "Floral", "Verde-naturaleza"],
    "Sar":5,"Efr":5, "Dam":	3, "Pab":5,
    "Stor":"Guardar en recipientes cerrados en lugares frescos y secos protegidos de la luz. Superados los 24 meses de almacenaje, se deberá controlar la calidad antes de usar.",
    "Usos":	"Frutal y floral",
    "pe": 212,
    "Carac":"Es combustible e insoluble en agua, miscible en alcohol y éter"
  },
  {
    "Name": "Alil ciclohexil propionato",
    "Syn": ["Alil ciclohexenpropionato"],
    "CAS":"2705-292-5",
    "FEMA": 2026,
    "LitO": ["Moras","Fruta tropical verde"],
    "LitS": ["Fruta tropical", "Piña"],
    "Sar": 7, "Efr":3, "Dam":3, "Pab":5,
    "pe":91,
    "Stor":"Mantener bien cerrado, en un lugar ventilado y seco, alejado de fuentes de ignición y protegido de la luz.",
    "Usos":"Piña, sandía, moras y frutas",
    "Carac":"Líquido incoloro con olor a piña. Emite un humo acre e irritante cuando se calienta a la descomposición."

  },
  {
    "Name": "Alil heptilato",
    "Syn":["Alil heptanoato", "2-propenil ester"],
    "CAS":"142-19-8",
    "FEMA": 2031,
    "LitO": ["Dulce de anís","Plátano dulce", "Fruta ligeramente fermentada"],
    "LitS": ["Plátano","Piñas","Frutal"],
    "Stor":"Mantener en frasco bien cerrado en lugar fresco y seco, proteger de la luz y calor.",
    "Usos":	"Sabores frutales",
    "pe":210,
    "Carac":"Líquido de incoloro a amarillo pálido, insoluble en agua, soluble en alcohol.",
    "Sar":5, "Efr":	10, "Dam":	7, "Pab":	5
  },
  {
    "Name": "Hexil acetato cis",
    "Syn":["[(Z)-hex-3-enil] acetato"],
    "CAS": "3681-71-8",
    "FEMA": 3171,
    "LitO":["Verde manzana","Verde","Plátano ligero"],
    "LitS":["Manzana verde"],
    "Stor":"Mantener en frasco bien cerrado en lugar fresco y seco, proteger de la luz y calor.",
    "Usos":"Sabores frutales y florales.",
    "Carac":"Líquido incoloro, gran cantidad de isómeros.",
    "pe":165,
    "Sar":1,"Efr":3, "Dam":3, "Pab":	3

  },
  {
    "Name": "Isoamil acetato",
    "Syn": ["3-metilbutil acetato"],
    "CAS": "123-92-2",
    "FEMA": 2055,
    "LitO": ["Plátano en chicle"],
    "LitS": ["Plátano","Plátano plástico a altas conc."],
    "Sar":5, "Efr":7, "Dam":3, "Pab":	3,
    "Stor":"Mantener en frasco bien cerrado en lugar fresco y seco, proteger de la luz y calor.",
    "Usos":"Sabor plátano",
    "pe":142,
    "Carac":"Líquido incoloro, soluble en solventes orgánicos."
  },
  {
    "Name": "Alil capronato",
    "Syn":["Alil hexanoato","Ácido alil hexanoico ester","2-propenil hexanoato"],
    "FEMA": 2032,
    "CAS": "123-68-2",
    "LitS": ["Piña", "Tang de piña"],
    "LitO": ["Piña", "Piña falsa a altas conc."],
    "Stor":"Mantener en frasco bien cerrado en lugar fresco y seco, proteger de la luz y calor.",
    "Usos":"Sabores frutales y perfumería",
    "pe":185,
    "Carac":"Líquido incoloro, soluble en alcoholes y aceites.",
    "Sar":5, "Efr":10, "Dam":	1
  },
  {
    "Name": "γ-Decalactona",
    "Syn":["Decalactona gamma"],
    "FEMA": 2360,
    "CAS":"706-14-9",
    "LitO":["Crema","Galleta"],
    "LitS":["Dulce","Cremoso"],
    "Stor":"Mantener en frasco bien cerrado en lugar fresco y seco, proteger de la luz y calor.",
    "Usos":"Saborizante para lácteos",
    "pe":266,
    "Carac":"Líquido incoloro a amarillo pálido, soluble en alcohol.",
    "Sar": 5, "Efr": 10, "Dam":	5, "Pab":	10
  },
  {
    "Name": "γ-Octalactona",
    "Syn":["Octano-1,4-lactona", "Octalactona gamma", "Ácido 4-Hidroxioctanoico"],
    "CAS": "104-50-7",
    "FEMA": 2796,
    "LitO": ["Cremoso","Dulce"],
    "LitS": ["Coco","Fruta"],
    "pe":234,
    "Stor":"Mantener en frasco bien cerrado en lugar fresco y seco, proteger de la luz y calor.",
    "Usos":	"Sabores cremosos",
    "Carac":"Líquido incoloro, soluble en alcoholes.",
    "Sar": 7, "Efr":	10, "Dam":	10
  },
  {
    "Name": "γ-Hexalactona",
    "Syn":["Caprolactona-gamma","Hexalactona gamma"],
    "FEMA": 2556,
    "CAS": "695-06-7",
    "LitS":["Flores marchitas","Coco","Cremoso"],
    "LitO":["Cebolla","Cremoso"],
    "Stor":"Mantener en frasco bien cerrado en lugar fresco y seco, proteger de la luz y calor.",
    "Usos":"Sabores cremosos y perfumería",
    "pe":215,
    "Carac":"Líquido incoloro, soluble en alcoholes.",
    "Sar":7, "Efr":	10,"Dam":	7
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
      "LitS": ["Dulce","Caramelo","Cajeta", "Dulce-frutal"],
      "Stor":"Refrigeración",
      "Usos": "Diversas frutas",
      "pe":197,
      "Carc":"De 4 a 6 veces más potente que el matol, soluble en agua, propilen glicol y etanol",
      "Sar":7,"Efr":7, "Dam":5, "Pab":5

  },
  {
    "Name": "β-ionona",
    "CAS": "14901-07-6",
    "Type": "Otros",
    "Syn":["β-Ciclocitrilideneacetona", "Beta Ionona"],
    "FEMA": 2595,
    "LitO": ["Mediciona","Jarabe","Notas rojas"],
    "LitS": ["Medicina","Frutos rojos","Floral"],
    "Sar": 0.7, "Efr":	5, "Dam":	1, "Pab":	3,
    "pe":239,
    "Stor":"Mantener en temperaturas bajas",
    "Usos":"Frutos rojos, cognac, vino, papaya, cerveza, etc.",
    "Carac": "Se puede sintetizar de citral y acetona para luego usar algun ácido."

  },
  {
    "Name": "D-limoneno",
    "CAS":"5989-27-5",
    "Type": "Otros",
    "FEMA":2633,
    "Syn":["(+)-Carvene", "(R)-(+)-Limnoneno"],
    "LitO": ["Cítrico","Cascara de limón"],
    "LitS": ["Cítrico","Limón", "Zumo de limón en altas conc."],
    "Stor":"Mantener a temperaturas bajas y tener cuidado con la flamabilidad.",
    "Usos":"Cítricos",
    "pe":177,
    "Carac":"Soluble en agua y solventes, se obtiene por arrastre de vapor de cascara y pulpa de cítrico"
  },
  {
    "Name": "Vanilina",
    "Syn": ["Aldehido vanilico","p-Vanilina"],
    "Type": "Otros",
    "CAS": "121-33-5​",
    "FEMA": 3107,
    "LitS": ["Vainilla"],
    "LitO": ["Vainilla"],
    "Stor":"Refrigeración",
    "Usos":"Sabores dulces, caramelo",
    "pe":170,
    "Carac":"Se descolora al estar expuesta al sol, incompatible con agentes oxidantes.",
    "Sar": 3, "Efr":	10, "Dam":	1, "Pab":	1
  },
  {
    "Name": "6-metil cumarina",
    "Syn":["Cocodescol","Pralina","Toncarine"],
    "CAS":"202-158-8",
    "FEMA": 2699,
    "Type": "Otros",
    "LitS": ["Amargo a concentraciones muy altas","Cremoso", "Cumarina", "Coco", "Vainilla", "Dulce"],
    "LitO": ["Frutos secos", "Rojo canela"],
    "Stor":"Refrigeración",
    "Usos":"Dulces, coco, anis",
    "pe":303,
    "Carac":"Insoluble en agua. Artificial",
    "Sar":3, "Efr":10, "Dam":10
  },
  {
    "Name": "Furaneol",
    "Syn":["Furanona de fresa", "2,5-dimetil-4-hidroxi-3(2h)-furanona"],
    "CAS" : "3658-77-3",
    "FEMA": 3174,
    "Type": "Otros",
    "LitO": ["Frutos rojos","Caramelo"],
    "LitS": ["Fresa","Caramelo"],
    "pe":188,
    "Carac": "Se ha usado como saborisante para carne",
    "Stor":"Refrigeración",
    "Usos":"Dulce, fresa, piña",
    "Sar": 0.5, "Efr":	0.5, "Dam":	0.1, "Pab": 0.7
  }
]



function Template(Sabor){
  return `
  <div class="sab"> 
    <img class="sab-img" src="img/${Sabor.FEMA}.jpg">
    <h3>${Sabor.Name}</h3>

    <p style="text-align:right;">
    ${Sabor.Type ? `<b>Tipo: </b> ${Sabor.Type} `: "" }
    ${Sabor.CAS ? `<b>CAS: </b> ${Sabor.CAS} `: ""}
    ${Sabor.FEMA ? `<b>FEMA: </b> ${Sabor.FEMA} `: ""}
    ${Sabor.pe ? `<b>Punto de ebullición: </b> ${Sabor.pe} °C` :""}
    </p>
    
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
  <b>Usos: </b> ${Sabor.Usos}
  <br><br>
 
  <strong>Concentración ideal reportada por los integrantes del equipo:</strong><br>
  <div>
    <table style="text-align:center;">
      <tr>
        <th>Saborista</th>
        <th>Efrén</th>
        <th>Damian</th>
        <th>Sarah</th>
        ${Sabor.Pab ? `<th>Pablo</th>`:""}
        ${Sabor.Yaz ? `<th>Yazmany</th>`:""}
        <th>Promedio</th>
      </tr>
      <tr>
        <td><strong>ppm</strong></td>
        <td>${Sabor.Efr}</td>
        <td>${Sabor.Dam}</td>
        <td>${Sabor.Sar}</td>
        ${Sabor.Pab ? `<td>${Sabor.Pab}</td>`:""}
        ${Sabor.Yaz ? `<td>${Sabor.Yaz}</td>`:""}
        <td>${Sabor.Yaz ? parseFloat((Sabor.Efr + Sabor.Dam + Sabor.Sar + Sabor.Pab + Sabor.Yaz)/ 5).toFixed(1): parseFloat(((Sabor.Efr + Sabor.Dam + Sabor.Sar)/ 3)).toFixed(1)}</td>
      </tr>
    </table>  
  </div>
  
  
  ${Sabor.Stor ? `<br> <b>Notas de almacenamiento: </b> ${Sabor.Stor}`:""}
  ${Sabor.Carac ? `<br> <b>Notas generales: </b> ${Sabor.Carac}`:""}
  </div>

  `}

document.body.innerHTML = `
<h1>Catálogo de saborizantes (${acid.length + Alde.length + Keto.length + Ester.length + alco.length + Otros.length} compuestos)</h1>

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