export default function useMoment(){
    function dataFomate(date:Date){
        let str =date.toLocaleDateString() + date.toLocaleTimeString()
        return str
    }
    return {
        //methods
        dataFomate,
    }
}