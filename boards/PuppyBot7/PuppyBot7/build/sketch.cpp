#include <Arduino.h>
// #include <KB_music.h>
 #include <puppybot.h>

#ifndef I2C_ADDR
#define I2C_ADDR 0x69
#endif


#include "PuppyBotIMU.h"
#include "PuppyBotTurnPID.h"


typedef float Number;
typedef int Boolean;





void setup() {
  delay(1000);
  puppybot_setup();
  Serial.begin(115200);

  
  

}

void loop() {
    wait_SW1();
  printnumber(0, 0, String("Hello world!"), 2, 0x7c0, 0x0);servoRun(0, 30);
  motor(1,50);
   motor(2,50);delay(2000);
  motor(1,100);
   motor(2,100);servoRun(0, 90);
  delay(2000);
  motor(1,-50);
   motor(2,-50);servoRun(0, 10);
  delay(2000);
  motor(1,-100);
   motor(2,-100);delay(2000);
  ao();
  delay(2000);

  
}
void setup1(){
  delay(1000);
  initIMU();
  set_TCS_back();
  updateIMU_fine_offset_Yaw(300);
  offset_yaw_loop1 = getOffsetYaw();
}
void loop1(){
  yaw_loop1 = getYaw();
  Con_yaw_loop1 = getContinuousYaw();
  if(status_resetYaw == 1){
    status_resetYaw = 0;
    resetContinuousYaw();
  }
  TCS_R = Read_Color_TCS_B_Raw(0);
  TCS_G = Read_Color_TCS_B_Raw(1);
  TCS_B = Read_Color_TCS_B_Raw(2);
  TCS_T = Read_Color_TCS_B_Raw(3);
  TCS_L = Read_Color_TCS_B_Raw(4);
}
