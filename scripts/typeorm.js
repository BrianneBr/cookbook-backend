#!/usr/env node

const path = require("path");

require("dotenv").config({
    path: path.join(__dirname, "../.cli.env")
});

require("ts-node/register");
require("typeorm/cli.js");
