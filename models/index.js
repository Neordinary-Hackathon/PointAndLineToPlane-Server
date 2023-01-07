const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.js');

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const User = require('./user.model')(sequelize);
const Flat = require('./flat.model')(sequelize);
const Line = require('./line.model')(sequelize);
const Dot = require('./dot.model')(sequelize);
const LineToFlat = require('./lineToFlat.model')(sequelize);
const DotToLine = require('./dotToLine.model')(sequelize)


// User : Flat ==> 1:n
User.hasMany(Flat, {foreignKey: 'user_id'});
Flat.belongsTo(User,{foreignKey: 'user_id'});

// User : line ==> 1:n
User.hasMany(Line, {foreignKey: 'user_id'});
Line.belongsTo(User,{foreignKey: 'user_id'});

// User : dot ==> 1:n
User.hasMany(Dot, {foreignKey: 'user_id'});
Dot.belongsTo(User,{foreignKey: 'user_id'});


// dot:Line => n:m
Dot.belongsToMany(Line,{through:DotToLine});
Line.belongsToMany(Dot,{through:DotToLine});

// Line:Flat => n:m
Line.belongsToMany(Flat,{through:LineToFlat});
Flat.belongsToMany(Line,{through:LineToFlat});

const db = {};
db.sequelize = sequelize;

db.User = User;
db.Line = Line;
db.Dot = Dot;
db.Flat = Flat;
db.DotToLine = DotToLine;
db.LineToFlat = LineToFlat


module.exports = db;