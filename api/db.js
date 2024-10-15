import mysql from "mysql";

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"UDEA#1986",
  database:"soltea"
})