import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { BossSchema } from '../models/Boss.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Bosses = mongoose.model('Boss', BossSchema)
}

export const dbContext = new DbContext()
