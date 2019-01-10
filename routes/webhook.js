const request = require("request");
const express = require("express");
const { getLatestData } = require("../db/function/SensorData")

const router = express.Router();

const HEADERS = {
  "Content-Type": "application/json",
  Authorization:
    "Bearer {g5Qni05t88rHy3B4yuQUvZS//LsbYu7Ava6R5bvsIRMLZ3BBHnT386209dHstws6+4bijs98Zb0u4XmWGO/FKghGdueH8lORwAFJm16ff0SUAsxSardFX105Voj3spNooUUsmDq2L0M2SJ8AJ/ByQQdB04t89/1O/w1cDnyilFU=}"
};

router.get("/webhook", (req, res) => {
  console.log("GET /webhook");
  res.send("/webhook line api");
});

router.post("/webhook", (req, res) => {
  console.log("POST /webhook");
  // do some thing
  // reply block
  let reply_token = "";
  let msg = "";
  reply_token = req.body.events[0].replyToken;
  if (req.body.events[0].type == "beacon") {
    msg = JSON.stringify(req.body.events[0]);
  } else {
    msg = req.body.events[0].message.text;
  }
  reply(reply_token, msg);
  res.send(msg);
  // console.log(msg)
  // res.send();
});

function push(msg) {
  let body = JSON.stringify({
    // push body
    to: "U348d69552676fcfe93b75b5d187d0652",
    messages: [
      {
        type: "text",
        text: msg
      }
    ]
  });
  // curl
  curl("push", body);
}

async function reply(reply_token, msg) {
  let data = await getLatestData()
  console.log("data", data)
  let body
  console.log("msg", msg)
  if (msg === "Admin_Mon") {
    console.log("in if")
    body = JSON.stringify({
      replyToken: reply_token,
      messages: [
        {
          type: "text",
          text: data.temperature.toString(10)
        },
        {
          type: "text",
          text: "Humidity"
        },
        {
          type: "text",
          text: "in&out"
        }
      ]
    });
    console.log("body", body)
  }
  curl("reply", body);
}

function curl(method, body) {
  console.log("method:" + method);
  request.post(
    {
      url: "https://api.line.me/v2/bot/message/" + method,
      headers: HEADERS,
      body
    },
    (err, res, body) => {
      console.log("status = " + res.statusCode);
      if (err) {
        console.log(err);
      }
    }
  );
}

module.exports = router;
