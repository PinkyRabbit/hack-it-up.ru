const { Category } = require('../db');
const { createSlug } = require('../utils/common');

module.exports.getAll = () => Category().find({ name: { $ne: '' } });
module.exports.getNames = () => Category().find({ name: { $ne: '' } }, { name: 1 });
module.exports.bySlug = slug => Category().findOne({ url: slug });
module.exports.byName = name => Category().findOne({ name });
module.exports.delete = name => Category().remove({ name });
module.exports.createNew = (name) => {
  const date = new Date();
  return Category().update(
    { name }, {
      $setOnInsert: {
        name,
        url: createSlug(name),
        createdAt: date,
      },
      $set: {
        updatedAt: date,
      },
    }, {
      upsert: true,
    }
  );
};
