
//Block from IKB1 


module.exports = function(Blockly) {

Blockly.JavaScript['Run_following_of_line'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'Run_following_of_line( ' + value_speed + ');\n';
  return code;
};
Blockly.JavaScript['PuppyBot_PID_setPin'] = function(block) {
  var value_numSensor = block.getFieldValue('numSensor');
  var value_s0 = block.getFieldValue('S0_Pin');
  var value_s1 = block.getFieldValue('S1_Pin');
  var value_s2 = block.getFieldValue('S2_Pin');
  var value_s3 = block.getFieldValue('S3_Pin');
  var value_s4 = block.getFieldValue('S4_Pin');
  var value_s5 = block.getFieldValue('S5_Pin');
  var value_s6 = block.getFieldValue('S6_Pin');
  var value_s7 = block.getFieldValue('S7_Pin');
  // var value_s0 = Blockly.JavaScript.valueToCode(block, 'S0', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  // var value_s1 = Blockly.JavaScript.valueToCode(block, 'S1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  // var value_s2 = Blockly.JavaScript.valueToCode(block, 'S2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  // var value_s3 = Blockly.JavaScript.valueToCode(block, 'S3', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  // var value_s4 = Blockly.JavaScript.valueToCode(block, 'S4', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  // var value_s5 = Blockly.JavaScript.valueToCode(block, 'S5', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  // var value_s6 = Blockly.JavaScript.valueToCode(block, 'S6', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  // var value_s7 = Blockly.JavaScript.valueToCode(block, 'S7', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'PID_NumPin = ' + value_numSensor+';\t';
  code += 'PID_set_Pin('+value_s0+','+value_s1+','+value_s2+','+value_s3+','+value_s4+','+value_s5+','+value_s6+','+value_s7+');\n';
  return code;
};

Blockly.JavaScript['PuppyBot_PID_setline_color_front'] = function(block) {
 
  var value_line_color = block.getFieldValue('line_color');
  
  var code = '';
  code += 'Front_color = ' + value_line_color+';';
  return code;
};

Blockly.JavaScript['PID_readLine'] = function(block) {
    //var value_pin = block.getFieldValue('pin');
    //var code = `readline(${value_pin})`;  
    var code = `readline()`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['PID_readSumSensor'] = function(block) {
    //var value_pin = block.getFieldValue('pin');
    //var code = `readline(${value_pin})`;  
    var code = `Read_sumValue_sensor()`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['PuppyBot_PID_setMin'] = function(block) {
  var value_numSensor = block.getFieldValue('numSensor');
  var value_s0 = Blockly.JavaScript.valueToCode(block, 'S0', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s1 = Blockly.JavaScript.valueToCode(block, 'S1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s2 = Blockly.JavaScript.valueToCode(block, 'S2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s3 = Blockly.JavaScript.valueToCode(block, 'S3', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s4 = Blockly.JavaScript.valueToCode(block, 'S4', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s5 = Blockly.JavaScript.valueToCode(block, 'S5', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s6 = Blockly.JavaScript.valueToCode(block, 'S6', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s7 = Blockly.JavaScript.valueToCode(block, 'S7', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  //code += 'PID_NumPin = ' + value_numSensor+';\t';
  code += 'PID_set_Min('+value_s0+','+value_s1+','+value_s2+','+value_s3+','+value_s4+','+value_s5+','+value_s6+','+value_s7+');\n';
  return code;
};
Blockly.JavaScript['PuppyBot_PID_setMax'] = function(block) {
  var value_numSensor = block.getFieldValue('numSensor');
  var value_s0 = Blockly.JavaScript.valueToCode(block, 'S0', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s1 = Blockly.JavaScript.valueToCode(block, 'S1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s2 = Blockly.JavaScript.valueToCode(block, 'S2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s3 = Blockly.JavaScript.valueToCode(block, 'S3', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s4 = Blockly.JavaScript.valueToCode(block, 'S4', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s5 = Blockly.JavaScript.valueToCode(block, 'S5', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s6 = Blockly.JavaScript.valueToCode(block, 'S6', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s7 = Blockly.JavaScript.valueToCode(block, 'S7', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  //code += 'PID_NumPin = ' + value_numSensor+';\t';
  code += 'PID_set_Max('+value_s0+','+value_s1+','+value_s2+','+value_s3+','+value_s4+','+value_s5+','+value_s6+','+value_s7+');\n';
  return code;
};

Blockly.JavaScript['PuppyBot_Run_PID'] = function(block) {
  var value_Driver = block.getFieldValue('Driver');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_KP = Blockly.JavaScript.valueToCode(block, 'KP', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_KD = Blockly.JavaScript.valueToCode(block, 'KD', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  if(value_Driver == '0'){code += 'Run_PID('+ value_speed+','+value_KP+','+value_KD+');\n';}
  if(value_Driver == '1'){code += 'Run_PID4DW('+ value_speed+','+value_KP+','+value_KD+');\n';}
  
  return code;
};
Blockly.JavaScript['PuppyBot_Run_PID_until_frontSensor'] = function(block) {
  var value_Driver = block.getFieldValue('Driver');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_KP = Blockly.JavaScript.valueToCode(block, 'KP', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_KD = Blockly.JavaScript.valueToCode(block, 'KD', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_sum = Blockly.JavaScript.valueToCode(block, 'sumSensor', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  if(value_Driver == '0'){code += 'Run_PID_until_frontSensor('+ value_speed+','+value_KP+','+value_KD+','+value_sum+');\n';}
  if(value_Driver == '1'){code += 'Run_PID4DW_until_frontSensor('+ value_speed+','+value_KP+','+value_KD+','+value_sum+');\n';}
  
  return code;
};

Blockly.JavaScript['set_calibrate_Front_sensor'] = function(block) {
  var value_Round = Blockly.JavaScript.valueToCode(block, 'Round', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'setCalibrate(' + value_Round  + ');\n';
  return code;
};
Blockly.JavaScript['set_Sensitive_Front_sensor'] = function(block) {
  var value_Round = Blockly.JavaScript.valueToCode(block, 'Sensitive', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'setSensitive_F(' + value_Round  + ');\n';
  return code;
};
Blockly.JavaScript['Read_Ref_Front_Sensor'] = function(block) {
 
  var value_Sensor_Pin = block.getFieldValue('Sensor_Pin');
  
  var code = '';
  code += '(ReadSensorMinValue(' + value_Sensor_Pin+')+ReadSensorMaxValue(' + value_Sensor_Pin+'))/2';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['Read_Status_Front_Sensor'] = function(block) {
 
  var value_Sensor_Pin = block.getFieldValue('Sensor_Pin');
  var value_line_color = block.getFieldValue('line_color');
  
  var code = '';
  if(value_line_color == '0'){
    code += 'Read_status_sensor(' + value_Sensor_Pin+')';
  }
  else{
    code += '!Read_status_sensor(' + value_Sensor_Pin+')';
  }
  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};






Blockly.JavaScript['Run_following_of_line_B'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'Run_following_of_line_B( ' + value_speed + ');\n';
  return code;
};
Blockly.JavaScript['PuppyBot_PID_setPin_B'] = function(block) {
  var value_numSensor = block.getFieldValue('numSensor');
  var value_s0 = block.getFieldValue('S0_Pin');
  var value_s1 = block.getFieldValue('S1_Pin');
  var value_s2 = block.getFieldValue('S2_Pin');
  var value_s3 = block.getFieldValue('S3_Pin');
  var value_s4 = block.getFieldValue('S4_Pin');
  var value_s5 = block.getFieldValue('S5_Pin');
  var value_s6 = block.getFieldValue('S6_Pin');
  var value_s7 = block.getFieldValue('S7_Pin');
  // var value_s0 = Blockly.JavaScript.valueToCode(block, 'S0', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  // var value_s1 = Blockly.JavaScript.valueToCode(block, 'S1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  // var value_s2 = Blockly.JavaScript.valueToCode(block, 'S2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  // var value_s3 = Blockly.JavaScript.valueToCode(block, 'S3', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  // var value_s4 = Blockly.JavaScript.valueToCode(block, 'S4', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  // var value_s5 = Blockly.JavaScript.valueToCode(block, 'S5', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  // var value_s6 = Blockly.JavaScript.valueToCode(block, 'S6', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  // var value_s7 = Blockly.JavaScript.valueToCode(block, 'S7', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'PID_NumPin_B = ' + value_numSensor+';\t';
  code += 'PID_set_Pin_B('+value_s0+','+value_s1+','+value_s2+','+value_s3+','+value_s4+','+value_s5+','+value_s6+','+value_s7+');\n';
  return code;
};
Blockly.JavaScript['PuppyBot_PID_setline_color_Black'] = function(block) {
 
  var value_line_color = block.getFieldValue('line_color');
  
  var code = '';
  code += 'Back_color = ' + value_line_color+';';
  return code;
};
Blockly.JavaScript['PID_readLine_B'] = function(block) {
    //var value_pin = block.getFieldValue('pin');
    //var code = `readline(${value_pin})`;  
    var code = `readline_B()`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['PuppyBot_PID_setMin_B'] = function(block) {
  var value_numSensor = block.getFieldValue('numSensor');
  var value_s0 = Blockly.JavaScript.valueToCode(block, 'S0', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s1 = Blockly.JavaScript.valueToCode(block, 'S1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s2 = Blockly.JavaScript.valueToCode(block, 'S2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s3 = Blockly.JavaScript.valueToCode(block, 'S3', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s4 = Blockly.JavaScript.valueToCode(block, 'S4', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s5 = Blockly.JavaScript.valueToCode(block, 'S5', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s6 = Blockly.JavaScript.valueToCode(block, 'S6', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s7 = Blockly.JavaScript.valueToCode(block, 'S7', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  //code += 'PID_NumPin = ' + value_numSensor+';\t';
  code += 'PID_set_Min_B('+value_s0+','+value_s1+','+value_s2+','+value_s3+','+value_s4+','+value_s5+','+value_s6+','+value_s7+');\n';
  return code;
};
Blockly.JavaScript['PuppyBot_PID_setMax_B'] = function(block) {
  var value_numSensor = block.getFieldValue('numSensor');
  var value_s0 = Blockly.JavaScript.valueToCode(block, 'S0', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s1 = Blockly.JavaScript.valueToCode(block, 'S1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s2 = Blockly.JavaScript.valueToCode(block, 'S2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s3 = Blockly.JavaScript.valueToCode(block, 'S3', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s4 = Blockly.JavaScript.valueToCode(block, 'S4', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s5 = Blockly.JavaScript.valueToCode(block, 'S5', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s6 = Blockly.JavaScript.valueToCode(block, 'S6', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_s7 = Blockly.JavaScript.valueToCode(block, 'S7', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  //code += 'PID_NumPin = ' + value_numSensor+';\t';
  code += 'PID_set_Max_B('+value_s0+','+value_s1+','+value_s2+','+value_s3+','+value_s4+','+value_s5+','+value_s6+','+value_s7+');\n';
  return code;
};

Blockly.JavaScript['PuppyBot_Run_PID_B'] = function(block) {
  var value_Driver = block.getFieldValue('Driver');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_KP = Blockly.JavaScript.valueToCode(block, 'KP', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_KD = Blockly.JavaScript.valueToCode(block, 'KD', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  if(value_Driver == '0'){code += 'Run_PID_B('+ value_speed+','+value_KP+','+value_KD+');\n';}
  if(value_Driver == '1'){code += 'Run_PID_B4DW('+ value_speed+','+value_KP+','+value_KD+');\n';}
  return code;
};
Blockly.JavaScript['PuppyBot_Run_PID_B_until_backSensor'] = function(block) {
  var value_Driver = block.getFieldValue('Driver');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_KP = Blockly.JavaScript.valueToCode(block, 'KP', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_KD = Blockly.JavaScript.valueToCode(block, 'KD', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var value_sum = Blockly.JavaScript.valueToCode(block, 'sumSensor', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  if(value_Driver == '0'){code += 'Run_PID_B_until_backSensor('+ value_speed+','+value_KP+','+value_KD+','+value_sum+');\n';}
  if(value_Driver == '1'){code += 'Run_PID_B4DW_until_backSensor('+ value_speed+','+value_KP+','+value_KD+','+value_sum+');\n';}
  
  return code;
};

Blockly.JavaScript['set_calibrate_Back_sensor'] = function(block) {
  var value_Round = Blockly.JavaScript.valueToCode(block, 'Round', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'setCalibrate_B(' + value_Round  + ');\n';
  return code;
};
Blockly.JavaScript['set_Sensitive_Back_sensor'] = function(block) {
  var value_Round = Blockly.JavaScript.valueToCode(block, 'Sensitive', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'setSensitive_B(' + value_Round  + ');\n';
  return code;
};


Blockly.JavaScript['Read_Status_Back_Sensor'] = function(block) {
 
  var value_Sensor_Pin = block.getFieldValue('Sensor_Pin');
  var value_line_color = block.getFieldValue('line_color');
  
  var code = '';
  if(value_line_color == '0'){
    code += 'Read_status_sensor_B(' + value_Sensor_Pin+')';
  }
  else{
    code += '!Read_status_sensor_B(' + value_Sensor_Pin+')';
  }
  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['Read_Ref_Back_Sensor'] = function(block) {
 
  var value_Sensor_Pin = block.getFieldValue('Sensor_Pin');
  
  var code = '';
  code += '(ReadSensorMinValue_B(' + value_Sensor_Pin+')+ReadSensorMaxValue_B(' + value_Sensor_Pin+'))/2';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['PID_readSumSensor_B'] = function(block) {
    //var value_pin = block.getFieldValue('pin');
    //var code = `readline(${value_pin})`;  
    var code = `Read_sumValue_sensor_B()`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


















Blockly.JavaScript['EditTextCode'] = function(block) {
  //var value_text = Blockly.JavaScript.valueToCode(block, 'Text', Blockly.JavaScript.ORDER_ATOMIC);
  var value_text = Blockly.JavaScript.valueToCode(block, 'Text', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += ''+value_text+'\n';
  code = code.substring(8,code.length - 3);
  return code;
};

Blockly.JavaScript['BlockComment'] = function(block) {
  //var value_text = Blockly.JavaScript.valueToCode(block, 'Text', Blockly.JavaScript.ORDER_ATOMIC);
  var value_text = Blockly.JavaScript.valueToCode(block, 'Text', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  return code;
};

 Blockly.JavaScript['basic_forever_timeout'] = function(block) {
  var value_timer = Blockly.JavaScript.valueToCode(block, 'timer', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var statements_code = Blockly.JavaScript.statementToCode(block, 'HANDLER');
  var code = `unsigned long loop_timer = millis();
    while(millis() - loop_timer < ${value_timer}) \n{${statements_code}\n}\n`;
  // var code = `
  //   if(${variable_instance}.decode(&results)) \n{${statements_code}\n${variable_instance}.resume();}\n`;
  return code;
  };



}
