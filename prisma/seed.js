const { PrismaClient } = require('@prisma/client')
const path = require('path')
const fs = require('fs').promises

const prisma = new PrismaClient()

async function main() {
  try {
    await prisma.productsOnCategories.deleteMany({})
    await prisma.productsOnDistributorLocations.deleteMany({})
    await prisma.productsDestacados.deleteMany({})
    await prisma.productImages.deleteMany({}) // <-- DESCOMENTAR si quieres limpiar imágenes
    await prisma.distributorLocation.deleteMany({})
    await prisma.products.deleteMany({})
    await prisma.categories.deleteMany({})
    await prisma.distributors.deleteMany({})
    await prisma.user.deleteMany({})
  } catch (error) {
    console.error('Error durante el borrado de datos:', error)
  }

  try {
    const categories = {}
    const products = {}

    const allProductImages = {}
    const imageCreationPromises = []

    const productDirectoryMapping = {
      adeganForte: 'Adegan',
      dermicare: 'Dermicare',
      pracanex: 'Pracanex',
      pracanexPlus: 'PracanexPlus',
      trakLa: 'TrakLa'
    }
    const baseImagesDir = path.join(__dirname, '..', 'public', 'images', 'products')
    const publicPathPrefix = '/images/products/'

    let cat = await prisma.categories.findUnique({
      where: { categoryName: 'Dermatológica' }
    })
    if (!cat) {
      cat = await prisma.categories.create({
        data: { categoryName: 'Dermatológica' }
      })
      console.log("  Categoría 'Dermatológica' creada")
    } else {
      console.log("  Categoría 'Dermatológica' ya existe")
    }
    categories.dermatologica = cat

    cat = await prisma.categories.findUnique({
      where: { categoryName: 'Antiparasitario' }
    })
    if (!cat) {
      cat = await prisma.categories.create({
        data: { categoryName: 'Antiparasitario' }
      })
      console.log("  Categoría 'Antiparasitario' creada")
    } else {
      console.log("  Categoría 'Antiparasitario' ya existe")
    }
    categories.antiparasitario = cat

    cat = await prisma.categories.findUnique({
      where: { categoryName: 'Multivitamínico' }
    })
    if (!cat) {
      cat = await prisma.categories.create({
        data: { categoryName: 'Multivitamínico' }
      })
      console.log("  Categoría 'Multivitamínico' creada")
    } else {
      console.log("  Categoría 'Multivitamínico' ya existe")
    }
    categories.multivitaminico = cat

    cat = await prisma.categories.findUnique({
      where: { categoryName: 'Antiinflamatorio' }
    })
    if (!cat) {
      cat = await prisma.categories.create({
        data: { categoryName: 'Antiinflamatorio' }
      })
      console.log("  Categoría 'Antiinflamatorio' creada")
    } else {
      console.log("  Categoría 'Antiinflamatorio' ya existe")
    }
    categories.antiinflamatorio = cat

    cat = await prisma.categories.findUnique({
      where: { categoryName: 'Ivermectina' }
    })
    if (!cat) {
      cat = await prisma.categories.create({
        data: { categoryName: 'Ivermectina' }
      })
      console.log("  Categoría 'Ivermectina' creada")
    } else {
      console.log("  Categoría 'Ivermectina' ya existe")
    }
    categories.ivermectina = cat
    console.log('Categorías verificadas/creadas.')

    // CREANDO/ENCONTRANDO PRODUCTOS
    console.log('\nCreando/Encontrando Productos...')
    let prod = await prisma.products.findUnique({
      where: { nombre: 'Dermicare6' }
    })
    if (!prod) {
      prod = await prisma.products.create({
        data: {
          nombre: 'Dermicare6',
          composicion:
            'Cada 100g contiene Neomicina sulfato 0.5g Ketoconazol 1.0g Betametasona dipropionato 0.05g Lidocaína clorhidrato 2.0g Oxido de zinc 5.0g Excipientes c.s.p 100g',
          indicaciones:
            'Crema dermatológica tiene acción tópica bactericida, fungicida, astringente y antiinflamatoria, en afecciones de la piel en caninos y felinos, tales como prurito, eczema, dermatitis alérgica, pénfigo, dermatofitosis, ulceraciones, llagas, intertrigo, alopecia areata, onicomicosis, otitis externa entre otras causadas por bacterias gram positivas y gram negativas.',
          dosis_y_via:
            'Dosis y administración Aplicar tópicamente sobre la región afectada, distribuyendo uniformemente la crema asegurando así su buena distribución tres veces al día. Después de desaparecer los síntomas continuar aplicando por 10 días',
          registro_senasa: 'F.70.39.N.0009',
          animal_mayor_menor: 'Menor',
          presentaciones: 'Tubo colapsible de aluminio x 20g'
        }
      })
      console.log("  Producto 'Dermicare6' creado")
    } else {
      console.log("  Producto 'Dermicare6' ya existe")
    }
    products.dermicare = prod

    prod = await prisma.products.findUnique({ where: { nombre: 'Pracanex' } })
    if (!prod) {
      prod = await prisma.products.create({
        data: {
          nombre: 'Pracanex',
          composicion:
            'Cada mL contiene Pamoato de pirantel 72.5 Praziquantil 25 mg Excipientes c.s.p 1 mL',
          indicaciones:
            'En perros y gatos para el tratamiento de infestaciones ocasionadas por Ancylostoma caninum, Uncinaria stenocephala, toxocara canis, toxascaris leonina, Dipylidium caninum, Taenia sp y Echinococcus sp',
          dosis_y_via:
            'Administrar via oral, colocando la jeringa en la comisura labial del animal, a razón de 1mL por cada 5 kilos de peso. Lo que corresponde a las dosis recomendadas de 5 mg Praziquantil y 5 mg de Pirantel por kg de peso',
          registro_senasa: 'F.008.085.N.01275',
          animal_mayor_menor: 'Menor',
          presentaciones:
            'Jeringa dosificadoras con graduador 2mL,5mL,10mL, frasco multidosis por 60mL y 120mL con su jeringa dosificadora.'
        }
      })
      console.log("  Producto 'Pracanex' creado")
    } else {
      console.log("  Producto 'Pracanex' ya existe")
    }
    products.pracanex = prod

    prod = await prisma.products.findUnique({
      where: { nombre: 'Pracanex Plus' }
    })
    if (!prod) {
      prod = await prisma.products.create({
        data: {
          nombre: 'Pracanex Plus',
          composicion:
            'Cada tableta contiene Pamoato de pirantel 150 mg Praziquantel 50 mg Excipientes 1 tableta',
          indicaciones:
            'Para el control y tratamiento contra nematodos (Gusanos redondos) Ancylostoma caninum, uncicaria sp, toxocara canis, toxascaris leonina, toxocara cati, trichuris vulpis, tenias (Gusanos Planos) dipylidium sp,Taenia toxascaris granulosos, mesocestoides corti.',
          dosis_y_via:
            'Administrar a razón de 1 tableta por cada 10 kg de peso vivo en caninos a partir de las 4 semanas de edad y en felinos a partir de las 6 semanas. Se recomienda repetir las dosis según indicación de su médico veterinario.',
          registro_senasa: 'F.08.31.N.1076',
          animal_mayor_menor: 'Menor',
          presentaciones: 'Pote de 60 tabletas y 100 tabletas'
        }
      })
      console.log("  Producto 'Pracanex Plus' creado")
    } else {
      console.log("  Producto 'Pracanex Plus' ya existe")
    }
    products.pracanexPlus = prod

    prod = await prisma.products.findUnique({
      where: { nombre: 'Ecofinex Duo' }
    })
    if (!prod) {
      prod = await prisma.products.create({
        data: {
          nombre: 'Ecofinex Duo',
          composicion:
            'Cada 100 mL contiene: Fipronil 0.25g Pyriproxyfen 0.25g Excipientes c.s.p 100mL',
          indicaciones:
            'combina la efectividad del Fipronil con pyriproxyfen, un regulador del crecimiento de los insectos (RCI), ofreciendo la asociación más efectiva para el control integral de pulgas y garrapatas en perros desde la primera semana de edad. La adición del pyriproxyfen, le otorga al producto efectividad residual contra huevos y larvas de pulgas, los que se traduce en un control ambiental de las pulgas adultas(reducción de la carga ambiental); pues al atacar el ciclo de vida de la pulga en diferentes puntos, evita que las mismas reinfesten la mascota y su medio ambiente.',
          dosis_y_via: '3 - 6 mL/ kg de p.v. dependiendo del pelaje del animal. Aplicación tópica.',
          registro_senasa: 'F.87.37.N.0442',
          animal_mayor_menor: 'Menor',
          presentaciones:
            'Frasco de plastico Spray x 55 mL, Spray x 110 mL, Spray x 275 mL, Spray x 500Ml'
        }
      })
      console.log("  Producto 'Ecofinex Duo' creado")
    } else {
      console.log("  Producto 'Ecofinex Duo' ya existe")
    }
    products.ecofinexDuo = prod

    prod = await prisma.products.findUnique({
      where: { nombre: 'Adegan Forte' }
    })
    if (!prod) {
      prod = await prisma.products.create({
        data: {
          nombre: 'Adegan Forte',
          composicion:
            'Cada mL contienen Vitamina A (retinol palmitato) 500,000 U.I., Vitamina D3 , (colecalciferol) 75,000 U.I., Vitamina E (acetato de α-tocoferol) 50 mg , excipientes c.s.p.1mL.',
          indicaciones:
            'Es una combinación de vitaminas liposolubles altamente concentradas en una solución oleosa, estimula los mecanismos de defensa del organismo, mejora los parámetros reproductivos, productivos y de crecimiento.',
          dosis_y_via:
            'se administra vía IM profunda o subcutánea. - Bovinos y equinos: 5 mL. - Terneros, potros y gorrinos: 1 – 2 mL. - Porcinos, ovinos, caprinos y camélidos sudamericanos: 1 – 3 mL. - Lechones, corderos, cabritos: 0.5 – 1 mL. - Caninos y felinos: 0.25 – 0.5 mL.',
          registro_senasa: 'F.F4.01.N.0057',
          animal_mayor_menor: 'Mayor y Menor',
          presentaciones:
            'Frasco x 10mL, Frasco x 20mL,Frasco x 50 mL, Frasco x 100 mL, Frasco x 250 mL, Frasco x 500 mL'
        }
      })
      console.log("  Producto 'Adegan Forte' creado")
    } else {
      console.log("  Producto 'Adegan Forte' ya existe")
    }
    products.adeganForte = prod

    prod = await prisma.products.findUnique({ where: { nombre: 'Aifen 10%' } })
    if (!prod) {
      prod = await prisma.products.create({
        data: {
          nombre: 'Aifen 10%',
          composicion: 'Cada mL contiene: Ketoprofeno 100 mg Excipiente c.s.p. 1 mL',
          indicaciones:
            'En bovinos, equinos, caninos y felinos como antiiflamatorio, analgésico y antipirético de origen no infeccioso de los sistemas osteoarticular y músculo-esquelético. Tratamiento coadyuvante de procesos analáctico (alergias de tipo 1). Igualmente, esta indicado como coadyuvante en el tratamiento de mastitis, edema de la urbe y endotoxinas',
          dosis_y_via:
            'En equinos aplicar vía intravenosa 1 mL por cada 45 kg de peso. En bovinos aplicar vía intravenosa o intramuscular 1 mL por cada 33 kg de peso. En caninos y felinos aplicar vía intramuscular o subcutánea 0.5 mL por cada 25 kg. Otras dosis e indicaciones a criterio del Médico Veterinario.',
          registro_senasa: 'F.99.01.N.0110',
          animal_mayor_menor: 'Mayor y Menor',
          presentaciones: 'Frascos de vidrio x 10 mL, 20 mL, 50 mL, 100 mL y 250 mL'
        }
      })
      console.log("  Producto 'Aifen 10%' creado")
    } else {
      console.log("  Producto 'Aifen 10%' ya existe")
    }
    products.aifen10 = prod

    prod = await prisma.products.findUnique({
      where: { nombre: 'Trak LA 1%' }
    })
    if (!prod) {
      prod = await prisma.products.create({
        data: {
          nombre: 'Trak LA 1%',
          composicion: 'Ivermectina 10 mg, vehículo de lenta liberación c.s.p. 1 mL',
          indicaciones:
            'Endectocida de amplio espectro para uso en Bovinos , Porcinos,ovinos,caprinos y alpacas para el control de los parásitos gastrointestinales redondos, al igual que los pulmonares más frecuentes, en su estado larvario y adulto que son los más patogénicos, y de parásitos externos como Nuche o Tórsalo, Miasis (gusaneras), Piojos, Ácaros productores de Sarna, y contribuye al control de garrapatas del género Boophillus microplus',
          dosis_y_via:
            'Bovinos, equinos,ovinos,caprinos y alpacas Aplicar por Vía intramuscular o subcutánea: 1 ml / 50 kg de peso, lo que corresponde a 200 μg/kg de peso. PORCINOS: Aplicar por Vía intramuscular o subcutánea: 1 ml / 33 kg de peso, lo que corresponde a 300 μg/kg de peso',
          registro_senasa: 'F.54.01.N.0240',
          animal_mayor_menor: 'Mayor y Menor',
          presentaciones: 'Frasco de vidrio x 10mL,20mL,50mL,100mL,250mL,500mL'
        }
      })
      console.log("  Producto 'Trak LA 1%' creado")
    } else {
      console.log("  Producto 'Trak LA 1%' ya existe")
    }
    products.trakLa = prod

    prod = await prisma.products.findUnique({
      where: { nombre: 'Trak LA ADE' }
    })
    if (!prod) {
      prod = await prisma.products.create({
        data: {
          nombre: 'Trak LA ADE',
          composicion:
            'Cada mL Ivermectina 10 mg, Vitamina A 250 000 UI, Vitamina D3 37 500 UI, Vitamina E (alfatocoferil acetato) 25 mg, vehículo de lenta liberación c.s.p. 1mL',
          indicaciones:
            'Para el tratamiento y control de nematodos causantes del parasitismo gastrointestinal y pulmonar en bovinos y porcinos.También para el control de Dermatobia hominis (Nuche o Tórsalo), Cochliomya hominivorax (Larvas de miasis ogusaneras), al igual que Piojos, Ácaros productores de Sarna, y Garrapata del género Boophillus microplus. Es el ideal para el control de gusaneras por heridas de castraciones y ombligos de terneros.',
          registro_senasa: 'F.54.01.N.0242',
          dosis_y_via:
            'Bovinos, ovinos, caprinos y camélidos sudamericanos: 1 ml / 50 kg de peso. (200 μg Ivermectina/kg de peso) - Porcinos: 1 ml / 33 kg de peso (300 μg Ivermectina/kg de peso).',
          animal_mayor_menor: 'Mayor y Menor',
          presentaciones: 'Frasco de vidrio x 10ml,20ml,50ml,100ml,250ml,500ml'
        }
      })
      console.log("  Producto 'Trak LA ADE' creado")
    } else {
      console.log("  Producto 'Trak LA ADE' ya existe")
    }
    products.trakLaAde = prod

    prod = await prisma.products.findUnique({ where: { nombre: 'Axfomax' } })
    if (!prod) {
      prod = await prisma.products.create({
        data: {
          nombre: 'Axfomax',
          composicion:
            'Triclabendazol 120 mg, Ivermectina 2 mg, Fenbendazol 100 mg, excipientes c.s.p. 1 mL.',
          indicaciones:
            'Para el tratamiento y control simultáneo de todas las parasitosis internas (nematodos gastrointestinales, pulmonares, incluyendo casos de fasciolasis aguda, subaguda y crónica, tenias y nematodos resistentes a los benzimidazoles y a la ivermectina); así como para el tratamiento y control de ectoparásitos chupadores (ayudando además en el control de moscas).',
          dosis_y_via:
            'Bovinos y equinos: 5 mL/50 kg de p.v.; ovinos,caprinos y camélidos: 1 mL/10 kg de peso',
          registro_senasa: 'F.008.002.N.01279',
          animal_mayor_menor: 'Mayor y Menor',
          presentaciones: '-'
        }
      })
      console.log("  Producto 'Axfomax' creado")
    } else {
      console.log("  Producto 'Axfomax' ya existe")
    }
    products.axfomax = prod

    prod = await prisma.products.findUnique({ where: { nombre: 'Ectofinex' } })
    if (!prod) {
      prod = await prisma.products.create({
        data: {
          nombre: 'Ectofinex',
          composicion: 'Fipronil 2,5 mg, excipientes c.s.p. 1 mL',
          indicaciones:
            'Es un antiparasitario de acción rápida y prolongada. Controla rápidamente la infestación de pulgas matando las pulgas adultas antes de que éstas ponga huevos. Previene la infestación y elimina rápidamente el estrés en mascotas, resultante de las molestias causadas por las pulgas y garrapatas, por la pérdida de sangre, picazón y por reacciones alérgicas a las picaduras',
          dosis_y_via: '3 - 6 mL/kg de p.v. dependiendo del pelaje del animal. Aplicación tópica.',
          registro_senasa: 'F.87.37.N.0424',
          animal_mayor_menor: 'Menor',
          presentaciones:
            'Frasco de plástico Spray x 55 mL, Spray x 110 mL, Spray x 275 mL, Spray x 500Ml'
        }
      })
      console.log("  Producto 'Ectofinex' creado")
    } else {
      console.log("  Producto 'Ectofinex' ya existe")
    }
    products.ectofinex = prod
    console.log('Productos verificados/creados.')

    // CREANDO/ENCONTRANDO IMÁGENES DE PRODUCTOS DESDE SUBDIRECTORIOS
    console.log('\nCreando/Encontrando Imágenes de Productos desde subdirectorios...')

    // Iterar through the defined product-directory mappings
    for (const productKey in productDirectoryMapping) {
      const product = products[productKey] // Get the product object created earlier using its key
      const subdirectoryName = productDirectoryMapping[productKey]
      const productImagesDir = path.join(baseImagesDir, subdirectoryName)
      const productPublicPathPrefix = publicPathPrefix + subdirectoryName + '/'

      if (!product) {
        console.warn(
          `  Advertencia: Producto con key "${productKey}" (variable en seed script) no encontrado/creado. Saltando procesamiento para directorio "${subdirectoryName}".`
        )
        continue // Skip if the product wasn't created/found in the 'products' object
      }

      console.log(`  Procesando directorio para "${product.nombre}" (${subdirectoryName})...`)

      let files = []
      try {
        // Leer el contenido del directorio
        const entries = await fs.readdir(productImagesDir)
        console.log(`    Encontrados ${entries.length} elementos en "${subdirectoryName}"`)

        // Filtrar solo archivos de imagen por extensión
        const imageFilesPromises = entries.map(async entry => {
          const entryPath = path.join(productImagesDir, entry)
          try {
            const stat = await fs.stat(entryPath)
            // Verifica si es un archivo y tiene una extensión de imagen común (añade o quita extensiones según necesites)
            if (stat.isFile() && /\.(webp|jpg|jpeg|png|gif|svg)$/i.test(entry)) {
              return entry // Retorna el nombre del archivo si es una imagen
            }
          } catch (err) {
            // console.error(`  Error al obtener stat para ${entryPath}:`, err); // Log errores de stat si es necesario
          }
          return null // Retorna null si no es archivo o no es imagen
        })

        files = (await Promise.all(imageFilesPromises)).filter(file => file !== null)

        console.log(`    Filtrados a ${files.length} archivos de imagen en "${subdirectoryName}".`)
      } catch (error) {
        if (error.code === 'ENOENT') {
          console.log(
            `    Directorio "${subdirectoryName}" no encontrado (${productImagesDir}). Asegúrate de que existe y la ruta es correcta. Saltando.`
          )
        } else {
          console.error(`    Error leyendo el directorio "${subdirectoryName}":`, error)
        }
        continue // Move to the next product/directory mapping
      }

      // Create/find ProductImage records for each file found in the subdirectory
      for (const fileName of files) {
        const imageUrl = productPublicPathPrefix + fileName

        // Buscar si ya existe una imagen con esta URL y vinculada a ESTE producto
        let existingImage = await prisma.productImages.findFirst({
          // <-- CORREGIDO: plural
          where: {
            url: imageUrl,
            productId: product.id // Busca específicamente si ya existe ESTA imagen para ESTE producto
          }
        })

        if (!existingImage) {
          console.log(
            `    Creando registro de imagen para "${fileName}" vinculado a "${product.nombre}"`
          )
          imageCreationPromises.push(
            prisma.productImages.create({
              // <-- CORREGIDO: plural
              data: {
                url: imageUrl,
                product: {
                  // Usar la relación 'product' con 'connect'
                  connect: { id: product.id }
                }
              }
            })
          )
        } else {
          console.log(
            `    Registro de imagen para "${fileName}" vinculado a "${product.nombre}" ya existe.`
          )
          allProductImages[imageUrl] = existingImage
        }
      }
    }
    await Promise.all(imageCreationPromises)
    console.log(
      `  ${imageCreationPromises.length} registros de imagen puestos en cola para creación/actualización.`
    )
    const allProcessedProductsIds = Object.values(products)
      .map(p => p.id)
      .filter(id => id !== undefined)
    if (allProcessedProductsIds.length > 0) {
      const allRelevantImages = await prisma.productImages.findMany({
        // <-- CORREGIDO: plural
        where: {
          productId: { in: allProcessedProductsIds } // Buscar todas las imágenes vinculadas a los productos que procesamos
        }
      })

      // Poblar o actualizar allProductImages con los objetos imagen completos, mapeados por URL
      allRelevantImages.forEach(img => {
        allProductImages[img.url] = img
      })
      console.log(
        `  Obtenidos ${
          Object.keys(allProductImages).length
        } objetos de imagen relevantes (creados o existentes) para uso posterior.`
      )
    } else {
      console.log(
        '  No se procesaron productos con directorios de imágenes mapeados, saltando obtención de imágenes relevantes.'
      )
    }

    // CREANDO/ENCONTRANDO PRODUCTOS DESTACADOS
    console.log('\nCreando/Encontrando Productos Destacados...')

    // Destacar Trak LA 1% (asociado a Ivermectina) con orden 1
    if (products.trakLa) {
      let destacado = await prisma.productsDestacados.findFirst({
        where: { orden: 1 }
      })
      if (!destacado) {
        // Intentar obtener el objeto de imagen principal para Trak LA 1% (e.g., trakla1.webp) desde allProductImages
        const trakLaMainImage = allProductImages[publicPathPrefix + 'TrakLa/trakla1.webp'] // <-- Usa la URL exacta esperada

        destacado = await prisma.productsDestacados.create({
          data: {
            orden: 1,
            titulo: 'Destacado Ivermectina',
            descripcion: 'Excelente opción para tratamientos con Ivermectina.',
            product: {
              // Usar la relación 'product' con 'connect' para vincular a un producto existente
              connect: { id: products.trakLa.id }
            },
            ...(trakLaMainImage && {
              // Esto añade 'imagenPrincipal' si trakLaMainImage existe
              imagenPrincipal: {
                connect: { id: trakLaMainImage.id }
              }
            })
            // >>>>>> FIN OPCIONAL <<<<<<
          }
        })
        console.log(`  Producto destacado para ${products.trakLa.nombre} (Orden 1) creado.`)
      } else {
        console.log(`  Producto destacado para ${products.trakLa.nombre} (Orden 1) ya existe.`)
      }
    } else {
      console.log('  Producto Trak LA 1% no encontrado, no se puede crear destacado Orden 1.')
    }

    // Destacar Dermicare6 con orden 2
    if (products.dermicare) {
      let destacado = await prisma.productsDestacados.findFirst({
        where: { orden: 2 }
      })
      if (!destacado) {
        const dermicareMainImage = allProductImages[publicPathPrefix + 'Dermicare/dermicare1.webp'] // <-- URL esperada

        destacado = await prisma.productsDestacados.create({
          data: {
            orden: 2,
            titulo: 'Destacado Dermatológico',
            descripcion: 'Especialista en cuidado de la piel.',
            product: {
              // Usar la relación 'product' con 'connect'
              connect: { id: products.dermicare.id }
            },
            // >>>>>> OPCIONAL: Vincular una imagen principal destacada <<<<<<
            ...(dermicareMainImage && {
              imagenPrincipal: {
                connect: { id: dermicareMainImage.id }
              }
            })
            // >>>>>> FIN OPCIONAL <<<<<<
          }
        })
        console.log(`  Producto destacado para ${products.dermicare.nombre} (Orden 2) creado.`)
      } else {
        console.log(`  Producto destacado para ${products.dermicare.nombre} (Orden 2) ya existe.`)
      }
    } else {
      console.log('  Producto Dermicare6 no encontrado, no se puede crear destacado Orden 2.')
    }

    // Destacar Pracanex con orden 3
    if (products.pracanex) {
      let destacado = await prisma.productsDestacados.findFirst({
        where: { orden: 3 }
      })
      if (!destacado) {
        const pracanexMainImage = allProductImages[publicPathPrefix + 'Pracanex/pracanex1.webp'] // <-- URL esperada

        destacado = await prisma.productsDestacados.create({
          data: {
            orden: 3,
            titulo: 'Destacado Antiparasitario',
            descripcion: 'Combate parásitos internos eficazmente.',
            product: {
              // Usar la relación 'product' con 'connect'
              connect: { id: products.pracanex.id }
            },
            // >>>>>> OPCIONAL: Vincular una imagen principal destacada <<<<<<
            ...(pracanexMainImage && {
              imagenPrincipal: {
                connect: { id: pracanexMainImage.id }
              }
            })
            // >>>>>> FIN OPCIONAL <<<<<<
          }
        })
        console.log(`  Producto destacado para ${products.pracanex.nombre} (Orden 3) creado.`)
      } else {
        console.log(`  Producto destacado para ${products.pracanex.nombre} (Orden 3) ya existe.`)
      }
    } else {
    }
    const productCategoryLinks = []

    // Mapear productos a sus categorías
    if (products.dermicare && categories.dermatologica)
      productCategoryLinks.push(
        prisma.productsOnCategories.create({
          data: {
            productId: products.dermicare.id,
            categoryId: categories.dermatologica.id
          }
        })
      )
    if (products.pracanex && categories.antiparasitario)
      productCategoryLinks.push(
        prisma.productsOnCategories.create({
          data: {
            productId: products.pracanex.id,
            categoryId: categories.antiparasitario.id
          }
        })
      )
    if (products.pracanexPlus && categories.antiparasitario)
      productCategoryLinks.push(
        prisma.productsOnCategories.create({
          data: {
            productId: products.pracanexPlus.id,
            categoryId: categories.antiparasitario.id
          }
        })
      )
    if (products.ecofinexDuo && categories.antiparasitario)
      productCategoryLinks.push(
        prisma.productsOnCategories.create({
          data: {
            productId: products.ecofinexDuo.id,
            categoryId: categories.antiparasitario.id
          }
        })
      )
    if (products.adeganForte && categories.multivitaminico)
      productCategoryLinks.push(
        prisma.productsOnCategories.create({
          data: {
            productId: products.adeganForte.id,
            categoryId: categories.multivitaminico.id
          }
        })
      )
    if (products.aifen10 && categories.antiinflamatorio)
      productCategoryLinks.push(
        prisma.productsOnCategories.create({
          data: {
            productId: products.aifen10.id,
            categoryId: categories.antiinflamatorio.id
          }
        })
      )

    // Productos que pertenecen a múltiples categorías
    if (products.trakLa && categories.antiparasitario)
      productCategoryLinks.push(
        prisma.productsOnCategories.create({
          data: {
            productId: products.trakLa.id,
            categoryId: categories.antiparasitario.id
          }
        })
      )
    if (products.trakLa && categories.ivermectina)
      productCategoryLinks.push(
        prisma.productsOnCategories.create({
          data: {
            productId: products.trakLa.id,
            categoryId: categories.ivermectina.id
          }
        })
      )

    if (products.trakLaAde && categories.antiparasitario)
      productCategoryLinks.push(
        prisma.productsOnCategories.create({
          data: {
            productId: products.trakLaAde.id,
            categoryId: categories.antiparasitario.id
          }
        })
      )
    if (products.trakLaAde && categories.ivermectina)
      productCategoryLinks.push(
        prisma.productsOnCategories.create({
          data: {
            productId: products.trakLaAde.id,
            categoryId: categories.ivermectina.id
          }
        })
      )

    if (products.ectofinex && categories.antiparasitario)
      productCategoryLinks.push(
        prisma.productsOnCategories.create({
          data: {
            productId: products.ectofinex.id,
            categoryId: categories.antiparasitario.id
          }
        })
      )

    // Ejecutar todas las creaciones de vínculos de categoría en paralelo
    await Promise.all(productCategoryLinks)
    console.log('Vínculos Producto <-> Categoría creados.')
  } catch (e) {
    console.error('Error durante el seeding:', e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()
