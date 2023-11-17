const pool = require("../DB/pool");
const common = require("./common/common");

const login = async (req, res) => {
  let responseData = {};
  let client = await pool.connect();

  try {
    let data = req.body; //userName, password

    let sql = `SELECT * FROM public.user WHERE user_name = $1`;
    let param = [data.userName];
    let responseUser = await pool.query(sql, param);

    if (responseUser.rowCount < 1) {
      responseData.success = false;
      responseData.data = "user not found";
    } else if (!responseUser.rowCount < 1) {
      let decryptedPwd = await common.commonService.decrypted(
        responseUser.rows[0].password
      );

      if (decryptedPwd == data.password) {
        let tokenObj = { user_id: responseUser.rows[0].user_uuid };
        console.log(tokenObj);
        responseData.success = true;
        responseData.data = responseUser.rows.map((i) => {
          return {
            id: i.user_uuid,
            firstName: i.first_name,
            lastName: i.last_name,
            userName: i.user_name,
          };
        });

        responseData.token = await common.commonService.generateToken(tokenObj);
        console.log(responseData.token);
      } else {
        responseData.success = false;
        responseData.data = "password invalid";
      }
    }
  } catch (error) {
    console.log(error);
    responseData.success = false;
  } finally {
    client.release();
  }

  res.status(200).send(responseData);
};

module.exports = login;
