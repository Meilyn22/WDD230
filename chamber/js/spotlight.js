
const url = './directory/data.json';

fetch(url)
    .then(response => response.json())
    .then(data => {
        let bizdata = [];
        for (company of data.businesses) {
            getbizdata(company)
        };
      
        let sl1 = getInt(bizdata.length -1);
        let sl2 = 0;
        let sl3 = 0;

        if(sl1 == bizdata.length -1) {
            sl2 = sl1 -1;
            sl3 = sl2 - 1;
        }
        else if(sl1 == 0) {
            sl2 = sl1 + 1;
            sl3 = sl2 + 1
        }
        else {
            sl2 = sl1 - 1;
            sl3 = sl1 + 1;
        }
       
       
        // ---------- Spotlight 1 ----------

        section1 = document.querySelector(".spotlight1");

        let img1 = document.createElement("img");
        img1.src = `directory/${bizdata[sl1].image}`;
        img1.alt = `${bizdata[sl1].name} image`;

        let title1 = document.createElement("h2");
        title1.textContent = bizdata[sl1].name;

        let a1 = document.createElement("a");
        a1.textContent = bizdata[sl1].website;
        a1.href = bizdata[sl1].website;

        section1.appendChild(img1);
        section1.appendChild(title1);
        section1.appendChild(a1);




        // ---------- Spotlight 2 ----------
       
        section2 = document.querySelector(".spotlight2");

        let img2 = document.createElement("img");
        img2.src = `directory/${bizdata[sl2].image}`;
        img2.alt = `${bizdata[sl2].name} image`;

        let title2 = document.createElement("h2");
        title2.textContent = bizdata[sl2].name;

        let a2 = document.createElement("a");
        a2.textContent = bizdata[sl2].website;
        a2.href = bizdata[sl2].website;

        section2.appendChild(img2);
        section2.appendChild(title2);
        section2.appendChild(a2);



        // ---------- Spotlight 3 ----------
    
        section3 = document.querySelector(".spotlight3");

        let img3 = document.createElement("img");
        img3.src = `directory/${bizdata[sl3].image}`;
        img3.alt = `${bizdata[sl3].name} image`;

        let title3 = document.createElement("h2");
        title3.textContent = bizdata[sl3].name;

        let a3 = document.createElement("a");
        a3.textContent = bizdata[sl3].website;
        a3.href = bizdata[sl3].website;

        section3.appendChild(img3);
        section3.appendChild(title3);
        section3.appendChild(a3);

    function getbizdata(company) {
        if (company.membership === "gold" || company.membership === "silver") {
            bizdata.push(company)
        }; 
    };

    
    function getInt(max) {
        return(Math.floor(Math.random() * (max +1)))
    }

    })