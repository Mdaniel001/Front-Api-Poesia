const users = [    

        {
            titulo: "Cien sonetos de amor",
            autor: "Pablo Neruda",
            fecha_de_edicion: "1959",
            pais: "Chile",
            link_internet: "https://example.com/cien-sonetos-de-amor",
            tipo_de_poesia: "Sonetos"
        },
        {
            titulo: "Hoja por hoja",
            autor: "Octavio Paz",
            fecha_de_edicion: "1958",
            pais: "México",
            link_internet: "https://example.com/hoja-por-hoja",
            tipo_de_poesia: "Lírica"
        },
        {
            titulo: "Veinte poemas de amor y una canción desesperada",
            autor: "Pablo Neruda",
            fecha_de_edicion: "1924",
            pais: "Chile",
            link_internet: "https://example.com/veinte-poemas-de-amor",
            tipo_de_poesia: "Lírica"
        },
        {
            titulo: "Las mil y una noches",
            autor: "Anónimo",
            fecha_de_edicion: "Siglo IX-X",
            pais: "Persia",
            link_internet: "https://example.com/las-mil-y-una-noches",
            tipo_de_poesia: "Narrativa"
        },
        {
            titulo: "Poemas humanos",
            autor: "César Vallejo",
            fecha_de_edicion: "1939",
            pais: "Perú",
            link_internet: "https://example.com/poemas-humanos",
            tipo_de_poesia: "Lírica"
        },
        {
            titulo: "La divina comedia",
            autor: "Dante Alighieri",
            fecha_de_edicion: "Siglo XIV",
            pais: "Italia",
            link_internet: "https://example.com/la-divina-comedia",
            tipo_de_poesia: "Épica"
        },
        {
            titulo: "Rimas",
            autor: "Gustavo Adolfo Bécquer",
            fecha_de_edicion: "1868",
            pais: "España",
            link_internet: "https://example.com/rimas",
            tipo_de_poesia: "Lírica"
        },
        {
            titulo: "El principito",
            autor: "Antoine de Saint-Exupéry",
            fecha_de_edicion: "1943",
            pais: "Francia",
            link_internet: "https://example.com/el-principito",
            tipo_de_poesia: "Narrativa poética"
        },
        {
            titulo: "Poeta en Nueva York",
            autor: "Federico García Lorca",
            fecha_de_edicion: "1940",
            pais: "España",
            link_internet: "https://example.com/poeta-en-nueva-york",
            tipo_de_poesia: "Lírica"
        },
        {
            titulo: "Los versos satánicos",
            autor: "Salman Rushdie",
            fecha_de_edicion: "1988",
            pais: "Reino Unido",
             link_internet: "https://example.com/los-versos-satanicos",
            tipo_de_poesia: "Sátira"
        }
    
    
    
    
];


const listUsers= async()=>{

   
    let tableBody=``; //crear plantillas de Strings
    users.forEach(( user, index)=> { //llenamos los campos de las tablas 
        tableBody += `<tr> /
        <td>${user.titulo}</td>
        <td>${user.autor}</td>
        <td>${user.fecha_de_edicion}</td>
        <td>${user.pais}</td>
        <td>${user.link_internet}</td>
        <td>${user.tipo_de_poesia}</td>  
        </tr>`  

        console.log(user); //imprimir uno a uno los datos

    });   
    document.getElementById("tableBody_Users").innerHTML =tableBody; 
    //obtenemos un elemnto por identificador y 
    //le coloco un contenido HTML iNTERNO COMO ES EL TABLEBODY
    
};   
    
    
window.addEventListener("load", function(){  //escuchador de eventos  y ver pagina cargada
    listUsers();
    console.log("Documento Cargado")
    });

