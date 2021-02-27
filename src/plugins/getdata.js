const dataGetter={
    getCover : async (url) => {
        let value = await axios
            .get(url)
            .then((response) => {
                return response.data.cover.scaled;
            })
            .catch((error) => {
                alert(error);
            });
        return value;
    },
    getData : async (url) => {
        let value = await axios
            .get(url)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                alert(error);
            });
        return value;
    },

}
export default dataGetter;