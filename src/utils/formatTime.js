export const formatTime = (timeIn) => {
  if ((timeIn === undefined) || (!timeIn) || (isNaN(timeIn) || (timeIn<0))) return null;


  let outputS=(timeIn%60);

  if (outputS<10) {outputS='0'+outputS;}


  if(timeIn >= 60) {
    var outputM = Math.floor(timeIn/60)%60;
    if (outputM<10) {outputM='0'+outputM;}
  } else {outputM='00';}
  if(timeIn >= 60*60) {
    var outputH = Math.floor(timeIn/3600)%60;
    if (outputH<10) {outputH='0'+outputH;}
  } else {outputH='00';}
  //console.log('input', timeIn,'and output', outputH+':'+ outputM+':'+outputS);
  return `${outputH}:${outputM}:${outputS}`;
};
