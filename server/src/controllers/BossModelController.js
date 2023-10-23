import { Auth0Provider } from "@bcwdev/auth0provider";
import { bossModelService } from "../services/BossModelService.js";
import BaseController from "../utils/BaseController.js";

export class BossModelController extends BaseController {
    constructor() {
        super('api/bosses')
        this.router
            .get('', this.getBossList)
            .get('/:bossId', this.getBossById)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createBoss)
            .delete('/:bossId', this.deleteBoss)
    }

    async getBossList(request, response, next) {
        try {
            const bosses = await bossModelService.getBossList()
            return response.send(bosses)
        } catch (error) {
            next(error)
        }
    }
    async getBossById(request, response, next) {
        try {
            const bossId = request.params.bossId
            const boss = await bossModelService.getBossById(bossId)
            return response.send(boss)
        } catch (error) {
            next(error)
        }
    }
    async createBoss(request, response, next) {
        try {
            const bossData = request.body
            const userInfo = request.userInfo
            bossData.creatorId = userInfo.id
            const boss = await bossModelService.createBoss(bossData)
            return response.send(boss)
        } catch (error) {
            next(error)
        }
    }
    async deleteBoss(request, response, next) {
        try {
            const bossId = request.params.bossId
            const userId = request.userInfo.id
            const message = await bossModelService.deleteBoss(bossId, userId)
            return response.send(message)
        } catch (error) {
            next(error)
        }
    }
}