const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            notificaciones: [],
            hotels: [],
            currentHotel: {},
            search: null,
            facebook_name: {},
            mensajes: [],
            currentMensajes: {},
            date: [],
            graficos: [],
            config: [],
            info: [],
            usario: [],
        },
        actions: {
            GetNotificaciones: async () => {
                const res = await fetch('https://run.mocky.io/v3/387c7b3f-42c4-4c26-9e41-abc1b0f79211')
                const data = await res.json()
                setStore({
                    notificaciones: data
                })
            },
            GetHotels: async () => {
                const res = await fetch('https://run.mocky.io/v3/dda55c9c-cc54-495f-a641-32469ccdd46f')
                const data = await res.json()
                setStore({
                    hotels: data
                })
            },
            GetMensajes: async () => {
                const res = await fetch("https://run.mocky.io/v3/974573de-ffcf-4e66-b76c-1c1a221b1d0d")
                const data = await res.json()
                setStore({
                    mensajes: data
                })
            },
            GetGraficos: async () => {
                const res = await fetch("https://run.mocky.io/v3/07ffa72c-3a57-4fe0-ad97-35ff9d491cfa")
                const data = await res.json()
                setStore({
                    graficos: data
                })
            },
            GetInfo: async () => {
                const res = await fetch("https://run.mocky.io/v3/f3ccff26-b138-4e34-83bb-7c49c1be0026")
                const data = await res.json()
                setStore({
                    info: data
                })
            },
            GetEvent: async () => {
                const res = await fetch('https://run.mocky.io/v3/10235fc6-7373-4983-9b1c-703182d8fa23')
                const data = await res.json()
                setStore({
                    date: data
                })
            },
            GetUsarios: async () => {
                const res = await fetch('https://run.mocky.io/v3/cbd5d0f3-94b5-4d8e-8ce5-9a35c009d98c')
                const data = await res.json()
                setStore({
                    usario: data
                })
            },
            GetConfig: async () => {
                const res = await fetch('https://run.mocky.io/v3/24c6c829-0caa-466e-82f1-83b3059187dc')
                const data = await res.json()
                setStore({
                    config: data
                })
            },
            GetMensajesById: async (id) => {
                const store = getStore()
                const res = await fetch(`https://run.mocky.io/v3/974573de-ffcf-4e66-b76c-1c1a221b1d0d/${id}`)
                const data = await res.json()
                if (id !== "all"){
                    const mensaje = data.filter(item => item.id == id)
                    if(mensaje.length > 0) {
                        setStore({
                            currentMensajes: mensaje[0]
                        })
                    }
                }
                console.log(store.currentMensajes)

            },
            GetCurrentHotel: async (item) => {
                setStore({
                    currentHotel: item
                })
            },
            searchSpace: e => {
                let keyword = e.target.value
                setStore({
                    search: keyword
                })
            },
            SaveData: response => {
                setStore({
                    facebook_name: response
                })
                sessionStorage.setItem("facebook_name", JSON.stringify(response))
            },
            GetFacebookData: () => {
                if (sessionStorage.getItem("facebook_name")) {
                    setStore({
                        facebook_name: JSON.parse(sessionStorage.getItem("facebook_name"))
                    })
                }
            },
          
        }
    }
}
export default getState;