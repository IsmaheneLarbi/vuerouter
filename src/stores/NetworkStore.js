const NetworkStore ={
    data: {
        network: ["borna", "alois"],
    },
    methods: {
        addPerson(name){
            NetworkStore.data.network.push(name);
        }
    }
};

export default NetworkStore;