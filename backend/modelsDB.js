const User = db.define('user', {
  name: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, unique: true, allowNull: false },
  address: Sequelize.STRING
});

const Dog = db.define('dog', {
  name: { type: Sequelize.STRING, allowNull: false },
  description: { tye: Sequelize.STRING, allowNull: false },
  picture: { type: Sequelize.BLOB, allowNull: false },
  shelter_id: {type: Sequelize.STRING, allowNull: false},
  dogTrait: {type: Sequelize.String, allowNull: false}
});

const Trait = db.define('trait', {
  trait_id: { type: Sequelize.INTEGER, allowNull: false },
  user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: User, key: 'id'}
  },
  dog_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: Dog, key: 'id'}
  }
});

const UserToTrait = db.define('user_to_trait', {
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: { model: User, key: 'id' }
  },
  trait_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: { model: Trait, key: 'id' }
  },
  score: { type: Sequelize.INTEGER, allowNull: false }
});

const DogToTrait = db.define('dog_to_trait', {
  dog_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: { model: Dog, key: 'id' }
  },
  trait_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: { model: Trait, key: 'id' }
  },
  score: { type: Sequelize.INTEGER, allowNull: false }
});

const Shelter = db.define('shelter', {
    dog_id: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: Dog, key: 'id'}
        },
    email: { type: Sequelize.STRING, unique: true, allowNull: false },
    phoneNumber: { type: Sequelize.INTEGER, allowNull: false },
    address: Sequelize.STRING
});

const Successes = db.define('successes', {
    dog_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: Dog, key: 'id'}
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: User, key: 'id'}
    }
});