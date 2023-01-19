import * as model from '../models/userSchema.js';

class UserService
{
    async create(payload)
    {
      const userSaveModel = new model.users(payload);
      return await userSaveModel.save();
    }

    async update(payload, id)
    {
      return model.users.findOneAndUpdate({ _id: id }, payload);
    }

    async getOne(id)
    {
      return model.users.findOne({ _id: id });
    }

    async getAll(id)
    {
      return model.users.find();
    }

    async deleteOne(id)
    {
      return model.users.deleteOne({ _id: id });
    }
}

export default UserService;
