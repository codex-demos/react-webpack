#!/usr/bin/env node
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import fs from "node:fs";
import path from "node:path";

const [, , target = "my-app"] = process.argv;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const template = path.join(__dirname, "template");

fs.cpSync(template, target, { recursive: true });
execSync("npm install", { cwd: target, stdio: "inherit" });
console.log(`\n ✅ Ready!  cd ${target} && npm run dev`);
