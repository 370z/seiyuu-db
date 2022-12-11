import { isEdge } from 'react-device-detect';

const checkBrowser = (data)=>{
    if(isEdge || data.includes("Edge") || data.includes("Edg")){
        return true;
    }
    
}
export default checkBrowser