import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class BossModelService {
    async getBossList() {
        const bosses = await dbContext.Bosses.find().populate('creator')
        return bosses
    }
    async getBossById(bossId) {
        const boss = await dbContext.Bosses.findById(bossId).populate('creator')
        if (!boss) {
            throw new BadRequest(`Couldn't find Boss With The ID Provided: ${bossId}`)
        }
        return boss
    }
    async createBoss(bossData) {
        const boss = await dbContext.Bosses.create(bossData)
        await boss.populate('creator')
        return boss
    }
    async deleteBoss(bossId, userId) {
        const deletedBoss = await this.getBossById(bossId)
        if (userId != deletedBoss.creatorId.toString()) {
            throw new Forbidden(`Not Your Boss To Delete!`)
        }
        await deletedBoss.remove()
        return `Deleted Boss ${deletedBoss.name}`
    }

}

export const bossModelService = new BossModelService()