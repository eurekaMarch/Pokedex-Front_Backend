const pool = require("../db/pool");
const common = require("./common/common");

const getScore = async (req, res) => {
  let responseData = {};
  let client = await pool.connect();
  let tokenObj = { user_id: req._user.user_id };

  try {
    let sql = `SELECT pokemon_id, COUNT(pokemon_id) as score
    FROM public.vote
    GROUP BY pokemon_id
    ORDER BY score DESC`;
    let response = await pool.query(sql);
    console.log(response);

    if (response.rows.length) {
      responseData.success = true;
      responseData.data = response.rows;
    } else {
      responseData.success = false;
    }
  } catch (error) {
    console.log(error);
    responseData.success = false;
  } finally {
    client.release();
  }

  responseData.token = await common.commonService.generateToken(tokenObj);
  res.status(200).send(responseData);
  return res.end;
};

module.exports = getScore;
