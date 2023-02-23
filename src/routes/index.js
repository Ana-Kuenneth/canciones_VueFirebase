const { Router } = require("express")
const router = Router()
const { db } = require('../firebase') 

// comienza la declaracion de rutas
router.get('/artistas', async (req, res) => {
    try {
        const artistas = await db.collection('Artistas').get()
        const datos = artistas.docs.map((artista) => {
            return{
                id: artista.id,
                ...artista.data() //desestucturacion de datos
            }
        })
        artistas.docs.forEach((artista) => {
            console.log(artista.data())
        })
        res.send(datos)
        
    } catch (err) {
        res.status(500),
        res.send('Ocurrió un error inesperado')
    }
})

router.get('/artistas/:id', async (req, res) => {
    const id = req.params.id
    //const artistas= await db.collection('artistas');
    //const datos = await artistas.where('id', '==', id).get()
    const datos = await db.collection('Artistas').doc(id).get()
    console.log(datos.data())
    // datos.forEach(artista=> {
    //     console.log(artista.data());
    //   });
    res.send(datos.data())
})

router.get('/canciones', async (req, res) => {
    try {
        const canciones = await db.collection('Canciones').get()
        const datos = canciones.docs.map((cancion) => {
            return{
                id: cancion.id,
                ...cancion.data() //desestucturacion de datos
            }
        })
        canciones.docs.forEach((canciones) => {
            console.log(canciones.data())
        })
        res.send(datos)
        
    } catch (err) {
        res.status(500),
        res.send('Ocurrió un error inesperado')
    }
})

router.get('/canciones/:id', async (req, res) => {
    const id = req.params.id
    //const artistas= await db.collection('artistas');
    //const datos = await artistas.where('id', '==', id).get()
    const datos = await db.collection('Canciones').doc(id).get()
    console.log(datos.data())
    // datos.forEach(artista=> {
    //     console.log(artista.data());
    //   });
    res.send(datos.data())
})

module.exports = router