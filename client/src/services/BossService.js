import { AppState } from "../AppState"
import { Boss } from "../models/Boss"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class BossService {

    async getBosses() {
        let res = await api.get('api/bosses')
        // logger.log('got bosses:', res.data)
        const newBosses = res.data.map(Pojo => new Boss(Pojo))
        AppState.newBosses = newBosses
        logger.log('Bosses In Appstate:', AppState.newBosses)
    }
    

}


export const bossService = new BossService()