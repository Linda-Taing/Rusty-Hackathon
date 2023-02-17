import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { MaterSchema } from '../models/Mater';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Maters = mongoose.model('Mater', MaterSchema);
}

export const dbContext = new DbContext()
