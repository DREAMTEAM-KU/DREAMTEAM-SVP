const request = require("request");
const express = require("express");
const {
  getLatestData,
  getLastOneHourPinPout
} = require("../db/function/SensorData");
const { getCurrentPeople } = require("../db/function/Beacon");

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

router.post("/webhook", async (req, res) => {
  console.log("POST /webhook");
  // do some thing
  // reply block
  let reply_token = "";
  let msg = "";
  reply_token = req.body.events[0].replyToken;

  if (req.body.events[0].type == "beacon") {
    msg = req.body.events[0];
    replyBeacon(reply_token, msg);
  } else {
    msg = req.body.events[0].message.text;
    replyMsg(reply_token, msg);
  }
  res.send();
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

async function replyMsg(reply_token, msg) {
  console.log(msg);
  let data = await getLatestData();
  let replymsg = "";
  if (msg === "Admin_Mon") {
    console.log("ADMIN MON");
    const { pin, pout } = await getLastOneHourPinPout();
    replymsg = JSON.stringify({
      replyToken: reply_token,
      messages: [
        {
          type: "text",
          text: `Temperature ${data.temperature.toString(10)} °C`
        },
        {
          type: "text",
          text: `Humidity ${data.humidity.toString(10)} %`
        },
        {
          type: "text",
          text: `people in ${pin}, people out ${pout} in last hour`
        }
      ]
    });
  }
  console.log("replymsg", replymsg);
  curl("reply", replymsg);
  return replymsg;
}

async function replyBeacon(reply_token, msg) {
  const type = msg.beacon.type;
  const currentPeople = await getCurrentPeople(type);

  let replymsg = "";
  let text = " hi ";
  if (type === "enter") {
    if (currentPeople > 2) {
      text = "จำนวนคนเกิน กรุณาเชิญคนออกจากบริเวณ";
    } else {
      text = "Welcome";
    }
  } else {
    text = "bye bye";
  }
  replymsg = JSON.stringify({
    replyToken: reply_token,
    messages: [
      {
        type: "text",
        text
      }
    ]
  });
  curl("reply", replymsg);
  return msg;
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
