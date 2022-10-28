
const products = [
    { name: "Dell PowerEdge R720 16B Server 2x E5-2690 v2 3.GHz 20-Cores 96GB DDR3 No HDD Perc H710P Mini 1GB", price: 7496.31 },
    { name: "Dell PowerEdge R930 Server 4x E7-8870 v3 512GB RAM 4x 1.2TB SAS", price: 46606.29 },
    { name: "HP ProLiant DL360 G9 8B 2.5 SFF Server 2 x Intel Xeon E5-2650 V3 2.30GHz 20 Core 64GB DDR4 Memory 4 x 900GB 10k SAS HDD P440ar", price: 10570.35 },
    { name: "Dell PowerEdge R620 4B Server 2x E5-2620 2.0GHz 12-Cores 24GB DDR3 S110", price: 4482.16 },
    { name: "Dell PowerEdge R710 LFF 2x X5650 Six Core 2.66Ghz 24GB 3x 146GB 15K Perc 6/i", price: 6881.70 },
    { name: "HP ProLiant DL380 Server Gen9 G9 8B SFF 2.5 2 x Intel Xeon E5-2678 V3 2.50GHz 24 Core 128GB DDR4 Memory No HDD P440ar Raid 331FLR", price: 12751.93 },
    { name: "Dell PowerEdge Server R730 8 Bay 2.5 SFF 2x Intel Xeon E5-2620v3 32GB H330", price: 8964.31 },
    { name: "Dell PowerEdge R630 Server / 2x E5-2620 V3 2.4GHz = 12 Cores / 32GB RAM / 2x 300GB 15K SAS", price: 10015.44 },
    { name: "HP ProLiant DL380 G7 8B SFF Server 2x L5520 2.26GHz 8-Cores 36GB DDR3 P410i", price: 2796.39 },
    { name: "Dell PowerEdge R720 16B Server 2x E5-2640 2.5GHz 12-Cores 96GB DDR3 No HDD Perc H310 Mini", price: 6068.76 },
];

























let shoppingcart = []

let selection = prompt("¿Desea adquirir algún producto? (Sí/No)")

while (selection != "Sí" && selection != "No") {
    alert("Por favor ingresa: Si o No.")
    selection = prompt("¿Desea adquirir algún producto? (Sí/No)")
}

if (selection == "Sí") {
    alert("A continuación se mostrará nuestra lista de productos.")
    let allproducts = products.map((products) => products.name + " " + products.price + "MXN");
    alert(allproducts.join("     -     "))
} else if (selection == "No") {
    alert("Gracias por ingresar, te esperamos pronto.")
}

while (selection != "No") {
    let product = prompt("Agrega los productos que deseas a tu carrito.")
    let price = 0
    if (product == "Dell PowerEdge R720 16B Server 2x E5-2690 v2 3.GHz 20-Cores 96GB DDR3 No HDD Perc H710P Mini 1GB" || product == "Dell PowerEdge R930 Server 4x E7-8870 v3 512GB RAM 4x 1.2TB SAS" || product == "HP ProLiant DL360 G9 8B 2.5 SFF Server 2 x Intel Xeon E5-2650 V3 2.30GHz 20 Core 64GB DDR4 Memory 4 x 900GB 10k SAS HDD P440ar" || product == "Dell PowerEdge R620 4B Server 2x E5-2620 2.0GHz 12-Cores 24GB DDR3 S110" || product == "Dell PowerEdge R710 LFF 2x X5650 Six Core 2.66Ghz 24GB 3x 146GB 15K Perc 6/i" || product == "HP ProLiant DL380 Server Gen9 G9 8B SFF 2.5 2 x Intel Xeon E5-2678 V3 2.50GHz 24 Core 128GB DDR4 Memory No HDD P440ar Raid 331FLR" || product == "Dell PowerEdge Server R730 8 Bay 2.5 SFF 2x Intel Xeon E5-2620v3 32GB H330" || product == "Dell PowerEdge R630 Server / 2x E5-2620 V3 2.4GHz = 12 Cores / 32GB RAM / 2x 300GB 15K SAS" || product == "HP ProLiant DL380 G7 8B SFF Server 2x L5520 2.26GHz 8-Cores 36GB DDR3 P410i" || product == "Dell PowerEdge R720 16B Server 2x E5-2640 2.5GHz 12-Cores 96GB DDR3 No HDD Perc H310 Mini") {
        switch (product) {
            case "Dell PowerEdge R720 16B Server 2x E5-2690 v2 3.GHz 20-Cores 96GB DDR3 No HDD Perc H710P Mini 1GB":
                price = 7496.31;
                break;
            case "Dell PowerEdge R930 Server 4x E7-8870 v3 512GB RAM 4x 1.2TB SAS":
                price = 46606.29;
                break;
            case "HP ProLiant DL360 G9 8B 2.5 SFF Server 2 x Intel Xeon E5-2650 V3 2.30GHz 20 Core 64GB DDR4 Memory 4 x 900GB 10k SAS HDD P440ar":
                price = 10570.35;
                break;
            case "Dell PowerEdge R620 4B Server 2x E5-2620 2.0GHz 12-Cores 24GB DDR3 S110":
                price = 4482.16;
                break;
            case "Dell PowerEdge R710 LFF 2x X5650 Six Core 2.66Ghz 24GB 3x 146GB 15K Perc 6/i":
                price = 6881.70;
                break;
            case "HP ProLiant DL380 Server Gen9 G9 8B SFF 2.5 2 x Intel Xeon E5-2678 V3 2.50GHz 24 Core 128GB DDR4 Memory No HDD P440ar Raid 331FLR":
                price = 12751.93;
                break;
            case "Dell PowerEdge Server R730 8 Bay 2.5 SFF 2x Intel Xeon E5-2620v3 32GB H330":
                price = 8964.31;
                break;
            case "Dell PowerEdge R630 Server / 2x E5-2620 V3 2.4GHz = 12 Cores / 32GB RAM / 2x 300GB 15K SAS":
                price = 10015.44;
                break;
            case "HP ProLiant DL380 G7 8B SFF Server 2x L5520 2.26GHz 8-Cores 36GB DDR3 P410i":
                price = 2796.39;
                break;
            case "Dell PowerEdge R720 16B Server 2x E5-2640 2.5GHz 12-Cores 96GB DDR3 No HDD Perc H310 Mini":
                price = 6068.76;
                break;
        }
        let units = parseInt(prompt("¿Cuántas unidades desea adquirir?"))
        shoppingcart.push({ product, units, price })
        console.log(shoppingcart)
    } else {
        alert("No contamos con ese producto.")
    }
    selection = prompt("¿Deseas seguir agregando productos a tu carrito de compras?")
    while (selection === "No") {
        alert("Gracias por tu compra.")
        shoppingcart.forEach((finalshoppingcart) => {
            console.log(`Prodcuto: ${finalshoppingcart.product}. Unidades: ${finalshoppingcart.units}. Total por producto: ${finalshoppingcart.units * finalshoppingcart.price}`)
        })
        break;
    }
}

const total = shoppingcart.reduce((acc, el) => acc + el.price * el.units, 0)

console.log(`El total a pagar por su compra es: ${total}`)