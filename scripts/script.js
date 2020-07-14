/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// How to load in modules
const Scene = require('Scene');
export const Diagnostics = require('Diagnostics');
const Persistence = require('Persistence');
const data = {date: null,
   }
async function mainFunction(){
    var d = new Date();
    var result={};
  const tree = Scene.root.findFirst('Tree For Gamers');

  const userScope = Persistence.userScope;
  
  // Storing the date if user opens effect first time
  if(data.date == null)
  try {
      await userScope.set('data',data);
  }catch(error){
      console.log('Error');
  }
  // Retrieving stored date
  try {
        result = await userScope.get('data');
   }
   catch(error){
       console.log('Error');
   } 
   // Calculating difference of days
   var diff = d.getTime() - result.date.getTime();
   var diff_days = diff/(1000*3600*24);
   if(diff_days>=1)
   tree.scaleX += 1;
   tree.scaleY += 1;
   tree.scaleZ += 1;
   // Storing currunt date
   data.date = d.getDate();
   try {
    await userScope.set('data',data);
}catch(error){
    console.log('Error');
}
  
}
 
