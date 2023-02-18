import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { LikerSchema } from '../models/Liker.js';
import { MaterSchema } from '../models/Mater';
import { StatusUpdateSchema } from '../models/StatusUpdate';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Maters = mongoose.model('Mater', MaterSchema);
  StatusUpdate = mongoose.model('StatusUpdate', StatusUpdateSchema);
  Likers = mongoose.model('Liker', LikerSchema)
}

export const dbContext = new DbContext()
