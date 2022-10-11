export default function useUtil(){
    function getAssetsFileURL(url:string){
        return new URL(`../assets/${url}`,import.meta.url).href
    }
    return {
        //methods
        getAssetsFileURL,
    }
}