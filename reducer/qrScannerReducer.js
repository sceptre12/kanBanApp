import StateTree from "../store/stateTree";
import {LAUNCH_QR_SCANNER, EXIT_QR_SCANNER} from "../action/qrScannerAction";

export default (state=StateTree.qrScanner,action) =>{
    switch (action.type) {
        case LAUNCH_QR_SCANNER:
            return {
                ...state,
                isScannerActive: true
            }
        case EXIT_QR_SCANNER:
            return {
                ...state,
                isScannerActive: false
            }
        default:
            return state
    }
}