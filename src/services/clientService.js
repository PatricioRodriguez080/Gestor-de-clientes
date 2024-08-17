import { getFirestore, collection, doc, getDoc, getDocs, addDoc, deleteDoc, updateDoc, increment } from "firebase/firestore"
import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

initializeApp(firebaseConfig)

const db = getFirestore()

export const getClientes = async () => {
    try {
        let clientesCollection = collection(db, "Clientes")
        const snapshot = await getDocs(clientesCollection)
        if (snapshot.size === 0) {
            console.log("Sin resultados")
        }

        return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    } catch (error) {
        console.error("Error al obtener los datos: ", error)
    }
}

export const postCliente = async (cliente) => {
    const db = getFirestore()
    const clientesCollection = collection(db, "Clientes")

    try {
        const response = await addDoc(clientesCollection, cliente)
        return response.id
    } catch (error) {
        console.error("Error al añadir el documento: ", error)
    }
}

export const getClienteDetail = async (id) => {
    try {
        const clienteRef = doc(db, "Clientes", id)
        const docSnap = await getDoc(clienteRef)
        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() }
        } else {
            console.log("Sin resultados")
        }
    } catch (error) {
        console.error("Error al obtener los datos: ", error)
    }
}

export const borrarClienteFS = async (id) => {
    try {
        const clienteRef = doc(db, "Clientes", id)
        await deleteDoc(clienteRef)

        const contadorBorradosRef = doc(db, "Clientes Borrados", "Contador")
        updateDoc(contadorBorradosRef, { Cantidad: increment(1) })
    } catch (error) {
        console.error("Error al eliminar el documento: ", error)
    }
}

export const getContClientesBorrados = async () => {
    try {
        const contadorBorradosRef = doc(db, "Clientes Borrados", "Contador")
        const contadorSnap = await getDoc(contadorBorradosRef)

        if (contadorSnap.exists()) {
            return contadorSnap.data().Cantidad || 0
        } 
    } catch (error) {
        console.log("Error al obtener el contador de clientes borrados: ", error)
        return 0
    }
}

export const actualizarClienteFS = async (clienteActualizado, idCliente) => { 
    try {
        const clienteRef = doc(db, "Clientes", idCliente)
        await updateDoc(clienteRef, {
            Nombre: clienteActualizado.Nombre,
            Gmail: clienteActualizado.Gmail
        })
    } catch (error) {
        console.error("Error al actualizar el cliente en Firestore: ", error)
    }
}